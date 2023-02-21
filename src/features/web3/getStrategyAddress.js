import {vaultABI} from '../config';

export const getStrategyAddress = async ({web3,vaultContractAddress}) => {
    const contract = new web3.eth.Contract(vaultABI,vaultContractAddress);
    const strategy = await contract.methods.strategy().call();
    return strategy.toString();
}