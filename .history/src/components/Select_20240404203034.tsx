import React from "react";
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
};
const Select: React.FC<SelectProps> = ({
  data,
  label = "请选择",
  width = "100px",
}) => {
  return (
    <StyleSelectWrap
      style={{
        width: typeof width === "number" ? `${width}px` : width,
      }}
    >
      <StyleSelctInput>
        {label}
        <IconArrow />
      </StyleSelctInput>
      <StyleSelectResults>
        <StyleSelctDrop>
          {data?.map((item) => (
            <StyleSelectDropItem key={item.id}>
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
`;
const StyleSelectResults = styled.div`
  padding-top: 4px;
`;

const StyleSelctDrop = styled.ul`
  position: absolute;
  top: 100%;
  padding: var(--padding-small);
  width: 100%;
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
  z-index: 10;
`;
const StyleSelectDropItem = styled.li`
  border-radius: var(--radius-6);
  padding: var(--padding-medium);
  &:hover {
    background-color: var();
  }
`;
export default Select;
