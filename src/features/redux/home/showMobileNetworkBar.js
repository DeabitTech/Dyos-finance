import {useState,useCallback} from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {HOME_SHOW_NETWORKBAR,HOME_CLOSE_NETWORKBAR} from './constants';


export const showMobileNetworkBar = (showBar) => {
  
    
    return dispatch => {
        if(!showBar){
            dispatch({type:HOME_SHOW_NETWORKBAR});
        }
        else {
            dispatch({type:HOME_CLOSE_NETWORKBAR});
        }
    }
}

export const useShowMobileNetworkBar = () => {
    const dispatch = useDispatch();
    const showBar = useSelector(state=>({showBar:state.home.showBar}),shallowEqual);

    const boundAction = useCallback(data => dispatch(showMobileNetworkBar(data),[dispatch]));

    return {showBar,showMobileNetworkBar:boundAction};
    
}

export function reducer(state, action) {
    switch (action.type) {
        case HOME_SHOW_NETWORKBAR:
            return {
                ...state,
                showBar:true,
            };
        case HOME_CLOSE_NETWORKBAR:
            return {
                ...state,
                showBar:false,
            };
        default:
            return state;
    }
}