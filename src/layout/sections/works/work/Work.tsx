import React from 'react';
import styled from "styled-components";
import {Paragraph} from "../../../../components/Paragraph";
import {InnerTitle} from "../../../../components/InnerTitle";
import {theme} from "../../../../styles/Theme";


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
                <div>
                <InnerTitle font={"30px"} padding={'0 0 20px 0'}>{props.titleText}</InnerTitle>
                <StyledTime>{props.timeText}</StyledTime>
                <StyledSpan>{props.spanText}</StyledSpan>
                <Paragraph padding={'0 30px 0 0'}>{props.paragraphText}</Paragraph>
                </div>
            </StyledWork>
    );
};

const StyledWork = styled.article`
    border-bottom: 2px solid #E0E0E0;
    display: flex;
    padding-bottom: 30px;
    padding-top: 25px;
    
    div {
        margin-left: 18px;
        margin-top: -10px;
    }
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
    margin-right: 28px;
    margin-bottom: 22px;
`

const StyledSpan = styled.span`
    font: 20px 'Heebo Regular', sans-serif;
    color: ${theme.colors.tagColor};
`

