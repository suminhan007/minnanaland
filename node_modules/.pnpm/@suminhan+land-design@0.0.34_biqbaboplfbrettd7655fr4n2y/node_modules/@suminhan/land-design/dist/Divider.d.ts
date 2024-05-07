import React, { CSSProperties } from "react";
export type DividerProps = {
    direction?: "row" | "column";
    size?: number;
    lang?: string;
    margin?: number;
    type?: "solid" | "dashed";
    color?: string;
    content?: React.ReactNode | string;
    align?: "left" | "center" | "right";
    style?: CSSProperties;
    className?: string;
};
declare const Divider: React.FC<DividerProps>;
export default Divider;
