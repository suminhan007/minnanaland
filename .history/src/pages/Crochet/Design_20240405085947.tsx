import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../components/Input";

type Props = {};
const Design: React.FC<Props> = ({}) => {
  const [x, setX] = useState<number>(32);
  const [y, setY] = useState<number>(32);
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
}>`
  width: 600px;
  height: ${(props) => `${(600 * props.x) / props.y}px`};
  grid-template-columns: ${(props) => `repeat(${props.x}, auto)`};
  .line-x {
    position: absolute;
    right: 0;
    width: 2px;
    height: 100%;
    background-color: transparent;
    cursor: ew-resize;
    transition: background-color var(--transition-15) ease;
    &:hover {
      background-color: var(--color-primary-6);
    }
  }
  .line-y {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: transparent;
    cursor: ns-resize;
    transition: background-color var(--transition-15) ease;
    &:hover {
      background-color: var(--color-primary-6);
    }
  }
`;

const StyleDesignGridPixel = styled.div`
  &:hover {
    background-color: var(--color-bg-2);
  }
`;
export default Design;
