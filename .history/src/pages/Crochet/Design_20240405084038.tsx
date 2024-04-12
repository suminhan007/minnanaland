import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../components/Input";

type Props = {};
const Design: React.FC<Props> = ({}) => {
  const [x, setX] = useState<number>(32);
  const [y, setY] = useState<number>(32);
  const [size, setSize] = useState<number>(20);
  return (
    <StyleDesignWrap className="p-24">
      {/* 展示区 */}
      <div style={{ width: "fit-content" }}>
        <StyleDesignGrid
          className="grid border radius-12"
          x={x}
          y={y}
          size={size}
        >
          {Array.from({ length: x * y }).map((item) => (
            <StyleDesignGridPixel></StyleDesignGridPixel>
          ))}
        </StyleDesignGrid>
        <div className="flex gap-24 mt-12">
          <Input style={{ height: 32 }} />
          <Input style={{ height: 32 }} />
        </div>
      </div>
    </StyleDesignWrap>
  );
};

const StyleDesignWrap = styled.div``;

const StyleDesignGrid = styled.div<{
  x: number;
  y: number;
  size: number;
}>`
  width: ${(props) => `${props.x * props.size}px`};
  height: ${(props) => `${props.y * props.size}px`};
  grid-template-columns: ${(props) => `repeat(${props.x}, auto)`};
  &::before {
    content: "";
    display: flex;
    position: absolute;
  }
`;

const StyleDesignGridPixel = styled.div``;
export default Design;
