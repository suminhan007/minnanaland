import React from "react";
import styled from "styled-components";

type SelectProps = {
    label?: string;
};
const Select: React.FC<SelectProps> = ({}) => {
  return (
    <StyleSelectWrap>
          <StyleSelctInput>{label}</StyleSelctInput>
      <StyleSelctDrop></StyleSelctDrop>
    </StyleSelectWrap>
  );
};

const StyleSelectWrap = styled.div``;
const StyleSelctInput = styled.div`
  width: fit-content;
  border: 1px solid var(--color-border-2);
  height: 36px;
`;
const StyleSelctDrop = styled.ul``;
export default Select;
