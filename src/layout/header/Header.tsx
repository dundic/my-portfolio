import React from 'react';
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {S} from './Header_Styles'



const items = ['Posts', 'Works', 'Contact']

export const Header: React.FC = () => {
    return (
            <S.Header>
                <HeaderMenu menuItems={items}/>
                <MobileMenu menuItems={items}/>
            </S.Header>
    );
};




