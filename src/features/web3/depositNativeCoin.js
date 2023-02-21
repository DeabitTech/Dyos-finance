import { bnbVaultABI } from '../config';
//import { enqueueSnackbar } 

export const depositNativeCoin = async ({ web3, address, amount, contractAddress, dispatch }) => {
  const contract = new web3.eth.Contract(bnbVaultABI, contractAddress);
  const data = await _deposit({ web3, contract, amount, address, dispatch });
  return data;
};

const _deposit = ({ web3, contract, amount, address, dispatch }) => {
  return new Promise((resolve, reject) => {
    contract.methods
      .depositBNB()
      .send({ from: address, value: amount })
      .on('transactionHash', function (hash) {
       
        dispatch(
            //alert('deposit native coin effettuato ueee')
        );
      })
      .on('receipt', function (receipt) {
      
        resolve();
      })
      .on('error', function (error) {
        console.log(error);
        reject(error);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
};