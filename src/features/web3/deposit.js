import { vaultABI} from '../config';


export const deposit = async ({web3,address,isAll,amount,contractAddress,dispatch}) => {
    const contract = new web3.eth.Contract(vaultABI,contractAddress);
    const data = await _deposit({web3,address,isAll,amount,contract,dispatch});
    return data;
}

const _deposit = ({web3,address,isAll,amount,contract,dispatch}) => {
    return new Promise((resolve,reject)=>{
        if(isAll){
            contract.methods
                .depositAll()
                .send({from:address})
                .on('transactionHash', hash => {
                    
                })
                .on('receipt', receipt => resolve())
                .on('error', error => {
                    reject(error)
                })
                .catch(error => {
                    reject(error)
                })
        }
        else {
            contract.methods
                .deposit(amount)
                .send({from:address})
                .on('transactionHash', hash => {
                    
                })
                .on('receipt', receipt => resolve())
                .on('error', error => {
                    reject(error)
                })
                .catch(error => {
                    reject(error)
                })
        }
    })
}