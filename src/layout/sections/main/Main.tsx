import React from 'react';
import photo from '../../../assets/img/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Paragraph} from "../../../components/Paragraph";
import {Container} from "../../../components/Container";

import {S} from './Main_Styles'

export const Main: React.FC = () => {
    return (
            <S.Main>
                <Container>
                    <FlexWrapper align={'center'} justify={'space-between'} height={'100%'}>
                        <div>
                            <S.Name>Hi, I am Alexei</S.Name>
                            <S.MainTitle>A Web Developer.</S.MainTitle>
                            <Paragraph padding={'30px 95px 30px 0'}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                                officia
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
                                amet.</Paragraph>
                            <button>Download Resume</button>
                        </div>
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt="myPhoto"/>
                        </S.PhotoWrapper>
                    </FlexWrapper>
                </Container>

            </S.Main>
    );
};


