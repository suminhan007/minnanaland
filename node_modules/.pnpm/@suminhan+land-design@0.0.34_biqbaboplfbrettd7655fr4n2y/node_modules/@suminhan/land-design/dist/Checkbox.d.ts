import React, { CSSProperties } from "react";
export type CheckboxProps = {
    children?: React.ReactNode | string;
    style?: CSSProperties;
    className?: string;
};
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
