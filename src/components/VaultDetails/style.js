import styled from 'styled-components';
import BackgroundModal from '../../features/config/assets/back.svg';
export const Container = styled.div`
    padding-left: 210px;
    padding-right: 210px;
    padding-bottom:3%;
    @media screen and (max-width:1567px) {
        padding-left: 2%;
        padding-right: 2%;
    }
    @media screen and (max-width:1367px) {
        padding-left: 2%;
        padding-right: 2%;
    }
    @media screen and (max-width:950px) {
       
       padding-left: 1%;
       padding-right: 3%;
       
   }
    @media screen and (max-width:900px) {
       
        padding-left: 1%;
        padding-right: 3%;
        
    }
    @media screen and (max-width:450px) {
        padding-left: 5%;
        padding-right: 5%;
        
        
    }
    @media screen and (max-width:400px) {
        padding-left: 5%;
        padding-right: 5%;
        
        
    }
    @media screen and (max-width:390px) {
        padding-left: 5%;
        padding-right: 5%;
        
        
    }

`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 60% 1fr;
    
    @media screen and (max-width:950px) {
        grid-template-columns: 58% 1fr;
        gap:1rem;
        
        
    }

    @media screen and (max-width:900px) {
        grid-template-columns: 58% 1fr;
        gap:1rem;
        
        
    }
    @media screen and (max-width:450px){
        grid-template-columns:1fr;
    }
    @media screen and (max-width:400px){
        grid-template-columns:1fr;
    }
    @media screen and (max-width:390px){
        grid-template-columns:1fr;
    }


`;

export const VaultInfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
   

    @media screen and (max-width:450px){
        order:2;
    }
    @media screen and (max-width:400px){
        order:2;
    }
    @media screen and (max-width:390px){
        order:2;
    }
    
`;

export const VaultActionsColumn = styled.div`
     display: flex;
    flex-direction: column;
    align-items: center;
    
   
    @media screen and (max-width:450px) {
        order: 1;
    }
    @media screen and (max-width:400px) {
        order: 1;
    }
    @media screen and (max-width:390px) {
        order: 1;
    }


`;

export const VaultInfoCard = styled.div`
    width: 880px;
    padding-bottom: 5%;
    margin-top: 2%;
    background: #141E46;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 45px;
    @media screen and (max-width:1566px) {
        width: auto;
        border-radius: 40px;
    }

    @media screen and (max-width:1366px) {
        width: auto;
        border-radius: 20px;
    }
    
    @media screen and (max-width:900px) {
        width: auto;
        border-radius: 20px;
    }


`;

export const VaultUpperSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding:1% 5% 0 5%;

   
`;


export const VaultInfoName = styled.h1`
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-transform: uppercase;
    letter-spacing: 0.055em;
    color: #6483B4;
    transform: matrix(1, -0.01, 0.01, 1, 0, 0);
    text-align: left;
    @media screen and (max-width:1367px){
        font-size:17px;
    }
    @media screen and (max-width:900px) {
        font-size: 12px;
        
    }
   
`;

export const ButtonSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  
`;

export const ButtonLink = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 150px;
    height: 33px;
    background: #6483B4;
    border-top-left-radius: 1rem 0.3rem;
    border-top-right-radius:  1rem 0.3rem;
    border-bottom-left-radius:  1rem 0.3rem;
    border-bottom-right-radius: 1rem 0.3rem;
    margin-left: 15px;
    cursor: pointer;
    
    h1{
        font-style: italic;
        font-weight: 500;
        font-size: 10px;
        letter-spacing: 0.04em;
        text-align: left;
        color: #F5F5F5;
        margin-left: 5%;
    }

    img{
        width: 15px;
        height: 15.88px;
    }
   
    @media screen and (max-width:450px) {
        width: 80px;

        h1{
            font-size:8px;
        }

        img{
            width: 10px;
            height: 10px;
        }
    }
    @media screen and (max-width:400px) {
        width: 80px;

        h1{
            font-size:8px;
        }

        img{
            width: 10px;
            height: 10px;
        }
    }

    @media screen and (max-width:390px) {
        width: 100px;

        h1{
            font-size:8px;
        }

        img{
            width: 10px;
            height: 10px;
        }
    }


`;


export const VaultInfoDescriptionSection = styled.div`
    display: flex;
    flex-direction: column;
    padding:1% 5% 0 5%;

    h1{
        font-weight: 500;
        font-size: 30px;
        line-height: 45px;
        display: flex;
        align-items: flex-end;
        letter-spacing: 0.02em;
        color: #FFFFFF;
        text-transform: uppercase;
    }

    div{
        text-align: left;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.035em;
        color: #65F5E5;
    }
    @media screen and (max-width:1367px) {
        h1{
            font-size:25px;
        }
        div{
            font-size: 15px;
        }
        
    }
    @media screen and (max-width:900px) {
        h1{
            font-size:16px;
        }
        div{
            font-size: 14px;
        }
        
    }

