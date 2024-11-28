import React from 'react';
import styled from "styled-components";
import {Work} from "./work/Work";
import projectImg1 from './../../../assets/img/proj-1.webp'
import projectImg2 from './../../../assets/img/proj-2.webp'
import projectImg3 from './../../../assets/img/proj-3.webp'
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import { Fade} from 'react-awesome-reveal'


export const Works: React.FC = () => {
    return (
            <StyledWorks id={"works"}>
                <Container>
                <SectionTitle>Featured works</SectionTitle>
                    <Fade cascade={true} damping={0.2}>
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
                    </Fade>
                </Container>
            </StyledWorks>
    );
};

const StyledWorks = styled.section`
    position: relative;
    background-color: ${theme.colors.bgColor};
    padding-top: 30px;
    
    @media ${theme.media.mobile} {
        ${SectionTitle} {
            text-align: center;
            //margin-top: 15px;
        }
    }
`
















