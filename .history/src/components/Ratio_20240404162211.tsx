import React from "react";

type RatioProps = {
  checked?: boolean;
  text?: string;
};
const Ratio: React.FC<RatioProps> = ({ checked = false, text = "选项" }) => {
  return <StyleRatioWrap>{text}</StyleRatioWrap>;
};

const StyleRatioWrap = styled.div`
    
`
export default Ratio;
