import React, { CSSProperties } from 'react';
import styled from 'styled-components';

enum PopType {
    BG = 'background',
    BORDER = 'border',
}

enum PopThemeType {
    LIGHT = 'light',
    DARK = 'dark',
}

export type PopProps = {
    type?: PopType;
    theme?: PopThemeType;
    content?: React.ReactNode | string;
    style?: CSSProperties;
    className?: string;
}

const Pop: React.FC<PopProps> = ({
    content,
    style,
    className = ''
}) => {
    return (
        <StyledBtnPop className={`land-pop ${className}`} style={style}>
            {content}
            <div className='land-pop-arrow'></div>
        </StyledBtnPop>
    )
}

const StyledBtnPop = styled.div`
  position: absolute;
  padding: 8px 12px;
  width: max-content;
  top: -48px;
  left: 50%;
  font-size: 12px;
  color: var(--color-text-3);
  border-radius: 6px;
  background-color: var(--color-bg-white);
  box-shadow: var(--boxshadow-normal);
  border: var(--border-1) solid var(--color-border-1);
  transform: translate(-50%,20%);
  opacity: 0;
  transform-origin: bottom center;
  pointer-events: none;
  transition: all .15s linear;
  .land-pop-arrow {
    display: block;
    position: absolute;
    left: 50%;
    bottom: -50%;
    transform: translate(-50%,-75%) rotate(45deg);
    width: 12px;
    height: 12px;
    border-right: var(--border-1) solid var(--color-border-1);
    border-bottom: var(--border-1) solid var(--color-border-1);
    border-radius: var(--radius-2);
    background-color: var(--color-bg-white);
  }
`

export default Pop