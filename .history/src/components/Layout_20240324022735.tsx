import React, { CSSProperties } from "react";
import styled from "styled-components";

export type LayoutProps = {
  children?: React.ReactNode;
  style?: CSSProperties;
  className?: string;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  style,
  className,
}) => {
  return (
    <StyledLayout
      className={className}
      style={style}
    >
      {children}
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
export default Layout;
