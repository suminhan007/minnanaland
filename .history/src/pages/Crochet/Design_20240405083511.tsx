import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../components/Input";

type Props = {};
const Design: React.FC<Props> = ({}) => {
  const [x, setX] = useState<number>(8);
  const [y, setY] = useState<number>(8);
  const [size, setSize] = useState<number>()
  return (
    <StyleDesignWrap className="p-24">
      {/* 展示区 */}
      <div style={{ width: "fit-content" }}>
        <StyleDesignGrid className="grid border radius-12" x={x} y={y}>
          {Array.from({ length: x * y }).map((item) => (
            <StyleDesignGridPixel className="border"></StyleDesignGridPixel>
          ))}
        </StyleDesignGrid>
        <Input style={{ height: 24 }} />
      </div>
    </StyleDesignWrap>
  );
};

const StyleDesignWrap = styled.div``;

const StyleDesignGrid = styled.div<{
  x: number;
  y: number;
}>`
  width: ${(props) => `${props.x * 20}px`};
  height: ${(props) => `${props.y * 20}px`};
  grid-template-columns: ${(props) => `repeat(${props.x}, auto)`};
`;

const StyleDesignGridPixel = styled.div``;
export default Design;
