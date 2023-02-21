import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 210px;
    padding-right: 210px;
    padding-top: 1%;
    font-family: 'Poppins';

    @media screen and (max-width:1500px){
        padding-right: 5%;
        padding-left: 5%;
        align-items: unset;
    }


`;

export const MobileLeftContainer = styled.div`
    button{
        display:none;
    }

    @media screen and (max-width:1500px){
        
    }
    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;   
        button{
            all:unset;
            margin-top:6%;
            width: 312px;
            height: 58.19px;
            font-size: 25px;
            background-color: #0E153A;
            font-family: 'PoppinsBold';
            letter-spacing: 0.095em;
            color: #6582B3;
            border-radius: 8px;
            text-transform: uppercase;
            cursor:pointer;

        }
    }
    @media only screen and (max-width:450px) {
        display: flex;
        flex-direction: column;   
        button{
            all:unset;
            margin-top:7%;
            width: 180px;
            height: 35px;
            font-size: 15px;
            background-color: #0E153A;
            font-family: 'PoppinsBold';
            letter-spacing: 0.095em;
            color: #6582B3;
            border-radius: 8px;
            text-transform: uppercase;
            cursor:pointer;

        }
    }
    @media only screen and (max-width:400px) {
        display: flex;
        flex-direction: column;   
        button{
            all:unset;
            margin-top:7%;
            width: 180px;
            height: 35px;
            font-size: 15px;
            background-color: #0E153A;
            font-family: 'PoppinsBold';
            letter-spacing: 0.095em;
            color: #6582B3;
            border-radius: 8px;
            text-transform: uppercase;
            cursor:pointer;

        }
    }

    @media only screen and (max-width:390px){
        display: flex;
        flex-direction: column;   
        button{
            all:unset;
            margin-top:7%;
            width: 180px;
            height: 35px;
            font-size: 15px;
            background-color: #0E153A;
            font-family: 'PoppinsBold';
            letter-spacing: 0.095em;
            color: #6582B3;
            border-radius: 8px;
            text-transform: uppercase;
            cursor:pointer;

        }
    }
    
    @media only screen and (max-width:380px){
        display: flex;
        flex-direction: column;   
        button{
            all:unset;
            margin-top:7%;
            width: 180px;
            height: 35px;
            font-size: 15px;
            background-color: #0E153A;
            font-family: 'PoppinsBold';
            letter-spacing: 0.095em;
            color: #6582B3;
            border-radius: 8px;
            text-transform: uppercase;
            cursor:pointer;

        }
    }
    @media only screen and (max-width:365px){
        display: flex;
        flex-direction: column;   
        button{
            all:unset;
            margin-top:7%;
            width: 160px;
            height: 35px;
            font-size: 15px;
            background-color: #0E153A;
            font-family: 'PoppinsBold';
            letter-spacing: 0.095em;
            color: #6582B3;
            border-radius: 8px;
            text-transform: uppercase;
            cursor:pointer;

        }
    }
    
`;



export const SearchPlace = styled.div`
        width: 312px;
        height: 58.19px;
        padding:0 1% 0 1%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        background-color: #0E153A;
        border-radius: 8px;
        font-family: 'PoppinsBold';
        letter-spacing: 0.095em;
        color: #6582B3;
        font-size: 24px;
        line-height: 36px;

        svg{
            width: 31px;
            height: 31px;
        }

    @media screen and (max-width:1500px) {
        width: 312px;
        height: 58.19px;
        font-size: 25px;

        svg{
            width: 31px;
            height: 31px;
        }
            
    }
    @media screen and (max-width: 900px) {
        width: 312px;
        height: 58.19px;
        font-size: 25px;

        svg{
            width: 31px;
            height: 31px;
        }
    }
    @media only screen and (max-width:450px) {
        width: 180px;
        height: 35px;
        font-size: 15px;
           

            svg{
                width: 15px;
                height: 15px;
            }
    }
    @media only screen and (max-width:400px) {
        width: 180px;
        height: 35px;
        font-size: 15px;
           

            svg{
                width: 15px;
                height: 15px;
            }
    }

    @media only screen and (max-width:390px){
        width: 180px;
        height: 35px;
        font-size: 15px;
           

            svg{
                width: 15px;
                height: 15px;
            }
    }
    
    @media only screen and (max-width:380px){
        width: 180px;
        height: 35px;
        font-size: 15px;

        svg{
            width: 15px;
            height: 15px;
        }
    }
    @media only screen and (max-width:365px){
        width: 160px;
        height: 35px;
        font-size: 15px;

        svg{
            width: 15px;
            height: 15px;
        }

    }
