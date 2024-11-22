import styled from "styled-components";

type ParagraphProps = {
    padding?: string
    margin?: string
}

export const Paragraph = styled.p<ParagraphProps>`
    font-size: 16px;
    font-family: 'Heebo Regular', sans-serif;
    line-height: 1.5;
    padding: ${props => props.padding || '0'};
    margin: ${props => props.margin || '0'};
`
