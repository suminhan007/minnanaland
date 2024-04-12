import React from "react";
import styled from "styled-components";

type Props = {};
const Design: React.FC<Props> = ({}) => {
  return <StyleDesignWrap>
    {/* 展示区 */}
    <Style></Style>
  </StyleDesignWrap>;
};

const StyleDesignWrap = styled.div``;
export default Design;
