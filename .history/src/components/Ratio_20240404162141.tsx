import React from "react";

type RatioProps = {
  checked?: boolean;
  text?: string;
};
const Ratio: React.FC<RatioProps> = ({ checked = false, text = ‘ }) => {
  return <div>{text}</div>;
};

export default Ratio;
