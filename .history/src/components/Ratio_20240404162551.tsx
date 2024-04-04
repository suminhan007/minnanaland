import React from "react";
import styled from "styled-components";

type RatioProps = {
  checked?: boolean;
  text?: string;
};
const Ratio: React.FC<RatioProps> = ({ checked = false, text = "选项" }) => {
  return (
    <StyleRatioWrap>
      <StyleRatioCircle></StyleRatioCircle>
      {text}
    </StyleRatioWrap>
  );
};

const StyleRatioWrap = styled.div`
  display: flex;
  gap: var(--gap-8);
`;

const StyleRatioCircle = styled.div`
  width: 24px;
  width: 24px;
  border-radius: var(--radius-4);
  border: 1px solid var(--color-border-1);
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-1);
  }
`;
export default Ratio;
