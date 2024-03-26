import React, { useState, useMemo } from "react";
import styled from "styled-components";
import Input from "./Input";
import tinycolor from 'tinycolor2'
import Flex from "./Flex";

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
  const [show, setShow] = useState<boolean>(true);
  // 当前的 rgba 值
  const [currentColor, setCurrentColor] = useState<string>('#ffffff');
  const [inputColor, setInputColor] = useState<string>('#ffffff');
  const [opacity, setOpacity] = useState<string>('100');
  const [h, setH] = useState<number>(0);
  const [s, setS] = useState<number>(0);
  const [v, setV] = useState<number>(0);

  const handleHexInputChange = ((val: string) => {
    setInputColor(val);
    if (val.length === 6) {
      const rgb = tinycolor(`#${val}`).toRgb();
      setCurrentColor(`rgba(${rgb.r},${rgb.g},${rgb.b},${Number(opacity) / 100})`);
      const hsv = tinycolor(`#${val}`).toHsv();
      setH(hsv.h);
      setS(hsv.s);
      setV(hsv.v);
    }
  })
  const svColor = useMemo(() => {
    const hex = tinycolor(`hsv(${h},${s},${v})`).toHex();
    return `#${hex}`;
  }, [h])
  const handleSliderChange = (val: string) => {
    setH(Number(val));
    const hex = tinycolor(`hsv(${val},${s},${v})`).toHex();
    const rgb = tinycolor(`hsv(${val},${s},${v})`).toRgb();
    setCurrentColor(`rgba(${rgb.r},${rgb.g},${rgb.b},${Number(opacity) / 100})`);
    setInputColor(hex);
  }

  const handleOpacityChange = (val: string) => {
    setOpacity(val);
    const rgb = tinycolor(`hsv(${h},${s},${v})`).toRgb();
    setCurrentColor(`rgba(${rgb.r},${rgb.g},${rgb.b},${Number(opacity) / 100})`);
  }

  const handleGridClick = (e: any) => {
    const panel = e.target.getBoundingClientRect();
    const diffX = e.clientX - panel.left;
    const diffY = e.clientY - panel.top;
    setS(diffX / panel.width);
    setV(1 - diffY / panel.height);
    const hex = tinycolor(`hsv(${h},${s},${v})`).toHex();
    setInputColor(hex);
    const rgb = tinycolor(`hsv(${h},${s},${v})`).toRgb();
    setCurrentColor(`rgba(${rgb.r},${rgb.g},${rgb.b},${Number(opacity) / 100})`);
  }
  const handleGridMove = (e: any) => {
    const panel = e.target.getBoundingClientRect();
    const diffX = e.clientX + 0.5 - panel.left;
    const diffY = e.clientY + 1 - panel.top;
    setS(diffX / panel.width);
    setV(1 - diffY / panel.height);
    const hex = tinycolor(`hsv(${h},${s},${v})`).toHex();
    setInputColor(hex);
    const rgb = tinycolor(`hsv(${h},${s},${v})`).toRgb();
    setCurrentColor(`rgba(${rgb.r},${rgb.g},${rgb.b},${Number(opacity) / 100})`);
  }
  return (
    <StyledColorPicker
      className="land-color-picker"
      color={value}
      size={typeof size === "string" ? size : `${size}px`}
      onClick={() => setShow(!show)}
    >
      <div className="land-color-trigger"></div>
      <StyledColorPanel
        className={`land-color-drop ${show ? "show" : ""}`}
        onClick={(e: React.UIEvent) => e.stopPropagation()}
      >
        <StyledColorGrid
          className="StyledColorGrid"
          currentColor={svColor}
          onMouseDown={(e: any) => handleGridClick(e)}
          onMouseMove={(e: any) => handleGridMove(e)}
        >
          <div
            className="color-thumb"
            style={{ transform: `translate(${s * 160}px , ${80 - v * 80}px)` }}
            // style={{ top: 0, left: 0, transform: 'translate(20px,20px)' }}
            onMouseMove={(e: React.UIEvent) => e.stopPropagation()}
          ></div>
        </StyledColorGrid>
        <Flex gap={8}>
          <div className="radius-4 border" style={{ width: '40px', aspectRatio: 1, flexShrink: 0, background: currentColor }}></div>
          <Flex column gap={8}>
            <StyledColorSlider
              type="range"
              max={360}
              value={h}
              step={1}
              currentColor={`#${inputColor}`}
              onChange={(e) => handleSliderChange(e.target.value)}
            />
            {true && (
              <StyledOpacityWrap>
                <StyledColorSlider
                  type="range"
                  step={1}
                  max={100}
                  value={opacity}
                  className="opacity"
                  currentColor={currentColor}
                  onChange={(e: any) => handleOpacityChange(e.target.value)}
                />
              </StyledOpacityWrap>
            )}
          </Flex>
        </Flex>
        <div className="flex gap-8">
          <Input
            className="flex-2"
            prefix='#'
            maxLength={6}
            value={inputColor.split('#')[0]}
            onChange={(val) => handleHexInputChange(val)}
          />
          <Input
            className="flex-1"
            max={100}
            min={0}
            value={opacity}
            onChange={(val) => handleOpacityChange(val)}
          />
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
  position: absolute;
  top: 100%;
  left: 0;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: var(--color-bg-white);
  width: 204px;
  border-radius: 4px;
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
  currentColor?: string;
}>`
  position: relative;
  width: 100%;
  height: 86px;
  border-radius: 4px;
  background-color: ${(props) => props.currentColor};
  background-image: linear-gradient(0deg, rgb(0, 0, 0), transparent),
    linear-gradient(90deg, rgb(255, 255, 255), rgba(255, 255, 255, 0));
  .color-thumb {
    position: absolute;
    width: 12px;
    height: 12px;
    border: 1px solid var(--color-bg-white);
    border-radius: 6px;
    position: none;
  }
`;
const StyledColorSlider = styled.input<{
  currentColor?: string;
}>`
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  width: 132px;
  height: 16px;
  border: 0px;
  outline: none;
  object-fit: contain;
  border-radius: 4px;
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
    &::-webkit-slider-thumb {
      background: transparent;
    }
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    background: ${(props) => props.currentColor};
    border: 1px solid var(--color-bg-white);
    outline: 1px solid var(--color-border-3);
    &:hover {
      cursor: ew-resize;
    }
  }
`;

const StyledOpacityWrap = styled.div`
  padding: relative;
  width: 132px;
  height: 16px;
  border-radius: 4px;
  background-image: conic-gradient(
    var(--color-bg-2) 0 25%,
    transparent 0 50%,
    var(--color-bg-2) 0 75%,
    transparent 0
  );
  background-size: 8px 8px;
`;
export default ColorPicker;
