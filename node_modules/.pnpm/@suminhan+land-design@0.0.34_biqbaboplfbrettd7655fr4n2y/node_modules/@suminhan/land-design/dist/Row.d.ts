import React, { CSSProperties } from "react";
export type RowProps = {
    children?: React.ReactNode | string;
    style?: CSSProperties;
    className?: string;
};
declare const Row: React.FC<RowProps>;
export default Row;
