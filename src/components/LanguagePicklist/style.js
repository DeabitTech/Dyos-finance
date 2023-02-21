import styled from "styled-components";

export const TabPicklist = styled.ul`
    position: absolute;
    z-index: 3;
    margin-top: 0.5%;
    background-color:#141E40;
    padding: 0;
    width: 116px;
    height: auto;
    border-radius: 9px;
    color: #6483B4;
    text-align:center;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    li:first-child {
        border-top-left-radius: 9px;
        border-top-right-radius: 9px;
    }
    li:last-child {
        border-bottom-left-radius: 9px;
        border-bottom-right-radius: 9px;
    }

    @media screen and (max-width:1500px){
        width:160px;
        font-size:20px;
    }
    @media screen and (max-width:900px) {
        width:160px;
        font-size:20px;

    }
    @media only screen and (max-width:450px) {
        width: 116px;
        font-size:18px;
    }
    @media only screen and (max-width:400px) {
        width: 116px;
        font-size:18px;
    }

    @media only screen and (max-width:390px){
        width: 116px;
        font-size:18px;
    }
    
    @media only screen and (max-width:380px){
        width: 116px;
        font-size:18px;
    }

    @media only screen and (max-width:375px){
        width: 100px;
        font-size:18px;
    }
`;

export const OptionPicklist = styled.li`
    cursor: pointer;
    list-style: none;
    color: #6483B4;
    
    &:hover {
        background-color: #6483B4;
        color: #141E40;
    }
    
`;

export const TabPicklistSelected = styled.div`
    width: 116px;
    height: 40px;
    cursor: pointer;
    background-color:#141E46;
    border-radius: 9px;
    color: #6483B4;
    text-align:center;
    font-weight: 500;
    font-size: 18px;
    line-height: 40px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media screen and (max-width:1500px){
        width:160px;
        height:50px;
        font-size:20px;
        line-height:50px;
    }
    @media screen and (max-width:900px) {
        width:160px;
        height:50px;
        font-size:20px;
        line-height:50px;
    }
    @media only screen and (max-width:450px) {
        width: 116px;
        height:40px;
        line-height:40px;
        font-size:18px;
    }
    @media only screen and (max-width:400px) {
        width: 116px;
        height:40px;
        line-height:40px;
        font-size:18px;
    }

    @media only screen and (max-width:390px){
        width: 116px;
        font-size:18px;
    }
    
    @media only screen and (max-width:380px){
        width: 116px;
        height:40px;
        line-height:40px;
        font-size:18px;
    }

    @media only screen and (max-width:375px){
        width: 100px;
        height:35px;
        line-height:35px;
        font-size:16px;
    }

`;