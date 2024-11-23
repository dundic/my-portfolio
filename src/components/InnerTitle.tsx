import styled from "styled-components";

type InnerTitleProps = {
    font?: string
    margin?: string
    padding?: string
}

export const InnerTitle = styled.h3<InnerTitleProps>`
    color: #21243D;
    font-family: 'Heebo Bold', sans-serif;
    font-size: ${props => props.font ||  '24px'};
    padding: ${props => props.padding || '0'};
    margin: ${props => props.margin || '0'};
`