import React,{useState,useCallback, useMemo, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import {networkSettings, networkSetup} from '../../features/web3/networks';
import { getNetworkAppUrl, getNetworkFriendlyName} from '../../features/helpers/getNetworkData';
import { Container, NetworkConnectionButtonNotice, NetworkConnectionTextNotice } from './style';

const targetNetworkId = window.REACT_APP_NETWORK_ID;
const NetworkConnectNotice = ({web3,address,networkId,connectWallet,disconnectWallet}) => {
   
    const [networkSetupError,setNetworkSetupError] = useState(null);
    const {t} = useTranslation();
    const haveConnection = !!web3;
    const haveAddress = !!address;
    const isCorrectNetwork = networkId === targetNetworkId;
    const isSupportedNetwork = networkId && networkId in networkSettings;
    const targetNetworkFriendlyName = getNetworkFriendlyName();
  

    

    const targetNetworkSetup = useCallback(() => {
        setNetworkSetupError(null);
    
        networkSetup(targetNetworkId)
          .then(() => {
            setNetworkSetupError(null);
          })
          .catch(e => {
            if (typeof e === 'object' && typeof e.message === 'string') {
              setNetworkSetupError(e.message);
            } else if (typeof e === 'string') {
              setNetworkSetupError(e);
            } else {
              setNetworkSetupError(t('Network-UnknownError'));
            }
          });
    }, [setNetworkSetupError, t]);
    
    const networkRedirect = url => {
        window.location.assign(url);
        window.location.reload();
    };

    const supportedNetworks = useMemo(()=> {
        return isSupportedNetwork ?
            {
                id:networkId,
                url: getNetworkAppUrl(networkId), // getNetworkAppUrl(networkId)
                name: getNetworkFriendlyName(networkId)
            }
            :
            null;

    },[isSupportedNetwork, networkId]);



    return (
        <Container>
            {
                !haveConnection ?
                <>
                    <NetworkConnectionTextNotice>
                        {t('Network-ConnectionRequired', {network: targetNetworkFriendlyName})}
                    </NetworkConnectionTextNotice>
                    <div>
                        <NetworkConnectionButtonNotice onClick={connectWallet}>
                        {t('Network-ConnectWallet')}
                        </NetworkConnectionButtonNotice>
                    </div>  
                </>
                : !isCorrectNetwork?
                <>
                    <NetworkConnectionTextNotice>
                        {t('Network-Supports', { network: targetNetworkFriendlyName})}{' '}
                        {isSupportedNetwork
                            ? t('Network-ConnectedTo', { network: supportedNetworks.name })
                            : t('Network-ConnectedUnsupported')}
                    </NetworkConnectionTextNotice>
                    <div >
                    <NetworkConnectionButtonNotice onClick={targetNetworkSetup}>
                        {t('Network-SwitchToNetwork', { network:   targetNetworkFriendlyName})}
                    </NetworkConnectionButtonNotice>
                    {isSupportedNetwork ? (
                        <NetworkConnectionButtonNotice
                        onClick={() => networkRedirect(supportedNetworks.url)}
                        
                        >
                        {t('Network-GoToApp', { network: supportedNetworks.name })}
                        </NetworkConnectionButtonNotice>
                    ) : null}
                    <NetworkConnectionButtonNotice onClick={disconnectWallet}>
                        {t('Network-DisconnectWallet')}
                    </NetworkConnectionButtonNotice>
                    </div>
                    <NetworkConnectionTextNotice>{t('Network-SwitchNote')}</NetworkConnectionTextNotice>
                    {networkSetupError ? <NetworkConnectionTextNotice >{networkSetupError}</NetworkConnectionTextNotice> : ''}
                </>
                : !haveAddress?
                <>
                    <NetworkConnectionTextNotice>
                    {t('Network-ConnectedTo', { network: targetNetworkFriendlyName })}
                    </NetworkConnectionTextNotice>
                    <NetworkConnectionTextNotice>{t('Network-NoWalletAddress')}</NetworkConnectionTextNotice>
                </>
                :
                null


            }
        </Container>
    );
     
}

export default NetworkConnectNotice