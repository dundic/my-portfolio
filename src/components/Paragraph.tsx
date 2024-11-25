import styled from "styled-components";

type ParagraphProps = {
    padding?: string
    margin?: string
    width?: string
}

export const Paragraph = styled.p<ParagraphProps>`
    font-size: 16px;
    font-family: 'Heebo Regular', sans-serif;
    padding: ${props => props.padding || '0'};
    margin: ${props => props.margin || '0'};
    width: ${props => props.width || '100%'};
`
