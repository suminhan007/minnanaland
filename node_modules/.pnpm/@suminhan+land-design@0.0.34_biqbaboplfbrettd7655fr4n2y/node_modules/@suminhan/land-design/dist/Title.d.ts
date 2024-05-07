import React, { CSSProperties } from 'react';
export type TitleProps = {
    title?: string;
    type?: 'h1' | 'h2' | 'h3' | 'p';
    prefix?: string;
    sub?: string | React.ReactNode;
    style?: CSSProperties;
    className?: string;
    onClick?: () => void;
};
declare const Pop: React.FC<TitleProps>;
export default Pop;
