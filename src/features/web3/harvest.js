import {strategyABI} from '../config';
import {getStrategyAddress} from '../web3/getStrategyAddress';


export const harvest = async ({web3,address,vaultContractAddress,dispatch}) => {
    const strategyContractAddress = await getStrategyAddress({web3,vaultContractAddress});
    const strategyContract = new web3.eth.Contract(strategyABI,strategyContractAddress);
    const data = await _harvest({contract:strategyContract,address,dispatch});
    return data;
}

const _harvest = ({contract,address,dispatch}) => {
    return new Promise((resolve,reject)=>{
        contract.methods.harvest()
            .send({from:address})
            .on('transactionHash', hash => {
               
                 
            })
            .on('receipt', receipt => {
                console.log(receipt);
                resolve()

            })
            .on('error', error => {
                console.log(error);
                reject();
            })
            .catch(error => {
                console.log(error);
                reject(error);
            });
    })
}