import React from "react";
import styled from "styled-components";
type CheckedContainerProps = {
  checked?: boolean;
  gap?: number;
  strokeWidth?: number;
  radius?: number;
  children?: React.ReactNode;
};
const CheckedContainer: React.FC<CheckedContainerProps> = ({
  checked = false,
  gap = 2,
  strokeWidth = 2,
  radius = 6,
  children,
}) => {
  return (
    <StyleCheckedContainer
      className="land-checked-container"
      checked={checked}
      size={strokeWidth}
      radius={radius}
      gap={gap}
    >
      {children}
    </StyleCheckedContainer>
  );
};
const StyleCheckedContainer = styled.div<{
  gap: number;
  checked?: boolean;
  size?: number;
  radius?: number;
}>`
  position: relative;
  z-index: 0;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: ${(props) => `-${props.gap * 2}px`};
    left: ${(props) => `-${props.gap * 2}px`};
    width: ${(props) => `calc(100% + ${props.gap * 4}px)`};
    height: ${(props) => `calc(100% + ${props.gap * 4}px)`};
    border: ${(props) => `${props.size}px solid var(--color-primary-6)`};
    border-radius: ${(props) => `${props.radius}px`};
    opacity: ${(props) => (props.checked ? 1 : 0)};
    transition: opacity 0.2s linear;
    pointer-events: none;
  }
`;
export default CheckedContainer;
