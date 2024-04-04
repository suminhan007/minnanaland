import React from "react";

type RatioProps = {
  checked?: boolean;
  text?: string;
};
const Ratio: React.FC<RatioProps> = ({ checked = false, text = "选项" }) => {
  return <StyleRatio>{text}</StyleRatio>;
};

export default Ratio;
