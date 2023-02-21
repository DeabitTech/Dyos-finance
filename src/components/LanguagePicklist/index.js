import React, { useState,useEffect } from 'react';
import { OptionPicklist, TabPicklist, TabPicklistSelected } from './style';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import {supportedLanguages} from '../../i18n';
import { useTranslation } from 'react-i18next';


const getSelectedLanguage = i18n => {
    const cachedLanguage = i18n.language;

    if(cachedLanguage in supportedLanguages) {
        return cachedLanguage;
    }
    const languageCode = cachedLanguage.split('-')[0].toLowerCase();
    if(languageCode in supportedLanguages) {
        return languageCode
    }
    return 'en';
}

const LanguagePicklist = () => {
    const [isOpen,setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const { i18n } = useTranslation();
    const i18nLanguage = getSelectedLanguage(i18n);
    const [selectedLanguage, setLanguage] = useState(i18nLanguage);
    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        i18n.changeLanguage(value);
        setSelectedOption(value);
        setIsOpen(false);
    };

    useEffect(() => {
        setLanguage(i18nLanguage);
      }, [i18nLanguage]);


    return (
    <div>
        <TabPicklistSelected onClick={toggling} >
            <div>{selectedLanguage.toUpperCase()}</div> 
            {isOpen ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}
        </TabPicklistSelected>
        {isOpen &&
            <TabPicklist>
                {Object.entries(supportedLanguages).map(([code, label]) => (<OptionPicklist key={code} value={code} onClick={onOptionClicked(code)}>{label}</OptionPicklist>))}
               
            
            </TabPicklist>
        }

    </div>
    )
}

export default LanguagePicklist