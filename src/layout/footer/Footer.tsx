import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from './Footer_Styles'

export const Footer: React.FC = () => {
    return (
            <S.Footer>
                <FlexWrapper direction={'column'} align={'center'} justify={'center'} height={'100%'}>
                    <S.SocialList>
                        <S.SocialItem>
                            <S.SocialLink>
                                <Icon width={'30px'} height={'30px'} viewBox={'0 0 30 30'} iconId={'fb'}></Icon>
                            </S.SocialLink>
                        </S.SocialItem>

                        <S.SocialItem>
                            <S.SocialLink>
                                <Icon width={'30px'} height={'30px'} viewBox={'0 0 30 30'} iconId={'insta'}></Icon>
                            </S.SocialLink>
                        </S.SocialItem>

                        <S.SocialItem>
                            <S.SocialLink>
                                <Icon width={'37px'} height={'30px'} viewBox={'0 0 37 30'} iconId={'twitter'}></Icon>
                            </S.SocialLink>
                        </S.SocialItem>

                        <S.SocialItem>
                            <S.SocialLink>
                                <Icon width={'30px'} height={'30px'} viewBox={'0 0 30 30'} iconId={'linkedin'}></Icon>
                            </S.SocialLink>
                        </S.SocialItem>
                    </S.SocialList>
                    <S.Copyright>Copyright ©2020 All rights reserved</S.Copyright>
                </FlexWrapper>
            </S.Footer>
    );
};
