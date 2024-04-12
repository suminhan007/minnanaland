import React from "react";
import styled from "styled-components";

type Props = {};
const Design: React.FC<Props> = ({}) => {
  return (
    <StyleDesignWrap className="p-24">
      {/* 展示区 */}
      <StyleDesignG className="border radius-12"></StyleDesignG>
    </StyleDesignWrap>
  );
};

const StyleDesignWrap = styled.div``;
const StyleDesignG = styled.div`
  aspect-ratio: 3/2;
  height: 400px;
`;
export default Design;
