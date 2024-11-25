import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2<{padding?: string}>`
    ${font({family: 'Heebo Regular, sans-serif', Fmax: 22, Fmin: 18})};
    //font: 22px 'Heebo Regular', sans-serif;
    color: ${theme.colors.fontColor};
    padding: ${props => props.padding || '0'};
`