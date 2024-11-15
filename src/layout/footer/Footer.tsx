import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
            <StyledFooter>
                <FlexWrapper direction={'column'}  align={'center'}>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon width={'30px'} height={'30px'} viewBox={'0 0 30 30'}  iconId={'fb'}></Icon>
                        </SocialLink>
                        <SocialLink>
                            <Icon width={'30px'} height={'30px'} viewBox={'0 0 30 30'} iconId={'insta'}></Icon>
                        </SocialLink>
                        <SocialLink>
                            <Icon width={'30px'} height={'30px'} viewBox={'0 0 30 30'} iconId={'twitter'}></Icon>
                        </SocialLink>
                        <SocialLink>
                            <Icon width={'30px'} height={'30px'} viewBox={'0 0 30 30'} iconId={'linkedin'}></Icon>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>Copyright ©2020 All rights reserved </Copyright>
                </FlexWrapper>
            </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    min-height: 20vh;
    background-color: rgba(0, 0, 0, 0.3);
`

const SocialList = styled.ul`
display: flex;
    gap: 30px;
`

const SocialItem = styled.li`
    
`

const SocialLink = styled.a`
    margin: 10px;
    list-style-type: none;
`

const Copyright = styled.small`

`

