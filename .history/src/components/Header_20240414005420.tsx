import React, { CSSProperties } from "react";
import styled from "styled-components";
import Divider from "./Divider";
import Menu, { MenuItemType, MenuProps } from "./Menu";
import { IconApplication } from "./Icon";

export type HeaderProps = {
  /* Header 高度 */
  h?: string;
  /* 是否固定头部 */
  fixed?: boolean;
  /* 背景透明效果数值 */
  filter?: number;
  /* 是否需要底部边框 */
  borderBottom?: boolean;
  /* 全局导航 */
  applications?: React.ReactNode;
  /* Logo */
  logo?: string | React.ReactNode;
  /* 网站名称 */
  name?: string | React.ReactNode;
  /* logo 与网站名称之间的分割线 */
  divider?: boolean;
  /* 导航项数据 */
  navData?: MenuItemType[];
  /** 导航项位置 */
  align?: "start" | "center" | "end";
  /* 导航项配置 */
  menuProps?: MenuProps;
  /* 右侧元素 */
  rightComponent?: React.ReactNode;
  /* logo 点击事件 */
  onLogoClick?: () => void;
  style?: CSSProperties;
  className?: string;
};

const Header: React.FC<HeaderProps> = ({
  h = "64px",
  fixed,
  filter = 0,
  borderBottom = true,
  applications,
  logo,
  name,
  onLogoClick,
  divider = true,
  align,
  menuProps,
  rightComponent,
  style,
  className = "",
}) => {
  return (
    <StyledHeader
      className={`land-header ${fixed ? "fixed" : ""} ${className}`}
      style={style}
      height={h}
      filter={filter}
      borderBottom={borderBottom}
      applications={Boolean(applications)}
    >
      <div className="land-header-logo" onClick={onLogoClick}>
        {applications && (
          <button
            className="land-header-application"
            onClick={(e: React.UIEvent) => e.stopPropagation()}
          >
            <IconApplication />
            <div className="land-application-drop">{applications}</div>
          </button>
        )}
        {typeof logo === "string" ? <img src={logo} /> : logo}
        {logo && divider && <Divider direction="column" lang="24px" />}
        {typeof name === "string" ? <img src={name} /> : name}
      </div>
      <StyledHeaderNav className="land-header-nav" align={align}>
        {menuProps && <Menu border={false} {...menuProps} />}
      </StyledHeaderNav>
      {rightComponent && (
        <div className="land-header-btns">{rightComponent}</div>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.header<{
  height?: string;
  fixed?: boolean;
  filter?: number;
  borderBottom?: boolean;
  applications?: boolean;
}>`
  display: flex;
  align-items: center;
  padding: 0 24px;
  padding-left: ${(props) => (props.applications ? "0" : "")};
  gap: var(--gap-32);
  width: 100vw;
  height: ${(props) => props.height};
  border-bottom: ${(props) =>
    props.borderBottom ? "1px solid var(--color-border-2)" : ""};
  background: ${(props) =>
    props.filter ? "rgba(255, 255, 255, 0.8)" : "var(--color-bg-white)"};
  backdrop-filter: ${(props) => (props.filter ? "var(--blur-small)" : "")};
  box-sizing: border-box;
  z-index: 1;
  &.fixed {
    position: absolute;
    top: 0;
    left: 0;
  }
  .land-header-logo {
    display: flex;
    align-items: center;
    gap: var(--gap-12);
    height: 100%;
    cursor: pointer;
  }
  .land-header-application {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
    height: 100%;
    background-color: var(--color-bg-1);
    &:hover .land-application-drop {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
  .land-application-drop {
    position: absolute;
    left: 12px;
    top: 100%;
    padding: var(--padding-medium);
    background-color: var(--color-bg-white);
    border-radius: var(--radius-8);
    border: var(--border-1) solid var(--color-border-1);
    transform: translate(-12px, -40%);
    opacity: 0;
    pointer-events: none;
    transition: all var(--transition-15);
    will-change: transform, opacity;
    z-index: -1;
  }
  .land-header-btns {
    display: flex;
    align-items: center;
    gap: var(--gap-12);
  }
`;

const StyledHeaderNav = styled.div<{
  align?: string;
}>`
  display: flex;
  flex: 1;
  justify-content: ${(props) => props.align};
  height: 100%;
  @media screen and (max-width: 800px) {
    width: calc(100% - 48px);
    margin: 12px 24px;
  }
`;

export default Header;
