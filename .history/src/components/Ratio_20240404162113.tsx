import React from "react";

type RatioProps = {
    checked?: boolean;
    text?:string
};
const Ratio: React.FC<RatioProps> = ({
    checked=false
}) => {
  return <div>Ratio</div>;
};

export default Ratio;
