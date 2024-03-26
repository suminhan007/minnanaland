import React, { useState, useMemo } from "react";
import styled from "styled-components";
import Input from "./Input";
import tinycolor from 'tinycolor2'
import Flex from "./Flex";

type ColorProps = {
  value?: string;
  size?: string | number;
  onChange?: (e: React.UIEvent) => void;
};
const ColorPicker: React.FC<ColorProps> = ({
  value = "#ff0000",
  size = 40,
  onChange,
}) => {

  return (
    <StyledColorPicker
      type="color"
      value={value}
      size={typeof size === 'number' ? `${size}px` : size}
    >

    </StyledColorPicker>
  );
};

const StyledColorPicker = styled.input<{
  color?: string;
  size?: string;
}>`
  position: relative;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  appearance: none;
  border: none;
  outline: none;
  border-radius: 4px;
  background: var(--color-bg-1);
  cursor: pointer;
  vertical-align: top;
  cursor: pointer;
  &:hover {
    background: var(--color-bg-2);
  }
  &:active {
    background: var(--color-bg-3);
  }
`;

export default ColorPicker;
