import { CSSProperties } from "react";

type Props = {
    fill?: string;
    stroke?: string;
    size?: number;
    strokeWidth?: number;
    style?: CSSProperties;
    className?: string;
    onClick?: () => void;
}

export const IconArrow: React.FC<Props> = ({
    size = 12,
    fill = 'rgba(0,0,0,0.4)',
    className = 'IconArrow',
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 12 12" className={className} style={style}>
            <path d="M6.02734 8.80274C6.27148 8.80274 6.47168 8.71484 6.66211 8.51465L10.2803 4.82324C10.4268 4.67676 10.5 4.49609 10.5 4.28125C10.5 3.85156 10.1484 3.5 9.72363 3.5C9.50879 3.5 9.30859 3.58789 9.15234 3.74902L6.03223 6.9668L2.90722 3.74902C2.74609 3.58789 2.55078 3.5 2.33105 3.5C1.90137 3.5 1.55469 3.85156 1.55469 4.28125C1.55469 4.49609 1.62793 4.67676 1.77441 4.82324L5.39258 8.51465C5.58789 8.71973 5.78808 8.80274 6.02734 8.80274Z" fill={fill}></path>
        </svg>
    )
}

export const IconFile: React.FC<Props> = ({
    size = 16,
    stroke = '#999',
    strokeWidth = 4,
    className = 'IconFile',
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={style}>
            <path d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" />
            <path d="M43 22H5" stroke={stroke} strokeWidth="4" strokeLinejoin="round" />
        </svg>

    )
}

export const IconMore: React.FC<Props> = ({
    size = 16,
    fill = '#999',
    className = 'IconMore',
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={style}>
            <circle cx="12" cy="24" r="4" fill={fill} />
            <circle cx="24" cy="24" r="4" fill={fill} />
            <circle cx="36" cy="24" r="4" fill={fill} />
        </svg>
    )
}

export const IconAdd: React.FC<Props> = ({
    size = 16,
    stroke = '#999',
    s
    className = 'IconAdd',
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={style}>
            <path d="M24.0605 10L24.0239 38" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 24L38 24" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconClear: React.FC<Props> = ({
    size = 16,
    color = '#999',
    className = 'IconClear',
    style,
    onClick
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={style} onClick={onClick}>
            <path d="M14 14L34 34" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 34L34 14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
