import React from "react";

type ColorProps = {
  value?: string;
  onChange?: (color: string) => void;
};
const ColorPicker: React.FC<ColorProps> = ({
  value,
  onChange
}) => {
  return <div> <input
  type="color"
  value={value}
  onChange={(e) => onChange}
/></div>;
};

export default ColorPicker;
