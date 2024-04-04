import React, { useState } from "react";
import styled from "styled-components";

type RatioProps = {
  checked?: boolean;
  text?: string;
};
const Ratio: React.FC<RatioProps> = ({ checked = false, text = "选项" }) => {
  const [newChecked, setnewChecked] = useState<boolean>(checked);
  return (
    <StyleRatioWrap>
      <StyleRatioCircle
        className={`${checked ? "checked" : ""}`}
      ></StyleRatioCircle>
      {text}
    </StyleRatioWrap>
  );
};

const StyleRatioWrap = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  
`;

const StyleRatioCircle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: var(--radius-4);
  border: 1px solid var(--color-border-1);
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
  &.checked {
    background-color: var(--color-primary-6);
  }
`;
export default Ratio;
