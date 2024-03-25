import React, { CSSProperties } from "react";
import styled from "styled-components";

export type DividerProps = {
  /* 分割线方向 */
  direction?: "row" | "column";
  /* 分割线粗细 */
  size?: number;
  /* 分割线宽度 & 高度 */
  lang?: string;
  /* 分割线上下或左右边距 */
  margin?: number;
  /* 分割线类型：实线或者虚线 */
  type?: "solid" | "dashed";
  /* 分割线颜色 */
  color?: string;
  /* 分割线包含的内容 */
  content?: React.ReactNode | string;
  /* 分割线包含内容时对齐方式 */
  align?: "left" | "center" | "right";
  style?: CSSProperties;
  className?: string;
};

const Divider: React.FC<DividerProps> = ({
  direction = "row",
  size = 1,
  lang = "100%",
  margin = 0,
  type = "solid",
  color = "var(--color-border-1)",
  content,
  align = "center",
  style,
  className = "",
}) => {
  return (
    <StyledDivider
      className={`land-divider ${className}`}
      style={{
        width: direction === "row" ? `${lang}` : `${size}px`,
        height: direction === "column" ? `${lang}` : `${size}px`,
        margin: direction === "row" ? `${margin}px 0` : `0 ${margin}px`,
        ...style,
      }}
      direction={direction}
      gap={content ? "8px" : ""}
    >
      <div
        style={{
          flex: align === "left" ? "10%" : align === "right" ? "90%" : 1,
          height: "0px",
          borderBottom:
            direction === "row" ? `${size}px ${type} ${color}` : "none",
          borderLeft:
            direction === "column" ? `${size}px ${type} ${color}` : "none",
        }}
      ></div>
      {content && (
        <>
          <div
            style={{
              fontSize: "12px",
              color: "#999",
              writingMode: direction === "column" ? "vertical-rl" : "unset",
              textOrientation: direction === "column" ? "upright" : "unset",
            }}
          >
            {content}
          </div>
          <div
            style={{
              flex: align === "left" ? "90%" : align === "right" ? "10%" : 1,
              height: "0px",
              borderBottom:
                direction === "row" ? `${size}px ${type} ${color}` : "none",
              borderLeft:
                direction === "column" ? `${size}px ${type} ${color}` : "none",
            }}
          ></div>
        </>
      )}
    </StyledDivider>
  );
};

const StyledDivider = styled.div<{
  direction?: string;
  gap?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  gap: ${(props) => props.gap};
`;
export default Divider;
