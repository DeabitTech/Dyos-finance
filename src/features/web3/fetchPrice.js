import axios from 'axios';

import {getNetworkPools, apiUrl, getApiCacheBuster} from '../helpers/getNetworkData';
const pools = getNetworkPools();

const CACHE_TIMEOUT_MS = 1 * 60 * 1000; // 1 minute(s)
const priceCache = {
  cache: new Map(),
  lastUpdated: undefined,
};

function getCachedPrice(id) {
  if(priceCache.cache.get(id)){
    
    return priceCache.cache.get(id);
  }
  else{
   
      initializePriceCache(id)

  }
    
}

function maybeUpdateCache(id) {
  const currentTimestamp = new Date();
   
  if (
    priceCache.lastUpdated &&
    currentTimestamp.getTime() > priceCache.lastUpdated.getTime() + CACHE_TIMEOUT_MS
  ) {
  
    initializePriceCache(id);
    // console.trace('price cache updated')
  }
 
}

const fetchTokens = async () => {
  const cacheBuster = getApiCacheBuster();
  try {
    const response = await axios.get(`${apiUrl}/prices?_=${cacheBuster}`);
    return response.data;
  } catch (err) {
    console.error(err);
    return {};
  }
};

const fetchLPs = async () => {
  const cacheBuster = getApiCacheBuster();
 try {
    const response = await axios.get(`${apiUrl}/lps?_=${cacheBuster}`);
    return response.data;
  } catch (err) {
    console.error(err);
    return {};
  }
};

const oracleEndpoints = {
  tokens: () => fetchTokens(),
  lps: () => fetchLPs(),
};

let pricesLoadedPromise;
export function whenPricesLoaded() {
  
  return pricesLoadedPromise;
}

export function initializePriceCache(id) {
 
  const currentTimestamp = new Date();
  priceCache.lastUpdated = currentTimestamp;

  const oracleToIds = new Map();
  
    pools.forEach(pool => {
      if (!oracleToIds.has(pool.oracle)) {
        oracleToIds.set(pool.oracle, []);
      }
      oracleToIds.get(pool.oracle).push(pool.oracleId);
    });

  
  if (!oracleToIds.has('tokens')) {
    oracleToIds.set('tokens', []);
    oracleToIds.get('tokens').push(id);
  }
 
  //oracleToIds.get('tokens').push('BIFI');

  /*Object.values(launchpools).forEach(pool => {
    if (!oracleToIds.has(pool.earnedOracle)) {
      oracleToIds.set(pool.earnedOracle, []);
    }
    oracleToIds.get(pool.earnedOracle).push(pool.earnedOracleId);
  });*/

  const promises = [...oracleToIds.keys()].map(key => oracleEndpoints[key](oracleToIds.get(key)));
  pricesLoadedPromise = Promise.all(promises).then(results => {
   
    const allPrices = results.reduce(
      (accPrices, curPrices) => ({ ...accPrices, ...curPrices }),
      {}
    );
    
    [...oracleToIds.values()].flat().forEach(id => priceCache.cache.set(id, allPrices[id]));
    
  });
  
  
}

export const fetchPrice = ({ id }) => {
    if (id === undefined) {
        console.error('Undefined pair');
        return 0;
    }
    
 
  maybeUpdateCache();

  return getCachedPrice(id) || 0;
};

export const fetchPriceSingleToken = ({id})=>{
  if (id === undefined) {
      console.error('Undefined pair');
      return 0;
  }


  maybeUpdateCache(id);

  return getCachedPrice(id) || 0;
};