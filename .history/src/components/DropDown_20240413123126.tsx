import React, { useState } from "react";
import styled from "styled-components";

type DropDownItemType = {
  id: string;
  laebl: string | React.ReactNode;
};
type DropDownProps = {
  dropData?: DropDownItemType[];
  toggle?: string | React.ReactNode;
  width?: number | string;
  onChange?: (data: DropDownItemType) => void;
};
const DropDown: React.FC<DropDownProps> = ({
  dropData,
  toggle = "请选择",
  width = "200px",
  onChange,
}) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <StyleDropDownWrap
      style={{
        width: typeof width === "number" ? `${width}px` : width,
      }}
    >
      <StyleDropDownToggle
        className="land-DropDown-toggle"
        onClick={() => setShow(!show)}
      >
        {toggle}
      </StyleDropDownToggle>
      <StyleDropDownResults
        className={`land-DropDown-results ${show ? "show" : ""}`}
      >
        <StyleDropDownDrop>
          {dropData?.map((item) => (
            <StyleDropDownDropItem
              key={item.id}
              onClick={() => {
                onChange?.(item);
              }}
            >
              {item.value}
            </StyleDropDownDropItem>
          ))}
        </StyleDropDownDrop>
      </StyleDropDownResults>
    </StyleDropDownWrap>
  );
};

const StyleDropDownWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const StyleDropDownToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 36px;
  font-size: 14px;
  border: 1px solid var(--color-border-2);
  border-radius: var(--radius-6);
  cursor: pointer;
`;

const StyleDropDownResults = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  padding-top: 4px;
  opacity: 0;
  transform: scaleY(0.8);
  transform-origin: top center;
  pointer-events: none;
  transition: opacity var(--transition-15) ease,
    transform var(--transition-15) ease;
  z-index: 1;
  &.show {
    opacity: 1;
    transform: scaleY(1);
    pointer-events: all;
  }
`;

const StyleDropDownDrop = styled.ul`
  padding: var(--padding-small);
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
`;
const StyleDropDownDropItem = styled.li`
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
export default DropDown;
