import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Post} from "./post/Post";
import {SectionTitle} from "../../../components/smallcomponents/SectionTitle";

export const Posts = () => {
    return (
            <StyledPosts>
                <SectionTitle>Recent Posts</SectionTitle>
                <a href="#">View all</a>
                <FlexWrapper>
                    <Post titleText={'Making a design system from scratch'}
                          timeText={'12 feb 2020'}
                          spanText={'Design, Pattern'}
                          paragraphText={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                    />
                    <Post titleText={'Creating pixel perfect icons in Figma'}
                          timeText={'10 feb 2020'}
                          spanText={'Figma, Icon Design'}
                          paragraphText={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                    />
                </FlexWrapper>
            </StyledPosts>
    );

};

const StyledPosts = styled.section`
    background-color: #f3c46d;
    min-height: 50vh;
`








