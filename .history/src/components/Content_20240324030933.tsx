import React, { CSSProperties, useEffect, useState } from "react";
import styled from "styled-components";

export type ContentProps = {
  children?: React.ReactNode | string;
  style?: CSSProperties;
  className?: string;
};

const Content: React.FC<ContentProps> = ({ children, style, className }) => {
  // 计算内容区域最小高度
  const [minHeight, setMinHeight] = useState<number>(0);
  const headerElem = document.querySelector(".land-header");
  const footerElem = document.querySelector(".land-footer");
  useEffect(() => {
    if (!headerElem || !footerElem) return;
    // setMinHeight(headerElem.offsetHeight + headerElem.offsetHeight);
    setMinHeight(200)

  })
  return <StyledContent className={className} style={style} minHeight={minHeight}>{children}</StyledContent>;
};

const StyledContent = styled.main<{
  minHeight?: number;
}>`
  flex: 1;
  min-height: ${props => `calc(100vh - ${props.minHeight}px)`};
  background: var(--color-bg-white);
`;

export default Content;
