import React from "react";

type ColorProps = {
  value?: string;
  onChange?: (e: React) => void;
};
const ColorPicker: React.FC<ColorProps> = ({
  value,
  onChange
}) => {
  return <div> <input
  type="color"
  value={value}
  onChange={(e) => onChange?.(e)}
/></div>;
};

export default ColorPicker;
