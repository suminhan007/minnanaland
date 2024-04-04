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
const Select: React.FC<SelectProps> = ({ data, label = "请选择" }) => {
  return (
      <StyleSelectWrap style={{
        width: 
    }}>
      <StyleSelctInput>
        {label}
        <IconArrow />
        <StyleSelctDrop>
          {data?.map((item) => (
            <StyleSelctDropItem key={item.id}>{item.value}</StyleSelctDropItem>
          ))}
        </StyleSelctDrop>
      </StyleSelctInput>
    </StyleSelectWrap>
  );
};

const StyleSelectWrap = styled.div``;
const StyleSelctInput = styled.div`
  position: relative;
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
const StyleSelctDrop = styled.ul`
  position: absolute;
  top: 100%;
  width: 100%;
  border: 1px solid var(--color-border-2);
  z-index: 10;
`;
const StyleSelctDropItem = styled.li``;
export default Select;
