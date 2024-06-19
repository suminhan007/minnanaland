import React, { CSSProperties, useEffect, useState } from "react";
import styled from "styled-components";

export type ContentProps = {
  children?: React.ReactNode | string;
  style?: CSSProperties;
  className?: string;
};

const Content: React.FC<ContentProps> = ({ children, style, className }) => {
  // 计算内容区域最小高度
  const [minHeight, setMinHeight] = useState<number>(132);
  const headerElem = document.querySelector(".land-header");
  const footerElem = document.querySelector(".land-footer");
  useEffect(() => {
    let headerHeight: number;
    let footerHeight: number;
    headerElem ? headerHeight = headerElem.getBoundingClientRect().height : headerHeight = 0;
    footerElem ? footerHeight = footerElem.getBoundingClientRect().height : footerHeight = 0;
    setMinHeight(
      headerHeight + footerHeight
    );
  });
  return (
    <StyledContent className={className} style={style} minHeight={minHeight}>
      {children}
    </StyledContent>
  );
};

const StyledContent = styled.main<{
  minHeight?: number;
}>`
  flex: 1;
  min-height: ${(props) => `calc(100vh - ${props.minHeight}px)`};
  background: var(--color-bg-white);
`;

export default Content;
