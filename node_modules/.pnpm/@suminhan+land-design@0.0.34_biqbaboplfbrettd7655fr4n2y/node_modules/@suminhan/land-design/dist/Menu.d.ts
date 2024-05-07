import React, { CSSProperties } from "react";
export declare enum ClickType {
    SELF = "self",
    OTHERS = "others",
    SIMPLE = "simple",
    DISABLED = "disabled"
}
export type MenuItemType = {
    key: number;
    title?: string;
    subTitle?: string;
    icon?: string | React.ReactNode;
    isNew?: string | boolean;
    href?: string;
    clickType: ClickType;
    dropData?: MenuItemType[];
};
export type MenuProps = {
    actived?: number;
    data?: MenuItemType[];
    direction?: "row" | "column";
    theme?: "dot" | "background" | "line";
    border?: boolean;
    itemStyle?: CSSProperties;
    itemClassName?: string;
    style?: CSSProperties;
    className?: string;
};
declare const Menu: React.FC<MenuProps>;
export default Menu;
