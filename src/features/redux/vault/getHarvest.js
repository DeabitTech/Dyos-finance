import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  VAULT_FETCH_STRATEGY_HARVEST_BEGIN,
  VAULT_FETCH_STRATEGY_HARVEST_SUCCESS,
  VAULT_FETCH_STRATEGY_HARVEST_FAILURE,
} from './constants';
import { harvest } from '../../web3';

export const getHarvest = ({address,web3,contractAddress,index}) => {
    return dispatch => {
        dispatch({
            type:VAULT_FETCH_STRATEGY_HARVEST_BEGIN,
            index,
        });

        const promise = new Promise((resolve,reject)=> {
            harvest({web3,address, vaultContractAddress: contractAddress, dispatch})
                .then(data => {
                    dispatch({
                        type:VAULT_FETCH_STRATEGY_HARVEST_SUCCESS,
                        data,
                        index
                    });
                    resolve();
                })
                .catch(error => {
                    dispatch({
                        type:VAULT_FETCH_STRATEGY_HARVEST_FAILURE,
                        index,
                    });
                    reject();
                });

        });
        return promise;
    };
}

export const useGetHarvest = () => {
    const dispatch = useDispatch();

    const {getHarvestPending} = useSelector(state => ({
        getHarvestPending: state.vault.getHarvestPending,
    }));

    const boundAction = useCallback(data => dispatch(getHarvest(data)),[dispatch]);

    return {
        getHarvest: boundAction,
        getHarvestPending
    };
}

export function reducer(state, action) {
    switch (action.type) {
      case VAULT_FETCH_STRATEGY_HARVEST_BEGIN:
        return {
          ...state,
          getHarvestPending: {
            ...state.getHarvestPending,
            [action.index]: true,
          },
        };
  
      case VAULT_FETCH_STRATEGY_HARVEST_SUCCESS:
        return {
          ...state,
          getHarvestPending: {
            ...state.getHarvestPending,
            [action.index]: false,
          },
        };
  
      case VAULT_FETCH_STRATEGY_HARVEST_FAILURE:
        return {
          ...state,
          getHarvestPending: {
            ...state.getHarvestPending,
            [action.index]: false,
          },
        };
  
      default:
        return state;
    }
  }
  