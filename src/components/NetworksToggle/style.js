import styled from 'styled-components';

export const Container = styled.div`
    align-items:center;
    justify-content: center;
    padding-left: 210px;
    padding-right: 210px;
    padding-top: 1%;

    @media screen and (max-width:1366px) {
        padding-left: 5%;
        padding-right: 5%;
    }
    @media screen and (max-width:900px) {
        padding-left: unset;
        padding-right: unset;
    }

`;

export const NetworkBar = styled.div`
    background: #475FF2;
    height: 95.01px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 63.5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width:1366px) {
      
    }
    @media screen and (max-width:450px) {
        display:${({showBar})=>showBar? 'flex':'none'} ;
        position:absolute;
        right: 25%;
        z-index: 2;
        background: #475FF2;
        transform:rotate(90deg);
        width: auto;
    }
    @media screen and (max-width:400px) {
        display:${({showBar})=>showBar? 'flex':'none'} ;
        position:absolute;
        right: 25%;
        z-index: 2;
        background: #475FF2;
        transform:rotate(90deg);
        width: auto;
    }
    @media screen and (max-width:390px) {
        display:${({showBar})=>showBar? 'flex':'none'} ;
        position:absolute;
        right: 25%;
        z-index: 2;
        background: #475FF2;
        transform:rotate(90deg);
        width: auto;
    }
    @media screen and (max-width:365px) {
        display:${({showBar})=>showBar? 'flex':'none'} ;
        position:absolute;
        right: 20%;
        z-index: 2;
        background: #475FF2;
        transform:rotate(90deg);
        width: auto;
    }
`;

export const ChainLine = styled.div`
    width:69.43px;
    height:69.43px;
    border-radius:50%;
    background-color: #0E153A;
    margin-left: 1%;
    margin-right: ${({indx})=> indx >5 ? '1%':'none'};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img {
        width: 53.35px;
        height: 53.35px;
        &:hover{
            transform:scale(1.33);
            transition:all 0.3s ease-out;
        }
        
    }
    @media screen and (max-width:900px) {
        transform:rotate(30deg);

    }
    @media screen and (max-width:450px) {
        transform:rotate(30deg);

    }
    @media screen and (max-width:400px) {
        transform:rotate(30deg);

    }
    @media screen and (max-width:390px) {
        transform:rotate(30deg);

    }
    @media screen and (max-width:365px) {
        transform:rotate(30deg);

    }





`;