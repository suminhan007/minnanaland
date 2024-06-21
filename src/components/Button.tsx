import React, { CSSProperties, useMemo } from 'react'
import styled from 'styled-components'
// import { IconLoading } from './Icon';
import Pop, { PopProps } from './Pop';

export type ButtonProps = {
  /* 按钮主要文案 */
  text?: string;
  /* 按钮次要文案 */
  subText?: string;
  /* 按钮图标: 若仅指定 icon 而未指定文案，则渲染为按钮图标（宽高一致） */
  icon?: React.ReactNode;
  /* 设置按钮宽度&高度：设置后 padding 将不起作用 */
  width?: string;
  height?: string;
  /* 按钮文字对齐方式 */
  justify?: "center" | "start" | "end";
  /* 按钮风格 */
  type?: "text" | "background" | "border" | "line";
  /* 按钮状态 */
  status?: "default" | "primary" | "warning" | "danger" | "success";
  /* 是否禁用 */
  disabled?: boolean;
  /* 是否记载中 */
  loading?: boolean;
  /* 按钮气泡 */
  pop?: React.ReactNode | string;
  /* 气泡配置 */
  PopProps?: PopProps;
  /* 跳转链接：按钮作为 a 标签 */
  href?: string;
  /* a 标签对应的 target 属性 */
  target?: "_self" | "_blank" | "_top" | "_parent";
  /* 按钮点击事件 */
  onClick?: (e: React.UIEvent) => void;
  style?: CSSProperties;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  text,
  subText,
  icon,
  width,
  height,
  justify = "center",
  type = "border",
  status = "default",
  disabled,
  // loading,
  pop,
  PopProps,
  href,
  target = "_blank",
  onClick,
  style,
  className = "",
}) => {
  /* 仅指定 icon 属性时 iconOnly 默认为true */
  const iconOnly = useMemo(() => {
    if (icon) {
      if (!text && !subText) return true;
    } else {
      return false;
    }
  }, [icon, text, subText]);

  // 配置按钮颜色
  const buttonColorConfig = useMemo(() => {
    switch (status) {
      case "success":
        return "var(--color-green-";
      case "warning":
        return "var(--color-orange-";
      case "danger":
        return "var(--color-red-";
      case "primary":
        return "var(--color-primary-";
      default:
        return "";
    }
  }, [status]);
  return (
    <>
      {!href ? (
        <StyledButton
          className={`land-button ${type} ${status} ${iconOnly ? "iconOnly" : ""
            } ${disabled ? "disabled" : ""} ${pop ? "hover-pop" : ""
            } ${className}`}
          style={style}
          width={width}
          height={height}
          justify={justify}
          color={buttonColorConfig}
          onClick={(e: React.UIEvent) => onClick?.(e)}
        >
          {icon}
          {!iconOnly && (
            <div>
              <span>{text}</span>
              {subText && <span className="subText">{subText}</span>}
            </div>
          )}
          {pop && <Pop content={pop} {...PopProps} />}
        </StyledButton>
      ) : (
        <StyleButtonLink
          href={href}
          target={target}
          className={`land-button ${type} ${status} ${iconOnly ? "iconOnly" : ""
            } ${disabled ? "disabled" : ""} ${pop ? "hover-pop" : ""
            } ${className}`}
          style={style}
          width={width}
          height={height}
          justify={justify}
          color={buttonColorConfig}
          onClick={(e: React.UIEvent) => onClick?.(e)}
        >
          {icon}
          {!iconOnly && (
            <div>
              <span>{text}</span>
              <span className="subText">{subText}</span>
            </div>
          )}
          {pop && <Pop content={pop} {...PopProps} />}
        </StyleButtonLink>
      )}
    </>
  );
};

const StyledButton = styled.div<{
  justify?: any;
  color?: string;
  width?: string;
  height?: string;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify};
  gap: var(--gap-4);
  padding: ${(props) =>
    props.width && props.width !== "100%" ? "" : "var(--padding-medium)"};
  width: ${(props) => (props.width ? props.width : "fit-content")};
  height: ${(props) => (props.height ? props.height : "fit-content")};
  color: ${(props) =>
    props.color ? `${props.color}6)` : "var(--color-text-2)"};
  &:hover {
    color: ${(props) =>
    props.color ? `${props.color}5)` : "var(--color-text-3)"};
  }
  &:active {
    color: ${(props) =>
    props.color ? `${props.color}7)` : "var(--color-text-1)"};
  }
  font-size: var(--font-content-medium);
  border-radius: var(--radius-6);
  box-sizing: border-box;
  transition: all var(--transition-15) linear;
  cursor: pointer;
  .subText {
    margin-left: 4px;
    font-size: var(--font-content-small);
    opacity: var(--opacity-68);
  }

  &.text,
  &.border.default {
    background-color: var(--color-bg-white);
    &:hover {
      background-color: var(--color-bg-1);
    }
    &:active {
      background-color: var(--color-bg-2);
    }
  }

  &.background {
    color: var(--color-text-white);
    background-color: ${(props) => `${props.color}6)`};
    &.default {
      background-color: var(--color-text-2);
      &:hover {
        background-color: var(--color-text-1);
      }
      &:active {
        background-color: var(--color-text-1);
      }
    }
    &:hover {
      background-color: ${(props) => `${props.color}7)`};
    }
    &:active {
      background-color: ${(props) => `${props.color}8)`};
    }
  }

  &.border {
    padding: 7px 15px;
    border: ${(props) => `var(--border-1) solid ${props.color}4)`};
    &.default {
      border-color: var(--color-border-2);
    }
    &:hover {
      background-color: ${(props) => `${props.color}1)`};
    }
    &:active {
      background-color: ${(props) => `${props.color}2)`};
    }
  }

  &.line {
    border-bottom: var(--border-1) solid transparent;
    border-color: ${(props) => `${props.color}4)`};
    border-radius: 0;
    &.default {
      border-color: var(--color-text-2);
    }
    &:hover {
      border-color: ${(props) => `${props.color}5)`};
    }
    &:active {
      border-color: ${(props) => `${props.color}7)`};
    }
  }

  &.iconOnly {
    padding: 0;
    width: 36px;
    height: 36px;
  }
  &.disabled {
    background-color: ${(props) => `${props.color}3)`};
    cursor: default;
    &:hover,
    &:active{
      background-color: ${(props) => `${props.color}3)`};
    }
  }
`;

const StyleButtonLink = styled.a<{
  justify?: any;
  color?: string;
  width?: string;
  height?: string;
}>`
  ${StyledButton};
  text-decoration: none;
`;

export default Button
