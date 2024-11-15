import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/img/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Paragraph} from "../../../components/smallcomponents/Paragraph";

export const Main = () => {
    return (
            <StyledMain>
                <FlexWrapper align={'center'} justify={'space-around'}>
                    <div>
                        <Name>Hi, I am Alexei!</Name>
                        <MainTitle>A Frontend developer.</MainTitle>
                        <Paragraph>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Paragraph>
                        <button>Download Resume</button>
                    </div>

                    <Photo src={photo} alt=""/>
                </FlexWrapper>
            </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: lightyellow;
`


const Photo = styled.img`
    width: 243px;
    height: 243px;
    object-fit: cover;
`

const MainTitle = styled.h1`
    color: red;
`

const Name = styled.h2`
    font-style: italic;
    
`

