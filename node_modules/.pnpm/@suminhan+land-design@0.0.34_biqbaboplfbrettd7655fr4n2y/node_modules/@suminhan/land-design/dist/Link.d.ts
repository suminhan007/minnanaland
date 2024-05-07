import React, { CSSProperties } from 'react';
export type LinkProps = {
    status?: "default" | "primary" | "success" | "danger" | "warning";
    disabled?: boolean;
    actived?: boolean;
    pop?: React.ReactNode | string;
    children?: React.ReactNode | string;
    style?: CSSProperties;
    className?: string;
};
declare const Link: React.FC<LinkProps>;
export default Link;
