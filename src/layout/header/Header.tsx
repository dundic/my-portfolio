import React from 'react';

import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from './Header_Styles'
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";

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
                {width < breakpoint ?  <MobileMenu/>
                                    :  <DesktopMenu/>
                }
            </S.Header>
    );
};




