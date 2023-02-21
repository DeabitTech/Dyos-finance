import { connectors } from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { addressBook } from 'blockchain-addressbook';
import { bscVaults, bscZaps, polygonVaults, avalancheVaults, polygonZaps, fantomVaults, fantomZaps, avalancheZaps, nativeCoins } from '../config';
import { allNetworks } from '../web3/networks';
const {
    polygon: polygonAddressBook,
    heco: hecoAddressBook,
    avax: avaxAddressBook,
    bsc: bscAddressBook,
    fantom: fantomAddressBook,
    one: harmonyAddressBook,
    arbitrum: arbitrumAddressBook,
  } = addressBook;
  export {
    bscAddressBook,
    hecoAddressBook,
    avaxAddressBook,
    polygonAddressBook,
    fantomAddressBook,
    harmonyAddressBook,
    arbitrumAddressBook,
  };


export const getNetworkConnectors = (t) => {
  
    switch (window.REACT_APP_NETWORK_ID) {
      case 56:
        return {
          network: 'binance',
          cacheProvider: true,
          providerOptions: {
            injected: {
              display: {
                name: 'Metamask',
                description: t('Home-BrowserWallet'),
              },
            },
            walletconnect: {
              package: WalletConnectProvider,
              options: {
                rpc: {
                  1: 'https://bsc-dataseed.binance.org/',
                  56: 'https://bsc-dataseed.binance.org/',
                },
              },
            },
            'custom-binance': {
              display: {
                name: 'Binance',
                description: t('Binance Chain Wallet'),
                logo: require(`../config/assets/images/wallets/binance-wallet.png`),
              },
              package: 'binance',
              connector: async (ProviderPackage, options) => {
                const provider = window.BinanceChain;
                await provider.enable();
                return provider;
              },
            },
            'custom-math': {
              display: {
                name: 'Math',
                description: t('Math Wallet'),
                logo: require(`../config/assets/images/wallets/math-wallet.svg`),
              },
              package: 'math',
              connector: connectors.injected,
            },
            'custom-twt': {
              display: {
                name: 'Trust',
                description: t('Trust Wallet'),
                logo: require(`../config/assets/images/wallets/trust-wallet.svg`),
              },
              package: 'twt',
              connector: connectors.injected,
            },
            'custom-safepal': {
              display: {
                name: 'SafePal',
                description: t('SafePal App'),
                logo: require(`../config/assets/images/wallets/safepal-wallet.svg`),
              },
              package: 'safepal',
              connector: connectors.injected,
            },
          },
        };
      case 128:
        return {
          network: 'heco',
          cacheProvider: true,
          providerOptions: {
            injected: {
              display: {
                name: 'Injected',
                description: t('Home-BrowserWallet'),
              },
            },
            // walletconnect: {
            //   package: WalletConnectProvider,
            //   options: {
            //     rpc: {
            //       1: 'https://http-mainnet.hecochain.com',
            //       128: 'https://http-mainnet.hecochain.com',
            //     },
            //   },
            // },
            'custom-math': {
              display: {
                name: 'Math',
                description: t('Math Wallet'),
                logo: require(`../config/assets/images/wallets/math-wallet.svg`),
              },
              package: 'math',
              connector: connectors.injected,
            },
          },
        };
      case 43114:
        return {
          network: 'avalanche',
          cacheProvider: true,
          providerOptions: {
            injected: {
              display: {
                name: 'Injected',
                description: t('Home-BrowserWallet'),
              },
            },
            // walletconnect: {
            //   package: WalletConnectProvider,
            //   options: {
            //     rpc: {
            //       1: 'https://api.avax.network/ext/bc/C/rpc',
            //       43114: 'https://api.avax.network/ext/bc/C/rpc',
            //     },
            //   },
            // },
          },
        };
      case 137:
        return {
          network: 'polygon',
          cacheProvider: true,
          providerOptions: {
            injected: {
              display: {
                name: 'Injected',
                description: t('Home-BrowserWallet'),
              },
            },
            walletconnect: {
              package: WalletConnectProvider,
              options: {
                network: 'matic',
                rpc: {
                  1: 'https://rpc-mainnet.maticvigil.com/',
                  137: 'https://rpc-mainnet.maticvigil.com/',
                },
              },
            },
          },
        };
      case 250:
        return {
          network: 'fantom',
          cacheProvider: true,
          providerOptions: {
            injected: {
              display: {
                name: 'Injected',
                description: t('Home-BrowserWallet'),
              },
            },
            // walletconnect: {
            //   package: WalletConnectProvider,
            //   options: {
            //     rpc: {
            //       1: 'https://rpcapi.fantom.network',
            //       250: 'https://rpcapi.fantom.network',
            //     },
            //   },
            // },
          },
        };
      case 1666600000:
        return {
          network: 'harmony',
          cacheProvider: true,
          providerOptions: {
            injected: {
              display: {
                name: 'Injected',
                description: t('Home-BrowserWallet'),
              },
            },
          },
        };
      case 42161:
        return {
          network: 'arbitrum',
          cacheProvider: true,
          providerOptions: {
            injected: {
              display: {
                name: 'Injected',
                description: t('Home-BrowserWallet'),
              },
            },
          },
        };
      default:
        return {};
    }
};

