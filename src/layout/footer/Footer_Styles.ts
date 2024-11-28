import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Footer = styled.footer`
    position: relative;
    height: 182px;
    margin-top: 82px;

    @media ${theme.media.mobile} {
        margin-top: 150px;
    }
`

const SocialList = styled.ul`
    display: flex;
    gap: 34px;
`

const SocialItem = styled.li`
    cursor: pointer;

    &:hover {
        opacity: 0.9;
        transform: translateY(-2px);
`

const SocialLink = styled.a`
    &:hover {
        opacity: 0.7;
        transform: translateY(120px);
    }

`

const Copyright = styled.small`
    margin-top: 20px;
    font: 14px 'Heebo Regular', sans-serif;
`

export const S = {
    Footer,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright
}
