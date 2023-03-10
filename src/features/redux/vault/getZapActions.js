import { pack, keccak256 } from '@ethersproject/solidity';
import { getCreate2Address } from '@ethersproject/address';
import { getNetworkTokens,getNetworkZaps,getNetworkCoin} from '../../helpers/getNetworkData';

const availableZaps = getNetworkZaps();
const nativeCoin = getNetworkCoin();
const availableTokens = getNetworkTokens();

export const getEligibleZap = vault => {
   
    if(vault.assets.length < 2) return undefined;

    const eligibleNativeCoin = [];
  
    const tokenSymbols = vault.assets.map(symbol => {
        if (nativeCoin.symbol === symbol) {
          const wrappedToken = availableTokens[nativeCoin.wrappedSymbol];
          nativeCoin.address = wrappedToken.address;
          eligibleNativeCoin.push(nativeCoin);
          return nativeCoin.wrappedSymbol;
        }
        return symbol;
    });
  
    let tokenA, tokenB, tokenASymbol, tokenBSymbol;
    let missingTokenSymbols = {};
    const zap = availableZaps.find(zap => {
      tokenASymbol = tokenSymbols[0];
      tokenBSymbol = tokenSymbols[1];
      tokenA = availableTokens[tokenASymbol];
      tokenB = availableTokens[tokenBSymbol];
     // console.log(vault.tokenAddress,
       // computePairAddress(zap.ammFactory, zap.ammPairInitHash, tokenA.address, tokenB.address))
      if (tokenA && tokenB) {
        return (
          vault.tokenAddress ===
          computePairAddress(zap.ammFactory, zap.ammPairInitHash, tokenA.address, tokenB.address)
        );
      } else {
        if (!tokenA) {
          missingTokenSymbols[tokenASymbol] = '';
        }
        if (!tokenB) {
          missingTokenSymbols[tokenBSymbol] = '';
        }
      }
    });

    for (const symbol in missingTokenSymbols) {
        console.error('token missing in the tokenlist:', symbol);
    }

    //const pairHasBurnToken = tokenASymbol in burnTokens || tokenBSymbol in burnTokens;
    if (!zap /*|| pairHasBurnToken*/) return undefined;
    tokenA.allowance = 0;
    tokenB.allowance = 0;
  
    return {
      ...zap,
      tokens: [tokenA, tokenB, ...eligibleNativeCoin],
    };


};

export const computePairAddress = (factoryAddress, pairInitHash, tokenA, tokenB) => {
    const [token0, token1] = sortTokens(tokenA, tokenB);
    return getCreate2Address(
      factoryAddress,
      keccak256(['bytes'], [pack(['address', 'address'], [token0, token1])]),
      pairInitHash
    );
  };
  
export const sortTokens = (tokenA, tokenB) => {
if (tokenA === tokenB) throw new RangeError(`tokenA should not be equal to tokenB: ${tokenB}`);
return tokenA.toLowerCase() < tokenB.toLowerCase() ? [tokenA, tokenB] : [tokenB, tokenA];
};
  

