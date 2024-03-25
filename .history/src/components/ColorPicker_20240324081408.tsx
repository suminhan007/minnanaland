import React, {
  CSSProperties,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import styled from "styled-components";
import tinycolor from "tinycolor2";
import Button from "./Button";
import Input from "./Input";
// import TaccNumberInput from "./NumberInput";

export const STYLE_CONTENT_ID = "StyleColorContainer";

const FIRST_DATA = [
  { id: 37, color: "rgba(255,255,255,1)" },
  { id: 38, color: "#000000" },
  { id: 39, color: "#d54532" },
  { id: 40, color: "#e3a14e" },
  { id: 41, color: "#fffe73" },
  { id: 42, color: "#c0f46d" },
  { id: 43, color: "#9fd9f7" },
  { id: 44, color: "#3f41c6" },
  { id: 45, color: "#c95bed" },
];

const COLOR_DATA = [
  [
    { id: 1, color: "#e9e9e9" },
    { id: 2, color: "#d9d9d9" },
    { id: 3, color: "#c4c4c4" },
    { id: 4, color: "#9d9d9d" },
  ],
  [
    { id: 5, color: "#7b7b7b" },
    { id: 6, color: "#5c5c5c" },
    { id: 7, color: "#333333" },
    { id: 8, color: "#262626" },
  ],
  [
    { id: 9, color: "#efccbd" },
    { id: 10, color: "#d39f9d" },
    { id: 11, color: "#c4726d" },
    { id: 12, color: "#ac3526" },
  ],
  [
    { id: 13, color: "#f6e3bd" },
    { id: 14, color: "#ebbd6f" },
    { id: 15, color: "#df964a" },
    { id: 16, color: "#c76336" },
  ],
  [
    { id: 17, color: "#fbf2d4" },
    { id: 18, color: "#f7e7ab" },
    { id: 19, color: "#f4db86" },
    { id: 20, color: "#ebbc58" },
  ],
  [
    { id: 21, color: "#dee9d7" },
    { id: 22, color: "#bdd992" },
    { id: 23, color: "#9dbe56" },
    { id: 24, color: "#758d3a" },
  ],
  [
    { id: 25, color: "#e7f6fd" },
    { id: 26, color: "#9dd9f8" },
    { id: 27, color: "#81bde5" },
    { id: 28, color: "#4f84eb" },
  ],
  [
    { id: 29, color: "#cdc7ee" },
    { id: 30, color: "#877cda" },
    { id: 31, color: "#4249ac" },
    { id: 32, color: "#313fa4" },
  ],
  [
    { id: 33, color: "#f6e6fb" },
    { id: 34, color: "#d69aeb" },
    { id: 35, color: "#b253d3" },
    { id: 36, color: "#8a31c4" },
  ],
];

const opacityIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <circle cx="8" cy="8" r="7.5" stroke="var(--od-gray-03)" />
    <path
      d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4V12Z"
      fill="var(--od-gray-03)"
    />
  </svg>
);

const strokeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <rect
      x="1"
      y="14"
      width="14"
      height="1"
      rx="0.5"
      fill="var(--od-gray-03)"
    />
    <rect x="1" y="8" width="14" height="2" rx="1" fill="var(--od-gray-03)" />
    <rect x="1" y="1" width="14" height="3" rx="1" fill="var(--od-gray-03)" />
  </svg>
);

type Props = {
  className?: string;
  style?: CSSProperties;
  /** 当前颜色 */
  value?: string;
  /* 头部颜色数据 */
  firstData?: { id: number; color: string }[];
  /* 详细颜色数据 */
  colorData?: { id: number; color: string }[][];
  /* 是否需要透明度 */
  opacity?: boolean;
  /* 是否需要设置描边粗细 */
  stroke?: boolean;
  /** 是否需要input改变颜色 */
  input?: boolean;
  /** 颜色图标 */
  colorIcon?: ReactNode;
  /** 描边大小 */
  strokeWidth?: string;
  onChange?: (color: string) => void;
  /* 描边粗细 */
  onStrokeWidth?: (width: string) => void;
  target?: ReactNode | "parentNode";
};

