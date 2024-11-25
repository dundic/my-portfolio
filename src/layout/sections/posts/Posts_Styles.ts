import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {InnerTitle} from "../../../components/InnerTitle";

//Posts

const Posts = styled.section`
    background-color: ${theme.colors.secondaryColor};
    display: flex;
    position: relative;

    @media ${theme.media.mobile} {
        ${SectionTitle} {
           text-align: center;
        }
    }

    @media ${theme.media.mobile} {
      ${FlexWrapper} {
          flex-wrap: wrap;
      }
    } 
         
    a {
        position: absolute;
        right: 15px;
        top: 27px;
        color: #00A8CC;
        font: 16px 'Heebo Regular', sans-serif;
        z-index: 99999;
        text-decoration: none;

        &:hover {
            color: #147083;
        }
        @media ${theme.media.mobile} {
            display: none;
        }
        
    }
`

//Post

const Post = styled.article`
    min-height: 295px;
    max-width: 418px;
    border-radius: 4px;
    width: 100%;
    background-color: ${theme.colors.bgColor};
    margin-bottom: 30px;
    padding: 24px;
    
    @media ${theme.media.mobile} {
        max-width: 100%;
        padding-top: 10px;
        padding-left: 20px;
        min-height: 166px;
    }
    
    ${InnerTitle} {
        padding-bottom: 10px;
    }
    
`
const Timer  = styled.time`
    ${font({family: 'Heebo Regular, sans-serif',   Fmax: 18, Fmin: 16})};
    position: relative;
    padding-right: 58px;
    
    &::after {
        content: '';
        width: 2px;
        height: 100%;
        background-color: ${theme.colors.fontColor};
        position: absolute;
        left: 130px;
        top: 0;
    }
    
    @media ${theme.media.mobile} { 
        padding-right: 38px;

        &::after {
            content: '';
            width: 2px;
            height: 100%;
            background-color: ${theme.colors.fontColor};
            position: absolute;
            left: 110px;
            top: 0;
        }
    
}
`

const SpanElem = styled.span`
    ${font({family: 'Heebo Regular, sans-serif',   Fmax: 18, Fmin: 16})};
    position: relative;
    white-space: nowrap;
`

export const S = {
    Posts,
    Post,
    Timer,
    SpanElem
}