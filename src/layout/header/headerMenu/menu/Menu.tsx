import React from 'react';
import {S} from './../HeaderMenu_Styles'
import {observe} from "web-vitals/dist/modules/lib/observe";

const items = [
    {
        title: "Posts",
        href: "posts"
    },
    {
        title: "Works",
        href: "works"
    },
    {
        title: "Contact",
        href: "contact"
    },
   ]

type Props = {
    isMobile?: boolean
}

export const Menu: React.FC<Props> = ({isMobile = false}) => {
    return (
            <ul>
                {items.map((item, index) => {
                    return <S.MenuItem key={index}>
                        <S.NavLink
                                activeClass={"active"}
                                to={item.href}
                                smooth={true}
                                spy={true}
                                offset={isMobile ? 0 : -84}
                        >
                                {item.title}
                        </S.NavLink>
                    </S.MenuItem>
                })}
            </ul>
    );
};
