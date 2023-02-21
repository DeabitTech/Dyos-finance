import './App.css';
import React, { useState, useEffect,useCallback } from 'react';
import Helmet from 'react-helmet';
import Header from './components/Header';
import { usePageMeta } from './features/redux/hooks/usePageMeta';
import { useTranslation } from 'react-i18next';
import { useConnectWallet } from './features/redux/home/connectWallet';
import { useDisconnectWallet } from './features/redux/home/disconnectWallet';
import { createWeb3Modal } from './features/web3/createWeb3Modal';
import { Routes, Route,useLocation, useParams, useSearchParams } from 'react-router-dom';
import VaultsPage from './pages/VaultsPage';
import VaultDetailsPage from './pages/VaultDetailsPage';
import InfoSection from './components/InfoSection';
import VaultDetailsHeader from './components/VaultDetailsHeader';
import Footer from './components/Footer'



const App = () => {

  const {t} = useTranslation();
  const {getPageMeta} = usePageMeta();
  const {connectWallet,web3,address,networkId,connected} = useConnectWallet();
  const { disconnectWallet } = useDisconnectWallet();
  const [web3Modal,setModal] = useState(null);
  const location = useLocation();
 
  useEffect(()=>{
    setModal(createWeb3Modal(t));
  },[setModal]);

  useEffect(() => {
    if (web3Modal && (web3Modal.cachedProvider || window.ethereum)) {
     
      connectWallet(web3Modal);
    }
  }, [web3Modal]);

  const connectWalletCallback = useCallback(() => {
    connectWallet(web3Modal);
  }, [web3Modal, connectWallet]);

  const disconnectWalletCallback = useCallback(() => {
    disconnectWallet(web3, web3Modal);
  }, [web3, web3Modal, disconnectWallet]);

 
  
  return (
    <div className="App">
      <Helmet>
        <title>{getPageMeta('App-Meta-Title')}</title>
        <meta name="description" content={getPageMeta('App-Meta-Description')} />
        <meta property="og:title" content={getPageMeta('App-Meta-Title')} />
        <meta property="og:description" content={getPageMeta('App-Meta-Description')} />
        <meta property="og:url" content={process.env.PUBLIC_URL || 'https://app.dyos.finance'} />
      </Helmet>
      <Header     
                  chain={location.pathname.split('/')[1]}
                  address={address}
                 
                  connected={connected}
                  connectWallet={connectWalletCallback}
                  disconnectWallet={disconnectWalletCallback}
                  subHeader={location.pathname.includes('vault') ? (<VaultDetailsHeader chain={location.pathname.split('/')[1]} vaultId={location.pathname.substring(location.pathname.lastIndexOf('/')+1)}/>) : (<InfoSection web3={web3}/>)}/>
      <Routes>
        <Route path="/:chain" element={<VaultsPage web3={web3} address={address} connectWallet={connectWalletCallback} disconnectWallet={disconnectWalletCallback} networkId={networkId}/>}  />
        <Route path='/:chain/vault/:vaultId' element={<VaultDetailsPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
