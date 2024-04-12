import React from "react";
import styled from "styled-components";

type Props = {};
const Design: React.FC<Props> = ({}) => {
  return (
    <StyleDesignWrap className="p-24">
      {/* 展示区 */}
      <StyleDesignGrid className="grid border radius-12">
        {Array.from({length:64}).map(item)}
      </StyleDesignGrid>
    </StyleDesignWrap>
  );
};

const StyleDesignWrap = styled.div``;
const StyleDesignGrid = styled.div`
  aspect-ratio: 3/2;
  height: 400px;
`;
export default Design;
