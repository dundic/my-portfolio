import React from 'react';

import styled from "styled-components";
import {InnerTitle} from "../../../../components/smallcomponents/InnerTitle";
import {StyledTime} from "../../../../components/smallcomponents/StyledTime";
import {StyledSpan} from "../../../../components/smallcomponents/StyledSpan";
import {Paragraph} from "../../../../components/smallcomponents/Paragraph";

type PostProps = {
    titleText: string
    timeText: string
    spanText: string
    paragraphText: string
}

export const Post = (props: PostProps) => {
    return (
            <StyledPost>
                <InnerTitle>{props.titleText}</InnerTitle>
                <StyledTime>{props.timeText}</StyledTime>
                <StyledSpan>{props.spanText}</StyledSpan>
                <Paragraph>{props.spanText}</Paragraph>
            </StyledPost>
    );
};

const StyledPost = styled.article`
     border: solid 1px blue;
    width: 50%;
`






