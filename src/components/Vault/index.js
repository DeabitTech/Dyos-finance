import React, { useCallback,useState,useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {byDecimals} from '../../features/helpers/decimalHelper';
import BigNumber from 'bignumber.js';
import {getRetireReason} from '../RetireReason';
import {getVaultWarning} from '../VaultWarning';
import {formatTvl, formatApy} from '../../features/helpers/format';
import DepositSection from '../DepositSection';
import WithdrawSection from '../WithdrawSection';
import HarvestSection from '../HarvestSection';
import { Card, Container,VaultTitle,VaultProperty, VaultProperties,ButtonQuickAction,ModalCard, Tabs, ModalBody, ButtonDetailsAction, ChainImg, AssetsGroupImg, AssetImg } from './style';
import { Link, useParams } from 'react-router-dom';
import {getSingleAssetSrc} from '../../features/helpers/getSingleAssetSrc';
import { allNetworks } from '../../features/web3/networks'

const Vault = ({vault,index,tokens,apy,getBalancesDone,getVaultsDataDone, getApysDone}) => {
  const currentNetwork = useMemo(()=>allNetworks.find(network=> network.id === window.REACT_APP_NETWORK_ID),[]);
  const {chain} = useParams();
  const { t } = useTranslation();
  const [isDeposit,setIsDeposit] = useState(true);
  const [isWith,setIsWith] = useState(false);
  const toggleCard = ()=> document.querySelector(`#modal-${index}`).showModal();
  const toggleCardClose = () => document.querySelector(`#modal-${index}`).close();
  const toggleTab = useCallback((typeAction)=> {typeAction.includes('dep') ? (setIsDeposit(true) || setIsWith(false)) : (setIsWith(true) || setIsDeposit(false)); },[isDeposit,isWith])
  const balanceSingle = byDecimals(tokens[vault.token].tokenBalance,vault.tokenDecimals);
  const sharesBalance = new BigNumber(tokens[vault.earnedToken].tokenBalance);
  const vaultStateTitle = useMemo(() => {
    let state = 
      vault.status === 'eol'
        ? t(getRetireReason(vault.retireReason))
        : vault.depositsPaused
        ? t('Vault-DepositsPausedTitle')
        : vault.showWarning
        ? t(getVaultWarning(vault.warning), { name: vault.name, platform: vault.platform })
        : null;

        if (vault.experimental) {
          state = t('Vault-Experimental');
        }
    return state === null ? (
      ''
    ):
      (t(state))
  }, [vault,/*t*/]);

  const balanceUsd = balanceSingle > 0 && getVaultsDataDone ? formatTvl(balanceSingle, vault.oraclePrice) : '';
  const deposited = byDecimals(sharesBalance.multipliedBy(new BigNumber(vault.pricePerFullShare)),vault.tokenDecimals);
  const depositedUsd = deposited > 0 && getVaultsDataDone ? formatTvl(deposited, vault.oraclePrice) : '';


  
  return (
    <>
    <Container>
      <Card>
        <AssetsGroupImg>
          {
            vault.assets.map((asset,i)=>(
              <AssetImg imgIndx={i} key={i} src={getSingleAssetSrc(asset.toUpperCase())}/>
            ))
          }
        </AssetsGroupImg>
        <ChainImg src={getSingleAssetSrc(currentNetwork.asset)}/>
        <VaultTitle >
          <Link to={`/${chain}/vault/${vault.id}`} style={{all:'unset'}}>
          {vault.name}
          </Link>
        </VaultTitle>
        <VaultProperties>
          <VaultProperty>
            <div>deposito</div>
            <div>{formatDecimals(deposited)}</div>
          </VaultProperty>
          <VaultProperty>
            <div>balance</div> 
            <div>{formatDecimals(balanceSingle)}</div>
          </VaultProperty>
          <VaultProperty>

            <div>APY</div> 
            <div>{formatApy(apy.totalApy)}</div>
          </VaultProperty>
          <VaultProperty>

            <div>TVL</div> 
            <div>{formatTvl(vault.tvl, vault.oraclePrice)}</div>
          </VaultProperty>
        </VaultProperties>
        <ButtonQuickAction onClick={toggleCard}>Quick Action</ButtonQuickAction>
      </Card>
    </Container>
      
      <ModalCard id={`modal-${index}`}>
        <Tabs isDep={isDeposit} isWith={isWith}>
          <div onClick={()=>toggleTab('dep')}>
            Deposit 
          </div>
          <div onClick={()=>toggleTab('wit')}>
            Withdraw 
          </div>
        </Tabs>
          {/* 
          <h2 style={{position:'relative',cursor:'pointer', top:'-15px',right:'-290px',zIndex:10,width:'10px'}} onClick={toggleCard}>X</h2>
        */} 
        <ModalBody>
        {isDeposit ? (<DepositSection vault={vault}/>) :  (<WithdrawSection vault={vault} sharesBalance={sharesBalance}/>)}
          <HarvestSection vault={vault}/>
          <ButtonDetailsAction bgColor="#6483B4">
            <Link style={{all:'unset'}} to={`/${chain}/vault/${vault.id}`} >
              details
            </Link>
          </ButtonDetailsAction>
          <ButtonDetailsAction onClick={toggleCardClose} isClose={true}>
            Close
          </ButtonDetailsAction>
        </ModalBody>
      </ModalCard>
      
      </>
  )
}
const formatDecimals = number => {
  return number >= 10 ? number.toFixed(4) : number.isEqualTo(0) ? 0 : number.toFixed(8);
};

export default Vault