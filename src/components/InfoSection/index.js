import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Row,Column, ColumnTitle, ColumnStats,PortfolioStatsTitle, StatsBlock, PortfolioStatsValue, PlatformStatsTitle,PlatformStatsValue } from './style'
import { useGetVaultsData,useGetBalances, useGetApys } from '../../features/redux/vault/hooks'
import { useUserTVL, useVaultsTVL } from '../../features/redux/hooks/useVaultsTVL'
import {formatGlobalTvl, formatApy,formatUsd} from '../../features/helpers/format';
import { useTreasuryBalance } from '../../features/redux/hooks/useTreasuryBalance'
const InfoSection = ({web3}) => {
    const {t} = useTranslation();
    const { vaults } =useGetVaultsData();
    const { tokens } = useGetBalances();
    const { apys } = useGetApys();
    const { userTvl,userDaily,userMonthly } = useUserTVL(vaults,tokens,apys);
    const {vaultsTvl} = useVaultsTVL(vaults);
    const {treasuryBalance} = useTreasuryBalance(web3);
  
  return (
    <Container>
        <Row>
            <Column>
                <ColumnTitle>
                Portfolio
                </ColumnTitle>
                <ColumnStats isPortfolio={true}>
                    <StatsBlock isFirst={true}>
                        <PortfolioStatsTitle>{t('Vault-Deposited')}</PortfolioStatsTitle>
                        <PortfolioStatsValue>{formatGlobalTvl(userTvl)}</PortfolioStatsValue>
                    </StatsBlock>
                    <StatsBlock>
                        <PortfolioStatsTitle>{t('Vault-APYMonthly')}</PortfolioStatsTitle>
                        <PortfolioStatsValue>{formatUsd(userMonthly)}</PortfolioStatsValue>
                    </StatsBlock>
                    <StatsBlock>
                        <PortfolioStatsTitle>{t('Vault-APYDaily')}</PortfolioStatsTitle>
                        <PortfolioStatsValue>{formatUsd(userDaily)}</PortfolioStatsValue>
                    </StatsBlock>
                </ColumnStats>
            </Column>
            <Column>
                <ColumnTitle align="right">
                Platform
                </ColumnTitle>
                <ColumnStats justify="flex-end">
                    <StatsBlock>
                        <PlatformStatsTitle>TVL</PlatformStatsTitle>
                        <PlatformStatsValue>{vaultsTvl > 0 ? formatGlobalTvl(vaultsTvl) : "$0"}</PlatformStatsValue>
                    </StatsBlock>
                    <StatsBlock>
                        <PlatformStatsTitle>{t('Vault-MainTitle')}</PlatformStatsTitle>
                        <PlatformStatsValue>{vaults ? vaults.length : 0}</PlatformStatsValue>
                    </StatsBlock>
                    <StatsBlock isLast={true}>
                        <PlatformStatsTitle>{t('Treasury-Balance')}</PlatformStatsTitle>
                        <PlatformStatsValue>{treasuryBalance > 0 ? formatGlobalTvl(treasuryBalance) : "$0"}</PlatformStatsValue>
                    </StatsBlock>
                    
                </ColumnStats>

            </Column>
        </Row>
    </Container>
  )
}

export default InfoSection