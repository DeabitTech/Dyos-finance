import styled from "styled-components";

export const Container = styled.div`
    padding: 0 0 5% 0;


`;



export const VaultsGrid = styled.div`
    display:grid;
    padding-top: 50px;
    padding-left: 210px;
    padding-right: 210px;
    gap: 5rem;
    grid-template-columns: repeat(3,1fr);
  
    @media only screen and (max-width:1367px){
        grid-template-columns: repeat(2,1fr);
        align-items: center;
        padding-left: 12px;
        padding-right: 12px;
        gap: 4.5rem 1.5rem;
    }
    @media only screen and (max-width:900px){
        grid-template-columns: repeat(2,1fr);
        align-items: center;
        padding-left: 12px;
        padding-right: 12px;
        gap: 1rem 1.5rem;
    }
    @media only screen and (max-width:450px){
        grid-template-columns: repeat(1,1fr);
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
        gap: 3rem 1.5rem;
    }

    @media only screen and (max-width:400px){
        grid-template-columns: repeat(1,1fr);
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
        gap: 3rem 1.5rem;
    }
    @media only screen and (max-width:390px){
        grid-template-columns: repeat(1,1fr);
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
        gap: 3rem 1.5rem;
    }
    
    @media only screen and (max-width:380px){
        grid-template-columns: repeat(1,1fr);
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
        gap: 3rem 1rem;
    }
    
    @media only screen and (max-width:365px){
        grid-template-columns: repeat(1,1fr);
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
        gap: 3rem 1rem;
    }


   
`;