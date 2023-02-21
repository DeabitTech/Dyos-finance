import React, {memo, useCallback, useMemo,useState,useEffect} from 'react'
import { useTranslation } from 'react-i18next';
import { allNetworks } from '../../features/web3/networks'
import { ChainLine, Container, NetworkBar } from './style';
import { getSingleAssetSrc } from '../../features/helpers/getSingleAssetSrc';
import { useShowMobileNetworkBar } from '../../features/redux/home/showMobileNetworkBar';


const NetworksToggle = () => {
    
    const {showBar,showMobileNetworkBar} = useShowMobileNetworkBar();
    const currentNetwork = useMemo(()=>allNetworks.find(network=> network.id === window.REACT_APP_NETWORK_ID),[]);
    const {t} = useTranslation();
    const handleNetworkClick = useCallback(network=>{
        showMobileNetworkBar(showBar.showBar)
        if(network.id === currentNetwork.id) {
            return;
        }
        else{
            window.location.hash = network.hash;
            window.location.reload();
        }
    },[currentNetwork]);

    
    return (
        <Container>
         
            <NetworkBar showBar={showBar.showBar}>
                {allNetworks.map((network,i)=>{
                    return (
                        <ChainLine key={i} indx={i} onClick={()=>handleNetworkClick(network)}>
                           <img src={getSingleAssetSrc(network.asset)}/>
                          
                        </ChainLine>
                    )   
                })}
            </NetworkBar>
        </Container>
    )
}

export default NetworksToggle