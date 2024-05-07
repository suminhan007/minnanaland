import React, { CSSProperties } from "react";
export type AnchorType = {
    key?: number;
    href?: string;
    target?: string;
    text?: string;
    replace?: boolean;
};
export type AnchorProps = {
    fixed?: boolean;
    anchorData?: AnchorType[];
    style?: CSSProperties;
    className?: string;
};
declare const LandAnchor: React.FC<AnchorProps>;
export default LandAnchor;
