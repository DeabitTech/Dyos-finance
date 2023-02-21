import { useEffect, useState } from "react";
import { getNetworkCoin,getTreasuryAddress } from "../../helpers/getNetworkData";
import { fetchPriceSingleToken } from "../../web3";
import { erc20ABI } from "../../config";
import { byDecimals } from "../../helpers/decimalHelper";

export const useTreasuryBalance = (web3) => {
   
    const [treasuryBalance,setTreasuryBalance] = useState();
    let treasuryAddress = getTreasuryAddress();
    let currentNativeCoin = getNetworkCoin();
    let nativeCoinPrice = fetchPriceSingleToken({id:currentNativeCoin.symbol});
   

    useEffect(()=>{
        (async()=>{
            if(!web3) return;
            let wNativeContract = new web3.eth.Contract(erc20ABI,currentNativeCoin.address);
         
            let treasuryBal = await wNativeContract.methods.balanceOf(treasuryAddress).call();
            treasuryBal = byDecimals(treasuryBal,currentNativeCoin.decimals);
            setTreasuryBalance(treasuryBal*nativeCoinPrice);
        })() 

    },[currentNativeCoin,nativeCoinPrice,web3])

    return {treasuryBalance};
}