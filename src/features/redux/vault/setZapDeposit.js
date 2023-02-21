import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  VAULT_FETCH_DEPOSIT_BEGIN,
  VAULT_FETCH_DEPOSIT_SUCCESS,
  VAULT_FETCH_DEPOSIT_FAILURE,
} from './constants';
import { zapDeposit } from '../../web3';


export const setZapDeposit = ({address,web3,vaultAddress,isETH,tokenAddress,tokenAmount,zapAddress,swapAmountOutMin}) => {
    const index = vaultAddress;

    return dispatch => {
        dispatch({
            type:VAULT_FETCH_DEPOSIT_BEGIN,
            index,
        });

        const promise = new Promise((resolve,reject)=> {
            zapDeposit({
                web3,
                address,
                vaultAddress,
                isETH,
                tokenAddress,
                tokenAmount,
                zapAddress,
                swapAmountOutMin,
                dispatch
            })
            .then(data => {
                dispatch({
                  type: VAULT_FETCH_DEPOSIT_SUCCESS,
                  data,
                  index,
                });
                resolve(data);
            })
            .catch(error => {
                dispatch({
                  type: VAULT_FETCH_DEPOSIT_FAILURE,
                  index,
                });
                reject(error.message || error);
            })
        });
        return promise;
    };
}

export const useSetZapDeposit = () => {
    const dispatch = useDispatch();

    const {setZapDepositPending } = useSelector(state => ({
        setZapDepositPending: state.vault.setZapDepositPending,
    }));

    const boundAction = useCallback(data => dispatch(setZapDeposit(data)),[dispatch]);

    return {
        setZapDeposit:boundAction,
        setZapDepositPending:setZapDepositPending
    };
}

export function reducer(state, action) {
    switch (action.type) {
      case VAULT_FETCH_DEPOSIT_BEGIN:
        return {
          ...state,
          setZapDepositPending: {
            ...state.setZapDepositPending,
            [action.index]: true,
          },
        };
  
      case VAULT_FETCH_DEPOSIT_SUCCESS:
        return {
          ...state,
          setZapDepositPending: {
            ...state.setZapDepositPending,
            [action.index]: false,
          },
        };
  
      case VAULT_FETCH_DEPOSIT_FAILURE:
        return {
          ...state,
          setZapDepositPending: {
            ...state.setZapDepositPending,
            [action.index]: false,
          },
        };
  
      default:
        return state;
    }
  }