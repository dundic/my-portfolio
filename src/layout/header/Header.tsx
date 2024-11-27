import React from 'react';

import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from './Header_Styles'
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";



const items = ['Posts', 'Works', 'Contact']

export const Header: React.FC = () => {

    const[width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 576;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
            <S.Header>
                {width < breakpoint ?  <MobileMenu menuItems={items}/>
                                    :  <DesktopMenu menuItems={items}/>
                }
            </S.Header>
    );
};




