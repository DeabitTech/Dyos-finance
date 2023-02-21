import styled from "styled-components";

export const Container = styled.div`
 

`;

export const DepositForm = styled.form`
    display: flex;
    flex-direction: column;
    

`;

export const DepositTitle = styled.h1`
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.02em;
    color: #65F5E5;
    text-align: center;
    margin-top: 5%;

    @media screen and (max-width:1367px){
        font-size: 18px;
    }
    @media screen and (max-width:900px){
        font-size: 16px;
    }
    @media screen and (max-width:450px){
        font-size: 14px;
    }
    @media screen and (max-width:400px){
        font-size: 14px;
    }
    @media screen and (max-width:390px){
        font-size: 14px;
    }
`;


export const CheckboxGroup = styled.div`
    all:unset;
    display: flex;
    width: 100%;
    align-items:flex-start;
    flex-direction: column;
`;

export const StyledCheckboxContainer = styled.label`
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
  
`;

export const HiddenCheckbox = styled.input.attrs({type:'radio'})`
    all:unset;
    border: 3px solid #FFFFFF;
    border-radius:50%;
    accent-color:#FFFFFF;
    width: 14.8px;
    height: 14.8px;
    white-space: nowrap;
    &:checked{
        background-color: #FFFFFF;
    }

    @media screen and (max-width:1500px){
        width: 11px;
        height: 11px;
        border: 2px solid #FFFFFF;

    }
    @media screen and (max-width:900px){
        width: 11px;
        height: 11px;
        border: 2px solid #FFFFFF;
    }
    @media screen and (max-width:450px){
        width: 9px;
        height: 9px;
        border: 2px solid #FFFFFF;
    }
    @media screen and (max-width:400px){
        width: 9px;
        height: 9px;
        border: 2px solid #FFFFFF;
    }
    @media screen and (max-width:390px){
        width: 9px;
        height: 9px;
        border: 2px solid #FFFFFF;
    }
`;

export const StyledCheckboxLabel = styled.span`
    all:unset;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.035em;
    color: #6483B4;
    margin-left: 10px;

    @media screen and (max-width:1500px){
        font-size:16px;
    }
    @media screen and (max-width:900px){
        font-size:16px;
    }
    @media screen and (max-width:450px){
        font-size:16px;
    }
    @media screen and (max-width:400px){
        font-size:16px;
    }
    @media screen and (max-width:390px){
        font-size:16px;
    }
`;

export const AmmButtonContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 4%;
    button{
        all:unset;
        cursor:pointer;
        width: 183.45px;
        height: 37.38px;
        background: #6582B3;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0.025em;
        color: #F5F5F5;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        &:hover{
            background-color: #65F5E5;
            color:#141E46;
        }
        @media screen and (max-width:1367px){
            width: 145px;
            height: 35px;
            font-size: 15px;
            line-height: 35px;
        }
        @media screen and (max-width:900px){
            width: 125px;
            height: 25px;
            font-size: 13px;
            line-height: 25px;
        }
        @media screen and (max-width:450px){
            width: 115px;
            height: 25px;
            font-size: 12px;
            line-height: 25px;
        }

        @media screen and (max-width:400px){
            width: 115px;
            height: 25px;
            font-size: 12px;
            line-height: 25px;
        }

        @media screen and (max-width:390px){
            width: 115px;
            height: 25px;
            font-size: 12px;
            line-height: 25px;
        }
    }

`;

export const InputValueContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:'space-between';
    align-items: center;
    background: #475FF2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 13px;
    height: 63.69px;
    margin-top: 4%;
    padding:0 14px 0 14px;
    

    
    input{
        all:unset;
        width: 80%;
        font-family: 'Roboto';
        font-size:40px;
        line-height: 47px;
        letter-spacing: -0.075em;
        color: #FFFFFF;
        text-align: left;
      
       
    }

    button{
        all:unset;
        cursor:pointer;
        width: 20%;
        height: 47px;
        border-radius: 13px;
        font-size: 30px;
        line-height: 45px;
        letter-spacing: 0.07em;
        color: #FFFFFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        &:hover{
            background-color: #141E46;

        }

     
    }
    @media screen and (max-width:1367px) {
        height: 45px;
        border-radius: 9px;

        input{
            font-size: 27px;
            line-height: 45px;
        }

        button{
            height: 36px;
            font-size: 25px;
            line-height: 36px;
        }
        
    }
    @media screen and (max-width:900px) {
        height: 40px;
        border-radius: 9px;

        input{
            font-size: 25px;
            line-height: 40px;
        }

        button{
            height: 40px;
            font-size: 25px;
            line-height: 40px;
        }
        
    }
    @media screen and (max-width:450px) {
        height: 40px;
        border-radius: 9px;

        input{
            font-size: 22px;
            line-height: 40px;
        }

        button{
            height: 35px;
            font-size: 18px;
            line-height: 35px;
        }
        
    }
    @media screen and (max-width:400px) {
        height: 40px;
        border-radius: 9px;

        input{
            font-size: 22px;
            line-height: 40px;
        }

        button{
            height: 35px;
            font-size: 18px;
            line-height: 35px;
        }
        
    }

    @media screen and (max-width:390px) {
        height: 40px;
        border-radius: 9px;

        input{
            font-size: 22px;
            line-height: 40px;
        }

        button{
            height: 35px;
            font-size: 18px;
            line-height: 35px;
        }
        
    }

`;


export const FeeInfoSection = styled.div`
    margin-top: 4%;
    padding: 30px 25px 15px 25px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    background-color: #6483B4;
    border-radius: 13px;
    height: 166px;

    @media screen and (max-width:1500px) {
        padding-top:15px;
        height: 140px;
    }
    @media screen and (max-width:900px) {
        
    }
    @media screen and (max-width:450px) {
        padding-top:5px;
        padding-left:15px;
        padding-right:15px;
        padding-bottom:5px;
    }
    @media screen and (max-width:400px) {
        padding-top:5px;
        padding-left:15px;
        padding-right:15px;
        padding-bottom:5px;
    }
    @media screen and (max-width:390px) {
        padding-top:5px;
        padding-left:15px;
        padding-right:15px;
        padding-bottom:5px;
    }
`; 

export const FeeSingleInfo = styled.div`
    display:flex;
    flex-direction: column;
    text-align: left;

    h1{
        font-size: 10px;
        line-height: 15px;
        letter-spacing: 0.115em;
        color: #141E46;
        text-transform: uppercase;
    }

    span{
        font-size: 24px;
        line-height: 28px;
        font-family:'Roboto';
        font-weight: 600;
        letter-spacing: 0.105em;
        color: #FFFFFF;
    }

    
    @media screen and (max-width:900px){
        h1{
            font-size: 9px;
        }

        span{
            font-size: 19px;
        }
    }
    @media screen and (max-width:450px){
        h1{
            width:100%;
            font-size: 8px;
        }
        
        span{
            font-size: 14px;
            line-height: 20px;
        }

    }
    @media screen and (max-width:400px){
        h1{
            width:100%;
            font-size: 8px;
        }
        
        span{
            font-size: 14px;
            line-height: 20px;
        }

    }
    @media screen and (max-width:390px){
       
        h1{
            width:100%;
            font-size: 8px;
        }
        
        span{
            font-size: 14px;
            line-height: 20px;
        }

    }



`;

export const ButtonMainAction = styled.button`
    all:unset;
    cursor: ${({disabled})=>disabled? "wait" : "pointer"};
    margin-top:4%;
    width:100%;
    height: 51.92px;
    background-color:${({bgColor,disabled})=>disabled?'#6483B4':bgColor? bgColor :'#8EFBF2'};
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
