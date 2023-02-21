import { useState, useEffect } from 'react';
import { stables } from '../../../components/Filters/constants';
import useFilterStorage from './useFilterStorage';

const DEFAULT = 'All';
const KEY = 'poolsByVaultType';

const useVaultsByType = vaults => {
  const { getStorage, setStorage } = useFilterStorage();
  const data = getStorage(KEY);

  const [vaultType, setVaultType] = useState(data ? data : DEFAULT);

  useEffect(() => {
    setStorage(KEY, vaultType);
  }, [setStorage, vaultType]);

  let newVaults = [];

  if (vaultType === 'Singles') {
    newVaults = vaults.filter(pool => pool.assets.length === 1);
  } else {
    const isStable = vaultType => stables.includes(vaultType);
    if (vaultType === 'StableLPs') {
        newVaults = vaults.filter(pool => pool.assets.every(isStable)); // every
    } else if (vaultType === 'Stables') {
        newVaults = vaults.filter(pool => pool.assets.some(isStable)); // some
    }
    else if (vaultType === 'Enterprise') {
      newVaults = vaults.filter(pool=>pool.isEnterprise);
    }
  }

  let vaultsByType;
  vaultsByType = vaultType === 'All' ? vaults : newVaults;

  return { vaultsByType, vaultType, setVaultType };
};

export default useVaultsByType;