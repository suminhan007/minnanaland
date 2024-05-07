import React, { CSSProperties } from 'react';
declare enum PopType {
    BG = "background",
    BORDER = "border"
}
declare enum PopThemeType {
    LIGHT = "light",
    DARK = "dark"
}
export type PopProps = {
    type?: PopType;
    theme?: PopThemeType;
    content?: React.ReactNode | string;
    style?: CSSProperties;
    className?: string;
};
declare const Pop: React.FC<PopProps>;
export default Pop;
