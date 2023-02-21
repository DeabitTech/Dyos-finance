import styled from 'styled-components';

export const ButtonMainAction = styled.div`
    margin-top:4%;
    cursor: pointer;
    width:100%;
    height: 51.92px;
    background-color:${({bgColor})=>bgColor?bgColor:'#8EFBF2'};
    border-top-left-radius: 1rem 0.3rem;
    border-top-right-radius:  1rem 0.3rem;
    border-bottom-left-radius:  1rem 0.3rem;
    border-bottom-right-radius: 1rem 0.3rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family:'PoppinsBold';
    font-size: 20px;
    line-height: 51.92px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.115em;

    color: #141E46;

    @media screen and (max-width:1366px){
        height: 45px;
        font-size: 18px;
        line-height: 45px;
    }
    @media screen and (max-width:900px){
        height: 35px;
        font-size: 16px;
        line-height: 35px;
    }
    @media screen and (max-width:450px){
        height: 30px;
        font-size: 14px;
        line-height: 30px;
    }
    @media screen and (max-width:400px){
        height: 30px;
        font-size: 14px;
        line-height: 30px;
    }
    @media screen and (max-width:390px){
        height: 30px;
        font-size: 14px;
        line-height: 30px;
    }

`; 