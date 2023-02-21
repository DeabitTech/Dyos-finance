import React, { useMemo, useState,useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useConnectWallet } from '../../features/redux/home/hooks';
import { useGetApproval,useSetDeposit, useGetBalances, useSetZapDeposit,useGetZapEstimate,useLastHarvest } from '../../features/redux/vault/hooks';
import BigNumber from 'bignumber.js';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { convertAmountToRawNumber } from '../../features/helpers/decimalHelper';
import { AmmButtonContainer, ButtonMainAction, CheckboxGroup, Container, DepositForm,DepositTitle, FeeInfoSection, FeeSingleInfo, HiddenCheckbox, InputValueContainer, StyledCheckbox, StyledCheckboxContainer, StyledCheckboxLabel } from './style';
import { useSnackbar } from 'notistack';
const DepositSection = ({vault}) => {
    
    const [checked,setChecked] = useState(false)
    const {enqueueSnackbar} = useSnackbar()
    const {t} = useTranslation();
    const {web3,address} = useConnectWallet();
    const {tokens,tokenBalance,getBalances} = useGetBalances();
    const {getApproval,getApprovalPending} = useGetApproval();
    const {setDeposit,setDepositNativeCoin,setDepositPending} = useSetDeposit();
    const {setZapDeposit,setZapDepositPending} = useSetZapDeposit();
    const { getZapDepositEstimate, getZapEstimatePending } = useGetZapEstimate();
    const {getPerformanceFee} = useLastHarvest();
    const {zap,eligibleTokens} = useMemo(()=>{
        const zap = vault.zap;
        console.log(zap);
        return {
            zap,
            eligibleTokens: [
              {
                name: vault.name,
                symbol: vault.token,
                address: vault.tokenAddress,
                decimals: vault.tokenDecimals,
                logoURI: vault.logo,
              },
              ...(zap ? zap.tokens : []),
            ],
          };
    },[vault.logo, vault.name, vault.token, vault.tokenAddress, vault.tokenDecimals, vault.zap]);
    
    const [depositSettings,setDepositSettings] = useState({
        tokenIndex: 0,
        isZap: false,
        token: eligibleTokens[0],
        amount: new BigNumber(0),
        slider: 0,
        input: '0.0',
        vaultAddress: vault.earnContractAddress,
        depositAddress: vault.earnContractAddress,
        isNeedApproval: new BigNumber(
          tokens[eligibleTokens[0].symbol].allowance[vault.earnContractAddress]
        ).isZero(),
        slippageTolerance: 0.01,
        swapAmountOut: vault.zapEstimate?.swapAmountOut,
    })

    useDeepCompareEffect(()=>{
        if (depositSettings.amount.isZero()) return;
        if (depositSettings.isZap) {
           
            getZapDepositEstimate({
                    web3,
                    zapAddress: zap.zapAddress,
                    vaultAddress: vault.earnContractAddress,
                    tokenAddress: depositSettings.token.address,
                    tokenAmount: convertAmountToRawNumber(
                    depositSettings.amount,
                    depositSettings.token.decimals
                    ),
                });
            
        }
    },[depositSettings.amount,vault, new Date().getMinutes()]);

    useEffect(() => {
        const allowance = new BigNumber(
          tokens[depositSettings.token.symbol].allowance[depositSettings.depositAddress]
        );
        setDepositSettings(prevState => ({
          ...prevState,
          isNeedApproval: allowance.isZero() || prevState.amount.isGreaterThan(allowance),
        }));
    }, [depositSettings.depositAddress, depositSettings.token.symbol, tokens]);

    useEffect(()=> {
        if(address && web3 && zap) {
            const tokens = {};
            eligibleTokens.map(token => {
                tokens[token.symbol] = {
                    tokenAddress: token.wrappedSymbol ? null : token.address,
                    tokenBalance: 0,
                    allowance: {
                        [zap.zapAddress]: token.wrappedSymbol ? Infinity : 0,
                    },
                    decimals: token.decimals,
                    ...tokens[token.symbol],
                };
            });
            getBalances({address,web3,tokens});
            getPerformanceFee({web3,vaultAddress:vault.earnContractAddress});
        }
    }, [address, web3, getBalances, zap, eligibleTokens])
    
    const handleTokenChange = event => {
        const isZap = event.target.value > 0;
        const spender = isZap ? zap.zapAddress : vault.earnContractAddress;
        const token = eligibleTokens[event.target.value];
        const allowance = new BigNumber(tokens[token.symbol].allowance[spender]);

        setDepositSettings(prevState => ({
        ...prevState,
        tokenIndex: event.target.value,
        isZap: isZap,
        token: token,
        amount: new BigNumber(0),
        slider: 0,
        input: '0.0',
        depositAddress: spender,
        isNeedApproval: allowance.isZero(),
        }));
    }

    const handleSliderChange = event => {
       
        let sliderInt = Number(event.target.value); 
        handleSliderChangeCommitted(sliderInt)
    };

    const handleSliderChangeCommitted = (sliderInt) => {
        const total = tokenBalance(depositSettings.token.symbol);
        let amount = new BigNumber(0);
        if (sliderInt > 0 && sliderInt < 100) {
          amount = total.times(sliderInt).div(100).decimalPlaces(8);
        }
        if (sliderInt === 100) {
          amount = total;
        }
        const allowance = new BigNumber(
          tokens[depositSettings.token.symbol].allowance[depositSettings.depositAddress]
        );
    
        setDepositSettings(prevState => ({
          ...prevState,
          amount: amount,
          slider: sliderInt,
          input: amount.toFormat(),
          isNeedApproval: allowance.isZero(),
        }));
    };

    const handleMax = (e) => {
        e.preventDefault();
        handleSliderChangeCommitted(100);
    };

    const handleInputAmountChange = event => {
        const input = event.target.value.replace(/[,]+/, '').replace(/[^0-9.]+/, '');
        let amount = new BigNumber(input);
        const total = tokenBalance(depositSettings.token.symbol);
        if (amount.isNaN()) amount = new BigNumber(0);
    
        amount = amount.decimalPlaces(depositSettings.token.decimals);
        if (amount.isGreaterThan(total)) amount = total;
    
        const sliderInt = total.isZero() ? 0 : amount.times(100).dividedToIntegerBy(total).toNumber();
        const allowance = new BigNumber(
          tokens[depositSettings.token.symbol].allowance[depositSettings.depositAddress]
        );
    
        setDepositSettings(prevState => ({
          ...prevState,
          amount: amount,
          slider: sliderInt,
          input: amount.isEqualTo(input) ? input : amount.toFormat(),
          isNeedApproval: allowance.isZero(),
        }));
    };

    const handleApproval = () => {
        getApproval({
          address,
          web3,
          tokenAddress: depositSettings.token.address,
          contractAddress: depositSettings.depositAddress,
          tokenSymbol: depositSettings.token.symbol,
        })
          .then(() => enqueueSnackbar(t('Vault-ApprovalSuccess'), { variant: 'success' }))
          .catch(error => enqueueSnackbar(t('Vault-ApprovalError', { error }), { variant: 'error' }));
    };

    const handleDepositAmount = e => {
        e.preventDefault();
       depositAssets(depositSettings);
    };

    const depositAssets = deposit => {
        if(vault.depositPaused) {
            console.error('Deposits paused!');
            return;
        }

        if(deposit.isZap) {

           
            const swapAmountOut =vault.zapEstimate?.swapAmountOut;
            const swapAmountOutMin = new BigNumber(
                swapAmountOut - swapAmountOut * deposit.slippageTolerance
            );
            const zapDepositArgs = {
                vaultAddress: deposit.vaultAddress,
                isETH: !!deposit.token.wrappedSymbol,
                tokenAddress: deposit.token.address,
                tokenAmount: convertAmountToRawNumber(deposit.amount, deposit.token.decimals),
                zapAddress: deposit.depositAddress,
                swapAmountOutMin: swapAmountOutMin.toFixed(0),
                address,
                web3,
            };

            setZapDeposit(zapDepositArgs)
                .then(()=>{
                    getBalances({address,web3,tokens});
                    enqueueSnackbar(t('Vault-DepositSuccess'),{variant:'success'});
                })
                .catch(error=>{
                   enqueueSnackbar(t('Vault-DepositError',{error}),{variant:'error'});
                })
        }
        else {
            const depositArgs = {
                address,
                web3,
                isAll: !!deposit.isAll,
                amount: convertAmountToRawNumber(deposit.amount, deposit.token.decimals),
                contractAddress: deposit.vaultAddress,
              };
              if (vault.tokenAddress) {
                setDeposit(depositArgs)
                  .then(() => {
                    getBalances({ address, web3, tokens });
                    enqueueSnackbar(t('Vault-DepositSuccess'), { variant: 'success' });
                  })
                  .catch(error => enqueueSnackbar(t('Vault-DepositError', { error }), { variant: 'error' }));
              } else {
                setDepositNativeCoin(depositArgs)
                  .then(() => {
                      getBalances({ address, web3, tokens });
                      enqueueSnackbar(t('Vault-DepositSuccess'), { variant: 'success' });
                  })
                  .catch(error =>
                    enqueueSnackbar(t('Vault-DepositError', { error }), { variant: 'error' })
                  );
              }
        }
    }
    
   


    return (
        <Container>
            <DepositForm>
                <DepositTitle>Deposit your LP or ZAP</DepositTitle>
                
                <CheckboxGroup onChange={handleTokenChange}>
                    {
                        eligibleTokens.map((token,i) => (
                            <StyledCheckboxContainer key={i} >
                                <HiddenCheckbox id={token.symbol} name='token-zap' value={i} />    
                                <StyledCheckboxLabel> {tokenBalance(token.symbol.toUpperCase()).decimalPlaces(8, BigNumber.ROUND_DOWN).toFormat()}{' '}{token.symbol}</StyledCheckboxLabel>
                            </StyledCheckboxContainer>   
                        ))
                    }
                </CheckboxGroup>
                <AmmButtonContainer>
                    <button onClick={()=>window.open(vault.buyTokenUrl)}>{t('Buy-Token')}</button>
                    <button onClick={()=>window.open(vault.addLiquidityUrl)}>{t('Add-Liquidity')}</button>
                </AmmButtonContainer>
                <InputValueContainer>
                    <input placeholder='0.00' type='number' value={depositSettings.input} onChange={handleInputAmountChange} />
                    <button onClick={handleMax}>Max</button>
                </InputValueContainer>
            </DepositForm>
            <FeeInfoSection>
                <FeeSingleInfo>
                    <h1>deposit fee</h1>
                    <span>0%</span>
                </FeeSingleInfo>
                <FeeSingleInfo>
                    <h1>withdrawal fee</h1>
                    <span>0%</span>
                </FeeSingleInfo>
                <FeeSingleInfo>
                    <h1>perfomance fee</h1>
                    <span>{vault.performanceFee ? `${parseInt(vault.performanceFee)/10}%` : `4.5%`}</span>
                </FeeSingleInfo>
            </FeeInfoSection>
            <div>
               {depositSettings.isNeedApproval ?
                    (
                        <ButtonMainAction onClick={handleApproval}>approva</ButtonMainAction>
                    )
                    :
                    (
                        <ButtonMainAction title={!vault.zapEstimate && eligibleTokens.length>1 ? 'attempt estimate...' : 'deposit now'} onClick={handleDepositAmount} disabled={!vault.zapEstimate && eligibleTokens.length>1}>{t('Vault-DepositButton')}</ButtonMainAction>
                    )

               }
             
            </div>
        </Container>
    )
}

export default DepositSection
