import React from 'react'
import { useParams } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop';
import VaultDetails from '../components/VaultDetails';

const VaultDetailsPage = () => {
    const {vaultId} = useParams();
     
  return (
    <>
      <ScrollToTop/>
      <VaultDetails vaultId={vaultId}/>
    </>  
  )
}

export default VaultDetailsPage