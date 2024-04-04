import React from "react";

type RatioProps = {
  checked?: boolean;
  text?: string;
};
const Ratio: React.FC<RatioProps> = ({ checked = false, text = "选项" }) => {
  return <div >{text}</div>;
};

export default Ratio;
