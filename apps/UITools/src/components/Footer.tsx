import React, { CSSProperties } from "react";
import styled from "styled-components";

export type FooterProps = {
  children?: React.ReactNode | string;
  style?: CSSProperties;
  className?: string;
};

const Footer: React.FC<FooterProps> = ({ children, style, className }) => {
  return <StyledFooter className={`land-footer ${className}`} style={style} >{children}</StyledFooter>;
};

const StyledFooter = styled.footer<{
  height?: string;
}>`
  padding: 24px;
  height: fit-content;
  width: 100%;
  background-color: var(--color-bg-1);
`;

export default Footer;
