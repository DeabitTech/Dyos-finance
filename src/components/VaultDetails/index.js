import React,{useEffect,useState,useCallback} from 'react'
import { useTranslation } from 'react-i18next'
import { usePageMeta } from '../../features/redux/hooks/usePageMeta';
import {useConnectWallet} from '../../features/redux/home/hooks';
import { useGetVaultsData,useGetBalances,useGetApys, useLastHarvest } from '../../features/redux/vault/hooks';
import BigNumber from 'bignumber.js';
import { byDecimals } from '../../features/helpers/decimalHelper';
import { formatTvl } from '../../features/helpers/format';
import { Container, Grid, VaultActionsColumn, VaultInfoCard, VaultInfoColumn, VaultInfoName, VaultUpperSection,ButtonSection, ButtonLink, VaultInfoDescriptionSection, VaultDepositInfoSection, DepositInfoBlock, ModalCard,ModalBody,Tabs,ButtonDetailsAction } from './style';
import linkImg from '../../features/config/assets/linkIcon.svg'
import DepositSection from '../DepositSection';
import WithdrawSection from '../WithdrawSection';
import HarvestSection from '../HarvestSection';
import moment from 'moment';
import Helmet from 'react-helmet';

const FETCH_INTERVAL_MS = 30 * 1000;
const formatDecimals = number => {return number >= 10 ? number.toFixed(4) : number.isEqualTo(0) ? 0 : number.toFixed(8);};
const VaultDetails = ({vaultId}) => {
    const [isDeposit,setIsDeposit] = useState(true);
    const [isWith,setIsWith] = useState(false);
    const {t} = useTranslation();
    const {getPageMeta} = usePageMeta();
    const {web3,address} = useConnectWallet();
    const { vaults, getVaultsData, getVaultsDataPending,getVaultsDataDone } =useGetVaultsData();
    const { tokens, getBalances, getBalancesPending, getBalancesDone } = useGetBalances();
    const {apys,getApys,getApysDone} = useGetApys();
    const { getLastHarvest } = useLastHarvest();
    const vault = vaults.find(v => v.id === vaultId);
    const con = vault.earnContractAddress;
    const toggleTab = useCallback((typeAction)=> {typeAction.includes('dep') ? (setIsDeposit(true) || setIsWith(false)) : (setIsWith(true) || setIsDeposit(false)); },[isDeposit,isWith])
    
    
    useEffect(() => {
      
      const fetch = () => {
        let vaultAddress = vault.earnContractAddress
        
          if (address && web3) {
            getBalances({ address, web3, tokens });
          }
          getVaultsData({ address, web3, vaults });
          getApys();
          getLastHarvest({ web3, vaultAddress });
          
          
        };
        fetch();
        
        const id = setInterval(fetch, FETCH_INTERVAL_MS);
        return () => clearInterval(id);
        
      }, [address, web3, getBalances, getVaultsData]);
      
      const balanceSingle = byDecimals(tokens[vault.token].tokenBalance, vault.tokenDecimals);
      const sharesBalance = new BigNumber(tokens[vault.earnedToken].tokenBalance);
      const apy = apys[vault.id] || { totalApy: 0 };
      
      const balanceUsd =
      balanceSingle > 0 && getVaultsDataDone ? formatTvl(balanceSingle, vault.oraclePrice) : formatTvl(0);
      const deposited = byDecimals(
        sharesBalance.multipliedBy(new BigNumber(vault.pricePerFullShare)),
        vault.tokenDecimals
        );
      const depositedUsd = deposited > 0 && getVaultsDataDone ? formatTvl(deposited, vault.oraclePrice, false) : formatTvl(0);
      const lastHarvestTime = vault.lastHarvest ? moment.unix(vault.lastHarvest).fromNow().replace(' hours', 'h').replace(' minutes', 'm').replace(' days', 'd') : '0h' ;
        return (
        <Container>
          <Helmet>
          <title>
          {getPageMeta('Vault-Meta-Title', {
            vaultName: vault.name,
            vaultDescription: vault.tokenDescription,
          })}
        </title>
        <meta
          property="og:title"
          content={getPageMeta('Vault-Meta-Title', {
            vaultName: vault.name,
            vaultDescription: vault.tokenDescription,
          })}
        />
          </Helmet>
          <Grid>
            <VaultInfoColumn>
              <VaultInfoCard>
                <VaultUpperSection>
                  <VaultInfoName>Boosted by</VaultInfoName>
                  <ButtonSection>
                    <ButtonLink onClick={()=>window.open(vault.strategyUrl)}>
                      <h1>Strategy Address</h1>
                      <img src={linkImg}/>
                    </ButtonLink>
                    <ButtonLink onClick={()=>window.open(vault.vaultUrl)}>
                      <h1>Vault Address</h1>
                      <img src={linkImg}/>
                    </ButtonLink>
                  </ButtonSection>
                </VaultUpperSection>
                <VaultInfoDescriptionSection>
                  <h1>Strategy</h1>
                  <div>
                  HEC and TOR make up the foundations of the HECTOR Ecosystem. Over the coming months and years, TOR will expand to be one of the only truly decentralized and algorithmic stablecoins in the market. This will allow for significant growth of the HECTOR Ecosystem and bring value and utility to users everywhere. Over time, TOR will expand to be usable in a wide range of markets and use cases. To create adoption, partnership must be a focus. We aim to create strong, long-lasting partnerships to aid the adoption of TOR.
                  </div>
                </VaultInfoDescriptionSection>
                
              </VaultInfoCard>
              <VaultInfoCard>
              <VaultUpperSection>
                  <VaultInfoName>asset details</VaultInfoName>
                  <ButtonSection>
                    <ButtonLink onClick={()=>window.open(vault.strategyUrl)}>
                      <h1>Website</h1>
                      <img src={linkImg}/>
                    </ButtonLink>
                    <ButtonLink onClick={()=>window.open(vault.vaultUrl)}>
                      <h1>Token Contract</h1>
                      <img src={linkImg}/>
                    </ButtonLink>
                  </ButtonSection>
                </VaultUpperSection>
                <VaultInfoDescriptionSection>
                  <h1>usdt</h1>
                  <div>
                  HEC and TOR make up the foundations of the HECTOR Ecosystem. Over the coming months and years, TOR will expand to be one of the only truly decentralized and algorithmic stablecoins in the market. This will allow for significant growth of the HECTOR Ecosystem and bring value and utility to users everywhere. Over time, TOR will expand to be usable in a wide range of markets and use cases. To create adoption, partnership must be a focus. We aim to create strong, long-lasting partnerships to aid the adoption of TOR.
                  </div>
                </VaultInfoDescriptionSection>
              </VaultInfoCard>
              <VaultInfoCard>
              <VaultUpperSection>
                  <VaultInfoName>asset details</VaultInfoName>
                  <ButtonSection>
                    <ButtonLink onClick={()=>window.open(vault.strategyUrl)}>
                      <h1>Website</h1>
                      <img src={linkImg}/>
                    </ButtonLink>
                    <ButtonLink onClick={()=>window.open(vault.vaultUrl)}>
                      <h1>Token Contract</h1>
                      <img src={linkImg}/>
                    </ButtonLink>
                  </ButtonSection>
                </VaultUpperSection>
                <VaultInfoDescriptionSection>
                  <h1>busd</h1>
                  <div>
                  HEC and TOR make up the foundations of the HECTOR Ecosystem. Over the coming months and years, TOR will expand to be one of the only truly decentralized and algorithmic stablecoins in the market. This will allow for significant growth of the HECTOR Ecosystem and bring value and utility to users everywhere. Over time, TOR will expand to be usable in a wide range of markets and use cases. To create adoption, partnership must be a focus. We aim to create strong, long-lasting partnerships to aid the adoption of TOR.
                  </div>
                </VaultInfoDescriptionSection>
              </VaultInfoCard>
            </VaultInfoColumn>
            <VaultActionsColumn>
                <VaultDepositInfoSection>
                  <DepositInfoBlock>
                    <h1>{t('Vault-Deposited')}</h1>
                    <h2>{depositedUsd}</h2>
                  </DepositInfoBlock>
                  <DepositInfoBlock>
                    <h1>{t('Vault-LastHarvest')}</h1>
                    <h2>{lastHarvestTime}</h2>
                  </DepositInfoBlock>
                  <DepositInfoBlock>
                    <h1>{t('Vault-Balance')}</h1>
                    <h2>{balanceUsd}</h2>
                  </DepositInfoBlock>
                </VaultDepositInfoSection>
                <ModalCard >
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
                  
                    </ModalBody>
                </ModalCard>
            </VaultActionsColumn>
          </Grid>
        </Container>
    )
}

export default VaultDetails