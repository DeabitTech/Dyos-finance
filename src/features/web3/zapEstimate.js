import { uniV3ZapABI, uniswapV2RouterABI } from '../config';

export const zapDepositEstimate = ({
  web3,
  zapAddress,
  vaultAddress,
  tokenAddress,
  tokenAmount,
}) => {
  const contract = new web3.eth.Contract(uniV3ZapABI, zapAddress);
  console.log(vaultAddress, tokenAddress, tokenAmount)
  return contract.methods.estimateSwap(vaultAddress, tokenAddress, tokenAmount).call();
  // { swapAmountIn uint256, swapAmountOut uint256, swapTokenOut address }
};


export const zapWithdrawEstimate = ({ web3, routerAddress, amountIn, reserveIn, reserveOut }) => {
  
    const contract = new web3.eth.Contract(uniswapV2RouterABI, routerAddress);
    let ammOut = contract.methods.getAmountOut(amountIn, reserveIn, reserveOut).call();
    return ammOut;
    // { amountOut uint }
};
  
