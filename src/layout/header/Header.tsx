import React from 'react';
import styled from "styled-components";
import {HeaderMenu} from "./headerMenu/HeaderMenu";



const items = ['Posts', 'Works', 'Contact']

export const Header = () => {
    return (
            <StyledHeader>
                <HeaderMenu menuItems={items}/>
            </StyledHeader>
    );
};

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
`



