import React, { CSSProperties } from "react";
import { MenuItemType } from "./Menu";
export type HeaderProps = {
    h?: string;
    fixed?: boolean;
    filter?: number;
    borderBottom?: boolean;
    logo?: string | React.ReactNode;
    name?: string | React.ReactNode;
    divider?: boolean;
    navData?: MenuItemType[];
    actived?: number;
    align?: 'start' | 'center' | 'end';
    style?: CSSProperties;
    className?: string;
};
declare const Header: React.FC<HeaderProps>;
export default Header;
