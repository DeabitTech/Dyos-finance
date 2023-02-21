import { useState, useEffect } from 'react';
import useFilterStorage from './useFilterStorage';

const DEFAULT = 'All';
const KEY = 'poolsByAsset';

const usePoolsByAsset = vaults => {
  const { getStorage, setStorage } = useFilterStorage();
  const data = getStorage(KEY);

  const [asset, setAsset] = useState(data ? data : DEFAULT);

  useEffect(() => {
    setStorage(KEY, asset);
  }, [setStorage, asset]);

  let vaultsByAsset = vaults;
  if (asset !== DEFAULT) {
    vaultsByAsset = vaults.filter(pool => pool.assets.includes(asset));
  }

  return { vaultsByAsset, asset, setAsset };
};

export default usePoolsByAsset;
