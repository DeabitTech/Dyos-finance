import {useCallback} from 'react';
import {
    VAULT_FETCH_LAST_HARVEST_BEGIN,
    VAULT_FETCH_LAST_HARVEST_SUCCESS,
    VAULT_FETCH_LAST_HARVEST_FAILURE,
    VAULT_FETCH_PERFRMANCE_FEE_BEGIN,
    VAULT_FETCH_PERFRMANCE_FEE_SUCCESS,
    VAULT_FETCH_PERFRMANCE_FEE_FAILURE
  } from './constants';
import {useDispatch,useSelector} from 'react-redux';
import { performanceFee, lastHarvest } from '../../web3/lastHarvest';


export function getLastHarvest({web3, vaultAddress}) {
  
    return dispatch => {
      dispatch({
        type: VAULT_FETCH_LAST_HARVEST_BEGIN,
        index: vaultAddress,
      });
  
      const promise = new Promise((resolve, reject) => {
        lastHarvest({ web3, vaultAddress })
          .then(data => {
       
            dispatch({
              type: VAULT_FETCH_LAST_HARVEST_SUCCESS,
              data: { lastHarvest: parseInt(data) },
              vaultAddress,
              index: vaultAddress,
            });
            resolve();
          })
          .catch(error => {
            dispatch({
              type: VAULT_FETCH_LAST_HARVEST_FAILURE,
              index: vaultAddress,
            });
            reject(error.message || error);
          });
      });
  
      return promise;
    };
  }


  export function getPerformanceFee({web3, vaultAddress}) {
  
    return dispatch => {
      dispatch({
        type: VAULT_FETCH_PERFRMANCE_FEE_BEGIN,
        index: vaultAddress,
      });
  
      const promise = new Promise((resolve, reject) => {
        performanceFee({ web3, vaultAddress })
          .then(data => {
      
            dispatch({
              type: VAULT_FETCH_PERFRMANCE_FEE_SUCCESS,
              data: { performanceFee: parseInt(data) },
              vaultAddress,
              index: vaultAddress,
            });
            resolve();
          })
          .catch(error => {
            dispatch({
              type: VAULT_FETCH_PERFRMANCE_FEE_FAILURE,
              index: vaultAddress,
            });
            reject(error.message || error);
          });
      });
  
      return promise;
    };
  }

export function useLastHarvest() {
    const dispatch = useDispatch();
    const boundActionLastHarvest = useCallback(
        data => {
         
          dispatch(getLastHarvest(data))},
        [dispatch]
      );

      const boundActionPerformanceFee = useCallback(
        data => {
         
          dispatch(getPerformanceFee(data))},
        [dispatch]
      );

    return {
        getLastHarvest: boundActionLastHarvest,
        getPerformanceFee:boundActionPerformanceFee
    };
}

  export function reducerPerformance(state, action) {
    switch (action.type) {
      case VAULT_FETCH_PERFRMANCE_FEE_BEGIN:
        return {
          ...state,
            
        };
  
      case VAULT_FETCH_PERFRMANCE_FEE_SUCCESS:
        const { vaults } = state;
        const vaultIndex = vaults.findIndex(vault => vault.earnContractAddress === action.vaultAddress);
        vaults[vaultIndex] = {
            ...vaults[vaultIndex],
            ...action.data,
          };
        return {
          ...state,
          vaults
         
        };
  
      case VAULT_FETCH_PERFRMANCE_FEE_FAILURE:
        return {
          ...state,
         
        };
  
      default:
        return state;
    }
  }


  export function reducer(state, action) {
    switch (action.type) {
      case VAULT_FETCH_LAST_HARVEST_BEGIN:
        return {
          ...state,
            
        };
  
      case VAULT_FETCH_LAST_HARVEST_SUCCESS:
        const { vaults } = state;
        const vaultIndex = vaults.findIndex(vault => vault.earnContractAddress === action.vaultAddress);
        vaults[vaultIndex] = {
            ...vaults[vaultIndex],
            ...action.data,
          };
        return {
          ...state,
          vaults
         
        };
  
      case VAULT_FETCH_LAST_HARVEST_FAILURE:
        return {
          ...state,
         
        };
  
      default:
        return state;
    }
  }