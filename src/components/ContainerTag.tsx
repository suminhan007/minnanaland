import { CSSProperties } from "react";
import styled from "styled-components";

export type ContainerTagProps = {
  placement?: "lt" | "lb" | "rt" | "rb";
  content?: string | React.ReactNode;
  children?: React.ReactNode;
  gap?: number;
  radius?: number | string;
  /** hover时隐藏 */
  hover?: boolean;
  /** hover时显示 */
  hoverShow?: boolean;
  innerStyle?: CSSProperties;
  innerClassName?: string;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
};

export const ContainerTag: React.FC<ContainerTagProps> = ({
  content,
  placement = "lb",
  style,
  className = "",
  children,
  gap = 8,
  radius = "4px",
  hover = false,
  hoverShow = false,
  innerStyle,
  innerClassName = "",
  onClick,
}) => (
  <StyleTagWrap
    className={`StyleTagWrap relative flex items-center justify-center ${className}`}
    style={style}
    hover={hover}
    hoverShow={hoverShow}
  >
    {children}
    {content && (
      <StyleContainerTag
        className={`absolute p-8 ${
          onClick ? "cursor-pointer" : ""
        } ${innerClassName}`}
        style={{
          top: placement === "lt" || placement === "rt" ? gap : "auto",
          bottom: placement === "lb" || placement === "rb" ? gap : "auto",
          left: placement === "lt" || placement === "lb" ? gap : "auto",
          right: placement === "rt" || placement === "rb" ? gap : "auto",
          background: "rgba(255, 255, 255, 0.8)",
          borderRadius: typeof radius === "number" ? `${radius}px` : radius,
          ...innerStyle,
        }}
        onClick={onClick}
        hoverShow={hoverShow}
      >
        {content}
      </StyleContainerTag>
    )}
  </StyleTagWrap>
);

const StyleContainerTag = styled.div<{
  hoverShow?: boolean;
}>`
  opacity: ${(props) => (props.hoverShow ? 0 : 1)};
  pointer-events: none;
  font-family: inherit;
  backdrop-filter: blur(10px);
  z-index: 11;
  transition: opacity 0.2s linear;
`;

const StyleTagWrap = styled.div<{
  hover?: boolean;
  hoverShow?: boolean;
}>`
  &:hover {
    ${StyleContainerTag} {
      opacity: ${(props) => (props.hover ? 0 : 1)};
      pointer-events: ${(props) => (props.hoverShow ? "all" : "none")};
    }
  }
`;
