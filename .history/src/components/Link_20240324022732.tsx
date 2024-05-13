import React, { CSSProperties } from 'react'
import styled from 'styled-components'
import Pop from './Pop';

export type LinkProps = {
  /* 标识链接类型 */
  status?: "default" | "primary" | "success" | "danger" | "warning";
  disabled?: boolean;
  actived?: boolean;
  pop?: React.ReactNode | string;
  children?: React.ReactNode | string;
  style?: CSSProperties;
  className?: string;
};

const Link: React.FC<LinkProps> = ({
  status = "default",
  disabled,
  actived,
  pop,
  children,
  style,
  className = "",
}) => {
  const getColor = () => {
    switch (status) {
      case "default":
        return "var(--color-link-";
      case "primary":
        return "var(--color-primary-";
      case "success":
        return "var(--color-green-";
      case "danger":
        return "var(--color-red-";
      case "warning":
        return "var(--color-orange-";
      default:
        return "var(--color-link-";
    }
  };
  return (
    <StyledLink
      className={`land-link ${actived ? "actived" : ""} ${
        disabled ? "disabled hover-pop" : ""
      } ${className}`}
      style={style}
      color={getColor()}
    >
      {children}
      {pop && <Pop content={pop} />}
    </StyledLink>
  );
};

const StyledLink = styled.a<{
    color?: string;
}>`
    position: relative;
    width: fit-content;
    font-size: 14px;
    color: ${props => `${props.color}6)`};
    cursor: pointer;
    &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: ${props => `${props.color}6)`};
        opacity: 0;
        transition: opacity 0.15s linear;
    }
    &:hover{
        color: ${props => `${props.color}7)`};
        &::before {
            opacity: 1;
            background-color: ${props => `${props.color}7)`};
        }
    }
    &:active,
    &.actived {
        color: ${props => `${props.color}8)`};
        &::before {
            background-color: ${props => `${props.color}8)`};
        }
    }
    &.disabled {
        cursor: default;
        color: ${props => `${props.color}2)`};
        &:hover::before {
            opacity: 0;
        }
    }
`

export default Link