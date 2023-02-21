import React,{useEffect} from 'react'
import { getSingleAssetSrc } from '../../features/helpers/getSingleAssetSrc'
import { useGetVaultsData,useGetBalances,useGetApys } from '../../features/redux/vault/hooks';
import {useConnectWallet} from '../../features/redux/home/hooks';
import BigNumber from 'bignumber.js';
import { byDecimals } from '../../features/helpers/decimalHelper';
import { formatApy, formatTvl, formatUsd } from '../../features/helpers/format';
import { VaultDetailsHeaderContainer, VaultDetailsTitleContainer,AssetImg, Column,Row,AssetGroupImg,VaultChaiInfoSection,VaultInfoSection, VaultPlatformInfoSection, StatsBlock, StatsTitle, StatsValue, ColumnStats, ButtonRiskContainer, ButtonRisk } from './style'
import { useUserTVL } from '../../features/redux/hooks/useVaultsTVL'

const FETCH_INTERVAL_MS = 30 * 1000;
const VaultDetailsHeader = ({chain, vaultId}) => {
    const {web3,address} = useConnectWallet();
    const { vaults, getVaultsData, getVaultsDataPending,getVaultsDataDone } =useGetVaultsData();
    const { tokens, getBalances, getBalancesPending, getBalancesDone } = useGetBalances();
    const {apys,getApys,getApysDone} = useGetApys();
    const {  userTvl,userDaily,userMonthly } = useUserTVL(vaults,tokens,apys);
    const vault = vaults.find(v => v.id === vaultId);
    useEffect(() => {
        const fetch = () => {
          if (address && web3) {
            getBalances({ address, web3, tokens });
          }
          getVaultsData({ address, web3, vaults });
          getApys();
        };
        fetch();
    
        const id = setInterval(fetch, FETCH_INTERVAL_MS);
        return () => clearInterval(id);
    
    }, [address, web3, getBalances, getVaultsData]);
   
    return (
        <VaultDetailsHeaderContainer>
            <Row>
                <Column>
                    <VaultDetailsTitleContainer>
                        <AssetGroupImg>

                        {vault.assets.map((asset,i)=> (
                            <AssetImg key={i} src={getSingleAssetSrc(asset.toUpperCase())} imgIndx={i}/>
                            ))
                        }
                        </AssetGroupImg>
                            <h1>{vault.name}</h1>
                    </VaultDetailsTitleContainer>
                        <VaultInfoSection>
                            <VaultChaiInfoSection>
                                <div>
                                    chain:
                                </div>
                                <div>
                                    {chain}
                                </div>
                            </VaultChaiInfoSection>
                            <VaultPlatformInfoSection>
                                <div>
                                    platform:
                                </div>
                                <div>
                                    {vault.platform}
                                </div>
                            </VaultPlatformInfoSection>
                        </VaultInfoSection>
                </Column>
                <Column>
                    <ButtonRiskContainer>
                        {
                            vault.risks.map((risk,key)=>{
                                risk = risk.replace("_"," ");
                                return <ButtonRisk key={key}>{risk}</ButtonRisk>
                            })
                        }
                    </ButtonRiskContainer>
                    
                    <ColumnStats>
                        <StatsBlock>
                            <StatsTitle>
                                TVL
                            </StatsTitle>
                            <StatsValue>
                                {formatTvl(vault.tvl, vault.oraclePrice)}
                            </StatsValue>
                        </StatsBlock>
                        <StatsBlock>
                            <StatsTitle>
                                APY
                            </StatsTitle>
                            <StatsValue>
                                {formatApy(apys[vault.id]?.totalApy)}
                            </StatsValue>
                        </StatsBlock>
                        <StatsBlock>
                            <StatsTitle>
                                DAILY
                            </StatsTitle>
                            <StatsValue>
                                {formatUsd(userDaily)}
                            </StatsValue>
                        </StatsBlock>
                    </ColumnStats>
                </Column>
            </Row>
        </VaultDetailsHeaderContainer>
    )
}

export default VaultDetailsHeader