import React, { CSSProperties } from "react";
import styled from "styled-components";

export type FlexProps = {
  w?: string;
  h?: string;
  /* 是否为竖直方向 */
  column?: boolean;
  /* 是否换行 */
  wrap?: boolean;
  /* 元素在主轴方向上的对齐方式 */
  justify?: "start" | "center" | "end";
  /* 元素在交叉轴方向山的对齐方式 */
  align?: "start" | "center" | "end";
  /* 间隙 */
  gap?: string | number;
  bothCenter?: boolean;
  children?: React.ReactNode;
  style?: CSSProperties;
  className?: string;
};

const Flex: React.FC<FlexProps> = ({
  w = "100%",
  h,
  column,
  wrap,
  justify = "start",
  align = "start",
  gap,
  bothCenter,
  children,
  style,
  className = "",
}) => {
  return (
    <StyledFlex
      className={className}
      style={style}
      width={w}
      height={h}
      direction={column ? "column" : "row"}
      gap={gap}
      wrap={wrap}
      justify={bothCenter ? "center" : justify}
      align={bothCenter ? "center" : align}
    >
      {children}
    </StyledFlex>
  );
};

const StyledFlex = styled.div<{
  width?: string;
  height?: string;
  direction?: string;
  gap?: string | number;
  wrap?: boolean;
  justify?: string;
  align?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  gap: ${(props) => props.gap};
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "")};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
export default Flex;
