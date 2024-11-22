import React from 'react';
import styled from "styled-components";
import {Paragraph} from "../../../../components/Paragraph";
import {InnerTitle} from "../../../../components/InnerTitle";


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
                <InnerTitle font={"30px"}>{props.titleText}</InnerTitle>
                <StyledTime>{props.timeText}</StyledTime>
                <StyledSpan>{props.spanText}</StyledSpan>
                <Paragraph>{props.paragraphText}</Paragraph>
            </StyledWork>
    );
};

const StyledWork = styled.article`
    border-bottom: 2px solid #E0E0E0;
    display: flex;
    padding-bottom: 30px;
    padding-top: 25px;
`

const Image = styled.img`
    width: 246px;
    height: 180px;
    object-fit: cover;
    border-radius: 6px;
`

const StyledTime = styled.time`
    background-color: #142850;
    color: #fff;
    font: 18px 'Heebo Black', sans-serif;
    display: inline-block;
    width: 62px;
    height: 25px;
    border-radius: 16px;
    padding: 3px;
    padding-left: 11px;
    margin-right: 22px;
    margin-bottom: 22px;
`

const StyledSpan = styled.span`
    font: 20px 'Heebo Regular', sans-serif;
    color: #8695A4;
`

