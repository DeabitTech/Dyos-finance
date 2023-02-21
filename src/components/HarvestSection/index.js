import { useSnackbar } from 'notistack';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useConnectWallet } from '../../features/redux/home/hooks';
import { useGetHarvest } from '../../features/redux/vault/hooks';
import { ButtonMainAction } from './style';


const HarvestSection = ({vault,index}) => {
    const {t} = useTranslation();
    const {enqueueSnakbar} = useSnackbar()
    const [showHarvest,setShowHarvest] = useState(false);
    const {web3,address} = useConnectWallet();
    const {getHarvest,getHarvestPending} = useGetHarvest();

    const onHarvest = () => {
        getHarvest({
            address,
            web3,
            contractAddress: vault.earnContractAddress,
            index
        })
        .then(() => {
            enqueueSnakbar(t('Vault-HarverstSuccess'),{variant:'success'});
        })
        .catch(error => {
            enqueueSnakbar(t('Vault-HarverstError',{error}),{variant:'success'});
        })
        setShowHarvest(false);
    };

    return (
        <div>
            <ButtonMainAction onClick={() => onHarvest()}>Harvest</ButtonMainAction>   
        </div>
    )
}

export default HarvestSection
