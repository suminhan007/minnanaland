import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import tinycolor from "tinycolor2";

type ColorProps = {
  value?: string;
  size?: string | number;
  onChange?: (e: React.UIEvent) => void;
};
const ColorPicker: React.FC<ColorProps> = ({
  value = "#ff0000",
  size = 40,
  onChange,
}) => {
  // 当前设置的 16 进制颜色
  const [currentColor, setCurrentColor] = useState<string>(
    !value
      ? "var(--od-light-color)"
      : value === "transparent"
      ? "transparent"
      : tinycolor(value).toString()
  );
  // 获取 rgba 颜色
  const getRgbaColor = useCallback((color: string, opacity = 1) => {
    if (color !== "transparent") {
      const c = tinycolor(color);
      const { r, g, b } = c.toRgb();
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    return color;
  }, []);

  const [showMoreColor, setShowMoreColor] = useState<boolean>(true);
  const [h, setH] = useState<number>(0);
  const [s, setS] = useState<number>(1);
  const [v, setV] = useState<number>(1);
  useEffect(() => {
    const c = tinycolor(`hsv(${h}, ${s}, ${v})`).toHex();
    setCurrentColor(`#${c}`);
  }, [h, s, v]);
  const handleHexInputChange = (v: string) => {
    setCurrentColor(`#${v}`);
    const hsv = tinycolor(`${v}`).toHsv();
    setH(hsv.h);
    setS(hsv.s);
    setV(hsv.v);
  };
  const handleMoveColorThumb = (e: any) => {
    console.log(e);
    const panel = e.target.getBoundingClientRect();
    const diffX = e.clietX - panel.left;
    const diffY = e.clietY - panel.Top;
    setS(diffX / panel.width);
    setV(1 - diffY / panel.height);
  };
  return (
    <StyledColorPicker
      className="land-color-picker"
      color={value}
      size={typeof size === "string" ? size : `${size}px`}
    >
      <div className="land-color-trigger"></div>
      <StyledColorPanel
        className={`land-color-drop absolute flex column gap-8 bg-white radius-6 p-16 ${
          true ? "show" : ""
        }`}
      >
        <StyledColorGrid
          className="StyledColorGrid relative width-100 radius-6"
          selectColor={currentColor}
          onMouseMove={(e: React.UIEvent) => handleMoveColorThumb(e)}
        >
          <div
            className="color-thumb absolute"
            style={{ top: `${v * 100}%`, left: `${s * 100}%` }}
          ></div>
        </StyledColorGrid>
        <StyledColorSlider
          className="radius-6"
          type="range"
          max={360}
          step={1}
          value={h}
          currentColor={currentColor}
          onChange={(e: any) => setH(e.target.value)}
        />
        {false && <StyledOpacityWrap className="relative radius-6">
                <StyledColorSlider
                  type="range"
                  step={1}
                  max={100}
                  value={inputOpacity}
                  onChange={(e: any) => setInputOpacity(e.target.value)}
                  className='radius-6'
                  currentColor={currentColor}
                  opacity={inputOpacity}
                />
              </StyledOpacityWrap> }
        <div className="flex gap-8 mt-8">
          {/* <Input
                  prefix="#"
                  width={102}
                  height={36}
                  borderless
                  value={inputColor}
                  onChange={(_e, v) => handleHexInputChange(v)}
                  onBlur={() => onChange?.(getRgbaColor(currentColor, currentOpacity))}
                  maxLength={6}
            /> */}
        </div>
      </StyledColorPanel>
    </StyledColorPicker>
  );
};

const StyledColorPicker = styled.div<{
  color?: string;
  size?: string;
}>`
  position: relative;
  width: ${(props) => props.size};
  aspect-ratio: 1;
  cursor: pointer;
  .land-color-trigger {
    width: 100%;
    height: 100%;
    border: 8px solid var(--color-bg-1);
    border-radius: 4px;
    background-color: ${(props) => props.color};
    transition: border-color var(--transition-15) linear;
    will-change: border-color;
    &:hover {
      border-color: var(--color-bg-2);
    }
    &:active {
      border-color: var(--color-bg-3);
    }
  }
`;

const StyledColorPanel = styled.div`
  top: 100%;
  left: 0;
  width: fit-content;
  height: 212px;
  box-shadow: var(--boxshadow-medium);
  opacity: 0;
  pointer-events: none;
  transform: translateY(8px);
  transition: opacity var(--transition-15) linear;
  &.show {
    opacity: 1;
    pointer-events: all;
  }
`;

const StyledColorGrid = styled.div<{
  selectColor?: string;
}>`
  height: 86px;
  background-color: ${(props) => props.selectColor};
  background-image: linear-gradient(0deg, rgb(0, 0, 0), transparent),
    linear-gradient(90deg, rgb(255, 255, 255), rgba(255, 255, 255, 0));
  .color-thumb {
    width: 16px;
    height: 16px;
    border: 2px solid #fff;
    outline: 1px solid var(--color-border-1);
    border-radius: 6px;
    &:hover {
      cursor: grab;
    }
  }
`;
const StyledColorSlider = styled.input<{
  currentColor?: string;
  opacity?: string;
}>`
  height: 16px;
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  border: 0px;
  outline: none;
  object-fit: contain;
  background: linear-gradient(
    to right,
    #ff0000,
    #ffd600,
    #52ff00,
    #00fff0,
    #0500ff,
    #c000ff,
    #ff0000
  );
  &.opacity {
    position: absolute;
    background: ${(props) =>
      `linear-gradient(to right, rgba(0,0,0,0), ${props.currentColor})`};
    width: 100%;
    height: 16px;
    &::-webkit-slider-thumb {
      background-color: transparent;
    }
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    background: ${(props) => props.currentColor};
    border: 2px solid #fff;
    outline: 1px solid var(--color-border-1);
    &:hover {
      cursor: ew-resize;
    }
  }
`;

const StyledOpacityWrap = styled.div`
  height: 16px;
  background-image: conic-gradient(
    var(--od-gray-12) 0 25%,
    transparent 0 50%,
    var(--od-gray-12) 0 75%,
    transparent 0
  );
  background-size: 8px 8px;
`;
export default ColorPicker;
