import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2<{padding?: string}>`
    font: 22px 'Heebo Regular', sans-serif;
    color: ${theme.colors.fontColor};
    padding: ${props => props.padding || '0'};
`