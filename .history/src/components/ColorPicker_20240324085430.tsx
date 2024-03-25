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
  width: 48px;
  aspect-ratio: 1;
  aspect-ratio: 1;
  cursor: pointer;
  .land-color-trigger {
    width: 100%;
    height: 100%;
    border: 8px solid var(--color-bg-1);
    border-radius: 4px;
    background-color: ${(props) => props.color};
    &:hover {
    border-color: var(--color-bg-2);
    }
    &:active {
      border-color: var(--color-bg-3);
    }
  }
`;
export default ColorPicker;
