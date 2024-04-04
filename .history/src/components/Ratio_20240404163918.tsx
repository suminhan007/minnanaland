import React, { useState } from "react";
import styled from "styled-components";
import { IconCheck } from "./Icon";

type RatioProps = {
  checked?: boolean;
  text?: string;
};
const Ratio: React.FC<RatioProps> = ({ checked = false, text = "选项" }) => {
  const [newChecked, setNewChecked] = useState<boolean>(checked);
  return (
    <StyleRatioWrap onClick={() => setNewChecked(!newChecked)}>
      <StyleRatioCircle className={`${checked ? "checked" : ""}`}>
        <IconCheck size={10} strokeWidth={0} fill="var(--color-bg-white)" />
      </StyleRatioCircle>
      {text}
    </StyleRatioWrap>
  );
};

const StyleRatioWrap = styled.label`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  font-size: var(--font-content-medium);
  color: var(--color-text-2);
  cursor: pointer;
`;

const StyleRatioCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-4);
  border: 1px solid var(--color-border-1);
  transition: all var(--transition-15) linear;
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
  &.checked {
    border-color: var(--color-primary-6);
    background-color: var(--color-primary-6);
    svg path {
      fill: var(--color-bg-white);
    }
  }
`;
export default Ratio;
