import React from "react";
import styled from "styled-components";

type RatioProps = {
  checked?: boolean;
  text?: string;
};
const Ratio: React.FC<RatioProps> = ({ checked = false, text = "选项" }) => {
    return <StyleRatioWrap>
        {text}</StyleRatioWrap>;
};

const StyleRatioWrap = styled.div`
  display: flex;
  gap: var(--gap-8);
`;
export default Ratio;
