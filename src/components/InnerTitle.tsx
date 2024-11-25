import styled from "styled-components";
import {font} from "../styles/Common";

type InnerTitleProps = {
    font?: string
    margin?: string
    padding?: string
}

export const InnerTitle = styled.h3<InnerTitleProps>`
    ${font({family: 'Heebo Bold, sans-serif', color: '#21243D',  weight: 600,  Fmax: 26, Fmin: 22})};
    padding: ${props => props.padding || '0'};
    margin: ${props => props.margin || '0'};
`