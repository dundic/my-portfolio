import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Paragraph} from "../../../components/Paragraph";
import {font} from "../../../styles/Common";

const Main = styled.main`
    min-height: 100vh;
    display: flex;
    align-items: center;

    @media ${theme.media.mobile} {
           
        div {
            text-align: center;
        }

        ${FlexWrapper} {
            flex-wrap: wrap-reverse;
            flex-direction: column-reverse;         
            
        }

        ${Paragraph} {
            padding: 10px 15px 30px 15px;
        }     

    }


    button {
        min-width: 208px;
        padding: 12px 20px;
        background-color: ${theme.colors.accentColor};
        color: #fff;
        border: none;
        font: 20px 'Heebo Medium', sans-serif;
        border-radius: 2px;
        
        &:hover {
            background-color: rgb(228, 75, 75);
        }
    }
       
`
const MainTitle = styled.h1`
    ${font({family: 'Heebo Bold, sans-serif', weight: 600,  Fmax: 44, Fmin: 32})};
    
    @media ${theme.media.mobile} {
        margin-bottom: 5px;
    }
 
`

const Name = styled.span`
    ${font({family: 'Heebo Bold, sans-serif', weight: 600,  Fmax: 44, Fmin: 32})};
    display: block;
    padding-top: 90px;
    
    @media ${theme.media.mobile} {
      margin-top: 0;
    }
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 1;
    
    
    &::after {
        content: '';
        width: 244px;
        height: 244px;
        border-radius: 50%;
        position: absolute;
        left: 2px;
        top: 13px;
        z-index: -2;
        transform: translateX(-7px);
        background-color: ${theme.colors.secondaryColor};
    }

    @media ${theme.media.mobile} {
            
        &::after {
            content: '';
            width: 170px;
            height: 170px;
            border-radius: 50%;
            position: absolute;
            left: 2px;
            top: 8px;
            z-index: -2;
            transform: translateX(-7px);
            background-color: ${theme.colors.secondaryColor};
        }
`

const Photo = styled.img`
    width: 244px;
    height: 244px;
    object-fit: cover;
    border-radius: 50%;
    
    @media ${theme.media.mobile} {
        width: 170px;
        height: 170px;
    }
`

export const S = {
    Main,
    Name,
    MainTitle,
    Photo,
    PhotoWrapper,

}