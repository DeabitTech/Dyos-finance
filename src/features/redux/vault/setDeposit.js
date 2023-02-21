import {useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  VAULT_FETCH_DEPOSIT_BEGIN,
  VAULT_FETCH_DEPOSIT_SUCCESS,
  VAULT_FETCH_DEPOSIT_FAILURE,
} from './constants';
import { deposit, depositNativeCoin } from '../../web3';

export const setDeposit = ({address, web3, isAll, amount, contractAddress}) => {
    const index = contractAddress;

    return dispatch => {
        dispatch({
            type: VAULT_FETCH_DEPOSIT_BEGIN,
            index,
        });

        const promise = new Promise((resolve,reject)=> {
            deposit({ web3, address, isAll, amount, contractAddress, dispatch })
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
            });
        });
        return promise;
    }
}

export function setDepositNativeCoin({ address, web3, amount, contractAddress, index }) {
    return dispatch => {
      dispatch({
        type: VAULT_FETCH_DEPOSIT_BEGIN,
        index,
      });
  
      const promise = new Promise((resolve, reject) => {
        depositNativeCoin({ web3, address, amount, contractAddress, dispatch })
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
          });
      });
      return promise;
    };
  }

  export function useSetDeposit() {
    const dispatch = useDispatch();
  
    const { setDepositPending } = useSelector(state => ({
        setDepositPending: state.vault.setDepositPending,
    }));
  
    const boundAction = useCallback(
      data => {
        return dispatch(setDeposit(data));
      },
      [dispatch]
    );
  
    const boundAction2 = useCallback(
      data => {
        return dispatch(setDepositNativeCoin(data));
      },
      [dispatch]
    );
  
    return {
      setDeposit: boundAction,
      setDepositNativeCoin: boundAction2,
      setDepositPending,
    };
  }
  
  export function reducer(state, action) {
    switch (action.type) {
      case VAULT_FETCH_DEPOSIT_BEGIN:
        return {
          ...state,
          setDepositPending: {
            ...state.setDepositPending,
            [action.index]: true,
          },
        };
  
      case VAULT_FETCH_DEPOSIT_SUCCESS:
        return {
          ...state,
          setDepositPending: {
            ...state.setDepositPending,
            [action.index]: false,
          },
        };
  
      case VAULT_FETCH_DEPOSIT_FAILURE:
        return {
          ...state,
          setDepositPending: {
            ...state.setDepositPending,
            [action.index]: false,
          },
        };
  
      default:
        return state;
    }
  }