`;


export const VaultDepositInfoSection = styled.div`
    margin-top: 3%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
    width: 470px;
    height: 110;
    background: #141E46;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-top-left-radius: 1.5rem 0.8rem;
    border-top-right-radius:  1.5rem 0.8rem;
    border-bottom-left-radius:   1.5rem 0.8rem;
    border-bottom-right-radius:  1.5rem 0.8rem;
    
    @media screen and (max-width:1366px){
        width:90%;
        padding-left:unset;
        padding-right:unset;
        justify-content: space-around;
    }
    @media screen and (max-width:900px){
        width:100%;
        padding-left:unset;
        padding-right:unset;
        justify-content: space-around;
    }
    @media screen and (max-width:450px) {
        width: 100%;
        padding-left:unset;
        padding-right:unset;
        justify-content: space-evenly;
        
    }
    @media screen and (max-width:400px) {
        width: 100%;
        padding-left:unset;
        padding-right:unset;
        justify-content: space-evenly;
        
    }

    @media screen and (max-width:390px) {
        width: 100%;
        padding-left:unset;
        padding-right:unset;
        justify-content: space-evenly;
        
    }

`;

export const DepositInfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        font-weight: 500;
        font-size: 15px;
        line-height: 22px;
        letter-spacing: 0.055em;
        color: #6483B4;
        text-transform: uppercase;
    }

    h2{
        font-family: 'Roboto';
        font-weight: 500;
        font-size: 22px;
        line-height: 26px;
        text-align: left;
        letter-spacing: 0.055em;
        color: #F5F5F5;
        margin-top: unset;
    }

    @media screen and (max-width:1366px) {
        h1{
            font-size: 12px;
        }

        h2{
            font-size: 15px ;
        }
        
    }
    @media screen and (max-width:450px){
        padding:0 3% 0 3%;
        h1{
            font-size: 12px;
        }

        h2{
            font-size: 15px ;
        }
    }
    @media screen and (max-width:400px){
        padding:0 3% 0 3%;
        h1{
            font-size: 12px;
        }

        h2{
            font-size: 15px ;
        }
    }

    @media screen and (max-width:390px){
        padding:0 3% 0 3%;
        h1{
            font-size: 12px;
        }

        h2{
            font-size: 15px ;
        }
    }
`;


export const ModalCard = styled.div`
    margin-top:3%;
    background-color:#141E46;
    width:469px;
    height:790px;
    border-radius: 1rem 1rem 1rem 1rem / 4rem;

    @media screen and (max-width:1500px) {
        width: 469px;
        
    }
    @media screen and (max-width:1367px) {
        width: 410px;
        
    }
    @media screen and (max-width:1100px){
        width:100%;
    }
    @media screen and (max-width:900px){
        width:100%;
    }
    @media screen and (max-width:450px){
        width: 300px;
        height:550px;
    }
    @media screen and (max-width:400px){
        width: 300px;
        height:550px;
    }
    @media screen and (max-width:390px){
        width: 300px;
        height:550px;
    }
 
`;

export const ModalBody = styled.div`
    margin: 20px 42px 0 42px;
    padding-bottom: 5%;

    @media screen and (max-width:1500px) {
        width: auto;
        
    }
    @media screen and (max-width:900px){
        width:auto;
    }
    @media screen and (max-width:450px){
        margin: 20px 32px 0 32px;
    }
    @media screen and (max-width:400px){
        margin: 20px 32px 0 32px;
    }
    @media screen and (max-width:390px){
        margin: 20px 32px 0 32px;
    }
    

`;

export const Tabs = styled.div`
    position: relative;
    width:469px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 76.8px;
    //margin: 0 0 60px 0;
    top: 0;
    
    div:nth-child(1){
        cursor: pointer;
        text-align: center;
        width: 50%;
        font-weight: 500;
        font-size: 20px;
        line-height: 76.8px;
        letter-spacing: 0.045em;
        
        border-top-left-radius:1rem 4rem;
        text-transform: uppercase;
        background-color: ${({isDep})=>isDep? '#65F5E5' : 'unset'};
        color: ${({isDep})=>isDep? '#141E46' : '#6483B4'};
        &:hover{
            color: #141E46;
            background: #65F5E5;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
    };
    div:nth-child(2){
        cursor: pointer;
        text-align: center;
        width: 50%;
        font-weight: 500;
        font-size: 20px;
        line-height: 76.8px;
        border-top-right-radius:1rem 4rem;
        letter-spacing: 0.045em;
        
        text-transform: uppercase;
        background-color: ${({isWith})=>isWith? '#65F5E5' : 'unset'};
        color: ${({isWith})=>isWith? '#141E46' : '#6483B4'};
        &:hover{
            color: #141E46;
            background: #65F5E5;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
    };

    @media screen and (max-width:1500px) {
        width: 100%;
        
    }
    @media screen and (max-width:900px) {
        width: 100%;
        
    }
    @media screen and (max-width:450px) {
        height:50px;
        div:nth-child(1){
            font-size: 15px;
            line-height: 50px;

          
        };
        div:nth-child(2){
            font-size: 15px;
            line-height: 50px;
            
        };
        
    }
    @media screen and (max-width:400px) {
        height:50px;
        div:nth-child(1){
            font-size: 15px;
            line-height: 50px;

          
        };
        div:nth-child(2){
            font-size: 15px;
            line-height: 50px;
            
        };
        
    }
    @media screen and (max-width:390px) {
        height:50px;
        div:nth-child(1){
            font-size: 15px;
            line-height: 50px;

          
        };
        div:nth-child(2){
            font-size: 15px;
            line-height: 50px;
            
        };
        
    }
  

`;

export const ButtonDetailsAction = styled.div`
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
    color:#FFFFFF;

    @media screen and (max-width:1500px){
        height: 35px;
        font-size: 16px;
        line-height: 35px;
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