`;



export const TabPicklistSelected = styled.div`
    font-family: 'PoppinsBold';
    width: 263.22px;
    height: 58.19px;
    cursor: pointer;
    background-color:#0E153A;
    border-radius: 8px;
    color: #6483B4;
    text-align:center;  
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.095em;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-transform: uppercase;
    margin-left: 5%;

    @media screen and (max-width:1500px) {
        width: 263.22px;
        height: 58.19px;
        font-size: 22px;
        margin-bottom: 8%;
        margin-left: unset;
        
    }
    @media screen and (max-width:1367px) {
        width: 263.22px;
        height: 58.19px;
        font-size: 22px;
        margin-bottom: 1%;
        margin-left: unset;
        
    }
    @media screen and (max-width: 900px) {
        width: 263.22px;
        height: 58.19px;
        font-size: 22px;
        margin-bottom: 8%;
        margin-left: unset;
    }
    @media only screen and (max-width:450px) {
        width: 150px;
        height: 35px;
        font-size: 15px;
        margin-bottom: 8%;
        margin-left: unset;
    }
    @media only screen and (max-width:400px) {
        width: 150px;
        height: 35px;
        font-size: 15px;
        margin-bottom: 8%;
        margin-left: unset;
    }
    @media only screen and (max-width:390px){
        width: 150px;
        height: 35px;
        font-size: 15px;
           

            svg{
                width: 15px;
                height: 15px;
            }
    }
    @media only screen and (max-width:380px){
        width: 150px;
        height: 35px;
        font-size: 15px;

        svg{
            width: 15px;
            height: 15px;
        }
    }
    @media only screen and (max-width:365px){
        width: 150px;
        height: 35px;
        font-size: 15px;

        svg{
            width: 15px;
            height: 15px;
        }
        
    }
`;

export const TabPicklist = styled.ul`
    position: absolute;
    z-index: 3;
    margin-top: 0.5%;
    background-color:#0D1539;
    padding: 0;
    width: 274px;
    height: auto;
    border-radius: 25px;
    color: #6483B4;
    text-align:center;
    font-size: 18px;
    line-height: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    li:first-child {
       border-top-left-radius:25px;
       border-top-right-radius:25px;
    }

    li:last-child {
        border-bottom-right-radius: 25px;
        border-bottom-left-radius:25px;
    }

    @media screen and (max-width:900px) {
        width: 260px;
        font-size:18px;
        border-radius: 18px;
      
        li:first-child {
            border-top-left-radius:16px;
            border-top-right-radius:16px;
        }

        li:last-child {
            border-bottom-right-radius: 16px;
            border-bottom-left-radius:16px;
        }
    }
    @media screen and (max-width:450px) {
        width: 150px;
        font-size:15px;
        border-radius: 18px;
        li:first-child {
            border-top-left-radius:16px;
            border-top-right-radius:16px;
        }

        li:last-child {
            border-bottom-right-radius: 16px;
            border-bottom-left-radius:16px;
        }
    }
    @media screen and (max-width:400px) {
        width: 150px;
        font-size:15px;
        border-radius: 18px;
        li:first-child {
            border-top-left-radius:16px;
            border-top-right-radius:16px;
        }

        li:last-child {
            border-bottom-right-radius: 16px;
            border-bottom-left-radius:16px;
        }
    }
    @media screen and (max-width:390px) {
        width: 150px;
        font-size:15px;
        border-radius: 18px;
        li:first-child {
            border-top-left-radius:16px;
            border-top-right-radius:16px;
        }

        li:last-child {
            border-bottom-right-radius: 16px;
            border-bottom-left-radius:16px;
        }
    }

    @media screen and (max-width:375px) {
        width: 150px;
        font-size:15px;
        border-radius: 18px;
        li:first-child {
            border-top-left-radius:18px;
            border-top-right-radius:18px;
        }
        
        li:last-child {
            border-bottom-right-radius: 18px;
            border-bottom-left-radius:18px;
        }
    }




   

`;

export const OptionPicklist = styled.li`
    cursor: pointer;
    list-style: none;
    color: #6483B4;
    font-size: 20px;
    line-height: 66px;
   
    text-transform: uppercase;
    height: 66px;
    padding: 0 8% 0 0;
    &:hover {
        background-color: #6483B4;
        color: #141E40;
       // overflow: hidden;
    }

    @media screen and (max-width:1500px) {
        height: 40px;
        font-size:22px;
        line-height: 40px;
    }
    @media screen and (max-width:900px) {
        height: 40px;
        font-size:22px;
        line-height: 40px;
    }
    @media screen and (max-width:450px){
        height: 25px;
        font-size:15px;
        line-height: 25px;

    }
    @media screen and (max-width:400px){
        height: 25px;
        font-size:15px;
        line-height: 25px;

    }
    @media screen and (max-width:390px){
        height: 25px;
        font-size:15px;
        line-height: 25px;

    }
    
    
