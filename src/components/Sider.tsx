import React, { CSSProperties } from "react";
import styled from "styled-components";

export type SiderProps = {
  /* 是否收起 */
  collapsed?: boolean;
  /* 侧边栏宽度 */
  width?: string | number;
  /* 是否固定展示 */
  fixed?: boolean;
  /* sider 位置 */
  placement?: 'left' | 'right';
  children?: React.ReactNode | string;
  style?: CSSProperties;
  className?: string;
};

const Sider: React.FC<SiderProps> = ({ collapsed, width, fixed, placement, children, style, className }) => {
  return <StyledSider
    className={className}
    style={style}
    fixed={fixed}
    collapsed={collapsed}
    width={typeof width === 'number' ? `${width}px` : width}
    placement={placement}
  >
    {children}
  </StyledSider>;
};

const StyledSider = styled.aside<{
  fixed?: boolean;
  collapsed?: boolean;
  width?: string;
  placement?: 'left' | 'right';
}>`
  padding: 24px;
  position: ${props => props.fixed ? 'fixed' : ''};
  width: ${props => props.collapsed ? '0px' : props.width};
  background: var(--color-bg-white);
  border-left: ${props => props.placement === 'right' ? 'var(--border-1) solid var(--color-border-2)' : ''};
  border-right: ${props => props.placement === 'left' ? 'var(--border-1) solid var(--color-border-2)' : ''};
`;

export default Sider;
