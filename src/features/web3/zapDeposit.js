import { uniV3ZapABI } from '../config';
//import { enqueueSnackbar }

export const zapDeposit = async ({
  web3,
  address,
  vaultAddress,
  isETH,
  tokenAddress,
  tokenAmount,
  zapAddress,
  swapAmountOutMin,
  dispatch,
}) => {
  const contract = new web3.eth.Contract(uniV3ZapABI, zapAddress);
  const data = await _zapDeposit({
    contract,
    address,
    vaultAddress,
    isETH,
    tokenAddress,
    tokenAmount,
    swapAmountOutMin,
    dispatch,
  });
  return data;
};

const _zapDeposit = ({
  contract,
  address,
  vaultAddress,
  isETH,
  tokenAddress,
  tokenAmount,
  swapAmountOutMin,
  dispatch,
}) => {
  let transaction;

  if (isETH && swapAmountOutMin) {
    console.log('zapInETH(vaultAddress, swapAmountOutMin)', vaultAddress, swapAmountOutMin);
    console.log('address ', address, contract._address, contract.methods)
    transaction = contract.methods.zapInETH(vaultAddress, swapAmountOutMin).send({
      from: address,
      value: tokenAmount,
    });
  } else {
    console.log(
      'zapIn(vaultAddress, swapAmountOutMin, tokenAddress, tokenAmount)',
      vaultAddress,
      swapAmountOutMin,
      tokenAddress,
      tokenAmount
    );
    console.log('address ', address)
    transaction = contract.methods
      .zapIn(vaultAddress, swapAmountOutMin, tokenAddress, tokenAmount)
      .send({
        from: address,
      });
  }

  return new Promise((resolve, reject) => {
    transaction
      .on('transactionHash', function (hash) {
        console.log(hash);
       
          //alert('zap effettuato con succetto ieee')
      
      })
      .on('receipt', function (receipt) {
        console.log(receipt);
        resolve();
      })
      .on('error', function (error) {
        console.log(error);
        reject(error);
      })
      .catch(error => {
        //alert(`${error} , ${vaultAddress} , ${tokenAmount} , ${swapAmountOutMin}`)
        reject(error);
      });
  });
};
