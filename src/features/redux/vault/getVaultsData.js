import { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import BigNumber from 'bignumber.js';
import { byDecimals } from '../../helpers/decimalHelper';
import { MultiCall } from 'eth-multicall';
import {
    VAULT_FETCH_VAULTS_DATA_BEGIN,
    VAULT_FETCH_VAULTS_DATA_SUCCESS,
    VAULT_FETCH_VAULTS_DATA_FAILURE,
  } from './constants';
import {getNetworkMulticall} from '../../helpers/getNetworkData';
import { fetchPrice } from '../../web3';
import { getRpcUrl } from '../../web3/networks';
import Web3 from 'web3';
import { vaultABI } from '../../config';

export const getVaultsData = ({web3, vaults }) => {
    return dispatch => {
        dispatch({
            type: VAULT_FETCH_VAULTS_DATA_BEGIN,
        });

        if(!web3) {
            web3 = new Web3(new Web3.providers.HttpProvider(getRpcUrl()));
        }

        const promise = new Promise((resolve,reject) => {
            const multicall = new MultiCall(web3,getNetworkMulticall());
            const vaultCalls = vaults.map(preVault =>{
                const vault = new web3.eth.Contract(vaultABI,preVault.earnedTokenAddress);

                return {
                    pricePerFullShare: vault.methods.getPricePerFullShare(),
                    tvl: vault.methods.balance(),
                };

            });

            Promise.all([
                multicall.all([vaultCalls]).then(result=>result[0]),
                /*whenPricesLoaded*/
            ])
            .then(data => {
                const newVaults = vaults.map((vault, i) => {
                
                  const pricePerFullShare = byDecimals(data[0][i].pricePerFullShare, 18).toNumber();
                  const price = fetchPrice({ id: vault.oracleId });
               
                  return {
                    pricePerFullShare: new BigNumber(pricePerFullShare).toNumber() || 1,
                    tvl: byDecimals(data[0][i].tvl, 18).toNumber(),
                    oraclePrice: price || 0,
                  };
                });
                dispatch({
                  type: VAULT_FETCH_VAULTS_DATA_SUCCESS,
                  data: newVaults,
                });
                resolve();
              })
              .catch(error => {
                dispatch({
                  type: VAULT_FETCH_VAULTS_DATA_FAILURE,
                });
                reject(error.message || error);
              });
            

        });
        return promise;
    };
};

export const useGetVaultsData = () => {
    const dispatch = useDispatch();
    const {vaults, getVaultsDataDone} = useSelector(
        state => ({
            vaults: state.vault.vaults,
            getVaultsData: state.vault.getVaultData,
            getVaultsDataDone: state.vault.getVaultsDataDone,
        }),
        shallowEqual
    );
    

    const boundAction = useCallback(
        data => {
            return dispatch(getVaultsData(data));
        },
        [dispatch]
    );
  
    return {
        vaults,
        getVaultsData: boundAction,
        getVaultsDataDone,
      };



};

export const reducer = (state, action) => {
    switch (action.type) {
      case VAULT_FETCH_VAULTS_DATA_BEGIN:
        return {
          ...state,
          getVaultsDataPending: true,
        };
  
      case VAULT_FETCH_VAULTS_DATA_SUCCESS:
        const vaults = state.vaults.map((vault, i) => ({
          ...vault,
          ...action.data[i],
        }));
  
        return {
          ...state,
          vaults,
          getVaultsDataPending: false,
          getVaultsDataDone: true,
        };
  
      case VAULT_FETCH_VAULTS_DATA_FAILURE:
        return {
          ...state,
          getVaultsDataPending: false,
        };
  
      default:
        return state;
    }
  }
