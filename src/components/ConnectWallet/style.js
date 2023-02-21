import styled from "styled-components";

export const ConnectWalletButton = styled.button`
    all: unset;
    cursor: pointer;
    font-family:'Poppins';
    font-weight: 700;
    font-size: 19px;
    line-height: 19px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    width: 252px;
    height: 52.5px;
    background-color: #8EFBF2;
    //border-radius: 3rem 3rem 3rem 3rem / 1rem 4.5rem 2rem 4.5rem;
    border-top-left-radius: 3rem 0.5rem;
    border-top-right-radius: 3rem 0.5rem;
    border-bottom-left-radius: 3rem 0.5rem;
    border-bottom-right-radius: 3rem 0.5rem;

    &:hover{
        color: #8EFBF2;
        background-color:#141E40;
    }

    @media screen and (max-width:1500px) {
        width: 220px;
        height: 45px;
        font-size: 17px;
        border-top-left-radius: 1rem 0.5rem;
        border-top-right-radius: 1rem 0.5rem;
        border-bottom-left-radius: 1rem 0.5rem;
        border-bottom-right-radius: 1rem 0.5rem;
    }
    @media screen and (max-width:900px) {
        width: 220px;
        height: 45px;
        font-size: 18px;
        border-top-left-radius: 1rem 0.5rem;
        border-top-right-radius: 1rem 0.5rem;
        border-bottom-left-radius: 1rem 0.5rem;
        border-bottom-right-radius: 1rem 0.5rem;
    }
    @media only screen and (max-width:400px) {
        width: 180px;
        height: 38px;
        font-size: 16px;
        border-top-left-radius: 1rem 0.5rem;
        border-top-right-radius: 1rem 0.5rem;
        border-bottom-left-radius: 1rem 0.5rem;
        border-bottom-right-radius: 1rem 0.5rem;
    }

    @media only screen and (max-width:390px){
        width: 180px;
        height: 38px;
        font-size: 16px;
        border-top-left-radius: 1rem 0.5rem;
        border-top-right-radius: 1rem 0.5rem;
        border-bottom-left-radius: 1rem 0.5rem;
        border-bottom-right-radius: 1rem 0.5rem;
    }
    
    @media only screen and (max-width:380px){
        width: 180px;
        height: 38px;
        font-size: 16px;
        border-top-left-radius: 1rem 0.5rem;
        border-top-right-radius: 1rem 0.5rem;
        border-bottom-left-radius: 1rem 0.5rem;
        border-bottom-right-radius: 1rem 0.5rem;
    }

    @media only screen and (max-width:375px){
        width: 180px;
        height: 38px;
        font-size: 16px;
        border-top-left-radius: 1rem 0.5rem;
        border-top-right-radius: 1rem 0.5rem;
        border-bottom-left-radius: 1rem 0.5rem;
        border-bottom-right-radius: 1rem 0.5rem;
    }

`;