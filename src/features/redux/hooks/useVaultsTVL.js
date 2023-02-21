import BigNumber from "bignumber.js";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { byDecimals } from "../../helpers/decimalHelper";
import { formatUsd } from "../../helpers/format";

const isUniqueEarnContract = (vault, index, vaults) => {
    const earnContractAddress = vault.earnContractAddress;
    return vaults.findIndex(v => v.earnContractAddress === earnContractAddress) === index;
};


export const useVaultsTVL = vaults => {
    const [vaultsTvl,setVaultsTvl] = useState(0);

    useEffect(()=>{
        let globalTvl = 0;
        vaults.filter(isUniqueEarnContract).forEach(({ tvl, oraclePrice }) => {
            globalTvl += tvl * oraclePrice;
        });
      
        setVaultsTvl(globalTvl);
    }, [vaults]);
      
        return { vaultsTvl };

}


export const useUserTVL = (vaults,tokens,apys) => {
    const [userTvl, setUserTvl] = useState(0);
    const [userDaily, setUserDaily] = useState(0);
    const [userMonthly, setUserMonthly] = useState(0);
  useEffect(() => {
    let userTvl = 0;
    let userVaults = []
    const dailyYield = [];
    vaults.filter(isUniqueEarnContract).forEach(vault => {
      const sharesBalance = new BigNumber(tokens[vault.earnedToken].tokenBalance);
      if (sharesBalance > 0) {
        let apyData = apys[vault.id]
        userVaults.push(vault);
        const deposited = byDecimals(
          sharesBalance.multipliedBy(new BigNumber(vault.pricePerFullShare)),
          vault.tokenDecimals
        );
        userTvl += deposited * vault.oraclePrice;
        const depositedUsd = deposited * vault.oraclePrice
        const tradingApr = apyData?.tradingApr ? apyData.tradingApr || 0 : 0;
      // If no vaultApr returned from API, we assume totalApy is all from vault, and not trading
      const vaultApr = apyData?.tradingApr ? apyData.vaultApr || 0 : (Math.pow((apyData?.totalApy || 0) + 1, 1 / 365) - 1) * 365;
      
      
      // Trading APR is not compoundable
      if (tradingApr > 0 && (!vaultApr > 0)) {
        dailyYield.push({
          id: vault.id,
          deposit: depositedUsd,
          rate: tradingApr / 365,
          compoundable: false,
        });
      }

      // Vault APR is compoundable
      if (vaultApr > 0) {
        dailyYield.push({
          id: vault.id,
          deposit: depositedUsd,
          rate: vaultApr / 365,
          compoundable: true,
        });
      }
      let i = 0
      for (const entry of dailyYield) {
        const daily = (entry.deposit * (entry.rate*100))/100;
        const monthly = ((entry.deposit * (entry.rate*100))* 30)/100;
       // console.log('allora vediamo', entry.deposit.toNumber(), entry.rate, i, entry.compoundable, vault.id);
        setUserDaily(daily)
        setUserMonthly(monthly)
        //newGlobalStats.monthly = newGlobalStats.monthly.plus(monthly);
        //newGlobalStats.yearly = newGlobalStats.yearly.plus(yearly);
      }
    }

    }); 

    setUserTvl(userTvl);
  }, [vaults, tokens]);

  return { userTvl,userDaily,userMonthly };
}