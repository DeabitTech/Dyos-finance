import styled from 'styled-components';

export const VaultDetailsHeaderContainer = styled.div`
    padding-left: 210px;
    padding-right: 210px;
    position:relative;
    bottom:-200px;

    @media screen and (max-width:1500px) {
        padding-left: 5%;
        padding-right: unset;
        bottom: unset;
        
        
    }

`;

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
  
    @media screen and (max-width: 1500px) {
        flex-direction: column;
    } ;


`;

export const Column = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    @media screen and (max-width:1500px) {
        width: 100%;
    }
    
`;



export const VaultDetailsTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    h1{
        font-family: 'Poppins';
        margin-left: 10px;
        font-size: 30px;
        line-height: 45px;
        letter-spacing: -0.015em;
        color: #65F5E5;
    
    }
  
    @media screen and (max-width:950px) {
        h1{
            margin-left: unset;
            font-size: 22px;
            margin: unset;
        }
    }
    @media screen and (max-width:400px) {
        h1{
            margin-left: unset;
            font-size: 18px;
            margin: unset;
        }
    }
    
    
`;

export const AssetGroupImg = styled.div`
   
`;

export const AssetImg = styled.img`
    position: relative;
    margin:0;
    width:67px;
    height: 67px;
    left: ${({imgIndx})=>imgIndx < 1 ? '5px': imgIndx === 1 ? '-25px' : imgIndx > 1 ? '-55px' : 'unset'};
    @media screen and (max-width:950px) {
        width:40px;
        height: 40px;
        left: ${({imgIndx})=>imgIndx < 1 ? '18px': imgIndx === 1 ? '-2px' : imgIndx > 1 ? '-55px' : 'unset'};
    }
    @media screen and (max-width:400px) {
        width:27px;
        height: 27px;
        left: ${({imgIndx})=>imgIndx < 1 ? '18px': imgIndx === 1 ? '-25px' : imgIndx > 1 ? '-55px' : 'unset'};
    }

`;

export const VaultChaiInfoSection = styled.div`
    display:flex;
    flex-direction: row;
    
    div:first-child{
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.085em;
        color: #6483B4;
        text-transform: uppercase;
        @media screen and (max-width:800px) {
            font-size: 11px;
        }
        @media screen and (max-width:400px) {
            font-size: 9px;
        }
        
    }

    div:last-child {
        margin-left: 15px;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.085em;
        color: #F5F5F5;
        text-transform: uppercase;
        margin-left: 5px;
        @media screen and (max-width:800px) {
            font-size: 11px;
        }
        @media screen and (max-width:400px) {
            font-size: 9px;
            margin-left: 5px;
        }
    }
`;

export const VaultPlatformInfoSection = styled.div`
    display: flex;
    flex-direction: row;
    div:first-child{
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.085em;
        color: #6483B4;
        text-transform: uppercase;
        @media screen and (max-width:800px) {
            font-size: 11px;
        }
        @media screen and (max-width:400px) {
            font-size: 9px;
        }
        
    }

    div:last-child {
        margin-left: 15px;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.085em;
        color: #F5F5F5;
        text-transform: uppercase;
        margin-left: 5px;
        @media screen and (max-width:800px) {
            font-size: 11px;
        }
        @media screen and (max-width:400px) {
            font-size: 9px;
            margin-left: 5px;
        }
    }
   


`;

export const VaultInfoSection = styled.div`
    display: flex;
    flex-direction: row;
    width: 40%;
    justify-content: space-between;

    @media screen and (max-width:1500px) {
        width: 50%;
        
    }
`;

export const StatsBlock = styled.div`
    display: flex;
    flex-direction: column;
   

`;


export const StatsTitle = styled.h2`
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.025em;
    color: #475FF2;
    margin-right:30px;
    margin-top: unset;
    text-transform: uppercase;
    @media screen and (max-width: 1500px) {
        font-size: 15px;
    } 
`;

export const StatsValue = styled.h2`
    font-family:'Roboto';
    font-weight: 500;
    font-size: 26px;
    line-height: 32px;
    letter-spacing: 0.025em;
    color: #FFFFFF;
    margin-top: unset;
    text-align: left;
    @media screen and (max-width: 1500px) {
        font-size: 16px;
        
    }
`;

export const ColumnStats = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (max-width: 1500px) {
        margin-top: 4%;
       
    };
`;

export const ButtonRiskContainer = styled.div`
    display:flex;
    flex-direction:row;

    justify-content:flex-end;
    margin-bottom:2.5%;
    @media screen and (max-width:1367px){
        margin-bottom:1%;
        margin-right:5%;
    }
    @media screen and (max-width:900px){
        margin-bottom:1%;
        margin-right:5%;
    }
    @media screen and (max-width:400px){
        margin-bottom:1%;
        margin-right:5%;
    }
    @media screen and (max-width:390px){
        margin-bottom:1%;
        margin-right:5%;
    }
`;

export const ButtonRisk = styled.div`
    margin-left:2%;
  
    height:24px;
    background-color:#6582B3;
    border-radius:4px;
    font-size: 12px;
    font-weight: 500;
    color:white;
    letter-spacing: 0.055em;
    line-height:24px;
    padding-left:1%;
    padding-right:1%;
    @media screen and (max-width:1367px){
        font-size:11px;
    }
    @media screen and (max-width:900px){
        font-size:11px;
    }
    @media screen and (max-width:400px){
        font-size:11px;
    }
    @media screen and (max-width:390px){
        font-size:9px;
    }
`;

