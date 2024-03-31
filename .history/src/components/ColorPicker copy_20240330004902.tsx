import React, { useState, useMemo, useCallback, useEffect } from "react";
import styled from "styled-components";
import Input from "./Input";
import tinycolor from 'tinycolor2'
import Flex from "./Flex";

const COLOR_DATA = [
  [
    { id: 1, color: '#e9e9e9' },
    { id: 2, color: '#d9d9d9' },
    { id: 3, color: '#c4c4c4' },
    { id: 4, color: '#9d9d9d' },
  ],
  [
    { id: 5, color: '#7b7b7b' },
    { id: 6, color: '#5c5c5c' },
    { id: 7, color: '#333333' },
    { id: 8, color: '#262626' },
  ],
  [
    { id: 9, color: '#efccbd' },
    { id: 10, color: '#d39f9d' },
    { id: 11, color: '#c4726d' },
    { id: 12, color: '#ac3526' },
  ],
  [
    { id: 13, color: '#f6e3bd' },
    { id: 14, color: '#ebbd6f' },
    { id: 15, color: '#df964a' },
    { id: 16, color: '#c76336' },
  ],
  [
    { id: 17, color: '#fbf2d4' },
    { id: 18, color: '#f7e7ab' },
    { id: 19, color: '#f4db86' },
    { id: 20, color: '#ebbc58' },
  ],
  [
    { id: 21, color: '#dee9d7' },
    { id: 22, color: '#bdd992' },
    { id: 23, color: '#9dbe56' },
    { id: 24, color: '#758d3a' },
  ],
  [
    { id: 25, color: '#e7f6fd' },
    { id: 26, color: '#9dd9f8' },
    { id: 27, color: '#81bde5' },
    { id: 28, color: '#4f84eb' },
  ],
  [
    { id: 29, color: '#cdc7ee' },
    { id: 30, color: '#877cda' },
    { id: 31, color: '#4249ac' },
    { id: 32, color: '#313fa4' },
  ],
  [
    { id: 33, color: '#f6e6fb' },
    { id: 34, color: '#d69aeb' },
    { id: 35, color: '#b253d3' },
    { id: 36, color: '#8a31c4' },
  ],
];

