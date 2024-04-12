import React from "react";
import styled from "styled-components";

type Props = {};
const Design: React.FC<Props> = ({}) => {
  return <StyleDesignWrap>
    {/* 展示区 */}
    <StyleDesignDisplay></StyleDesignDisplay>
  </StyleDesignWrap>;
};

const StyleDesignWrap = styled.div`
`;
const StyleDesignDisplay = styled.div``;
export default Design;
