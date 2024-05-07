import React, { CSSProperties } from "react";
export type DatePickerProps = {
    children?: React.ReactNode | string;
    style?: CSSProperties;
    className?: string;
};
declare const DatePicker: React.FC<DatePickerProps>;
export default DatePicker;