export const apiUrl = process.env.REACT_APP_API_URL;


export const getApiCacheBuster = () => {
  return Math.trunc(Date.now() / (1000 * 60));
}

export const getNetworkStables = () => {
  switch (window.REACT_APP_NETWORK_ID) {
    case 56:
      return [
        'BUSD',
        'USDT',
        'USDC',
        'DAI',
        'VAI',
        'QUSD',
        'UST',
        'VENUS BLP',
        '3EPS',
        'fUSDT',
        '4BELT',
        'IRON',
        'DOLLY',
        'TUSD',
        'USDN',
        'WUSD',
        'USDO',
        'USDD',
      ];
    case 128:
      return ['USDT', 'HUSD'];
    case 43114:
      return [
        'USDT',
        'DAI',
        'BUSD',
        'zDAI',
        'zUSDT',
        'USDTe',
        'BUSDe',
        'USDC',
        'USDCe',
        'DAIe',
        'MAI',
        'FRAX',
        'nUSD',
        'MIM',
        'USDC',
        'UST',
        'USTw',
      ];
    case 137:
      return [
        'USDC',
        'USDT',
        'maUSDC',
        'DAI',
        'IRON',
        'MAI',
        'FRAX',
        'rUSD',
        'UST',
        'USTw',
        'WUSD',
        'jEUR',
        'jGBP',
        'jCHF',
        'EURt',
        'TUSD',
        'PAR',
        'EURS',
        '4EUR',
        'agEUR',
        'jJPY',
        'JPYC',
        'jCAD',
        'CADC',
        'jSGD',
        'XSGD',
      ];
    case 250:
      return [
        'USDC',
        'USDT',
        'DAI',
        'fUSDT',
        'MIM',
        'FRAX',
        'MAI',
        'DOLA',
        'TUSD',
        'UST',
        'USTw',
        'asUSDC',
        'LAMBDA',
        'DEI',
        'TOR',
        'USDB',
      ];
    case 1666600000:
      return ['BUSD', 'bscBUSD', 'USDC', 'USDT', 'UST', 'DAI', 'FRAX'];
    case 42161:
      return ['USDC', 'USDT', 'MIM', 'FRAX', 'UST', 'USTw', 'EURS'];
    case 42220:
      return ['cUSD', 'cEUR', 'DAI', 'USDC', 'USDT'];
    case 1285:
      return ['USDC', 'USDT', 'DAI', 'BUSD', 'MAI', 'MIM', 'FRAX'];
    case 25:
      return ['USDC', 'USDT', 'DAI', 'BUSD'];
    case 1313161554:
      return ['USDC', 'USDT'];
    case 122:
      return ['fUSD', 'BUSD', 'USDC'];
    case 1088:
      return ['mUSDT', 'mUSDC'];
    case 1284:
      return ['USDC', 'USDT', 'DAI', 'BUSD'];
    case 42262:
      return ['ceUSDC, USDT'];
    default:
      return [];
  }
};

