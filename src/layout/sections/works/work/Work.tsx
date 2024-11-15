import React from 'react';
import styled from "styled-components";

import {InnerTitle} from "../../../../components/smallcomponents/InnerTitle";
import {StyledTime} from "../../../../components/smallcomponents/StyledTime";
import {StyledSpan} from "../../../../components/smallcomponents/StyledSpan";
import {Paragraph} from "../../../../components/smallcomponents/Paragraph";

type WorkProps = {
    src: string
    titleText: string
    timeText: string
    spanText: string
    paragraphText: string

}

export const Work = (props: WorkProps) => {
    return (
            <StyledWork>
            <Image src={props.src} alt=""/>
            <InnerTitle work>{props.titleText}</InnerTitle>
            <StyledTime>{props.timeText}</StyledTime>
            <StyledSpan>{props.spanText}</StyledSpan>
             <Paragraph>{props.paragraphText}</Paragraph>
            </StyledWork>
    );
};

const StyledWork = styled.article`

`

const Image = styled.img`
    width: 246px;
    height: 180px;
    object-fit: cover;
    float: left;
`
