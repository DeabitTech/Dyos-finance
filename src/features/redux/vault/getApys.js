import axios from 'axios';
import {useCallback} from 'react';
import {useDispatch,useSelector,shallowEqual } from 'react-redux';
import {
    VAULT_FETCH_APYS_BEGIN,
    VAULT_FETCH_APYS_SUCCESS,
    VAULT_FETCH_APYS_FAILURE,
  } from './constants';
  import { apiUrl, getApiCacheBuster } from '../../helpers/getNetworkData';


  export function getApys() {
    return dispatch => {
      dispatch({
        type: VAULT_FETCH_APYS_BEGIN,
      });
  
      return new Promise((resolve, reject) => {
        const cacheBuster = getApiCacheBuster();
        const doRequest = axios.get(`${apiUrl}/apy/breakdown?_=${cacheBuster}`);
  
        doRequest.then(
          res => {
           
            dispatch({
              type: VAULT_FETCH_APYS_SUCCESS,
              data: res.data,
            });
            resolve(res);
          },
          err => {
            dispatch({
              type: VAULT_FETCH_APYS_FAILURE,
              data: { error: err },
            });
            reject(err);
          }
        );
      });
    };
  }
  
  export function useGetApys() {
    const dispatch = useDispatch();
  
    const { apys, getApysPending, getApysDone } = useSelector(
      state => ({
        apys: state.vault.apys,
        fetchApysDone: state.vault.getApysDone,
        fetchApysPending: state.vault.getApysPending,
      }),
      shallowEqual
    );
  
    const boundAction = useCallback(() => {
      dispatch(getApys());
    }, [dispatch]);
  
    return {
      apys,
      getApys: boundAction,
      getApysDone,
      getApysPending,
    };
  }
  
  export function reducer(state, action) {
    switch (action.type) {
      case VAULT_FETCH_APYS_BEGIN:
        return {
          ...state,
          getApysPending: true,
        };
  
      case VAULT_FETCH_APYS_SUCCESS:
       
        return {
          ...state,
          apys: action.data,
          getApysDone: true,
          getApysPending: false,
        };
  
      case VAULT_FETCH_APYS_FAILURE:
        return {
          ...state,
          getApysPending: false,
        };
  
      default:
        return state;
    }
  }
  