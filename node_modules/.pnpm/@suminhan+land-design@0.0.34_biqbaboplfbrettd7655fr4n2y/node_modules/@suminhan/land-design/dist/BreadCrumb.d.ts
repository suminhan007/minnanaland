import React, { CSSProperties } from "react";
export type BreadCrumbProps = {
    children?: React.ReactNode | string;
    style?: CSSProperties;
    className?: string;
};
declare const BreadCrumb: React.FC<BreadCrumbProps>;
export default BreadCrumb;
