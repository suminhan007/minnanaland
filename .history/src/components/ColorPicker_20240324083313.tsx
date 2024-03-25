import React from "react";

type ColorProps = {};
const ColorPicker: React.FC<ColorProps> = ({}) => {
  return <div> <input
  type="color"
  value={item.value}
  onChange={(e) => handleChangeColor(e, item.id)}
/></div>;
};

export default ColorPicker;
