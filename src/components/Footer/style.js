import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 180px;
    background-color:#0D1539;
    box-shadow: 0px 4px 39px rgba(0, 0, 0, 0.26);
    @media screen and (max-width: 1500px) {
        height: auto;
       
    };


`;

export const SubContainer = styled.div`
    display:flex;
    align-items:center;
    text-align:center;
    
    justify-content: space-between;
    margin-left:210px;
    margin-right:210px;

`;

export const DocLink = styled.a`
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #6483B4;

`;

export const Copyright = styled.h1`
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #6483B4;
`;

export const GroupSocialIcon = styled.div``;

export const SocialIcon = styled.div``;

