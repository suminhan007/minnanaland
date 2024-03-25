import React from "react";
import styled from "styled-components";

type ColorProps = {
  value?: string;
  onChange?: (e: React.UIEvent) => void;
};
const ColorPicker: React.FC<ColorProps> = ({ value, onChange }) => {
  return (
    <StyledColorPicker className="land-color-picker">
      <input type="color" value={value} onChange={(e: any) => onChange?.(e)} />
    </StyledColorPicker>
  );
};

const StyledColorPicker = styled.div`
pad
  background-color: var(--color-bg-1);
  border-radius: 4px;
  aspect-ratio: 1;
  cursor: pointer;
  input {
    appearance: none;
    aspect-ratio: 1;
  }
`;
export default ColorPicker;