type ColorProps = {
  /* 外部回传的 value 值 */
  value?: string;
  size?: string | number;
  showDrop?: boolean;
  onChange?: (color: string) => void;
};
const ColorPicker: React.FC<ColorProps> = ({
  value = '#9FDB1D',
  size = 48,
  showDrop = true,
  onChange,
}) => {
  const [show, setShow] = useState<boolean>(false);
  // 当前的 rgba 值
  const [currentColor, setCurrentColor] = useState<string>(
    !value ? '#9FDB1D' : value === 'transparent' ? 'transparent' : tinycolor(value).toString(),
  );
  const [inputColor, setInputColor] = useState<string>(currentColor.split('#')[1]);
  const [opacity, setOpacity] = useState<number>(100);
  const [h, setH] = useState<number>(0);
  const [s, setS] = useState<number>(0);
  const [v, setV] = useState<number>(0);
  useEffect(() => {
    if (!value) return;
    if (value === 'transparent') {
      setCurrentColor('transparent');
    } else {
      const { h, s, v } = tinycolor(`#${value}`).toHsv();
      setH(h);
      !move && setS(s);
      !move && setV(v);
      const hex = tinycolor(value).toHex();
      setCurrentColor(`#${hex}`);
      setInputColor(hex)
    }
  }, [value, opacity]);
  // 获取 rgba 颜色值
  const getRgbaColor = useCallback((color: string, opacity = 1) => {
    if (color !== 'transparent') {
      const c = tinycolor(color);
      const { r, g, b } = c.toRgb();
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    return color;
  }, []);

  const handleHexInputChange = ((val: string) => {
    setInputColor(val);
    if (val.length === 6) {
      const rgb = tinycolor(`#${val}`).toRgb();
      setCurrentColor(`rgba(${rgb.r},${rgb.g},${rgb.b},${opacity / 100})`);
      const hsv = tinycolor(`#${val}`).toHsv();
      setH(hsv.h);
      setS(hsv.s);
      setV(hsv.v);
    }
  })
  // 设置渐变面板 sv 背景颜色
  const svColor = useMemo(() => {
    const hex = tinycolor(`hsv(${h},${1},${1})`).toHex();
    return `#${hex}`;
  }, [h])
  // H 值 Slider改变
  const handleSliderChange = (val: string) => {
    setH(Number(val));
    const hex = tinycolor(`hsv(${val},${s},${v})`).toHex();
    setInputColor(hex);
    setCurrentColor(`#${hex}`)
    onChange?.(getRgbaColor(currentColor, opacity))
  }

  // 透明度输入框改变
  const handleOpacityChange = (val: number) => {
    setOpacity(val);
    const { r, g, b } = tinycolor(`hsv(${h},${s},${v})`).toRgb();
    setCurrentColor(`rgba(${r},${g},${b},${opacity / 100})`);
  }
  // 拖动选择颜色
  const [move, setMove] = useState<Boolean>(false);
  const handleThumb = (e: any) => {
    const panel = e.target.getBoundingClientRect();
    const diffX = e.clientX - panel.left;
    const diffY = e.clientY - panel.top;
    if (diffX == 0 || diffX == panel.width || diffY == 0 || diffY == panel.height) {
      setMove(false)
    }
    setS(diffX / 180);
    setV(1 - diffY / 84);
    const hex = tinycolor(`hsv(${h},${s},${v})`).toHex();
    setInputColor(hex);
    setCurrentColor(`#${hex}`)
    onChange?.(getRgbaColor(currentColor, opacity))
  }
  return (
    <StyledColorPicker
      className="land-color-picker"
      color={value}
      size={typeof size === "string" ? size : `${size}px`}
      onClick={() => setShow(!show)}
    >

      <div className="land-color-trigger">
        <div className="land-color-grid" style={{ background: currentColor }}></div>
        <Input
          prefix='#'
          maxLength={6}
          value={inputColor.split('#')[0]}
          onChange={(val) => handleHexInputChange(val)}
          style={{ height: 24, fontSize: '12px', border: 'none', gap: 0, padding: 0 }}
        />
      </div>
      {showDrop && <StyledColorPanel
        className={`land-color-drop ${show ? "show" : ""}`}
        onClick={(e: React.UIEvent) => e.stopPropagation()}
      >
        <StyledColorGrid
          className="StyledColorGrid"
          svColor={svColor}
          onMouseMove={(e: any) => move && handleThumb(e)}
          onMouseDown={(e: any) => { setMove(true); handleThumb(e) }}
          onMouseUp={() => { setMove(false) }}
        >
          <div
            className="color-thumb"
            style={{ left: s * 180, top: 86 - v * 86 }}
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
                  currentColor={svColor}
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
            value={String(opacity)}
            onChange={(val) => handleOpacityChange(Number(val))}
          />
        </div>
        <div className="width-100 flex" style={{ gap: 2 }}>
          {COLOR_DATA?.map((list, idx) => (
            <div className="flex column" key={idx} style={{ gap: 2 }}>
              {list.map(item => (
                <StyleColorItem
                  onClick={() => {
                    !value && handleHexInputChange(item.color.split('#')[1]);
                    onChange?.(getRgbaColor(item.color, opacity));
                  }}
                  // @ts-ignore
                  style={{ '--tacc-color-item-bgColor': item.color }}
                  key={item.id}
                />
              ))}
            </div>
          ))}
        </div>
      </StyledColorPanel>}
    </StyledColorPicker >
  );
};

const StyledColorPicker = styled.div<{
  color?: string;
  size?: string;
}>`
  position: relative;
  width: ${(props) => props.size};
  cursor: pointer;
  .land-color-trigger {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
  }
  .land-color-grid {
    width: 100%;
    aspect-ratio: 1;
    background-color: ${props => props.color};
    border: 8px solid var(--color-bg-1);
    border-radius: 4px;
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
  svColor?: string;
}>`
  position: relative;
  width: 100%;
  height: 86px;
  border-radius: 4px;
  background-color: ${(props) => props.svColor};
  background-image: linear-gradient(0deg, rgb(0, 0, 0), transparent),
    linear-gradient(90deg, rgb(255, 255, 255), rgba(255, 255, 255, 0));
    overflow: hidden;
  .color-thumb {
    position: absolute;
    width: 12px;
    height: 12px;
    border: 1px solid var(--color-border-2);
    border-radius: 4px;
    transform: translate(-50%,-50%);
    pointer-events: none;
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
    border: 1px solid var(--color-border-1);
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

const StyleColorItem = styled.div`
  border: var(--tacc-color-item-border, var(--spaui-input-border));
  border-radius: var(--tacc-color-item-radius, 4px);
  background-color: var(--tacc-color-item-bgColor, transparent);
  width: 18px;
  height: 18px;
  transition: all 0.2s;
  &:hover {
    --tacc-color-item-border: 1px solid var(--od-gray-05);
  }
  &.active {
    --tacc-color-item-border: 1px solid var(--od-blue-06);
  }
  cursor: pointer;
  &.null {
    position: relative;
    background-color: transparent;
    &::after {
      content: '';
      display: block;
      position: absolute;
      left: 10px;
      top: -4px;
      width: 2px;
      height: 30px;
      border-radius: 1px;
      background-color: var(--od-red-06);
      transform: rotate(-45deg);
    }
  }
`;

export default ColorPicker;
