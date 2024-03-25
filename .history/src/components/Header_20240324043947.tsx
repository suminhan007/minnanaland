import React, { CSSProperties } from "react";
import styled from "styled-components";
import Divider from "./Divider";
import Menu, { MenuItemType, MenuProps } from "./Menu";

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
  divider = true,
  align,
  menuProps,
  rightComponent,
  style,
  className,
}) => {
  return (
    <StyledHeader
      className={`land-header ${fixed ? "fixed" : ""} ${className}`}
      style={style}
      height={h}
      filter={filter}
      borderBottom={borderBottom}
      globalMenu={Boolean(applications)}
    >
      <div className="land-header-logo">
        {globalMenu && (
          <div className="land-header-global">
            <svg
              width="16"
              height="16"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z"
                fill="#202020"
              />
              <path
                d="M24 14C26.2091 14 28 12.2091 28 10C28 7.79086 26.2091 6 24 6C21.7909 6 20 7.79086 20 10C20 12.2091 21.7909 14 24 14Z"
                fill="#202020"
              />
              <path
                d="M38 14C40.2091 14 42 12.2091 42 10C42 7.79086 40.2091 6 38 6C35.7909 6 34 7.79086 34 10C34 12.2091 35.7909 14 38 14Z"
                fill="#202020"
              />
              <path
                d="M10 28C12.2091 28 14 26.2091 14 24C14 21.7909 12.2091 20 10 20C7.79086 20 6 21.7909 6 24C6 26.2091 7.79086 28 10 28Z"
                fill="#202020"
              />
              <path
                d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z"
                fill="#202020"
              />
              <path
                d="M38 28C40.2091 28 42 26.2091 42 24C42 21.7909 40.2091 20 38 20C35.7909 20 34 21.7909 34 24C34 26.2091 35.7909 28 38 28Z"
                fill="#202020"
              />
              <path
                d="M10 42C12.2091 42 14 40.2091 14 38C14 35.7909 12.2091 34 10 34C7.79086 34 6 35.7909 6 38C6 40.2091 7.79086 42 10 42Z"
                fill="#202020"
              />
              <path
                d="M24 42C26.2091 42 28 40.2091 28 38C28 35.7909 26.2091 34 24 34C21.7909 34 20 35.7909 20 38C20 40.2091 21.7909 42 24 42Z"
                fill="#202020"
              />
              <path
                d="M38 42C40.2091 42 42 40.2091 42 38C42 35.7909 40.2091 34 38 34C35.7909 34 34 35.7909 34 38C34 40.2091 35.7909 42 38 42Z"
                fill="#202020"
              />
            </svg>
          </div>
        )}
        {globalMenu && divider && <Divider direction="column" lang="24px" />}
        {typeof logo === "string" ? <img src={logo} /> : logo}
        {logo && divider && <Divider direction="column" lang="24px" />}
        {typeof name === "string" ? <img src={name} /> : name}
      </div>
      <StyledHeaderNav className="land-header-nav" align={align}>
        {menuProps && <Menu {...menuProps} />}
      </StyledHeaderNav>
      <div className="land-header-btns">{rightComponent}</div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header<{
  height?: string;
  fixed?: boolean;
  filter?: number;
  borderBottom?: boolean;
  globalMenu?: boolean;
}>`
  display: flex;
  align-items: center;
  padding: 0 24px;
  padding-left: ${(props) => (props.globalMenu ? "0" : "")};
  gap: var(--gap-32);
  width: 100%;
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
  .land-header-global {
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 0 24px; */
    aspect-ratio: 1;
    height: 100%;
    background-color: var(--color-bg-1);
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
`;

export default Header;
