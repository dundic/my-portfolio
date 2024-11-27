import {theme} from "./Theme";

type FontProps = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmax?: number
    Fmin?: number
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontProps) => `
    font-family: ${family || 'Heebo'};
    font-weight: ${weight || 'normal'};
    color: ${color || theme.colors.fontColor};
    line-height: ${lineHeight || 1.5};
    font-size: clamp(${Fmin}px, calc( (100vw - 360px) / (1152 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px ), ${Fmax}px) ;
`
