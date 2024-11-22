import styled from "styled-components";

type SectionTitleProps = {
    padding?: string
}

export const SectionTitle = styled.h2<SectionTitleProps>`
    font: 22px 'Heebo Regular', sans-serif;
    color: #21243D;
    padding: ${props => props.padding || '0'};
`