import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    font-family: 'Poppins';

`;

export const Nav = styled.nav`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding-bottom: 10px;
    padding-right: 210px;
    padding-left: 210px;
    @media screen and (max-width: 1500px) {
        padding-top: 30px;
        padding-bottom: 30px;
        flex-direction: column-reverse;
        padding-right: 5%;
        padding-left: 5%;
        justify-content: unset;
        align-items: flex-end;
    };

`;

export const TabContainer = styled.ul`
    all: unset;
    display: flex;
    justify-content: space-between;
    width: ${({width})=> width ? width : 'auto'};
    height: auto;
    align-items:center;
    @media screen and (max-width: 1500px) {
        display: ${({isWebLogo})=>isWebLogo? 'none':'flex'};
        margin-top: ${({isCenterTab})=> isCenterTab? '5%':'unset'};
        width: ${({isCenterTab})=> isCenterTab? '100%':'unset'};;
    }
`;

export const TabContainerMobile = styled.ul`
    display: none;
    @media screen and (max-width: 1500px) {
        all: unset;
        display: flex;
        justify-content: space-between;
        width: ${({width})=> width ? width : 'auto'};
        height: auto;
       
    };
`;

export const MobileView = styled.div`
    all: unset;
    display:flex;
    align-items:center;
    @media screen and (max-width: 1500px) {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;  
    }

`;

export const Tab = styled.li`
    all: unset;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #6483B4;
    @media screen and (max-width:1500px) {
        font-size: 25px;

    }
    @media screen and (max-width:900px) {
        font-size: 23px;

    }
    @media only screen and (max-width:450px) {
        font-size: 17px;
    }
    @media only screen and (max-width:400px) {
        font-size: 17px;
    }

    @media only screen and (max-width:390px){
        font-size: 17px;
    }
    
    @media only screen and (max-width:380px){
        font-size: 15px;
    }

    @media only screen and (max-width:375px){
        font-size: 15px;
    }

    
`;


