import React, { CSSProperties, useState } from "react";
import styled from "styled-components";
import { IconArrow } from "./Icon";
import Title from "./Title";

type SelectItemType = {
  id: string | number;
  value: string | number;
  disabled?: boolean;
};
type SelectProps = {
  data?: SelectItemType[];
  placeholder?: string;
  selected?: string | number;
  width?: number | string;
  title?: string;
  info?: string | React.ReactNode;
  onChange?: (item: SelectItemType) => void;
  className?: string;
  style?: CSSProperties;
};
const Select: React.FC<SelectProps> = ({
  data,
  placeholder = "请选择",
  selected = "0",
  width = "100px",
  title,
  info,
  onChange,
  className = "",
  style,
}) => {
  const [show, setShow] = useState<boolean>(false);
  const [newSelected, setNewSelected] = useState<string | number>(selected);
  return (
    <StyleSelectWrap
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        ...style,
      }}
      className={className}
    >
      {title && <Title title={title} type="p" info={info} />}
      <StyleSelectInput
        className={`${show ? "show" : ""}`}
        onClick={() => setShow(!show)}
      >
        <p
          className={`${
            newSelected !== "0"
              ? "land-select-trigger"
              : "land-select-placeholder"
          }`}
        >
          {newSelected === "0"
            ? placeholder
            : data?.filter((itm) => itm.id === newSelected)[0].value}
        </p>
        <IconArrow />
      </StyleSelectInput>
      <StyleSelectResults
        className={`land-select-results ${show ? "show" : ""}`}
      >
        <StyleSelectDrop>
          {data?.map((item) => (
            <StyleSelectDropItem
              className={`${newSelected === item.id ? "selected" : ""} ${
                item.disabled ? "disabled" : ""
              }`}
              key={item.id}
              onClick={() => {
                setNewSelected(item.id);
                onChange?.(item);
                setShow(false);
              }}
            >
              {item.value}
            </StyleSelectDropItem>
          ))}
        </StyleSelectDrop>
      </StyleSelectResults>
    </StyleSelectWrap>
  );
};

const StyleSelectWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  .land-select-title {
    font-size: var(--font-content-medium);
  }
`;
const StyleSelectInput = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-4);
  padding: 0 12px;
  width: 100%;
  height: 36px;
  font-size: 14px;
  border: 1px solid var(--color-border-2);
  border-radius: var(--radius-6);
  cursor: pointer;
  p {
    flex: 1;
    font-size: 14px;
    &.land-select-placeholder {
      color: var(--color-text-5);
    }
    &.land-select-trigger {
      color: var(--color-text-2);
    }
  }
  svg {
    transition: transform var(--transition-15) ease;
  }
  &.show svg {
    transform: rotate(180deg);
  }
`;
const StyleSelectResults = styled.div`
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

const StyleSelectDrop = styled.ul`
  padding: var(--padding-small);
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
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
  &.selected {
    background-color: var(--color-bg-3);
  }
  &.disabled {
    opacity: var(--opacity-04);
    pointer-events: none;
  }
`;
export default Select;