export const getTreasuryAddress = () =>{
  switch(window.REACT_APP_NETWORK_ID){
    case 56:
      return '0x53691dD0A03A7f6893c15775887d025e5D00afE9'; // def by dyos
    case 128:
      return '0x2776CF9B6E2Fa7B33A37139C3CB1ee362Ff0356e';
    case 43114:
      return '0x6FfF95AC47b586bDDEea244b3c2fe9c4B07b9F76';
    case 137:
      return '0x19DCD2aC1b46eD8f1d3Be8092529429F3803fed5'; // def by dyos
    case 250:
      return '0xC9F6b1B53E056fd04bE5a197ce4B2423d456B982';
    case 1666600000:
      return '0xBa5041B1c06e8c9cFb5dDB4b82BdC52E41EA5FC5';
    case 42161:
      return '0x13aD51a6664973EbD0749a7c84939d973F247921';
    case 42220:
      return '0xa9E6E271b27b20F65394914f8784B3B860dBd259';
    case 1285:
      return '0x7f6fE34C51d5352A0CF375C0Fbe03bD19eCD8460';
    case 25:
      return '0x13aD51a6664973EbD0749a7c84939d973F247921';
    case 1313161554:
      return '0x55f46144bC62e9Af4bAdB71842B62162e2194E90';
    case 122:
      return '0x4f22BD7CE44b0e0B2681A28e300A7285319de3a0';
    case 1088:
      return '0x4fd2e1c2395dc088F36cab06DCe47F88A912fC85';
    case 1284:
      return '0xC9F6b1B53E056fd04bE5a197ce4B2423d456B982';
    case 42262:
      return '0xFE40f6eAD11099D91D51a945c145CFaD1DD15Bb8';
    default:
      return '';
  }
}

export const getNetworkMulticall = () => {
  switch (window.REACT_APP_NETWORK_ID) {
    case 56:
      return '0xB94858b0bB5437498F5453A16039337e5Fdc269C';
    case 128:
      return '0x2776CF9B6E2Fa7B33A37139C3CB1ee362Ff0356e';
    case 43114:
      return '0x6FfF95AC47b586bDDEea244b3c2fe9c4B07b9F76';
    case 137:
      return '0xC3821F0b56FA4F4794d5d760f94B812DE261361B';
    case 250:
      return '0xC9F6b1B53E056fd04bE5a197ce4B2423d456B982';
    case 1666600000:
      return '0xBa5041B1c06e8c9cFb5dDB4b82BdC52E41EA5FC5';
    case 42161:
      return '0x13aD51a6664973EbD0749a7c84939d973F247921';
    case 42220:
      return '0xa9E6E271b27b20F65394914f8784B3B860dBd259';
    case 1285:
      return '0x7f6fE34C51d5352A0CF375C0Fbe03bD19eCD8460';
    case 25:
      return '0x13aD51a6664973EbD0749a7c84939d973F247921';
    case 1313161554:
      return '0x55f46144bC62e9Af4bAdB71842B62162e2194E90';
    case 122:
      return '0x4f22BD7CE44b0e0B2681A28e300A7285319de3a0';
    case 1088:
      return '0x4fd2e1c2395dc088F36cab06DCe47F88A912fC85';
    case 1284:
      return '0xC9F6b1B53E056fd04bE5a197ce4B2423d456B982';
    case 42262:
      return '0xFE40f6eAD11099D91D51a945c145CFaD1DD15Bb8';
    default:
      return '';
  }
};

export const getNetworkCoin = () => {
  
    return nativeCoins.find(coin => coin.chainId ===  window.REACT_APP_NETWORK_ID);
};



