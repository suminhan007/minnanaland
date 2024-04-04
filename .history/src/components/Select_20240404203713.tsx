import React, { useState } from "react";
import styled from "styled-components";
import { IconArrow } from "./Icon";

type SelectItemType = {
  id: string;
  value: string;
};
type SelectProps = {
  data?: SelectItemType[];
  label?: string;
  width?: number | string;
  onChange?: (id: string, val: string) => void;
};
const Select: React.FC<SelectProps> = ({
  data,
  label = "请选择",
  width = "100px",
  onChange,
}) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <StyleSelectWrap
      style={{
        width: typeof width === "number" ? `${width}px` : width,
      }}
    >
      <StyleSelctInput onClick={() => setShow(!show)}>
        {label}
        <IconArrow />
      </StyleSelctInput>
      <StyleSelectResults
        className={`land-select-results ${show ? "show" : ""}`}
      >
        <StyleSelctDrop>
          {data?.map((item) => (
            <StyleSelectDropItem
              key={item.id}
              onClick={() => onChange?.(item.id, item.value)}
            >
              {item.value}
            </StyleSelectDropItem>
          ))}
        </StyleSelctDrop>
      </StyleSelectResults>
    </StyleSelectWrap>
  );
};

const StyleSelectWrap = styled.div`
  position: relative;
`;
const StyleSelctInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  width: 100%;
  height: 36px;
  font-size: 14px;
  border: 1px solid var(--color-border-2);
  border-radius: var(--radius-6);
  cursor: pointer;
`;
const StyleSelectResults = styled.div`
  padding-top: 4px;
  opacity: 0;
  transform: scaleY(0.8);
  pointer-events: none;
  transition: opacity var(--transition-15) ease,
    transform var(--transition-15) ease;
  &.show {
    opacity: 1;
    transform: scaleY(1);
    pointer-events: all;
  }
`;

const StyleSelctDrop = styled.ul`
  position: absolute;
  top: 100%;
  padding: var(--padding-small);
  width: 100%;
  border: 1px solid var(--color-border-2);
  
  border-radius: var(--radius-6);
  z-index: 10;
`;
const StyleSelectDropItem = styled.li`
  border-radius: var(--radius-4);
  padding: var(--padding-medium);
  color: var(--color-text-2);
  font-size: var(--font-content-medium);
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
`;
export default Select;
