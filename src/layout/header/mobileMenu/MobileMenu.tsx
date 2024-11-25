import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";


export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
            <div>
                <StyledMobileMenu>

                    <BurgerButton isOpen={false}>
                        <span></span>
                    </BurgerButton>
                    <MobileMenuPopup isOpen={false}>
                        <ul>
                            {props.menuItems.map((item, index) => {
                                return <ListItem key={index}>
                                    <Link href="">{item}</Link>
                                </ListItem>
                            })}
                        </ul>
                    </MobileMenuPopup>


                </StyledMobileMenu>
            </div>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;
    @media ${theme.media.mobile} {
        display: block;
    }
`

const ListItem = styled.li`

`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    background-color: rgba(255, 255, 255, 0.9);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 9999;
    display: none;

    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;        
    `}
    
    ul {
        display: flex;
        justify-content: flex-end;
        gap: 33px;
        padding: 27px 60px;
        flex-direction: column;
        align-items: center;
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    width: 100%;
    height: 50px;   
    z-index: 99999;
    
    span {
        display: block;
        width: 30px;
        height: 2px;
        position: absolute;      
        right: 15px;
        background-color: ${theme.colors.fontColor};
        
        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: transparent;
        `}

        &::before {
            content: '';
            width: 30px;
            height: 2px;
            left: 0;
            background-color: ${theme.colors.fontColor};
            position: absolute;
            transform: translateY(-9px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg);
        `}
       
        }

        &::after {
            content: '';
            width: 30px;
            height: 2px;
            left: 0;
            background-color: ${theme.colors.fontColor};
            position: absolute;
            transform: translateY(9px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg);
        `}
       
        }
    }
`

const Link = styled.a`
    font-family: 'Heebo Medium', sans-serif;
    font-size: 36px;
    text-decoration: none;
    color: #000;
    
    &:hover {
        color: ${theme.colors.accentColor};
    } 

`

