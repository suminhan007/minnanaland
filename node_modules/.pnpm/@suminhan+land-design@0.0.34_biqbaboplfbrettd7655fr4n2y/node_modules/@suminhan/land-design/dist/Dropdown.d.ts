import React, { CSSProperties } from "react";
export type DropdownProps = {
    children?: React.ReactNode | string;
    style?: CSSProperties;
    className?: string;
};
declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
