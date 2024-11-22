import styled from "styled-components";

type InnerTitleProps = {
    font?: string
    margin?: string
    padding?: string
}

export const InnerTitle = styled.h3<InnerTitleProps>`
    color: #21243D;
    font-family: 'Heebo Bold', sans-serif;
    line-height: 1.5;
    font-size: ${props => props.font ||  '24px'};
    padding: ${props => props.padding || '0'};
`