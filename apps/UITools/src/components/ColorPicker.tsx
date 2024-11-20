import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  CSSProperties,
} from "react";
import styled from "styled-components";
import Input from "./Input";
// @ts-ignore
import tinycolor from "tinycolor2";
import Flex from "./Flex";
import Pop from "./Pop";
import { IconCopy } from "./Icon";
import Message from "./Message";

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

type ColorProps = {
  /* 外部回传的 value 值 */
  value?: string;
  size?: string | number;
  showDrop?: boolean;
  showList?: boolean;
  showOpacity?: boolean;
  input?: string | React.ReactNode | boolean;
  pop?: string | React.ReactNode;
  active?: boolean;
  onChange?: (color: string) => void;
  onClick?: (color: string) => void;
  onCardClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
};
const ColorPicker: React.FC<ColorProps> = ({
  value = "#ffffff",
  size = 48,
  showDrop = true,
  showList = false,
  showOpacity = true,
  input = true,
  pop,
  active = false,
  onChange,
  onClick,
  onCardClick,
  children,
  className,
  style,
}) => {
  const [show, setShow] = useState<boolean>(false);
  // 当前的 hex 值
  const [currentColor, setCurrentColor] = useState<string>(
    !value ? "#ffffff" : value === "transparent" ? "transparent" : value
  );
  const [inputColor, setInputColor] = useState<string>(value.split("#")[1]);
  const [opacity, setOpacity] = useState<number>(100);
  const [h, setH] = useState<number>(0);
  const [s, setS] = useState<number>(0);
  const [v, setV] = useState<number>(0);

  // 获取 rgba 颜色值
  const getRgbaColor = useCallback((color: string, opacity = 100) => {
    if (color !== "transparent") {
      const c = tinycolor(color);
      const { r, g, b } = c.toRgb();
      return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
    }
    return color;
  }, []);

  useEffect(() => {
    if (!value) return;
    if (value === "transparent") {
      setCurrentColor("transparent");
    } else {
      const { h, s, v } = tinycolor(value).toHsv();
      setH(h);
      !move && setS(s);
      !move && setV(v);
      setCurrentColor(value);
      setInputColor(value.split("#")[1]);
    }
  }, [value]);

  /* 色相值 */
  const svColor = useMemo(() => {
    const hex = tinycolor(`hsv(${h},${1},${1})`).toHex();
    return `#${hex}`;
  }, [h]);
  /* 所有操作都更新 hsv  */
  const handleHsvChange = (hexColor: string) => {
    if (hexColor === "transparent") {
      setCurrentColor("transparent");
    } else {
      const hsv = tinycolor(hexColor).toHsv();
      setH(hsv.h);
      setS(hsv.s);
      setV(hsv.v);
    }
  };
  /* 根据 hsv 更新 inputColor 和 currentColor*/
  const [isInput, setIsInput] = useState<boolean>(false);
  useEffect(() => {
    const hex = tinycolor(`hsv(${h},${s},${v})`).toHex();
    !isInput && setInputColor(hex);
    setCurrentColor(`#${hex}`);
  }, [h, s, v]);

  // 拖动选择颜色
  const THUMB_SIZE = 12;
  const [move, setMove] = useState<Boolean>(false);
  const handleThumb = (e: any) => {
    const panel = e.target.getBoundingClientRect();
    const diffX = e.clientX - panel.left;
    const diffY = e.clientY - panel.top;
    if (diffX >= THUMB_SIZE / 2 && diffX <= panel.width - THUMB_SIZE) {
      setS((diffX - THUMB_SIZE / 2) / (panel.width - THUMB_SIZE));
    } else {
      diffX < THUMB_SIZE / 2 ? setS(0) : setS(1);
    }
    if (diffY >= THUMB_SIZE / 2 && diffY <= panel.height - THUMB_SIZE) {
      setV(1 - (diffY - THUMB_SIZE / 2) / (panel.height - THUMB_SIZE));
    } else {
      diffY < THUMB_SIZE / 2 ? setV(1) : setV(0);
    }
    onChange?.(getRgbaColor(currentColor, opacity));
  };
  // 复制颜色
  const [showCopyMsg, setShowCopyMsg] = useState<string>("");
  const handleColorItemClick = (color: string) => {
    navigator.clipboard.writeText(color);
    setShowCopyMsg(`已复制～${color}`);
  };
  return (
    <StyledColorPicker
      className={`land-color-picker ${className}`}
      style={style}
      color={value}
      size={typeof size === "string" ? size : `${size}px`}
    >
      <Message show={Boolean(showCopyMsg)} text={showCopyMsg} />
      <div
        className="land-color-trigger"
        onClick={(e: React.UIEvent) => {
          e.stopPropagation();
          setShow(!show);
          document.addEventListener("click", () => {
            setShow(false);
          });
          onCardClick?.();
        }}
      >
        {children ? (
          children
        ) : (
          <>
            <div
              className={`land-color-grid hover-pop ${active ? "active" : ""}`}
              style={{
                backgroundColor:
                  currentColor === "transparent"
                    ? "transparent"
                    : getRgbaColor(currentColor, opacity),
              }}
            >
              {pop && <Pop content={pop} theme="dark" />}
            </div>
            {typeof input !== "boolean" ? (
              <div
                className="land-color-label copy flex items-center justify-center"
                onClick={() => handleColorItemClick?.(value)}
              >
                {input}
                {typeof input === "string" && (
                  <IconCopy size={12} stroke="var(--color-text-5)" />
                )}
              </div>
            ) : input ? (
              <Input
                prefix="#"
                maxLength={6}
                value={inputColor}
                w={size}
                onFocus={() => setIsInput(true)}
                onChange={(val) => {
                  setInputColor(String(val));
                  handleHsvChange(`#${val}`);
                }}
                onBlur={() => {
                  onChange?.(getRgbaColor(`#${inputColor}`, opacity));
                  setIsInput(false);
                }}
                wrapStyle={{
                  height: 24,
                  fontSize: "12px",
                  border: "none",
                  gap: 0,
                  padding: 0,
                }}
                style={{
                  fontSize: "10px",
                }}
              />
            ) : (
              <p className="land-color-label">#{inputColor}</p>
            )}
          </>
        )}
      </div>
      {showDrop && (
        <StyledColorPanel
          className={`land-color-drop ${show ? "show" : ""}`}
          onClick={(e: React.UIEvent) => e.stopPropagation()}
        >
          <StyledColorGrid
            className="StyledColorGrid"
            svColor={svColor}
            onMouseMove={(e: any) => move && handleThumb(e)}
            onMouseDown={(e: any) => {
              e.preventDefault();
              handleThumb(e);
              setMove(true);
            }}
            onMouseUp={() => {
              setMove(false);
              onClick?.(getRgbaColor(currentColor, opacity));
            }}
            onMouseLeave={() => setMove(false)}
          >
            <div
              className="color-thumb"
              style={{
                left: THUMB_SIZE / 2 + s * (180 - THUMB_SIZE),
                top: THUMB_SIZE / 2 + (86 - THUMB_SIZE) - v * (86 - THUMB_SIZE),
              }}
            ></div>
          </StyledColorGrid>
          <Flex gap={8}>
            <div
              className="radius-4 border"
              style={{
                width: "40px",
                aspectRatio: 1,
                flexShrink: 0,
                background:
                  currentColor === "transparent"
                    ? "transparent"
                    : getRgbaColor(currentColor, opacity),
              }}
            ></div>
            <Flex column gap={8}>
              <StyledColorSlider
                type="range"
                max={360}
                value={h}
                step={1}
                currentColor={currentColor}
                onChange={(e: any) => setH(Number(e.target.value))}
              />
              {showOpacity && (
                <StyledOpacityWrap>
                  <StyledColorSlider
                    type="range"
                    step={1}
                    max={100}
                    value={opacity}
                    className="opacity"
                    currentColor={svColor}
                    onChange={(e: any) => {
                      setOpacity(e.target.value);
                      onChange?.(getRgbaColor(currentColor, opacity));
                    }}
                  />
                </StyledOpacityWrap>
              )}
            </Flex>
          </Flex>
          <div className="flex gap-8">
            <Input
              className="flex-2"
              prefix="#"
              maxLength={6}
              value={inputColor}
              onFocus={() => setIsInput(true)}
              onChange={(val) => {
                setInputColor(String(val));
                handleHsvChange(`#${val}`);
              }}
              onBlur={() => {
                onChange?.(getRgbaColor(`#${inputColor}`, opacity));
                setIsInput(false);
              }}
            />
            {showOpacity && (
              <Input
                className="flex-1"
                max={100}
                min={0}
                value={String(opacity)}
                onChange={(val) => {
                  setOpacity(Number(val));
                  onChange?.(getRgbaColor(currentColor, Number(v)));
                }}
              />
            )}
          </div>
          {showList && (
            <div className="width-100 flex" style={{ gap: 2 }}>
              {COLOR_DATA?.map((list, idx) => (
                <div className="flex column" key={idx} style={{ gap: 2 }}>
                  {list.map((item) => (
                    <StyleColorItem
                      onClick={() => {
                        const { h, s, v } = tinycolor(item.color).toHsv();
                        setS(s);
                        setH(h);
                        setV(v);
                        onChange?.(getRgbaColor(item.color, opacity));
                      }}
                      // @ts-ignore
                      style={{ "--tacc-color-item-bgColor": item.color }}
                      key={item.id}
                    />
                  ))}
                </div>
              ))}
            </div>
          )}
        </StyledColorPanel>
      )}
    </StyledColorPicker>
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
    .land-color-label {
      font-size: 12px;
      color: var(--color-text-3);
      text-align: center;
      &.copy{
        .IconCopy{
          width: 0;
          overflow: hidden;
          transition: width 0.2s ease;
        }
        &:hover{
          .IconCopy{
            width: 12px;
          }
        }
      }
    }
  }
  .land-color-grid {
    width: 100%;
    aspect-ratio: 1;
    background-color: ${(props) => props.color};
    border: 8px solid var(--color-bg-3);
    border-radius: 4px;
    transition: border-color var(--transition-15) linear, background-color var(--transition-2) linear;
    will-change: border-color, background-color;
    &:hover {
      border-color: var(--color-bg-2);
    }
    &:active {
      border-color: var(--color-bg-3);
    }
    &.active {
      outline: 1px solid var(--color-primary-6);
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
  z-index: 10;
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
    transform: translate(-50%, -50%);
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

export default ColorPicker;
