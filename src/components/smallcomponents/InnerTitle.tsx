import styled, {css} from "styled-components";

type InnerTitleProps = {
    work?: boolean
}

export const InnerTitle = styled.h4<InnerTitleProps>`
    color: red;
    
    ${props => props.work && css<InnerTitleProps>`
    color: green;
    font-size: 30px;
    `}
`