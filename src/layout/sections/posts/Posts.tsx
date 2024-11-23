import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {Post} from "./post/Post";



export const Posts = () => {
    return (
            <StyledPosts>
                <Container>
                    <SectionTitle padding={'25px 0 20px 0'}>Recent posts</SectionTitle>
                    <a href="#">View all</a>
                    <FlexWrapper justify={'center'} gap={'20px'}>
                        <Post title={'Making a design system from scratch'}
                              data={'12 Feb 2020'}
                              spanText={'Design, Pattern'}
                              paragraphText={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                        />
                        <Post title={'Creating pixel perfect icons in Figma'}
                              data={'10 Feb 2020'}
                              spanText={'Figma, Icon Design'}
                              paragraphText={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                        />
                    </FlexWrapper>
                </Container>
            </StyledPosts>
    );

};

const StyledPosts = styled.section`
    background-color: ${theme.colors.secondaryColor};
    display: flex;
    position: relative;

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
    }

`














