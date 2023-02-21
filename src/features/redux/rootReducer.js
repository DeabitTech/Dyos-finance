import { combineReducers } from 'redux';
import homeReducer from './home/reducer';
import vaultReducer from './vault/reducer';
const reduceMap = {
    home: homeReducer,
    vault: vaultReducer,
};

export default combineReducers(reduceMap);