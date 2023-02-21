import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 60px;
    padding-left: 210px;
    padding-right: 210px;
    @media screen and (max-width: 1500px) {
        margin-left: 5%;
        padding-left: unset;
        padding-right: unset;
    }
    @media screen and (max-width:900px) {
        margin-left: 5%;
        padding-left: unset;
        padding-right: unset;
    }
    @media only screen and (max-width:400px) {
        margin-left: 5%;
        padding-left: unset;
        padding-right: unset;
    }

    @media only screen and (max-width:390px){
        margin-left: 5%;
        padding-left: unset;
        padding-right: unset;
    }
    
    @media only screen and (max-width:380px){
        margin-left: 5%;
        padding-left: unset;
        padding-right: unset;
    }

    @media only screen and (max-width:375px){
        margin-left: 5%;
        padding-left: unset;
        padding-right: unset;
    }
    @media only screen and (max-width:365px){
        margin-left: 5%;
        padding-left: unset;
        padding-right: unset;
    }

`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width:1500px) {
        flex-direction: column;
    }
    @media screen and (max-width:900px) {
        flex-direction: column;
    }
    @media only screen and (max-width:400px) {
        flex-direction: column;
    }

    @media only screen and (max-width:390px){
        flex-direction: column;
    }
    
    @media only screen and (max-width:380px){
        flex-direction: column;
    }
    @media only screen and (max-width:375px){
        flex-direction: column;
    }
   


`;

export const Column = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    @media screen and (max-width:1500px) {
        width: unset;   
    }
    @media screen and (max-width:900px) {
        width: unset;
    }
    @media only screen and (max-width:400px) {
        width: unset;
    }

    @media only screen and (max-width:390px){
        width: unset;
    }
    
    @media only screen and (max-width:380px){
        width: unset;
    }
    @media only screen and (max-width:375px){
        width: unset;
    }
    
    
`;

export const ColumnTitle = styled.h1`
    font-family: 'RobotoBlack';
    text-align: ${({align})=> align ? align : 'left'};
    font-weight: 900;
    font-size: 54px;
    line-height: 65px;
    letter-spacing: 0.025em;
    color: #65F5E5;
    @media screen and (max-width: 1500px) {
        font-size: 40px;
        text-align: ${({align})=> align ? 'left' : 'left'};
    }
    @media only screen and (max-width:450px) {
        font-size: 30px;
        text-align: ${({align})=> align ? 'left' : 'left'};
    }
    @media only screen and (max-width:400px) {
        font-size: 30px;
        text-align: ${({align})=> align ? 'left' : 'left'};
    }

    @media only screen and (max-width:390px){
        font-size: 30px;
        text-align: ${({align})=> align ? 'left' : 'left'};
    }
    
    @media only screen and (max-width:380px){
        font-size: 30px;
        text-align: ${({align})=> align ? 'left' : 'left'};
    }
    @media only screen and (max-width:375px){
        font-size: 30px;
        text-align: ${({align})=> align ? 'left' : 'left'};
    }
    
`;

export const ColumnStats = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${({justify})=> justify ? justify : 'flex-start'};
   
    @media screen and (max-width: 1500px) {
        justify-content: unset;
        display: grid;
        grid-template-columns: ${({isPortfolio})=>isPortfolio?'1fr 1fr 1fr':'1fr 1fr 1fr'};
    };
    @media only screen and (max-width:450px) {
        justify-content: unset;
        display: grid;
        grid-template-columns: ${({isPortfolio})=>isPortfolio?'1fr 1fr 1fr':'1fr 1fr 1fr'};
    }
    @media only screen and (max-width:400px) {
        justify-content: unset;
        display: grid;
        grid-template-columns: ${({isPortfolio})=>isPortfolio?'1fr 41.6% 1fr':'1fr 1fr 35%'};
    }

    @media only screen and (max-width:390px){
        justify-content: unset;
        display: grid;
        grid-template-columns: ${({isPortfolio})=>isPortfolio?'1fr 1fr 1fr':'1fr 1fr 35%'};
    }
    
    @media only screen and (max-width:380px){
        justify-content: unset;
        display: grid;
        grid-template-columns: ${({isPortfolio})=>isPortfolio?'1fr 41.6% 1fr':'1fr 1fr 35%'};
    }
    @media only screen and (max-width:375px){
        justify-content: unset;
        display: grid;
        grid-template-columns: ${({isPortfolio})=>isPortfolio?'1fr 41.6% 1fr':'1fr 1fr 35%'};
    }
    
`;

export const StatsBlock = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${({isFirst,isLast})=> isFirst ? "0 2% 0 0" : isLast ? "0 0 0 2%" : "0 2% 0 2%"} ;
    @media screen and (max-width:1500px) {
        text-align: left; 
        padding:unset;
    }
   

`;

export const PortfolioStatsTitle = styled.h2`
    font-family: 'RobotoBlack';
    font-weight: 900;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.025em;
    color: #475FF2;
    margin-right:30px;
    margin-top: unset;
    text-transform: uppercase;
    @media only screen and (max-width:450px) {
        font-size: 12px;
    }
    @media only screen and (max-width:400px) {
        font-size: 12px;
    }

    @media only screen and (max-width:390px){
        font-size: 10.2px;
    }
    
    @media only screen and (max-width:380px){
        font-size: 11px;
    }

    @media only screen and (max-width:375px){
        font-size: 10px;
    }


`;

export const PortfolioStatsValue = styled.h2`
    font-family:'Roboto';
    font-weight: 500;
    font-size: 26px;
    line-height: 32px;
    letter-spacing: 0.025em;
    color: #FFFFFF;
    margin-top: unset;
    text-align: left;
    @media only screen and (max-width:450px){
        font-size: 16px;
    }
    @media only screen and (max-width:400px){
        font-size: 16px;
    }

    @media only screen and (max-width:390px){
        font-size: 16px;
    }

    @media only screen and (max-width:380px){
        font-size: 15px;
    }

    @media only screen and (max-width:375px){
        font-size: 14px;
    }

   
`;

export const PlatformStatsTitle = styled.h2`
    font-family: 'RobotoBlack';
    font-weight: 900;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.025em;
    color: #475FF2;
    margin-right:30px;
    margin-top: unset;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media only screen and (max-width:450px){
        font-size: 12px;
    }
    @media only screen and (max-width:400px){
        font-size: 12px;
    }

    @media only screen and (max-width:390px){
        font-size: 10.2px;
    }
    @media only screen and (max-width:380px){
        font-size: 10px;
    }
    @media only screen and (max-width:375px){
        font-size: 10px;
    }




   
`;

export const PlatformStatsValue = styled.h2`
    font-family:'Roboto';
    font-weight: 500;
    font-size: 26px;
    line-height: 32px;
    letter-spacing: 0.025em;
    color: #FFFFFF;
    margin-top: unset;
    text-align: left;
    @media only screen and (max-width:450px){
        font-size: 16px;
    }
    @media only screen and (max-width:400px){
        font-size: 16px;
    }
    @media only screen and (max-width:390px){
        font-size: 16px;
    }
    
    @media only screen and (max-width:380px){
        font-size: 15px;
    }

    @media only screen and (max-width:375px){
        font-size: 14px;
    }



    
`;