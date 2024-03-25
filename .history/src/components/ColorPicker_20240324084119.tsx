import React from "react";

type ColorProps = {
  value?: string;
  onChange?: (e: React.UIEvent) => void;
};
const ColorPicker: React.FC<ColorProps> = ({ value, onChange }) => {
  return (
    <Styled>
      {" "}
      <input type="color" value={value} onChange={(e: any) => onChange?.(e)} />
    </Styled>
  );
};

export default ColorPicker;
