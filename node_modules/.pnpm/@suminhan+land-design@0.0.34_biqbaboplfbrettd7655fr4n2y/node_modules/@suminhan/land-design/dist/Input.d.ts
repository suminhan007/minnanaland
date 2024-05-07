import React, { CSSProperties } from "react";
export type InputProps = {
    children?: React.ReactNode | string;
    style?: CSSProperties;
    className?: string;
};
declare const Input: React.FC<InputProps>;
export default Input;
