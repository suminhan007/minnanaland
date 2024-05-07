import React, { CSSProperties } from "react";
export type ContentProps = {
    children?: React.ReactNode | string;
    style?: CSSProperties;
    className?: string;
};
declare const Content: React.FC<ContentProps>;
export default Content;
