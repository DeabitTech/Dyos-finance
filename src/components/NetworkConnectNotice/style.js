import styled from 'styled-components';

export const Container = styled.div`
  
    border-radius: 8px;
    margin-left: 210px;
    margin-right: 210px;

    @media only screen and (max-width:400px) {
        margin-left: unset;
        margin-right: unset;
        margin-top: 3%;
        margin-bottom: 3%;
        
    }
    @media only screen and (max-width:390px){
        margin-left: unset;
        margin-right: unset;
        margin-top: 3%;
        margin-bottom: 3%;
    }
    
    @media only screen and (max-width:380px){
        margin-left: unset;
        margin-right: unset;
        margin-top: 3%;
        margin-bottom: 3%;
    }
    @media only screen and (max-width:375px){
        margin-left: unset;
        margin-right: unset;
        margin-top: 3%;
        margin-bottom: 3%;
    }




`;


export const NetworkConnectionTextNotice = styled.div`
     color: #475FF2;
     font-family: 'Poppins';
     font-weight: 600;
     font-size:22px;
     text-transform: uppercase;

    @media only screen and (max-width:375px){
        font-size: 22px;
    }

    @media only screen and (max-width:380px){
        font-size: 22px;
    }

    @media only screen and (max-width:390px){
        font-size: 18px;
    }


`;

export const NetworkConnectionButtonNotice = styled.button`
    all:unset;
    background-color: #65F5E5;
    font-family: 'Poppins';
    border-radius: 8px;
    margin-left: 5%;
    padding:0 1% 0 1%;
    height: 35px;
    font-size: 18px;
    color: #475FF2;
    text-transform: uppercase;
    cursor:pointer;

    @media only screen and (min-width:375px){
        font-size: 22px;
    }

    @media only screen and (min-width:380px){
        font-size: 22px;
    }

    @media only screen and (min-width:390px){
        font-size: 18px;
        font-weight: 800;
        margin-left: unset;
    }


`;