import React, { CSSProperties } from "react";
export type PaginationProps = {
    children?: React.ReactNode | string;
    style?: CSSProperties;
    className?: string;
};
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
