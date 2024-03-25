import React from "react";
import styled from "styled-components";

type ColorProps = {
  value?: string;
  onChange?: (e: React.UIEvent) => void;
};
const ColorPicker: React.FC<ColorProps> = ({ value, onChange }) => {
  return (
    <StyledColorPicker className="land-color">
      <input type="color" value={value} onChange={(e: any) => onChange?.(e)} />
    </StyledColorPicker>
  );
};

const StyledColorPicker = styled.div``;
export default ColorPicker;
