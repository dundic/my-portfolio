import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {InnerTitle} from "../../../components/InnerTitle";
import {SectionTitle} from "../../../components/SectionTitle";

//Posts

const Posts = styled.section`
    position: relative;
    padding-bottom: 30px;
    background-color: ${theme.colors.secondaryColor};

    @media ${theme.media.mobile} {
        
        ${FlexWrapper} {
            justify-content: center;
            
            ${SectionTitle} {
                span {
                    display: none;
                }
            }
        }
        
     
    }

    a {     
        color: #00A8CC;
        font: 16px 'Heebo Regular', sans-serif;
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
    border-radius: 4px;
    width: 100%;
    background-color: ${theme.colors.bgColor};
    padding: 24px;
    max-width: 400px;
    min-width: 300px;
    min-height: 295px;

    @media ${theme.media.mobile} {
        max-width: 100%;
        padding-top: 10px;
        padding-left: 20px;
        min-height: 230px;

    
        ${InnerTitle} {
            padding-bottom: 10px;
        }
    }

    @media ${theme.media.tablet} {
        max-width: 100%;
        padding-top: 10px;
        padding-left: 20px;
        min-height: 230px;
        margin-bottom: 0;

        ${InnerTitle} {
            padding-bottom: 10px;
        }
    }
    
`

const Timer = styled.time`
    ${font({family: 'Heebo Regular, sans-serif', Fmax: 18, Fmin: 16})};
    position: relative;
    padding-right: 50px;

    &::after {
        content: '';
        width: 2px;
        height: 100%;
        background-color: ${theme.colors.fontColor};
        position: absolute;
        left: 120px;
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
    ${font({family: 'Heebo Regular, sans-serif', Fmax: 18, Fmin: 16})};
    position: relative;
`

export const S = {
    Posts,
    Post,
    Timer,
    SpanElem
}