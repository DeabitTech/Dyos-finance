import {useCallback} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {
    VAULT_FETCH_APPROVAL_BEGIN,
    VAULT_FETCH_APPROVAL_SUCCESS,
    VAULT_FETCH_APPROVAL_FAILURE,
} from './constants';
import {approval} from '../../web3';

export const getApproval = ({address,web3,tokenAddress,contractAddress,tokenSymbol}) => {
    return dispatch => {
        dispatch({
            type: VAULT_FETCH_APPROVAL_BEGIN,
            tokenSymbol,
        });

        const promise = new Promise((resolve,reject)=> {
            approval({
                web3,
                address,
                tokenAddress,
                contractAddress,
                dispatch
            })
            .then(data => {
                dispatch({
                    type: VAULT_FETCH_APPROVAL_SUCCESS,
                    data: {allowance: data},
                    spender: contractAddress,
                    tokenSymbol,
                });
                resolve();
            })
            .catch(error => {
                dispatch({
                    type: VAULT_FETCH_APPROVAL_FAILURE,
                    tokenSymbol,
                });
                reject(error.message || error);
            });
        });
        return promise;
    };
}

export const useGetApproval = () => {
    const dispatch = useDispatch();

    const { getApprovalPending } = useSelector(state => ({
        getApprovalPending: state.vault.getApprovalPending,
    }));

    const boundAction = useCallback(data => dispatch(getApproval(data)),[dispatch]);

    return {
        getApproval: boundAction,
        getApprovalPending,
    };
}

export function reducer(state, action) {
    switch (action.type) {
      case VAULT_FETCH_APPROVAL_BEGIN:
        return {
          ...state,
          getApprovalPending: {
            ...state.getApprovalPending,
            [action.tokenSymbol]: true,
          },
        };
  
      case VAULT_FETCH_APPROVAL_SUCCESS:
        const { tokens } = state;
        tokens[action.tokenSymbol].allowance[action.spender] = action.data.allowance;
        return {
          ...state,
          tokens,
          getApprovalPending: {
            ...state.getApprovalPending,
            [action.tokenSymbol]: false,
          },
        };
  
      case VAULT_FETCH_APPROVAL_FAILURE:
        return {
          ...state,
          getApprovalPending: {
            ...state.getApprovalPending,
            [action.tokenSymbol]: false,
          },
        };
  
      default:
        return state;
    }
  }
  
