import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
            <StyledFooter>
                <FlexWrapper direction={'column'} align={'center'} justify={'center'} height={'100%'}>
                    <SocialList>
                        <SocialItem>
                            <SocialLink>
                                <Icon width={'30px'} height={'30px'} viewBox={'0 0 30 30'} iconId={'fb'}></Icon>
                            </SocialLink>
                        </SocialItem>

                        <SocialItem>
                            <SocialLink>
                                <Icon width={'30px'} height={'30px'} viewBox={'0 0 30 30'} iconId={'insta'}></Icon>
                            </SocialLink>
                        </SocialItem>

                        <SocialItem>
                            <SocialLink>
                                <Icon width={'37px'} height={'30px'} viewBox={'0 0 37 30'} iconId={'twitter'}></Icon>
                            </SocialLink>
                        </SocialItem>

                        <SocialItem>
                            <SocialLink>
                                <Icon width={'30px'} height={'30px'} viewBox={'0 0 30 30'} iconId={'linkedin'}></Icon>
                            </SocialLink>
                        </SocialItem>
                    </SocialList>
                    <Copyright>Copyright ©2020 All rights reserved</Copyright>
                </FlexWrapper>
            </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    height: 182px;
    margin-top: 82px;
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

