import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/smallcomponents/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import projectImg1 from './../../../assets/img/proj-1.webp'
import projectImg2 from './../../../assets/img/proj-2.webp'
import projectImg3 from './../../../assets/img/proj-3.webp'


export const Works = () => {
    return (
            <StyledWorks>
                <SectionTitle>Featured works</SectionTitle>
                <FlexWrapper direction={'column'} justify={'space-around'}>
                    <Work src={projectImg1}
                          titleText={'Designing Dashboards'}
                          timeText={'2020'}
                          spanText={'Dashboard'}
                          paragraphText={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                    />
                    <Work src={projectImg2}
                          titleText={'Vibrant Portraits of 2020'}
                          timeText={'2018'}
                          spanText={'Illustration'}
                          paragraphText={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                    />
                    <Work src={projectImg3}
                          titleText={'36 Days of Malayalam type'}
                          timeText={'2018'}
                          spanText={'Typography'}
                          paragraphText={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                    />


                </FlexWrapper>
            </StyledWorks>
    );
};

const StyledWorks = styled.section`
    background-color: lightgreen;
    min-height: 50vh;
    
`

