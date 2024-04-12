import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../components/Input";

type Props = {};
const Design: React.FC<Props> = ({}) => {
  const [x, setX] = useState<number>(8);
  const [y, setY] = useState<number>(8);
  const [pixelArr, setPixelArr] = useState<string[]>(
    Array.from({ length: x * y })
  );
  return (
    <StyleDesignWrap className="p-24">
      {/* 展示区 */}
      <div style={{ width: "fit-content" }}>
        <StyleDesignGrid className="relative grid" x={x} y={y}>
          {pixelArr?.map((item, index) => (
            <StyleDesignGridPixel
              className={`border ${index < x ? "" : "-mt-1"} ${
                index % 32 ? "-ml-1" : ""
              }`}
              style={{ backgroundColor: item }}
            ></StyleDesignGridPixel>
          ))}
          <div className="line-x"></div>
          <div className="line-y"></div>
        </StyleDesignGrid>
      </div>
    </StyleDesignWrap>
  );
};

const StyleDesignWrap = styled.div``;

const StyleDesignGrid = styled.div<{
  x: number;
  y: number;
}>`
  width: 600px;
  height: ${(props) => `${(600 * props.x) / props.y}px`};
  grid-template-columns: ${(props) => `repeat(${props.x}, auto)`};
  .line-x,
  .line-y {
    position: absolute;
    background-color: var(--color-primary-2);
    transition: background-color var(--transition-15) ease;
    &:hover {
      background-color: var(--color-primary-6);
    }
    &:active {
      background-color: var(--color-primary-7);
    }
  }
  .line-x {
    right: 0;
    width: 2px;
    height: 100%;
    cursor: ew-resize;
  }
  .line-y {
    bottom: 0;
    width: 100%;
    height: 2px;
    cursor: ns-resize;
  }
  &::before {
    content: ${(props) => `${props.x} * ${props.y}`};
    display: block;
    position: absolute;
    bottom: -20px;
    left: 0;
    color: red;
    z-index: 10;
  }
`;

const StyleDesignGridPixel = styled.span`
  &:hover {
    background-color: var(--color-bg-2);
  }
`;
export default Design;
