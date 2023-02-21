import React, {useEffect, useState} from 'react';
import Vault from '../Vault';
import { useTranslation } from 'react-i18next';
import {useConnectWallet,useDisconnectWallet} from '../../features/redux/home/hooks';
import { useGetVaultsData,useGetBalances,useGetApys } from '../../features/redux/vault/hooks';
import Filters from '../Filters';
import useFilteredVaults from '../../features/redux/hooks/useFilteredVaults';
import useVaultsByPlatform from '../../features/redux/hooks/useVaultsByplatform';
import useVaultsByType from '../../features/redux/hooks/useVaultsByType';
import useVaultsByAsset from '../../features/redux/hooks/useVaultsByAsset';
import useSortedVaults from '../../features/redux/hooks/useSortedVaults';
import useVisibleVaults from '../../features/redux/hooks/useVisibleVaults';
import {Container, VaultsGrid} from './style'
import NetworksToggle from '../NetworksToggle';
const FETCH_INTERVAL_MS = 15 * 1000;

const VaultsList = () => {
  const {t} = useTranslation();
  const { web3, address } = useConnectWallet();
  const { vaults, getVaultsData, getVaultsDataPending,getVaultsDataDone } =useGetVaultsData();
  const { tokens, getBalances, getBalancesPending, getBalancesDone } = useGetBalances();
  const {apys,getApys,getApysDone} = useGetApys();

  /*Filters functions */
  const {filteredVaults,toggleFilter,filters} = useFilteredVaults(vaults,tokens);
  const {vaultsByPlatform, platform, setPlatform} = useVaultsByPlatform(filteredVaults);
  const {vaultsByType, vaultType, setVaultType} = useVaultsByType(vaultsByPlatform);
  const {vaultsByAsset,asset,setAsset} = useVaultsByAsset(vaultsByType);
  const {sortedVaults, order, setOrder} = useSortedVaults(vaultsByAsset,apys,tokens);
  const {visibleVaults,fetchVisibleVaults} = useVisibleVaults(sortedVaults,10);
  const [visibleVaultsLocal,setVisibleVaultsLocal] = useState(visibleVaults);
  const [searchItem,setSearchItem] = useState('');
  useEffect(() => {
    getApys();
    const id = setInterval(getApys, FETCH_INTERVAL_MS);
    return () => clearInterval(id);
  }, [getApys]);

  useEffect(() => {
    const fetch = () => {
      if (address && web3 && !getBalancesPending) {
        getBalances({ address, web3, tokens });
      }
      if (!getVaultsDataPending) {
        getVaultsData({ web3, vaults });
      }
    };
    fetch();

    const id = setInterval(fetch, FETCH_INTERVAL_MS);
    return () => clearInterval(id);

    // Adding tokens and pools to this dep list, causes an endless loop, DDoSing the api
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, web3,getBalances, getVaultsData]);



  useEffect(()=> {
    setVisibleVaultsLocal( visibleVaults.filter((vault)=>{return vault.name.toLowerCase().includes(searchItem.toLowerCase())}));
  
  },[searchItem,order,platform,vaultType,vaults])
  return (
      <Container>
        <Filters
          toggleFilter={toggleFilter}
          filters={filters}
          platform={platform}
          vaultType={vaultType}
          asset={asset}
          order={order}
          searchItem={searchItem}
          setPlatform={setPlatform}
          setVaultType={setVaultType}
          setAsset={setAsset}
          setOrder={setOrder}
          setSearchItem={setSearchItem}

        />
        <NetworksToggle/>
        <VaultsGrid>
        {visibleVaultsLocal?.map((vault,index) => {return <Vault  key={vault.id} index={index} vault={vault} apy={apys[vault.id]||{totalApy:0}} tokens={tokens} getBalancesDone={getBalancesDone} getVaultsDataDone={getVaultsDataDone} getApysDone={getApysDone}/>})}
        </VaultsGrid>
      </Container>
    
  )
}

export default VaultsList