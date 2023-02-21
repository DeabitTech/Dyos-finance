import {strategyABI} from '../config';
import {getStrategyAddress} from '../web3/getStrategyAddress';


export const lastHarvest = async ({web3,vaultAddress}) => {
    if(!web3) return;
    let vaultContractAddress = vaultAddress
    const strategyContractAddress = await getStrategyAddress({web3,vaultContractAddress});
    const strategyContract = new web3.eth.Contract(strategyABI,strategyContractAddress);
    const data = _lastHarvest({contract:strategyContract});
   
    return data;
}

const _lastHarvest = ({contract}) => {
    return contract.methods.lastHarvest().call(); 
            
}

const _performanceFee = ({contract}) => {
    return contract.methods.performanceFee().call();
}

export const performanceFee = async ({web3,vaultAddress}) => {
    let vaultContractAddress = vaultAddress
    const strategyContractAddress = await getStrategyAddress({web3,vaultContractAddress});
    const strategyContract = new web3.eth.Contract(strategyABI,strategyContractAddress);
    const data = _performanceFee({contract:strategyContract});
    return data;
}