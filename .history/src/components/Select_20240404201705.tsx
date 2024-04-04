import React from "react";
import styled from "styled-components";

type SelectProps = {};
const Select: React.FC<SelectProps> = ({}) => {
    return <StyleSelectWrap>
        <StyleSelctInput></StyleSelctInput>
        <StyleSelctInput></StyleSelctInput>
  </StyleSelectWrap>;
};

const StyleSelectWrap = styled.div``;
const StyleSelctInput = styled.div``;
export default Select;
