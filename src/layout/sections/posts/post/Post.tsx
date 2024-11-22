import React from 'react';
import styled from "styled-components";
import {Paragraph} from "../../../../components/Paragraph";
import {InnerTitle} from "../../../../components/InnerTitle";

type PostProps = {
    title: string
    data: string
    spanText: string
    paragraphText: string
}

export const Post = (props: PostProps) => {
    return (
            <StyledPost>
                <InnerTitle font={'26px'} padding={'0 0 30px 0'}>{props.title}</InnerTitle>
                <Timer>{props.data}</Timer>
                <SpanElem>{props.spanText}</SpanElem>
                <Paragraph padding={'0 0 20px 0'} margin={'25px 0 0 0'}>{props.paragraphText}</Paragraph>
            </StyledPost>
    );
};

const StyledPost = styled.article`
    min-height: 295px;
    max-width: 418px;
    width: 100%;
    background-color: #fff;
    margin-bottom: 32px;
    padding: 23px 24px 7px 21px;
`
const Timer  = styled.time`
    font: 18px 'Heebo Regular', sans-serif;
    position: relative;
    padding-right: 58px;
    
    &::after {
        content: '';
        width: 2px;
        height: 100%;
        background-color: #21243D;;
        position: absolute;
        left: 125px;
    }
`

const SpanElem = styled.span`
    font: 18px 'Heebo Regular', sans-serif;
    position: relative;
`





