import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../components/Input";

type Props = {};
const Design: React.FC<Props> = ({}) => {
  const [size, setSize] = useState<number>(8);
  return (
    <StyleDesignWrap className="p-24">
      {/* 展示区 */}
      <div>
        <StyleDesignGrid className="grid border radius-12" size={size}>
          {Array.from({ length: size * size }).map((item) => (
            <StyleDesignGridPixel className="border"></StyleDesignGridPixel>
          ))}
        </StyleDesignGrid>
        <Input prefix='' style={{ height: 24 }} />
      </div>
    </StyleDesignWrap>
  );
};

const StyleDesignWrap = styled.div``;

const StyleDesignGrid = styled.div<{
  size: number;
}>`
  width: ${(props) => `${props.size * 20}px`};
  height: ${(props) => `${props.size * 20}px`};
  grid-template-columns: ${(props) => `repeat(${props.size}, auto)`};
`;

const StyleDesignGridPixel = styled.div``;
export default Design;
