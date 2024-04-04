import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IconCheck, IconInfoStroke } from "./Icon";
import Pop from "./Pop";

type RatioProps = {
  checked?: boolean;
  text?: string;
  pop?: string;
  onChange?: (checked: boolean) => void;
};
const Ratio: React.FC<RatioProps> = ({
  checked = false,
  text = "选项",
  pop,
  onChange,
}) => {
  const [newChecked, setNewChecked] = useState<boolean>(checked);
  useEffect(() => {
    setNewChecked(checked);
  }, [checked]);
  return (
    <StyleRatioWrap>
      <StyleRatioLabel
        onClick={() => {
          setNewChecked(!newChecked);
          onChange?.(newChecked);
        }}
      >
        <StyleRatioCircle className={`${newChecked ? "checked" : ""}`}>
          <IconCheck size={10} strokeWidth={0} fill="var(--color-bg-white)" />
        </StyleRatioCircle>
        {text}
      </StyleRatioLabel>
      <Style className="relative hover-pop">
        <IconInfoStroke stroke="var(--color-text-4)" />
        {pop && <Pop content={pop} />}
      </Style>
    </StyleRatioWrap>
  );
};

const StyleRatioWrap = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-4);
`;
const StyleRatioLabel = styled.div`
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
  border: 1px solid var(--color-border-3);
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
