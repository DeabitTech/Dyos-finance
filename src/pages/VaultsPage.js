import React from 'react'
import VaultList from '../components/VaultsList'

import NetworkConnectNotice from '../components/NetworkConnectNotice';

const VaultsPage = ({web3,address,connectWallet,disconnectWallet,networkId}) => {

  return (
    <>
        <NetworkConnectNotice 
                web3={web3}
                address={address}
                connectWallet={connectWallet}
                disconnectWallet={disconnectWallet}
                networkId={networkId}/>
        
        <VaultList/>
    </>
  )
}

export default VaultsPage