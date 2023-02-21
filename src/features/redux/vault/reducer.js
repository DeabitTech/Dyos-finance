import initialState from './initialState';
import {reducer as getVaultsData } from './getVaultsData';
import {reducer as getBalances} from './getBalances';
import {reducer as getApys} from './getApys';
import {reducer as getApproval} from './getApproval';
import {reducer as setDeposit} from './setDeposit';
import {reducer as setZapDeposit} from './setZapDeposit';
import {reducer as getZapEstimate} from './getZapEstimate';
import {reducer as getHarvest} from './getHarvest';
import {reducer as getWithdraw} from './getWithdraw';
import {reducer as getLastHarvest} from './getLastHarvest';
import { reducerPerformance as getPerformanceFee } from './getLastHarvest';

const reducers = [
  getVaultsData,
  getBalances,
  getApys,
  getApproval,
  setDeposit,
  setZapDeposit,
  getZapEstimate,
  getHarvest,
  getWithdraw,
  getLastHarvest,
  getPerformanceFee,
  
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);

}