import styled from "styled-components";
import BackgroundModal from '../../features/config/assets/back.svg';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    @media screen and (max-width:1500px) {
        width: auto;
        
    }
    
`;

export const Card = styled.div`
    background-color: #0E153A;
    flex-direction:column;
    align-content:center;
    border-radius:28px;
    width: 354px;
    height: 404px;
    @media only screen and (max-width:450px){
        width: 267px;
        height: auto;
    }
    @media only screen and (max-width:400px){
        width: 267px;
        height: auto;
    }
    @media only screen and (max-width:390px){
        width: 267px;
        height: auto;
    }
    @media only screen and (max-width:380px){
        width: 267px;
        height: auto;
    }
    @media only screen and (max-width:365px){
        width: 267px;
        height: auto;
    }
    
  
`;

export const AssetsGroupImg = styled.div`
    position: relative;
    bottom: 20px;
    right:150px;
    @media only screen and (max-width:900px){
        bottom: 20px;
        right:110px;
    }
    @media only screen and (max-width:450px){
        bottom: 20px;
        right:80px;
    }
    @media only screen and (max-width:400px){
        bottom: 20px;
        right:80px;
    }

    @media only screen and (max-width:390px){
        bottom: 20px;
        right:80px;
    }

    @media only screen and (max-width:380px){
        bottom: 20px;
        right:80px;
    }

    @media only screen and (max-width:365px){
        bottom: 20px;
        right:80px;
    }
    
    

    
    
    
`;

export const AssetImg = styled.img`
    position: relative;
    margin:0;
    width:60px;
    height: 60px;
    left: ${({imgIndx})=>imgIndx < 1 ? '5px': imgIndx === 1 ? '-25px' : imgIndx > 1 ? '-55px' : 'unset'};

    @media only screen and (max-width:900px){
        width: 45px;
        height: 45px;
        bottom: -10px;
        left: ${({imgIndx})=>imgIndx < 1 ? '-30px': imgIndx === 1 ? '-50px' : imgIndx > 1 ? '-65px' : 'unset'};
    }
    @media only screen and (max-width:450px){
        width: 35px;
        height: 35px;
        bottom: -10px;
        left: ${({imgIndx})=>imgIndx < 1 ? '-30px': imgIndx === 1 ? '-44px' : imgIndx > 1 ? '-65px' : 'unset'};
    }
    @media only screen and (max-width:400px){
        width: 35px;
        height: 35px;
        bottom: -10px;
        left: ${({imgIndx})=>imgIndx < 1 ? '-30px': imgIndx === 1 ? '-44px' : imgIndx > 1 ? '-65px' : 'unset'};
    }

    @media only screen and (max-width:390px){
        width: 35px;
        height: 35px;
        bottom: -10px;
        left: ${({imgIndx})=>imgIndx < 1 ? '-30px': imgIndx === 1 ? '-44px' : imgIndx > 1 ? '-65px' : 'unset'};
    }

    @media only screen and (max-width:380px){
        width: 30px;
        height: 30px;
        bottom: -10px;
        left: ${({imgIndx})=>imgIndx < 1 ? '-30px': imgIndx === 1 ? '-44px' : imgIndx > 1 ? '-65px' : 'unset'};
    }
    
    @media only screen and (max-width:365px){
        width: 35px;
        height: 35px;
        bottom: -10px;
        left: ${({imgIndx})=>imgIndx < 1 ? '-30px': imgIndx === 1 ? '-44px' : imgIndx > 1 ? '-65px' : 'unset'};
    }
    




`;


export const ChainImg = styled.img`
    position:relative;
    bottom: 75px;
    left: 160px;
    width:42px;
    height: 42px;

    @media only screen and (max-width:900px){
       
        bottom: 55px; 
    }
    @media only screen and (max-width:450px){
        width: 32px;
        height: 32px;
        left:120px;
        bottom: 46px; 
    }
  
    @media only screen and (max-width:400px){
        width: 32px;
        height: 32px;
        left:120px;
        bottom: 46px; 
    }

    @media only screen and (max-width:390px){
        width: 32px;
        height: 32px;
        left:120px;
        bottom: 46px; 
    }
    @media only screen and (max-width:365px){
        width: 32px;
        height: 32px;
        left:120px;
        bottom: 46px; 
    }


    



`;

export const VaultTitle = styled.h1`
    cursor: pointer;
    font-weight: 500;
    font-size: 38px;
    line-height: 66px;
    letter-spacing: 0.035em;
    color: #65F5E5;
    margin-top: -65px;

    &:hover{
        text-decoration: underline;
    }
    @media only screen and (max-width:450px){
        font-size: 23px;
        line-height: 21px;
        letter-spacing: 0.005em;
        margin-top: -50px;
    }
    @media only screen and (max-width:400px){
        font-size: 23px;
        line-height: 21px;
        letter-spacing: 0.005em;
        margin-top: -50px;
    }
    @media only screen and (max-width:390px){
        font-size: 23px;
        line-height: 21px;
        letter-spacing: 0.005em;
        margin-top: -50px;
    }
    
    @media only screen and (max-width:380px){
        font-size: 23px;
        line-height: 21px;
        letter-spacing: 0.005em;
        margin-top: -50px;
    }
    
    @media only screen and (max-width:365px){
       font-size: 23px;
       line-height: 21px;
        letter-spacing: 0.005em;
        margin-top: -50px;
    }

    

   

   

