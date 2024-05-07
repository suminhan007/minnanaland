import React, { CSSProperties } from "react";
export type LayoutProps = {
    children?: React.ReactNode;
    style?: CSSProperties;
    className?: string;
};
declare const Layout: React.FC<LayoutProps>;
export default Layout;
