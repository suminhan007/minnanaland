import React, { CSSProperties } from "react";
import styled from "styled-components";
import Divider from "./Divider";
import Button from "./Button";
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
  /* 右侧按钮配置 */
  buttons?: { name: string; onClick?: () => void }[];
  style?: CSSProperties;
  className?: string;
};

const Header: React.FC<HeaderProps> = ({
  h = "64px",
  fixed,
  filter = 0,
  borderBottom = true,
  logo,
  name,
  divider = true,
  align,
  menuProps,
  buttons,
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
    >
      <div className="land-header-logo">
        {typeof logo === "string" ? <img src={logo} /> : logo}
        {divider && <Divider direction="column" lang="24px" />}
        {typeof name === "string" ? <img src={name} /> : name}
      </div>
      <StyledHeaderNav className="land-header-nav" align={align}>
        {menuProps && <Menu {...menuProps} />}
      </StyledHeaderNav>
      {buttons?.length !== 0 && (
        <div className="land-header-btns">
          {buttons?.map(btn =>
                      <Button text="登录" />

          )}
          <Button text="注册" type="background" status="primary" />
        </div>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.header<{
  height?: string;
  fixed?: boolean;
  filter?: number;
  borderBottom?: boolean;
}>`
  display: flex;
  align-items: center;
  padding: 0 24px;
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
