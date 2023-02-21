import React, { useEffect,  useState } from 'react';
import { useTranslation } from 'react-i18next';
import Davatar from '@davatar/react';
import { ConnectWalletButton } from './style';

const ConnectWallet = ({address, connected, connectWallet,disconnectWallet}) => {
    const {t} = useTranslation();
    const [shortAddress,setShortAddress] = useState('');
   
    
    useEffect(()=>{
        if(!connected) {
            return;
        }
        else if (address.length < 11) {
            setShortAddress(address);
        } else {
            setShortAddress(`${address.slice(0, 6)}...${address.slice(-4)}`);
        }
    }, [address, connected]);
      
  return (
    <>
        <ConnectWalletButton onClick={connected ? disconnectWallet : connectWallet}>
          {connected ? (
            <>
             
              {shortAddress}
            </>
          ) : (
            <>
              <i className='' />
              {t('Vault-Wallet')}
            </>
          )}
        </ConnectWalletButton>
    </>
  )
}

export default ConnectWallet