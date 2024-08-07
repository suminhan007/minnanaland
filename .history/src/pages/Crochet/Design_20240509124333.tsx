--
import React, { useState } from "react";
import styled from "styled-components";

type Props = {};
const Design: React.FC<Props> = ({}) => {
  const [x, setX] = useState<number>(20);
  const [y, setY] = useState<number>(20);
  const [pixelArr, setPixelArr] = useState<string[]>(
    Array.from({ length: x * y }).map((_itm) => "transparent")
  );
  return (
    <StyleDesignWrap className="p-24">
      {/* 展示区 */}
      <StyleDesignGrid className="relative grid" x={x} y={y}>
        {pixelArr?.map((item, index) => (
          <StyleDesignGridPixel
            className={`${index < x ? "" : "-mt-1"} ${
              index % 32 ? "-ml-1" : ""
            }`}
            style={{ backgroundColor: item }}
          ></StyleDesignGridPixel>
        ))}
        <div className="line-x"></div>
        <div className="line-y"></div>
        <div className="grid-sub fs-14">{`${x} x ${y}`}</div>
      </StyleDesignGrid>
    </StyleDesignWrap>
  );
};

const StyleDesignWrap = styled.div``;

const StyleDesignGrid = styled.div<{
  x: number;
  y: number;
}>`
  margin: 24px auto;
  width: 540px;
  height: ${(props) => `${(540 * props.x) / props.y}px`};
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
  .grid-sub {
    position: absolute;
    height: 24px;
    bottom: -30px;
    left: 0;
    color: var(--color-text-5);
  }
`;

const StyleDesignGridPixel = styled.span`
  border: 1px solid var(--color-border-2);
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
`;
export default Design;
