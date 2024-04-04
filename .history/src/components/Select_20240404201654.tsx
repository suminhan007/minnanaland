import React from "react";
import styled from "styled-components";

type SelectProps = {};
const Select: React.FC<SelectProps> = ({}) => {
    return <StyleSelectWrap>
      <StyleSelctInput></StyleSelctInput>
  </StyleSelectWrap>;
};

const StyleSelectWrap = styled.div``;
export default Select;
