import React, { CSSProperties } from "react";
export type SelectTreeProps = {
    children?: React.ReactNode | string;
    style?: CSSProperties;
    className?: string;
};
declare const SelectTree: React.FC<SelectTreeProps>;
export default SelectTree;
