import React, { useState, useMemo, useEffect } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import BigNumber from 'bignumber.js';
import { useTranslation } from 'react-i18next';
import {
    byDecimals,
    convertAmountToRawNumber,
    convertAmountFromRawNumber,
  } from '../../features/helpers/decimalHelper';
import {
    useFetchWithdraw,
    useGetBalances,
    useGetApproval,
    useGetZapEstimate,
   
} from '../../features/redux/vault/hooks';
import {useConnectWallet} from '../../features/redux/home/hooks';
import { getNetworkCoin } from '../../features/helpers/getNetworkData';
import { Container, WithForm, WithTitle,CheckboxGroup,StyledCheckboxContainer,StyledCheckboxLabel,HiddenCheckbox,InputValueContainer, ButtonMainAction } from './style';
import { useSnackbar } from 'notistack';
const nativeCoin = getNetworkCoin();

const WithdrawSection = ({ vault, index, sharesBalance }) => {
    const {t} = useTranslation();
    const {enqueueSnackbar} = useSnackbar();
    const { web3, address } = useConnectWallet();
    const { getApproval, getApprovalPending } = useGetApproval();
    const {
        fetchWithdraw,
        fetchWithdrawBnb,
        fetchZapWithdrawAndRemoveLiquidity,
        fetchZapWithdrawAndSwap,
        fetchWithdrawPending,
      } = useFetchWithdraw();
    const { getZapWithdrawEstimate, getZapEstimatePending } = useGetZapEstimate();
    const { tokens, getBalances,getPairReverves } = useGetBalances();
    const sharesDecimals = vault.tokenDecimals;
    const sharesByDecimals = byDecimals(sharesBalance, sharesDecimals);
    const underliyngBalance = sharesByDecimals
        .multipliedBy(vault.pricePerFullShare)
        .decimalPlaces(vault.tokenDecimals, BigNumber.ROUND_DOWN);
    
    const withdrawOutputs = useMemo(() => {
            const outputs = [
              {
                name: vault.name,
                symbol: vault.token,
                address: vault.tokenAddress,
                decimals: vault.tokenDecimals,
              },
            ];
        
            if (vault.zap) {
              const pairTokens = vault.zap.tokens.filter(t => t.symbol !== nativeCoin.wrappedSymbol);
              if (pairTokens.length) {
                outputs.push(
                  {
                    symbol: vault.assets.join('+'),
                  },
                  ...pairTokens
                );
              }
            }
        
            return outputs;
          }, [vault.assets, vault.name, vault.token, vault.tokenAddress, vault.tokenDecimals, vault.zap]);

    const [withdrawSettings, setWithdrawSettings] = useState({
            isZap: false,
            isSwap: false,
            swapInput: undefined,
            swapOutput: undefined,
            outputIndex: 0,
            amount: new BigNumber(0),
            slider: 0,
            input: '0.0',
            vaultAddress: vault.earnContractAddress,
            withdrawAddress: vault.earnContractAddress,
            isNeedApproval: false,
            slippageTolerance: 0.01,
            swapAmountOut: vault.zapWithdrawEstimate?.swapAmountOut,
          });  

    useDeepCompareEffect(() => {
    if (fetchWithdrawPending[index]) return;
    //if (getZapEstimatePending[vault.tokenAddress]) return;
    if (vault.zap) {
        getPairReverves({ web3, pairToken: tokens[vault.token] });
    }
    }, [vault, new Date().getMinutes()]);

    useDeepCompareEffect(() => {
        if (fetchWithdrawPending[index]) return;
       // if (getZapEstimatePending[vault.tokenAddress]) return;
        if (vault.zap && withdrawSettings.isSwap) {
            getZapWithdrawEstimate({
            web3,
            vaultAddress: vault.earnContractAddress,
            routerAddress: vault.zap.ammRouter,
            swapInput: withdrawSettings.swapInput,
            swapOutput: withdrawSettings.swapOutput,
            pairToken: tokens[vault.token],
            pairTokenAmount: convertAmountToRawNumber(
              withdrawSettings.amount,
              tokens[vault.token].decimals
            ),
          });
        }
    }, [tokens[vault.token].reserves, withdrawSettings.amount, withdrawSettings.outputIndex]);

    const handleSliderChange = event => {
       
        let sliderInt = Number(event.target.value); 
        handleSliderChangeCommitted(sliderInt)
    }

    const handleSliderChangeCommitted = (sliderInt) => {
        let amount = new BigNumber(0);
        let input = new BigNumber(0);
        if(sliderInt > 0 && sliderInt <99) {
            amount = underliyngBalance.times(sliderInt).div(100).decimalPlaces(vault.tokenDecimals,BigNumber.ROUND_DOWN);
            input = amount.decimalPlaces(8,BigNumber.ROUND_DOWN).toFormat();
        }
        if(sliderInt >= 99) {
            amount = underliyngBalance;
            sliderInt = 100;
            input = amount.toFormat();
        }
        setWithdrawSettings(prevState => ({
          ...prevState,
          amount: amount,
          slider: sliderInt,
          input: input,
        }));
    }

    const handleMax = (e) => {
        e.preventDefault()
        handleSliderChangeCommitted(100);
    }

    const handleInputAmountChange = event => {
        const input = event.target.value.replace(/[,]+/, '').replace(/[^0-9.]+/, '');
        let amount = new BigNumber(input);

        if (amount.isNaN()) amount = new BigNumber(0);
        if (amount.isGreaterThan(underliyngBalance)) amount = underliyngBalance;
    
        const sliderInt = underliyngBalance.isZero()
          ? 0
          : amount.times(100).dividedToIntegerBy(underliyngBalance).toNumber();
    
        setWithdrawSettings(prevState => ({
          ...prevState,
          amount: amount,
          slider: sliderInt,
          input: amount.isEqualTo(input) ? input : amount.toFormat(),
        }));
    }

    useEffect(() => {
        const allowance = new BigNumber(
          tokens[vault.earnedToken].allowance[withdrawSettings.withdrawAddress]
        );
        setWithdrawSettings(prevState => ({
          ...prevState,
          isNeedApproval: prevState.isZap && allowance.isZero(),
        }));
    }, [vault.earnedToken, tokens, withdrawSettings.withdrawAddress]);

    const handleTokenChange = event => {
        const outputIndex = event.target.value;
        const isZap = outputIndex > 0;
        const isSwap = outputIndex > 1;
        const spender = isZap ? vault.zap.zapAddress : vault.earnContractAddress;
        const swapInput = isSwap ? withdrawOutputs[outputIndex === 2 ? 3 : 2] : undefined;
        const swapOutput = isSwap ? withdrawOutputs[outputIndex] : undefined;
        const allowance = new BigNumber(tokens[vault.earnedToken].allowance[spender]);
    
        setWithdrawSettings(prevState => ({
          ...prevState,
          outputIndex,
          isZap,
          isSwap,
          swapInput,
          swapOutput,
          withdrawAddress: spender,
          isNeedApproval: isZap && allowance.isZero(),
        }));
      };

    const handleApproval = (e) => {
      e.preventDefault();

        getApproval({
          address,
          web3,
          tokenAddress: vault.earnedTokenAddress,
          contractAddress: vault.zap.zapAddress,
          tokenSymbol: vault.earnedToken,
        })
          .then(() => enqueueSnackbar(t('Vault-ApprovalSuccess'),{variant:'success'}))
          .catch(error => enqueueSnackbar(t('Vault-ApprovalError',{error}),{variant:'error'}));
    };


    const withdraw = (sharesAmount, isAll= false) => {
      if(withdrawSettings.isZap){
        if(withdrawSettings.isSwap) {
          const swapAmountOut = vault.swapEstimate.amountOut;
          const swapAmountOutMin = new BigNumber(swapAmountOut - swapAmountOut * withdrawSettings.slippageTolerance);
          const zapWithdrawArgs = {
            address,
            web3,
            vaultAddress: vault.earnContractAddress,
            amount: sharesAmount,
            zapAddress: vault.zap.zapAddress,
            tokenOut: withdrawSettings.swapOutput.address,
            amountOutMin: swapAmountOutMin.toFixed(0),
          };
          fetchZapWithdrawAndSwap(zapWithdrawArgs)
            .then(() => {
              getBalances({ address, web3, tokens });
              enqueueSnackbar(t('Vault-WithdrawSuccess'),{variant:'success'});
            })
            .catch(error => {enqueueSnackbar(t('Vault-WithdrawError',{error}),{variant:'error'})});
        } else {
          const zapWithdrawArgs = {
            address,
            web3,
            vaultAddress: vault.earnContractAddress,
            amount: sharesAmount,
            zapAddress: vault.zap.zapAddress,
          };
          fetchZapWithdrawAndRemoveLiquidity(zapWithdrawArgs)
            .then(() => {
              getBalances({ address, web3, tokens });
              enqueueSnackbar(t('Vault-WithdrawSuccess'),{variant:'success'});
            })
            .catch(error =>enqueueSnackbar(t('Vault-WithdrawError',{error}),{variant:'error'}));
        }
      } else {
        const vaultWithdrawArgs = {
          address,
          web3,
          isAll,
          amount: sharesAmount,
          contractAddress: vault.earnContractAddress,
          index,
        };
        if (vault.tokenAddress) {
          fetchWithdraw(vaultWithdrawArgs)
            .then(() => {
              getBalances({ address, web3, tokens });
              enqueueSnackbar(t('Vault-WithdrawSuccess'),{variant:'success'});
            })
            .catch(error =>enqueueSnackbar(t('Vault-WithdrawError',{error}),{variant:'error'}));
        } else {
          fetchWithdrawBnb(vaultWithdrawArgs)
            .then(() => {
              getBalances({ address, web3, tokens });
              enqueueSnackbar(t('Vault-WithdrawSuccess'),{variant:'success'});
            })
            .catch(error =>enqueueSnackbar(t('Vault-WithdrawError',{error}),{variant:'error'}));
        }
      }
    }

    const handleWithdraw = e => {
      e.preventDefault();
      const sharesAmount = withdrawSettings.amount
        .dividedBy(vault.pricePerFullShare)
        .decimalPlaces(sharesDecimals, BigNumber.ROUND_UP);
      if (sharesAmount.times(100).dividedBy(sharesByDecimals).isGreaterThan(99)) {
        return handleWithdrawAll();
      }
      withdraw(convertAmountToRawNumber(sharesAmount, sharesDecimals));
    };
  
    const handleWithdrawAll = () => {
      const isAll = true;
      setWithdrawSettings(prevState => ({
        ...prevState,
        amount: underliyngBalance,
        input: underliyngBalance.toFormat(),
        slider: 100,
      }));
      withdraw(convertAmountToRawNumber(sharesByDecimals, sharesDecimals), isAll);
    };
  


    return (
        <Container>
           <WithForm>
                <WithTitle>Withdraw your LP or ZAP </WithTitle>
                  {vault.zap && (

                    <CheckboxGroup onChange={handleTokenChange}>
                        {
                          withdrawOutputs.map((token,i) => (
                            <StyledCheckboxContainer key={i} >
                                    <HiddenCheckbox id={token.symbol} name='token-zap' value={i} />    
                                    <StyledCheckboxLabel>{token.symbol}</StyledCheckboxLabel>
                                </StyledCheckboxContainer>   
                            ))
                        }
                    </CheckboxGroup>
                  ) 
                  }
                
                  <StyledCheckboxLabel onClick={handleMax} fontSize="16px" pointer={true}>
                    {t('Vault-Deposited')}:{' '}
                        {byDecimals(sharesBalance.multipliedBy(new BigNumber(vault.pricePerFullShare)),vault.tokenDecimals).toFormat(8)}{' '}{vault.token}
                  </StyledCheckboxLabel>
                  <InputValueContainer>
                    <input placeholder='0.00' type='number' value={withdrawSettings.input} onChange={handleInputAmountChange} />
                    <button onClick={handleMax}>Max</button>
                  </InputValueContainer>
              
                {
                  withdrawSettings.isNeedApproval ? 
                  (
                    <ButtonMainAction onClick={handleApproval}>approva</ButtonMainAction>
                  )
                  :
                  (
                    <ButtonMainAction disabled={!vault.swapEstimate && withdrawOutputs.length>1} title={!vault.swapEstimate && withdrawOutputs.length>1 ? 'attempt estimate...' : 'withdraw now'} onClick={handleWithdraw}>withdraw</ButtonMainAction>
                  )
                }
                {
                  !withdrawSettings.isSwap && 
                  (
                    <ButtonMainAction disabled={!vault.swapEstimate && withdrawOutputs.length>1} title={!vault.swapEstimate && withdrawOutputs.length>1 ? 'attempt estimate...' : 'withdraw now'} onClick={handleWithdrawAll}>withdraw All</ButtonMainAction>
                  )
                }
            </WithForm> 
        </Container>
    )
}

export default WithdrawSection
