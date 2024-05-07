import React, { CSSProperties } from "react";
export type StepsProps = {
    children?: React.ReactNode | string;
    style?: CSSProperties;
    className?: string;
};
declare const Steps: React.FC<StepsProps>;
export default Steps;