`;

export const VaultProperties = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 43px;
    padding-right: 45px;
    @media screen and (max-width:450px) {
        margin-top: 12%;
        padding-left: 23px;
        padding-right: 25px;
            
        
    }
    
    @media screen and (max-width:400px) {
        margin-top: 12%;
        padding-left: 23px;
        padding-right: 25px;
            
        
    }
    @media screen and (max-width:390px) {
        margin-top: 12%;
        padding-left: 23px;
        padding-right: 25px;
            
        
    }
    @media screen and (max-width:365px) {
        margin-top: 12%;
        padding-left: 23px;
        padding-right: 25px;
            
        
    }

   
`;

export const VaultProperty = styled.h2`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-top: unset;
    margin-bottom: 12px;
    div:nth-child(1){
        font-weight: 500;
        font-size: 23px;
        line-height: 34px;
        letter-spacing: 0.04em;
        color: #6483B4;
        text-transform: uppercase;
        @media only screen and (max-width:450px){
            font-size: 19px;
            line-height: 21px;
            letter-spacing: 0.005em;
           
        }
        @media only screen and (max-width:400px){
            font-size: 19px;
            line-height: 21px;
            letter-spacing: 0.005em;
           
        }
        @media only screen and (max-width:390px){
            font-size: 19px;
            line-height: 21px;
            letter-spacing: 0.005em;
           
        }
        
        @media only screen and (max-width:380px){
            font-size: 19px;
            line-height: 21px;
            letter-spacing: 0.005em;
            
        }
        
        @media only screen and (max-width:365px){
            font-size: 19px;
            line-height: 21px;
            letter-spacing: 0.005em;
            
        }

  
    };

    div:nth-child(2){
        font-family: 'Roboto';
        font-weight: 500;
        font-size: 21px;
        line-height: 34px;
        letter-spacing: 0.04em;
        color: #FFFFFF;
        text-transform: uppercase;
        @media only screen and (max-width:450px){
            font-size: 19px;
            line-height: 21px;
            letter-spacing: 0.005em;
           
        }
        @media only screen and (max-width:400px){
            font-size: 19px;
            line-height: 21px;
            letter-spacing: 0.005em;
           
        }
        @media only screen and (max-width:390px){
            font-size: 19px;
            line-height: 21px;
            letter-spacing: 0.005em;
           
        }
        
        @media only screen and (max-width:380px){
            font-size: 20px;
            line-height: 21px;
            letter-spacing: 0.005em;
            
        }
        
        @media only screen and (max-width:365px){
            font-size: 19px;
            line-height: 21px;
            letter-spacing: 0.005em;
            
        }

       
    }
    

`;

export const ButtonQuickAction = styled.div`
    cursor:pointer;
    position: relative;
    height: 63px;
    bottom: -9%;
    background: #65F5E5;
    border-radius: 0px 0px 28px 28px;
    font-weight: 500;
    font-size: 24px;
    line-height: 63px;
    text-align: center;
    letter-spacing: 0.095em;
    color: #0B1231;

    &:hover{ 
        color:white;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    @media only screen and (max-width:450px){
        height: 40px;
        font-size: 18px;
        line-height: 40px;
        letter-spacing: 0.095em;
        bottom: -5%;
        
    }
    @media only screen and (max-width:400px){
        height: 40px;
        font-size: 18px;
        line-height: 40px;
        letter-spacing: 0.095em;
        bottom: -5%;
        
    }

    @media only screen and (max-width:390px){
        height: 40px;
        font-size: 18px;
        line-height: 40px;
        letter-spacing: 0.095em;
        bottom: -5%;
        
    }

    
    @media only screen and (max-width:380px){
        font-size: 18px;
        line-height: 40px;
        letter-spacing: 0.005em;
        
    }
    
    @media only screen and (max-width:365px){
            font-size: 18px;
            line-height: 40px;
            letter-spacing: 0.005em;
            
    }

    

`;

export const ModalCard = styled.dialog`
    padding: unset;
    border: unset;
    z-index: 5;
    background-color:#141E46;
    width:469px;
    height:882px;
    border-radius: 1rem 1rem 1rem 1rem / 4rem ;
    
    &::backdrop{
        background-image: url(${BackgroundModal});
    }

    @media screen and (max-width:1500px){
        height: auto;
       
    }
    @media screen and (max-width:900px){

    }
    @media screen and (max-width:450px){
        width:300px;
        height:600px;
    }
    @media screen and (max-width:400px){
        width:300px;
        height:600px;
    }
    @media screen and (max-width:390px){
        width:300px;
        height:600px;
    }
 
`;

export const ModalBody = styled.div`
    margin: 80px 42px 0 42px;

    @media screen and (max-width:1500px){
        
       
    }
    @media screen and (max-width:900px){

    }
    @media screen and (max-width:450px){
        margin: 50px 32px 0 32px;
    }
    @media screen and (max-width:400px){
        margin: 50px 32px 0 32px;
    }
    @media screen and (max-width:390px){
        margin: 50px 32px 0 32px;
    }

`;

export const Tabs = styled.div`
    position: absolute;
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
        width:100%;
        
    }
    @media screen and (max-width:900px) {

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
    @media screen and (max-width:365px) {
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
    color:${({isClose})=>isClose?'#141E46':'#FFFFFF'};

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
    @media screen and (max-width:365px){
        height: 30px;
        font-size: 14px;
        line-height: 30px;
    }

`; 