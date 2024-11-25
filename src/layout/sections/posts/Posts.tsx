import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {Post} from "./post/Post";
import {S} from './Posts_Styles'



export const Posts = () => {
    return (
            <S.Posts>
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
            </S.Posts>
    );

};