const Color: React.FC<Props> = ({
  firstData = FIRST_DATA,
  input,
  opacity,
  stroke,
  className,
  style,
  value,
  colorIcon,
  onChange,
  strokeWidth,
  onStrokeWidth,
  target,
}) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  // 当前设置的 16 进制颜色
  const [currentColor, setCurrentColor] = useState<string>(
    !value
      ? "var(--od-light-color)"
      : value === "transparent"
      ? "transparent"
      : tinycolor(value).toString()
  );
  // 当前 input 设置的透明度
  const [inputOpacity, setInputOpacity] = useState<string>("100");

  // 当前 input 设置的 16 进制颜色 (不带 # 号)
  const inputColor = useMemo(() => currentColor.split("#")[1], [currentColor]);
  // 当前透明度
  const currentOpacity = useMemo(() => {
    const opacity = Number(inputOpacity);
    if (isNaN(opacity)) return 1;
    return opacity >= 1 ? 1 : opacity;
  }, [inputOpacity]);

  // 获取 rgba 颜色
  const getRgbaColor = useCallback((color: string, opacity = 1) => {
    if (color !== "transparent") {
      const c = tinycolor(color);
      const { r, g, b } = c.toRgb();
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    return color;
  }, []);

  useEffect(() => {
    if (!value) return;
    if (value === "transparent") {
      setCurrentColor("transparent");
    } else {
      setCurrentColor(`#${tinycolor(value).toHex()}`);
    }
  }, [value]);

  // 当前 input 设置的描边粗细
  const [inputStroke, setInputStroke] = useState<string>(strokeWidth ?? "1");
  useEffect(() => {
    setInputStroke(strokeWidth ?? "1");
  }, [strokeWidth]);

  // 更多颜色选框
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
    <div>
      <StyleEditItem
        className={`StyleEditItem p-8 radius-6 ${isShow ? "active" : ""}`}
      >
        <StyleColor
          className={`flex items-center justify-center ${
            currentColor === "transparent" ? "null" : ""
          } ${className} ${isShow ? "active" : ""}`}
          style={{
            backgroundColor:
              currentColor === "transparent"
                ? "transparent"
                : getRgbaColor(currentColor, currentOpacity),
            ...style,
          }}
        >
          {stroke && <StyleColorCenter></StyleColorCenter>}
          <Flex
            itemsCenter
            justifyCenter
            position="absolute"
            left={0}
            top={0}
            right={0}
            bottom={0}
          >
            {colorIcon}
          </Flex>
        </StyleColor>
      </StyleEditItem>
      <StyleColorContainer className={`relative ${STYLE_CONTENT_ID}`}>
        <StyleColorBox>
          {firstData.map((item) => (
            <StyleColorItem
              className={`${item.color === "transparent" ? "null" : ""} ${
                tinycolor(item.color).toRgbString() ===
                tinycolor(currentColor).toRgbString()
                  ? "active"
                  : ""
              }`}
              onClick={() => {
                !value && setCurrentColor(item.color);
                onChange?.(getRgbaColor(item.color, currentOpacity));
              }}
              // @ts-ignore
              style={{ "--tacc-color-item-bgColor": item.color }}
              key={item.id}
            />
          ))}
        </StyleColorBox>
        {!stroke && (
          <StyleColorBox style={{ marginTop: 12 }}>
            {COLOR_DATA?.map((list, idx) => (
              <div className="flex flex-column gap-2" key={idx}>
                {list.map((item) => (
                  <StyleColorItem
                    className={`${item.color === currentColor ? "active" : ""}`}
                    onClick={() => {
                      !value && setCurrentColor(item.color);
                      onChange?.(getRgbaColor(item.color, currentOpacity));
                    }}
                    // @ts-ignore
                    style={{ "--tacc-color-item-bgColor": item.color }}
                    key={item.id}
                  />
                ))}
              </div>
            ))}
          </StyleColorBox>
        )}
        {(input || opacity || stroke) && (
          <div className="flex items-center mt-16 gap-8">
            {input && (
              <Button
                text="更多颜色"
                icon={
                  <StyledColorIcon className="flex items-center justify-center overflow-hidden" />
                }
                type="background"
                className="flex flex-1"
                style={{ justifyContent: "space-between" }}
                onClick={() => setShowMoreColor(!showMoreColor)}
              ></Button>
            )}
            {stroke && (
              <TaccNumberInput
                background
                prefix={strokeIcon}
                width={112}
                height={30}
                value={inputStroke}
                onChange={(_e: any, v: string) => {
                  setInputStroke(v);
                  onStrokeWidth?.(v);
                }}
              />
            )}
          </div>
        )}
        {input && (
          <StyledColorPanel
            className={`StyledColorPanel absolute flex flex-column gap-8 bg-white radius-6 p-16 ${
              showMoreColor ? "show" : ""
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
            <StyledOpacityWrap className="relative radius-6">
              <StyledColorSlider
                type="range"
                step={1}
                max={100}
                value={inputOpacity}
                onChange={(e: any) => setInputOpacity(e.target.value)}
                className="radius-6"
                currentColor={currentColor}
                opacity={inputOpacity}
              />
            </StyledOpacityWrap>
            <div className="flex gap-8 mt-8">
              <Input
                prefix="#"
                // width={102}
                // height={36}
                // borderless
                value={inputColor}
                // onChange={(_e, v) => handleHexInputChange(v)}
                // onBlur={() =>
                //   onChange?.(getRgbaColor(currentColor, currentOpacity))
                // }
                // maxLength={6}
              />
              {opacity && (
                <TaccNumberInput
                  background
                  prefix={opacityIcon}
                  unit="%"
                  width={112}
                  height={30}
                  max={100}
                  value={inputOpacity}
                  onChange={(_e: any, v: string) => setInputOpacity(v)}
                  onBlur={() =>
                    onChange?.(getRgbaColor(currentColor, currentOpacity))
                  }
                  className="flex-1"
                />
              )}
            </div>
          </StyledColorPanel>
        )}
      </StyleColorContainer>
    </div>
  );
};
export default Color;

const StyleColor = styled.div`
  position: relative;
  width: var(--tacc-color-width, 20px);
  height: var(--tacc-color-height, 20px);
  border-radius: var(--tacc-color-radius, 4px);
  border: var(--tacc-color-border, var(--spaui-input-border));
  cursor: pointer;
  transition: all 0.2s;
  &.active {
    --tacc-color-border: 1px solid var(--od-gray-06);
  }
  &.null {
    position: relative;
    &::after {
      content: "";
      display: block;
      position: absolute;
      left: 8px;
      top: -3px;
      width: 2px;
      height: 24px;
      border-radius: 1px;
      background-color: var(--od-red-06);
      transform: rotate(-45deg);
    }
  }
`;

const StyleColorCenter = styled.div`
  width: 9px;
  height: 9px;
  background-color: white;
  border: 1px solid var(--od-gray-06);
`;

const StyleEditItem = styled.div`
  cursor: pointer;
  transition: all 0.2s;
  &:hover,
  &:hover ${StyleColorCenter}, &:active,
  &.active {
    background-color: var(--od-gray-12);
  }
`;

const StyleColorContainer = styled.div`
  padding: var(--tacc-color-container-padding, 16px);
  border-radius: var(--tacc-color-container-radius, 6px);
  background-color: var(--tacc-color-bgColor, white);
  border: 1px solid var(--od-gray-08);
  box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.05),
    0px 3px 5px 0px rgba(0, 0, 0, 0.05);
  .spaui-input {
    --input-padding: 0;
    background-color: var(--od-gray-12);
    border: 0 !important;
    overflow: hidden;
    .spaui-input-prefix {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 29px;
      color: var(--od-gray-03);
      font-size: 18px;
    }
    input {
      text-align: center;
    }
  }
`;

const StyleColorBox = styled.div`
  display: flex;
  gap: var(--tacc-color-box-gap, 2px);
`;

const StyleColorItem = styled.div`
  border: var(--tacc-color-item-border, var(--spaui-input-border));
  border-radius: var(--tacc-color-item-radius, 4px);
  background-color: var(--tacc-color-item-bgColor, transparent);
  width: var(--tacc-color-item-width, 24px);
  height: var(--tacc-color-item-height, 24px);
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
      content: "";
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

const StyledColorIcon = styled.div`
  width: 16px;
  height: 16px;
  background: conic-gradient(#ffce20, #11e226, #2079ff, #ff4c4c, #ffce20);
  border-radius: 50%;
  flex-shrink: 0;
  &::after {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    background: var(--od-light-color);
    border-radius: 50%;
    filter: blur(1px);
  }
`;

const StyledColorPanel = styled.div`
  bottom: 0;
  left: 268px;
  width: 100%;
  height: 212px;
  border: 1px solid var(--od-gray-08);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.05),
    0px 6px 15px 0px rgba(0, 0, 0, 0.05);
  transform: translateX(-272px);
  opacity: 0;
  pointer-events: none;
  transform-origin: left center;
  transition: all 0.2s linear;
  z-index: -1;
  &.show {
    transform: translateX(0);
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
  border: 1px solid #dfe1e6;
  .color-thumb {
    width: 16px;
    height: 16px;
    border: 2px solid #fff;
    outline: 1px solid var(--od-gray-12);
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
    outline: 1px solid var(--od-gray-08);
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
