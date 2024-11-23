import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";


export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
            <div>
                <StyledHeaderMenu>
                    <ul>
                        {props.menuItems.map((item, index) => {
                            return <ListItem key={index}>
                                <Link href="">{item}</Link>
                            </ListItem>
                        })}
                    </ul>

                </StyledHeaderMenu>
            </div>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        justify-content: flex-end;
        gap: 33px; 
        padding: 27px 60px;
    }
`

const ListItem = styled.li`

`

const Link = styled.a`
    font-family: 'Heebo Medium', sans-serif;
    font-size: 20px;
    text-decoration: none;
    color: #000;
    
    &:hover {
        color: ${theme.colors.accentColor};
    } 

`