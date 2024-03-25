import React from "react";
import styled from "styled-components";

type ColorProps = {
  value?: string;
  onChange?: (e: React.UIEvent) => void;
};
const ColorPicker: React.FC<ColorProps> = ({ value, onChange }) => {
  return (
    <StyledColorPicker className="land-color-picker">
      <div className="land-color-trigger" color={value}></div>
      <div className="land-color-drop"></div>
    </StyledColorPicker>
  );
};

const StyledColorPicker = styled.div`
  position: relative;
  padding: 8px;
  background-color: var(--color-bg-1);
  border-radius: 4px;
  aspect-ratio: 1;
  cursor: pointer;
  .land-color-trigger {
    width: 100%;
    height: ;
  }
`;
export default ColorPicker;
