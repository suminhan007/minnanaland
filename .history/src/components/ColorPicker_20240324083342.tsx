import React from "react";

type ColorProps = {
  value?: string;
  onChange?: (color: string) => void;
};
const ColorPicker: React.FC<ColorProps> = ({}) => {
  return <div> <input
  type="color"
  value={value}
  onChange={(e) => handleChangeColor(e, item.id)}
/></div>;
};

export default ColorPicker;
