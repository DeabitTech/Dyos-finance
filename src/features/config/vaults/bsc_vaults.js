export const bscVaults = [
  {
    id: 'banana-usdt-busd',
    name: 'USDT-BUSD LP',
    token: 'USDT-BUSD ALP',
    tokenDescription: 'ApeSwap',
    tokenAddress: '0x2e707261d086687470B515B320478Eb1C88D49bb',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'dyosApeSwapUSDT-BUSD',
    earnedTokenAddress: '0x4C55EC97D57b9488255670345Ed52f54d9F4E03D',
    earnContractAddress: '0x4C55EC97D57b9488255670345Ed52f54d9F4E03D',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'banana-usdt-busd',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'ApeSwap',
    assets: ['USDT', 'BUSD'],
    isEnterprise:true,
    risks: [
      'LOW RISK',
      'AUDIT',
    ],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://apeswap.finance/add/0x55d398326f99059fF775485246999027B3197955/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    buyTokenUrl:
      'https://apeswap.finance/swap?outputCurrency=0x55d398326f99059fF775485246999027B3197955',
    strategyUrl: 'https://bscscan.com/address/0xedd7b4a080eaf7172d6359f38801478904b59d75',
    vaultUrl: 'https://bscscan.com/address/0x4C55EC97D57b9488255670345Ed52f54d9F4E03D',
    createdAt: 1952795668,
  },  
  {
    id: 'cakev2-hay-busd',
    name: 'HAY-BUSD LP',
    token: 'HAY-BUSD PLP',
    tokenDescription: 'Pancake',
    tokenAddress: '0xB6040A9F294477dDAdf5543a24E5463B8F2423Ae',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'dyosPanCakeHAY-BUSD-LP',
    earnedTokenAddress: '0x62E5BDd5799a1E1c2d86342a4673Ba44E604679D',
    earnContractAddress: '0x62E5BDd5799a1E1c2d86342a4673Ba44E604679D',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'cakev2-hay-busd',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'PanCake',
    assets: ['HAY', 'BUSD'],
    isEnterprise:true,
    risks: [
      'LOW RISK',
      'AUDIT',
    ],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://pancakeswap.finance/add/0x0782b6d8c4551B9760e74c0545a9bCD90bdc41E5/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    buyTokenUrl:
      'https://pancakeswap.finance/swap?outputCurrency=0x0782b6d8c4551B9760e74c0545a9bCD90bdc41E5',
    strategyUrl: 'https://bscscan.com/address/0x805B55f6AB0604F292Cb09202146e21c3c4C0081',
    vaultUrl: 'https://bscscan.com/address/0x62E5BDd5799a1E1c2d86342a4673Ba44E604679D',
    createdAt: 1952795668,
  },  
  {
    id: 'cakev2-dai-busd',
    logo: 'busd-pairs/DAI-BUSD.svg',
    name: 'DAI-BUSD LP',
    token: 'DAI-BUSD LP2',
    tokenDescription: 'PancakeSwap',
    tokenAddress: '0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCakeV2DAI-BUSD',
    earnedTokenAddress: '0x888f5bCB27E6Ab1a58906227F2C9696501cd8248',
    earnContractAddress: '0x888f5bCB27E6Ab1a58906227F2C9696501cd8248',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'cakev2-dai-busd',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'PancakeSwap',
    
    assets: ['DAI', 'BUSD'],
    risks: [
      'LOW RISK',
      'AUDIT',
    ],
    addLiquidityUrl:
      'https://pancakeswap.finance/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    buyTokenUrl:
      'https://pancakeswap.finance/swap?outputCurrency=0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3&outputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      strategyUrl: 'https://bscscan.com/address/0x7E2BAA77AB2D682aa80116b344d415BC1cFCc518',
      vaultUrl: 'https://bscscan.com/address/0x888f5bCB27E6Ab1a58906227F2C9696501cd8248',
    createdAt: 1619354488,
  },
]