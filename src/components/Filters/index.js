import React, { useCallback,useMemo,useEffect,useState } from 'react'
import { useTranslation } from 'react-i18next'
import { assets, platforms } from './constants';
import {MobileLeftContainer,TabPicklistSelected,Container, SearchInput,SearchPlace, TabPicklist, OptionPicklist,TabFilterPicklist,FilterSortSection, TabFilterTitle, TabFilterCheckboxes, HiddenCheckbox, StyledCheckbox, StyledCheckboxLabel,StyledCheckboxContainer, PlatformPicklistFilter, PlatformListFilter, PlatformOptionFilter, ResetFilter} from './style';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import SearchIcon from '@material-ui/icons/Search';
import { useShowMobileNetworkBar } from '../../features/redux/home/showMobileNetworkBar';


const Filters = ({
    toggleFilter,
    filters,
    platform,
    vaultType,
    asset,
    order,
    searchItem,
    setPlatform,
    setVaultType,
    setAsset,
    setOrder,
    setSearchItem,
  }) => {
    const {showBar,showMobileNetworkBar} = useShowMobileNetworkBar();
    const [isOpenSort,setIsOpenSort] = useState(false);
    const [isOpenFilter,setIsOpenFilter] = useState(false);
    const [isOpenPlatformFilter,setIsOpenPlatformFilter] = useState(false);
    const [isOpenVaultTypeFilter,setIsOpenVaultTypeFilter] = useState(false);
    const [vaultTypes,] = useState(['All','Singles','StableLPs','Stables','Enterprise']);
    const [sortTypes,]= useState(['default','apy','tvl']);
    const {t} =  useTranslation();
    const handlePlatformChange = useCallback(plat =>  setPlatform(plat),[setPlatform]);
    const handleVaultTypeChange = useCallback(typ => setVaultType(typ),[setVaultType]);
    const handleAssetChange = useCallback((_event, option) => setAsset(option.value), [setAsset]);
    const handleOrderChange = useCallback(sort => {setOrder(sort);}, [setOrder]);
    const togglingSort = () => setIsOpenSort(!isOpenSort);
    const togglingFilter = () => setIsOpenFilter(!isOpenFilter);
    const togglingPlatformFilter = () => setIsOpenPlatformFilter(!isOpenPlatformFilter);
    const togglingVaultTypeFilter = () => setIsOpenVaultTypeFilter(!isOpenVaultTypeFilter);

    const allAssetOptions = useMemo(() => {
        return [
            {
            value: 'All',
            label: t('Filters-All'),
            },
            ...assets.map(asset => ({
            value: asset,
            label: asset,
            })),
        ];
    }, [t]);

    const resetFilter = useCallback(() => {
        toggleFilter('resetAll');
        setPlatform('All');
        setVaultType('All');
        setAsset('All');
        setOrder('default');
    }, [toggleFilter, setPlatform, setVaultType, setAsset, setOrder]);

    useEffect(() => {
        if ((!asset || !allAssetOptions.find(option => option.value === asset)) && asset !== 'All') {
            setAsset('All');
        }
    }, [allAssetOptions, asset, setAsset]);

    useEffect(() => {
        if ((!platform || !platforms.includes(platform)) && platform !== 'All') {
            setPlatform('All');
        }
    }, [platform, setPlatform]);


    return (
        <Container>
            <MobileLeftContainer>
                <SearchPlace>
                    <SearchInput placeholder='SEARCH' onChange={(event)=>setSearchItem(event.target.value)} value={searchItem} />
                    <SearchIcon/>
                </SearchPlace>
                <button onClick={()=>showMobileNetworkBar(showBar.showBar)}>select chain</button>
            </MobileLeftContainer>
            <FilterSortSection>
                <div>

                    <TabPicklistSelected onClick={togglingSort}>
                        {order === 'default' ? `sort by` : order}
                        {isOpenSort ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}
                    </TabPicklistSelected>
                    {isOpenSort && (
                        <TabPicklist>
                            {sortTypes.map((sortType,i)=>{
                                return <OptionPicklist onClick={()=>{handleOrderChange(sortType);togglingSort();}}  key={i}>{sortType}</OptionPicklist>
                            })}
                           
                        </TabPicklist>
                    )}
                </div>
                <div>

                    <TabPicklistSelected onClick={togglingFilter}>
                        filter
                        {isOpenFilter ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}
                    </TabPicklistSelected>
                    {isOpenFilter && (
                        <TabFilterPicklist>
                            <div>
                                <TabFilterTitle>All filters</TabFilterTitle>
                                <ResetFilter onClick={resetFilter}>Reset Filters</ResetFilter>
                            </div>
                            <TabFilterCheckboxes>
                                <StyledCheckboxContainer>
                                    <HiddenCheckbox checked={filters.hideZeroBalances} onChange={()=>toggleFilter('hideZeroBalances')}/>
                                    <StyledCheckbox checked={filters.hideZeroBalances}></StyledCheckbox>
                                    <StyledCheckboxLabel>{t('Hide-Zero-Balances')}</StyledCheckboxLabel>
                                </StyledCheckboxContainer>
                                <StyledCheckboxContainer>
                                    <HiddenCheckbox checked={!filters.hideDecomissioned} onChange={()=>toggleFilter('hideDecomissioned')}/>
                                    <StyledCheckbox checked={!filters.hideDecomissioned}></StyledCheckbox>
                                    <StyledCheckboxLabel>{t('Retired-Vaults')}</StyledCheckboxLabel>
                                </StyledCheckboxContainer>
                                <StyledCheckboxContainer>
                                    <HiddenCheckbox checked={filters.hideZeroVaultBalances} onChange={()=>toggleFilter('hideZeroVaultBalances')}/>
                                    <StyledCheckbox checked={filters.hideZeroVaultBalances}></StyledCheckbox>
                                    <StyledCheckboxLabel>{t('Hide-Zero-Vault-Balances')}</StyledCheckboxLabel>
                                </StyledCheckboxContainer>     
                            </TabFilterCheckboxes>
                            <div>
                                <PlatformPicklistFilter onClick={togglingPlatformFilter}>
                                    <div>Platform:</div> 
                                    <div>{platform}</div> 
                                    {isOpenPlatformFilter ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}
                                </PlatformPicklistFilter>
                                {isOpenPlatformFilter && (
                                    <PlatformListFilter>
                                        {platforms.map((platform,i)=>{
                                            return (
                                                <PlatformOptionFilter key={i} onClick={()=>{handlePlatformChange(platform);togglingPlatformFilter();}}>{platform}</PlatformOptionFilter>
                                            )
                                        })}
                                    </PlatformListFilter>
                                )}

                            </div>
                            <div>

                                <PlatformPicklistFilter onClick={togglingVaultTypeFilter}>
                                    <div>Vault Type:</div> 
                                    <div>{vaultType}</div> 
                                    {isOpenVaultTypeFilter ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}
                                </PlatformPicklistFilter>
                                {isOpenVaultTypeFilter && (
                                    <PlatformListFilter>
                                       {vaultTypes.map((type,i)=>{
                                        return (
                                            <PlatformOptionFilter onClick={()=>{handleVaultTypeChange(type); togglingVaultTypeFilter();}} value={type} key={i}>
                                                {type}
                                            </PlatformOptionFilter>

                                        ) 
                                        
                                    })}
                                    </PlatformListFilter>
                                )}
                            </div>
                        </TabFilterPicklist>
                    )}
                </div>
            </FilterSortSection>
        </Container>
    )
}

export default Filters