import BigNumber from 'bignumber.js';
import {useCallback} from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  VAULT_FETCH_BALANCES_BEGIN,
  VAULT_FETCH_BALANCES_SUCCESS,
  VAULT_FETCH_BALANCES_FAILURE,
} from './constants';
import { MultiCall } from 'eth-multicall';
import { erc20ABI, multicallABI, uniswapV2PairABI, launchPoolABI } from '../../config';
import { byDecimals } from '../../helpers/decimalHelper';
import { getNetworkMulticall } from '../../helpers/getNetworkData';
import { result } from 'lodash';

export const getBalances = ({address,web3,tokens}) => {
    return dispatch => {
        if (!(address && web3)) return;

        dispatch({
            type: VAULT_FETCH_BALANCES_BEGIN,
        });

        const promise = new Promise((resolve,reject)=>{
            const multicall = new MultiCall(web3,getNetworkMulticall());
            const balanceCalls = [];
            const allowanceCalls = [];

            Object.entries(tokens).forEach(([symbol,token])=>{
                if(!token.tokenAddress){
                    const multicallContract = new web3.eth.Contract(multicallABI,multicall.contract);
                    balanceCalls.push({
                        balance: multicallContract.methods.getEthBalance(address),
                        symbol: symbol,
                    });

                }
                else {
                    const tokenContract = new web3.eth.Contract(erc20ABI,token.tokenAddress);
                    balanceCalls.push({
                        balance: tokenContract.methods.balanceOf(address),
                        symbol: symbol,
                    });
                    Object.entries(token.allowance).forEach(([spender]) => {
                        allowanceCalls.push({
                          allowance: tokenContract.methods.allowance(address, spender),
                          spender: spender,
                          symbol: symbol,
                        });
                    });

                }
            });

            multicall
                .all([balanceCalls,allowanceCalls])
                .then(([balanceResults,allowanceResults])=>{
                    const newTokens = {};
                    balanceResults.forEach(balanceResult => {
                     
                        newTokens[balanceResult.symbol] = {
                          ...tokens[balanceResult.symbol],
                          tokenBalance: balanceResult.balance,
                          launchpoolTokenBalance: '0',
                        };
                    });
            
                    allowanceResults.forEach(allowanceResult => {
                  
                        newTokens[allowanceResult.symbol] = {
                          ...newTokens[allowanceResult.symbol],
                          allowance: {
                            ...newTokens[allowanceResult.symbol].allowance,
                            [allowanceResult.spender]: allowanceResult.allowance,
                          },
                        };
                    });

                    dispatch({
                        type: VAULT_FETCH_BALANCES_SUCCESS,
                        data: newTokens,
                    });

                    resolve();
                })
                .catch(error => {
                    dispatch({
                      type: VAULT_FETCH_BALANCES_FAILURE,
                    });
                    return reject(error.message || error);
                });
        });

        return promise;
    };
}

export const getPairReverves = ({web3,pairToken}) => {
  return dispatch => {
    if(!web3) return;

    dispatch({type: VAULT_FETCH_BALANCES_BEGIN});

    const promise = new Promise ((resolve,reject)=> {
      const multicall = new MultiCall(web3,getNetworkMulticall());
      const tokenContract = new web3.eth.Contract(uniswapV2PairABI, pairToken.tokenAddress);
      multicall
          .all([
            [
              {
                totalSupply: tokenContract.methods.totalSupply(),
                token0: tokenContract.methods.token0(),
                token1: tokenContract.methods.token1(),
                reserves: tokenContract.methods.getReserves(),
              },
            ],
          ])
          .then(([[result]]) => {
            const newPairToken = {
              [pairToken.symbol]: {
                ...pairToken,
                ...result
              },
            };

            dispatch({
              type: VAULT_FETCH_BALANCES_SUCCESS,
              data: newPairToken,
            });
            resolve();

          })
          .catch(error => {
            dispatch({
              type: VAULT_FETCH_BALANCES_FAILURE,
            });
            return reject(error.message || error);
          });
    });

    return promise;
  }
}

export function useGetBalances() {
    const dispatch = useDispatch();
  
    const { tokens, getBalancesPending, getBalancesDone } = useSelector(
      state => ({
        tokens: state.vault.tokens,
        getBalancesDone: state.vault.getBalancesDone,
        getBalancesPending: state.vault.getBalancesPending,
      }),
      shallowEqual
    );
  
    const boundAction = useCallback(
      data => {
        return dispatch(getBalances(data));
      },
      [dispatch]
    );
  
    const tokenBalance = tokenSymbol => {
    
      return byDecimals(tokens[tokenSymbol]?.tokenBalance || 0, tokens[tokenSymbol]?.decimals);
    };
  
    const boundPairReverves = useCallback(
      data => {
        return dispatch(getPairReverves(data));
      },
      [dispatch]
    );
  
    return {
      tokens,
      tokenBalance: tokenBalance,
      getBalances: boundAction,
      getPairReverves: boundPairReverves,
      getBalancesDone,
      getBalancesPending,
    };
  }
  
  export function reducer(state, action) {
    switch (action.type) {
      case VAULT_FETCH_BALANCES_BEGIN:
        return {
          ...state,
          getBalancesPending: true,
        };
  
      case VAULT_FETCH_BALANCES_SUCCESS:
        const newAndUpdatedTokens = {};
        Object.entries(action.data).forEach(([symbol, token]) => {
          newAndUpdatedTokens[symbol] = {
            ...state.tokens[symbol],
            ...token,
            allowance: {
              ...state.tokens[symbol]?.allowance,
              ...token.allowance,
            },
          };
        });
  
        return {
          ...state,
          tokens: {
            ...state.tokens,
            ...newAndUpdatedTokens,
          },
          getBalancesDone: true,
          getBalancesPending: false,
        };
  
      case VAULT_FETCH_BALANCES_FAILURE:
        return {
          ...state,
          getBalancesPending: false,
        };
  
      default:
        return state;
    }
  }
