import {getNetworkPools} from '../../helpers/getNetworkData';
import { getEligibleZap } from './getZapActions';
const tokens = {};
const vaults = getNetworkPools(); // da capire in quanto parte prima di tutti gli altri hooks
const zapMap = {};

vaults.map(
    (   {
          token,
          tokenDecimals,
          tokenAddress,
          earnedToken,
          earnContractAddress,
          earnedTokenAddress,
          withdrawalFee,
          depositFee,
            
        },
        index
    ) => {
        if(!withdrawalFee) vaults[index].withdrawalFee = '0.1%';
        if(!depositFee) vaults[index].depositFee = '0%';
        
        tokens[token] = {
            symbol: token,
            decimals: tokenDecimals,
            tokenAddress: tokenAddress,
            tokenBalance: 0,
            allowance: {
                ...tokens[token]?.allowance,
                [earnContractAddress]: tokenAddress ? 0 : Infinity,
            }

        }
        tokens[earnedToken] = {
            symbol: earnedToken,
            decimals: 18,
            tokenAddress: earnedTokenAddress,
            tokenBalance: 0,
            allowance: {
              [earnContractAddress]: 0,
            },
        };
        const zap = getEligibleZap(vaults[index]);
      
        if (zap) {
          tokens[token].allowance[zap.zapAddress] = tokenAddress ? 0 : Infinity;
          tokens[earnedToken].allowance[zap.zapAddress] = 0;
          vaults[index]['zap'] = zap;
          zapMap[vaults[index].id] = zap;
        }
      
    }
);

//const now = Date.now() / 1000;
const initialState = {
  vaults,
  tokens,
  apys: {},
  bifibuyback: {},
  fetchApysDone: false,
  fetchApysPending: false,
  fetchVaultsDataDone: false,
  fetchVaultsDataPending: false,
  fetchBalancesDone: false,
  fetchBalancesPending: false,
  fetchBifibuybackDone: false,
  fetchBifibuybackPending: false,
  fetchApprovalPending: {},
  fetchDepositPending: {},
  fetchZapDepositPending: {},
  fetchWithdrawPending: {},
  fetchHarvestPending: {},
  fetchZapEstimatePending: {},
  /*vaultLaunchpool: Object.fromEntries(
    pools.map(vault => {
      const launchpool = Object.values(launchpools).find(
        lp => lp.token === vault.earnedToken && lp.status !== 'closed' && lp.periodFinish >= now
      );

      return [vault.id, launchpool ? launchpool.id : null];
    })
  ),
  vaultLaunchpools: Object.fromEntries(
    pools.map(vault => {
      const activeLaunchpools = Object.values(launchpools)
        .filter(
          lp => lp.token === vault.earnedToken && lp.status !== 'closed' && lp.periodFinish >= now
        )
        .map(lp => lp.id);

      return [vault.id, activeLaunchpools];
    })
  ),*/
};

const allZaps = Object.keys(zapMap);

export default initialState;
