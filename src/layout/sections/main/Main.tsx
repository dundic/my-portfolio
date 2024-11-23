import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/img/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Paragraph} from "../../../components/Paragraph";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
            <StyledMain>
                <Container>
                    <FlexWrapper align={'center'} justify={'center'} height={'100%'}>
                        <div>
                            <Name>Hi, I am Alexei</Name>
                            <MainTitle>A Web Developer.</MainTitle>
                            <Paragraph padding={'30px 115px 30px 0'}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                                officia
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
                                amet.</Paragraph>
                            <button>Download Resume</button>
                        </div>
                        <PhotoWrapper>
                            <Photo src={photo} alt="myPhoto"/>
                        </PhotoWrapper>
                    </FlexWrapper>
                </Container>

            </StyledMain>
    );
};

const StyledMain = styled.main`
    min-height: 100vh;
    display: flex;
    
    button {
        min-width: 208px;
        height: 47px;
        padding: 0 20px 0;
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
    font-family: 'Heebo Bold', sans-serif;
    font-size: 44px;
`

const Name = styled.span`
    font-family: 'Heebo Bold', sans-serif;
    font-weight: 600;
    font-size: 44px;
    display: block;
`

const Photo = styled.img`
    width: 244px;
    height: 244px;
    object-fit: cover;
    border-radius: 50%;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 1;
    margin-top: -90px;
    
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
`
