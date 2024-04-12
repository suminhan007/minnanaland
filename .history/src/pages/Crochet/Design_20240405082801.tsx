import React, { useState } from "react";
import styled from "styled-components";

type Props = {};
const Design: React.FC<Props> = ({}) => {
  const [size, setSize] = useState<number>(8);
  return (
    <StyleDesignWrap className="p-24">
      {/* 展示区 */}
      <StyleDesignGrid className="grid border radius-12" size={size}>
        {Array.from({ length: size * size }).map((item) => (
          <StyleDesignGridPixel className="border"></StyleDesignGridPixel>
        ))}
      </StyleDesignGrid>
    </StyleDesignWrap>
  );
};

const StyleDesignWrap = styled.div``;

const StyleDesignGrid = styled.div<{
  size?: number;
}>`
  aspect-ratio: 1;
  height: ${(props) => `${props.size * 20}px`};
  grid-template-columns: ${(props) => `repeat(${props.size}, auto)`};
`;

const StyleDesignGridPixel = styled.div``;
export default Design;
