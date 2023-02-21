import {useState, useEffect} from 'react';
import useFilterStorage from './useFilterStorage';

const DEFAULT = 'All';
const KEY = 'poolsByPlatform';

const useVaultsByPlatform = vaults => {
    const { getStorage, setStorage } = useFilterStorage();
    const data = getStorage(KEY);
  
    const [platform, setPlatform] = useState(data ? data : DEFAULT);
  
    useEffect(() => {
      setStorage(KEY, platform);
    }, [setStorage, platform]);
  
    let vaultsByPlatform = vaults;
    if (platform !== DEFAULT) {
      const newPools = vaults.filter(pool => pool.platform === platform);
      vaultsByPlatform = newPools;
    }
  
    return { vaultsByPlatform, platform, setPlatform };
  };
  
export default useVaultsByPlatform;