import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {Post} from "./post/Post";
import {S} from './Posts_Styles'


export const Posts: React.FC = () => {
    return (
            <S.Posts>
                <Container>

                    <FlexWrapper justify={'space-between'} align={'center'}>
                        <SectionTitle margin={'25px 0'}>Recent <span>posts</span></SectionTitle>
                        <a href="#">View all</a>
                    </FlexWrapper>

                    <FlexWrapper direction={'row'} gap={'20px'} wrap={'wrap'}>
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
                        <Post title={'Creating pixel perfect icons in Figma'}
                              data={'10 Feb 2020'}
                              spanText={'Figma, Icon Design'}
                              paragraphText={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                        />
                        <Post title={'Creating pixel perfect icons in Figma'}
                              data={'10 Feb 2020'}
                              spanText={'Figma, Icon Design'}
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















