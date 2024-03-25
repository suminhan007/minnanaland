import React, { CSSProperties } from "react";
import styled from "styled-components";

export type SwitchProps = {
  children?: React.ReactNode | string;
  style?: CSSProperties;
  className?: string;
};

const Switch: React.FC<SwitchProps> = ({ children, style, className }) => {
  return <StyledSwitch className={className} style={style}>{children}</StyledSwitch>;
};

const StyledSwitch = styled.a<{

}>`
`;

export default Switch;
