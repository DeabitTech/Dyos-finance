import { useState, useEffect } from 'react';
import useFilterStorage from './useFilterStorage';

const DEFAULT = 'default';
const KEY = 'sortedPools';

const useSortedVaults = (vaults, apys, tokens) => {
  const { getStorage, setStorage } = useFilterStorage();
  const data = getStorage(KEY);

  const [order, setOrder] = useState(data ? data : DEFAULT);

  useEffect(() => {
    setStorage(KEY, order);
  }, [setStorage, order]);

  let sortedVaults = vaults;
  switch (order) {
    case 'apy':
        sortedVaults = handleApy(vaults, apys);
      break;
    case 'tvl':
        sortedVaults = handleTvl(vaults);
      break;
    default:
      break;
  }

  sortedVaults = showDecommissionedFirst(sortedVaults, tokens);

  return { sortedVaults, order, setOrder };
};

const handleApy = (vaults, apys) => {
  const newVaults = [...vaults];
  return newVaults.sort((a, b) => {
    if (apys[a.id] === apys[b.id]) {
      return 0;
    } else if (apys[a.id] === undefined) {
      return 1;
    } else if (apys[b.id] === undefined) {
      return -1;
    }

    return apys[b.id].totalApy - apys[a.id].totalApy;
  });
};

const handleTvl = vaults => {
  const newVaults = [...vaults];
  return newVaults.sort((a, b) => {
    const aPrice = a.oraclePrice;
    const bPrice = b.oraclePrice;
    return b.tvl * bPrice - a.tvl * aPrice;
  });
};

function showDecommissionedFirst(vaults, tokens) {
  for (let i = 0; i < vaults.length; i++) {
    // if ( EOL or REFUND ) AND (Deposited Balance > 0)
    if (
      (vaults[i].status === 'eol' || vaults[i].status === 'refund') &&
      tokens[vaults[i].earnedToken] &&
      tokens[vaults[i].earnedToken].tokenBalance > 0
    ) {
      // Remove Vault from pools, insert it at the top.
      vaults.splice(0, 0, vaults.splice(i, 1)[0]);
    }
  }
  return vaults;
}

export default useSortedVaults;
