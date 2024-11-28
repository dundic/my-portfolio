import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    //background-color: ${theme.colors.secondaryColor};
    // border-bottom: 2px solid #E0E0E0;
    background-color: #fff;
`

export const S = {
    Header
}