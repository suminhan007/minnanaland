import React from "react";
import styled from "styled-components";
import { IconCheck, IconInfoStroke } from "./Icon";
import Pop from "./Pop";

type CheckProps = {
  checked?: boolean;
  text?: string;
  pop?: string;
  onChange?: () => void;
};
const Check: React.FC<CheckProps> = ({
  checked = false,
  text = "选项",
  pop,
  onChange,
}) => {
  return (
    <StyleCheckWrap>
      <StyleCheckLabel
        onClick={() => {
          onChange?.();
        }}
      >
        <StyleCheckCircle className={`${checked ? "checked" : ""}`}>
          <IconCheck size={10} strokeWidth={0} fill="var(--color-bg-white)" />
        </StyleCheckCircle>
        {text}
      </StyleCheckLabel>
      {pop && (
        <StyleCheckpop className="hover-pop">
          <IconInfoStroke stroke="var(--color-text-4)" />
          <Pop
            content={pop}
            theme="dark"
            style={{ maxWidth: "200px" }}
            placement="right"
          />
        </StyleCheckpop>
      )}
    </StyleCheckWrap>
  );
};

const StyleCheckWrap = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-4);
`;
const StyleCheckLabel = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  font-size: var(--font-content-medium);
  color: var(--color-text-2);
  cursor: pointer;
`;

const StyleCheckCircle = styled.div`
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

const StyleCheckpop = styled.div`
  position: relative;
  height: 16px;
  line-height: 16px;
`;
export default Check;
