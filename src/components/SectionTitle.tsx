import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2<{padding?: string; margin?: string}>`
    ${font({family: 'Heebo Regular, sans-serif', Fmax: 22, Fmin: 18})};
    color: ${theme.colors.fontColor};
    padding: ${props => props.padding || '0'};
    margin: ${props => props.margin || '0'}
`