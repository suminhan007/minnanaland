import React from "react";
import styled from "styled-components";

type SelectProps = {};
const Select: React.FC<SelectProps> = ({}) => {
  return (
    <StyleSelectWrap>
      <StyleSelctInput></StyleSelctInput>
      <StyleSelctDrop></StyleSelctDrop>
    </StyleSelectWrap>
  );
};

const StyleSelectWrap = styled.div``;
const StyleSelctInput = styled.div`
border: ;
`;
const StyleSelctDrop = styled.ul``;
export default Select;