export const getNetworkPools = () => {
    
    switch (window.REACT_APP_NETWORK_ID) {
      case 56:
        return bscVaults;
      case 128:
        return //hecoPools;
      case 43114:
        return avalancheVaults;
      case 137:
        return polygonVaults;
      case 250:
        return fantomVaults;
      case 1666600000:
        return //harmonyPools;
      case 42161:
        return //arbitrumPools;
      default:
        return [];
    }
  };

  export const getNetworkZaps = () => {
    
   
    switch (window.REACT_APP_NETWORK_ID) {
      case 56:
        return bscZaps;
      case 128:
        return //hecoZaps;
      case 43114:
        return avalancheZaps;
      case 137:
        return polygonZaps;
      case 250:
        return fantomZaps;
      case 1666600000:
        return //harmonyZaps;
      case 42161:
        return //arbitrumZaps;
      default:
        return [];
    }
  };

  export const getNetworkTokens = () => {
    
    switch (window.REACT_APP_NETWORK_ID) {
      case 56:
        return bscAddressBook.tokens;
      case 128:
        return hecoAddressBook.tokens;
      case 43114:
        return avaxAddressBook.tokens;
      case 137:
        return polygonAddressBook.tokens;
      case 250:
        return fantomAddressBook.tokens;
      case 1666600000:
        return harmonyAddressBook.tokens;
      case 42161:
        return arbitrumAddressBook.tokens;
      default:
        return [];
    }
  };

  const networkFriendlyName = {
    56: 'BSC',
    128: 'HECO',
    43114: 'AVAX',
    137: 'Polygon',
    250: 'Fantom',
    1666600000: 'Harmony',
    42161: 'Arbitrum',
    42220: 'Celo',
    1285: 'Moonriver',
    25: 'Cronos',
    1313161554: 'Aurora',
    122: 'Fuse',
    1088: 'Metis',
    1284: 'Moonbeam',
    42262: 'Oasis Emerald',
  };

  const networkBuyUrls = {
    56: 'https://app.1inch.io/#/r/0xF4cb25a1FF50E319c267b3E51CBeC2699FB2A43B',
    128: 'https://ht.mdex.com/#/swap?inputCurrency=0xa71edc38d189767582c38a3145b5873052c3e47a&outputCurrency=0x765277eebeca2e31912c9946eae1021199b39c61',
    137: 'https://app.1inch.io/#/r/0xF4cb25a1FF50E319c267b3E51CBeC2699FB2A43B',
    250: 'https://spooky.fi/#/swap?inputCurrency=0x04068da6c83afcfa0e13ba15a6696662335d5b75&outputCurrency=0xd6070ae98b8069de6B494332d1A1a81B6179D960',
    43114:
      'https://www.traderjoexyz.com/trade?outputCurrency=0xd6070ae98b8069de6b494332d1a1a81b6179d960',
    1666600000:
      'https://app.sushi.com/swap?inputCurrency=0x6ab6d61428fde76768d7b45d8bfeec19c6ef91a8&outputCurrency=0xcf664087a5bb0237a0bad6742852ec6c8d69a27a',
    42161:
      'https://app.sushi.com/swap?inputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1&outputCurrency=0x99c409e5f62e4bd2ac142f17cafb6810b8f0baae',
    42220:
      'https://app.sushi.com/swap?inputCurrency=0x471ece3750da237f93b8e339c536989b8978a438&outputCurrency=0x639a647fbe20b6c8ac19e48e2de44ea792c62c5c',
    1285: 'https://app.sushi.com/swap?inputCurrency=0x173fd7434b8b50df08e3298f173487ebdb35fd14&outputCurrency=0xf50225a84382c74cbdea10b0c176f71fc3de0c4d',
    25: 'https://vvs.finance/swap?inputCurrency=0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23&outputCurrency=0xe6801928061cdbe32ac5ad0634427e140efd05f9',
    1313161554: '',
    122: '',
    1088: 'https://netswap.io/#/swap?outputCurrency=0xe6801928061cdbe32ac5ad0634427e140efd05f9',
    1284: '',
    42262: '',
  };
  



  export const getNetworkFriendlyName = (networkId = window.REACT_APP_NETWORK_ID) =>
  networkFriendlyName[networkId];
  export const getNetworkBuyUrl = (networkId = window.REACT_APP_NETWORK_ID) =>
  networkBuyUrls[networkId];
  export const getNetworkAppUrl = (networkId = window.REACT_APP_NETWORK_ID) =>
  window.location.protocol +
  '//' +
  window.location.host +
  window.location.pathname +
  '#' +
  allNetworks.find(n => n.id === networkId)?.hash;
  