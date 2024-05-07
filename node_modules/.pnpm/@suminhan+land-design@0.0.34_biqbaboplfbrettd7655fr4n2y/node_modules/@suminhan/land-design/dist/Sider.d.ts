import React, { CSSProperties } from "react";
export type SiderProps = {
    collapsed?: boolean;
    width?: string | number;
    fixed?: boolean;
    placement?: 'left' | 'right';
    children?: React.ReactNode | string;
    style?: CSSProperties;
    className?: string;
};
declare const Sider: React.FC<SiderProps>;
export default Sider;
