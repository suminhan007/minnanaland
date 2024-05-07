import React, { CSSProperties } from "react";
export type ColorPickerProps = {
    children?: React.ReactNode | string;
    style?: CSSProperties;
    className?: string;
};
declare const ColorPicker: React.FC<ColorPickerProps>;
export default ColorPicker;