`;

export const SearchInput = styled.input`
    all:unset;
    width: 100%;
    ::placeholder,
    ::-webkit-input-placeholder {
        color:  #6582B3;
        text-align: left;
      
    }
    :-ms-input-placeholder {
        color:  #6582B3;
        text-align: left;
    }

    
    @media only screen and (min-width:375px){
        ::-webkit-input-placeholder {
       
            text-align: center;
      
        }
        :-ms-input-placeholder {
            text-align: center;
        }
    }

    @media only screen and (min-width:380px){
        ::-webkit-input-placeholder {
            text-align: center;
        }
        :-ms-input-placeholder {
            text-align: center;
        }
       
    }

    @media only screen and (min-width:390px){
        ::-webkit-input-placeholder {
            text-align: center;
        }
        :-ms-input-placeholder {
            text-align: center;
        }
       
    }

    @media only screen and (min-width:393px){
        ::-webkit-input-placeholder {
            text-align: center;
        }
        :-ms-input-placeholder {
            text-align: center;
        }
       
    }

    @media only screen and (min-width:355px){
        ::-webkit-input-placeholder {
            text-align: center;
        }
        :-ms-input-placeholder {
            text-align: center;
        }
       
    }



  
`;

export const TabFilterPicklist = styled.ul`
    position: absolute;
    z-index: 3;
    width: 250px;
    height: auto;
    border-radius: 1rem 1rem 1rem 1rem / 4rem;
    background-color: #0E153A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    div:first-child {
        display: flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-evenly;
    }

    @media screen and (max-width:1500px){
        width:260px;
    }
    @media screen and (max-width:1367px){
        width:260px;
        right:4%;
        margin-top:unset;
    }
    @media screen and (max-width:900px){
        width:250px;
        right:4%;
        margin-top:unset;
    }
    @media screen and (max-width:450px){
        width: 150px;
        right:5%;
        padding-left:2%;
        
    }
    @media screen and (max-width:400px){
        width: 150px;
        right:5%;
        padding-left:2%;
        
    }
    @media screen and (max-width:390px){
        width: 150px;
        right:5%;
        padding-left:2%;
        
    }
`;

export const TabFilterTitle = styled.h2`
    color: #65F5E5;
    font-size: 21px;
    line-height: 32px;
    letter-spacing: 0.035em;
    display: flex;
    text-align: center;
    align-items: center;
    @media screen and (max-width:1500px){
        font-size: 19px;
    }
    @media screen and (max-width:900px){
        font-size: 19px;
        
    }
    @media screen and (max-width:450px){
        font-size: 13px;
    }
    @media screen and (max-width:400px){
        font-size: 13px;
    }
    @media screen and (max-width:390px){
        font-size: 13px;
    }
`;

export const TabFilterCheckboxes = styled.div`
    all:unset;
    display: flex;
    align-items:flex-start;
    flex-direction: column;


`;

export const StyledCheckboxContainer = styled.label`
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    margin:0 0 10px 0;
`;

export const HiddenCheckbox = styled.input.attrs({type:'checkbox'})`
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    white-space: nowrap;
    width: 1px;
`;

export const StyledCheckbox = styled.div`
    width: 14.8px;
    height: 14.8px;
    background-color: ${(props)=> (props.checked ? 'white' : 'none')};
    border: 3px solid #FFFFFF;
    border-radius: 50%;
    transition: all 150ms;
    
    @media screen and (max-width:1500px) {
        width: 12px;
        height: 12px;
    }
    @media screen and (max-width:900px){
        width: 12px;
        height: 12px;
    }
    @media screen and (max-width:450px){
        width: 7px;
        height: 7px;
    }
    @media screen and (max-width:400px){
        width: 7px;
        height: 7px;
    }
    @media screen and (max-width:390px){
        width: 7px;
        height: 7px;
    }
