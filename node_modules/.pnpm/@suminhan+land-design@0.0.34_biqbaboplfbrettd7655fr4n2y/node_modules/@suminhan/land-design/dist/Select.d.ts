import React, { CSSProperties } from "react";
export type SelectProps = {
    children?: React.ReactNode | string;
    style?: CSSProperties;
    className?: string;
};
declare const Select: React.FC<SelectProps>;
export default Select;
