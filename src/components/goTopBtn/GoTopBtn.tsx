import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll";

export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])


    return (
            <>
                {showBtn && (
                        <StyledGoTopBtn onClick={() => {
                            scroll.scrollToTop()
                        }}>
                            <Icon iconId={'arrowGoTop'} height={'15'} width={'16'} viewBox={'0 0 16 15'}/>
                        </StyledGoTopBtn>
                )}
            </>
    );
};

const StyledGoTopBtn = styled.button`
    background-color: #E0E0E0;
    padding: 8px;
    position: fixed;
    bottom: 30px;
    right: 15px;

    &:hover {
        background-color: #afadad;
    }

`

