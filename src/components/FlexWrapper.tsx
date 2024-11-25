import styled from "styled-components";

type FlexWrapperProps = {
    height?: string
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
    display: flex;
    height: ${props => props.height};
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    gap: ${props => props.gap || 0};
    

`