`;

export const StyledCheckboxLabel = styled.span`
    all:unset;
    font-weight: 500;
    font-size: 15px;
    line-height: 30px;
    letter-spacing: 0.035em;
    color: #6483B4;
    margin-left: 10px;
    @media screen and (max-width:1500px) {
        font-size: 15px;
        line-height: 14px;
        margin-left: 5px;
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width:193px;
    }
    @media screen and (max-width:450px) {
        font-size: 10px;
        line-height: 14px;
        margin-left: 2px;
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width:110px;
    }
    @media screen and (max-width:400px) {
        font-size: 10px;
        line-height: 14px;
        margin-left: 2px;
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width:110px;
    }
    @media screen and (max-width:390px) {
        font-size: 10px;
        line-height: 14px;
        margin-left: 2px;
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width:110px;
    }
   
`;

export const PlatformPicklistFilter = styled.div`
    width: 219.75px;
    height: 31.97px;
    cursor: pointer;
    background-color:#475FF2;
    border-radius: 6px;
    color:#0E153A;
    text-align:center;  
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.01em;
    display: flex;
    justify-content: space-evenly;
    justify-self: flex-start;
    justify-items: center;
    align-items: center;
    margin-bottom:16px;
   div:nth-child(1){
    color:#0E153A;
   }

   
   div:nth-child(2){
    color: #4DB8B5;
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

   }

   @media screen and (max-width:1500px) {
        width:220px;
        height:25px;
        font-size: 17px;
        line-height: 25px;
        border-radius: 4px;
    }
    @media screen and (max-width:450px) {
        width:125px;
        height:15px;
        font-size: 12px;
        line-height: 15px;
        border-radius: 4px;
    }
   @media screen and (max-width:400px) {
        width:125px;
        height:15px;
        font-size: 12px;
        line-height: 15px;
        border-radius: 4px;
    }

   @media screen and (max-width:390px) {
        width:125px;
        height:15px;
        font-size: 12px;
        line-height: 15px;
        border-radius: 4px;

   }



`;

export const PlatformListFilter = styled.ul`
    position: absolute;
    z-index: 3;
    margin-top: 0.5%;
    background-color:#475FF2;
    padding: 0;
    width: 230px;
    height: auto;
    border-radius: 1em 1em 1em 1em / 4em;
    color: #6483B4;
    text-align:center;
    font-size: 18px;
    line-height: 44px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    li:first-child {
       border-top-left-radius: 1em 4em;
       border-top-right-radius: 1em 4em;
    }

    li:last-child {
        border-bottom-right-radius: 1em 4em;
        border-bottom-left-radius: 1em 4em;
    }

    @media screen and (max-width:1500px) {
        width:220px;
        font-size: 17px;
        line-height: 44px;
        margin-top: unset;
    }
    @media screen and (max-width:450px) {
        width:125px;
        font-size: 12px;
        line-height: 24px;
        margin-top: unset;
    }
    @media screen and (max-width:400px) {
        width:125px;
        font-size: 12px;
        line-height: 24px;
        margin-top: unset;
    }
    @media screen and (max-width:390px) {
        width:125px;
        font-size: 12px;
        line-height: 24px;
        margin-top: unset;
    }

`;

export const PlatformOptionFilter = styled.li`
     cursor: pointer;
    list-style: unset;
    color: #0E153A;  
    height: 44px;
    
    &:hover {
        background-color: #65F5E5;
    }


    @media screen and (max-width:1500px) {
        height: 44px;
    }
    @media screen and (max-width:450px) {
        height: 24px;
    }
    @media screen and (max-width:400px) {
        height: 24px;
    }
    @media screen and (max-width:390px) {
        height: 24px;
    }

`;



export const FilterSortSection = styled.div`
    display: flex;
    width: 30vw;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (max-width:1367px){
        width:50%;
      
    }

    @media screen and (max-width:900px) {
        flex-direction: column-reverse;
        width: auto;
        
    }



`;


export const ResetFilter = styled.button`
    all:unset;
    background-color: #8EFBF2;
    width: 100px;
    height: 25px;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
        color: #65F5E5;
        background-color:#141E40;
    }

    @media screen and (max-width:1500px){
        width:90px;
        height:35px;
        font-size:13px;
        line-height: 35px;
    }
    @media screen and (max-width:900px){
        width:90px;
        height:35px;
        font-size:13px;
        line-height: 35px;
    }
    @media screen and (max-width:450px){
        width:50px;
        height:35px;
        font-size:13px;
        line-height: 15px;
    }
    @media screen and (max-width:400px){
        width:50px;
        height:35px;
        font-size:13px;
        line-height: 15px;
    }
    @media screen and (max-width:390px){
        width:50px;
        height:35px;
        font-size:13px;
        line-height: 15px;
    }

`;