import React from "react";
import styled from "styled-components";

type ColorProps = {
  value?: string;
  onChange?: (e: React.UIEvent) => void;
};
const ColorPicker: React.FC<ColorProps> = ({ value = "#ff0000", onChange }) => {
  return (
    <StyledColorPicker className="land-color-picker" color={value}>
      <div className="land-color-trigger"></div>
      <div className="land-color-drop"></div>
    </StyledColorPicker>
  );
};

const StyledColorPicker = styled.div<{
  color?: string;
}>`
  position: relative;
  padding: 8px;
  width: 48px;
  aspect-ratio: 1;
  border-radius: 4px;
  aspect-ratio: 1;
  transition: background-color var(--transition-15) linear;
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-2);
  }
  &:active {
    background-color: var(--color-bg-3);
  }
  .land-color-trigger {
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.color};
  }
`;
export default ColorPicker;
