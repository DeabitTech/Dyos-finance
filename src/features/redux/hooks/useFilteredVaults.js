import { useState,useEffect,useCallback,useMemo } from "react";
import useFilterStorage from "./useFilterStorage";
import { shallowEqual, useSelector } from "react-redux";

const DEFAULT = {
    hideDecomissioned:true,
    hideZeroBalances:false,
    hideZeroVaultBalances:false,
    showBoosted: false,
    showExperimental: false,
}

const KEY = 'filteredPools';

const useFilteredVaults = (vaults,tokens) => {
    const { getStorage , setStorage } = useFilterStorage();
    const data = getStorage(KEY);
    const [filters,setFilters] = useState(data ? data : DEFAULT);

    const toggleFilter = useCallback(
        key => {
            const newFilters = { ...filters};
            newFilters[key] = !filters[key];
            setFilters(newFilters);

        },
        [filters,setFilters]
    );

    useEffect(()=>{
        setStorage(KEY,filters);
    },[setStorage,filters]);

    let filteredVaults = [...vaults];

    if(filters.resetAll) {
        setFilters(DEFAULT);
    }

    if(filters.hideZeroBalances) {
        filteredVaults = hideZeroBalances(filteredVaults,tokens);
    }

    if(filters.hideZeroVaultBalances) {
        filteredVaults = hideZeroVaultBalances(filteredVaults,tokens);
    }

    if(filters.hideDecomissioned) {
        filteredVaults = hideDecomissioned(filteredVaults,tokens);
    }

    filteredVaults = Experimental(filteredVaults, filters.showExperimental);

    return { filteredVaults, toggleFilter, filters };
    
}

function Experimental(pools, show) {
    return pools.filter(pool => {
      return show ? pool.experimental : !pool.experimental;
    });
}
  

  
function hideDecomissioned(pools, tokens) {
    return pools.filter(pool => {
      return (
        (pool.status !== 'eol' && pool.status !== 'refund') ||
        (tokens[pool.earnedToken] && tokens[pool.earnedToken].tokenBalance > 0)
      );
    });
}
  
function hideZeroBalances(pools, tokens) {
    return pools.filter(pool => {
      if (tokens[pool.token]) {
        if (tokens[pool.token].tokenBalance > 0) {
          return true;
        }
      }
  
      if (tokens[pool.earnedToken]) {
        if (tokens[pool.earnedToken].tokenBalance > 0) {
          return true;
        }
      }
  
     
      return false;
    });
}
  
function hideZeroVaultBalances(pools, tokens) {
    return pools.filter(pool => {
      if (tokens[pool.earnedToken]) {
        if (tokens[pool.earnedToken].tokenBalance > 0) {
          return true;
        }
      }

      return false;
    });
}

export default useFilteredVaults;