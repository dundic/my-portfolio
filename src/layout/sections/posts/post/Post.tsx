import React from 'react';
import {Paragraph} from "../../../../components/Paragraph";
import {InnerTitle} from "../../../../components/InnerTitle";
import {S} from '../Posts_Styles'

type PostProps = {
    title: string
    data: string
    spanText: string
    paragraphText: string
}

export const Post: React.FC<PostProps> = (props) => {
    return (
            <S.Post>
                <InnerTitle padding={'0 0 20px'}>{props.title}</InnerTitle>
                <S.Timer>{props.data}</S.Timer>
                <S.SpanElem>{props.spanText}</S.SpanElem>
                <Paragraph margin={'20px 0 0 0'}>{props.paragraphText}</Paragraph>
            </S.Post>
    );
};






