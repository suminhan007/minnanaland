import React, { useState, useEffect, useRef, CSSProperties } from "react";
import styled from "styled-components";

type Props = {
  /**是否需要背景分割线 */
  useDivider?: boolean;
  /**是否需要前缀和后缀 */
  prefix?: string;
  suffix?: string;
  /**是否需要气泡 */
  usePop?: boolean;
  /**调节步数 */
  step?: number;
  /**输入值 */
  value?: number;
  onChange?: (val: number) => void;
  className?: string;
  style?: CSSProperties;
};
const SliderBlock: React.FC<Props> = ({
  prefix,
  suffix,
  useDivider = true,
  usePop = false,
  step = 1,
  value = 0,
  onChange,
  className,
  style,
}) => {
  const [currentValue, setCurrentValue] = useState<number>(value);
  const [show, setShow] = useState<boolean>(false);
  const InputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    InputRef.current?.addEventListener("mouseover", () => {
      setShow(true);
    });
    InputRef.current?.addEventListener("mouseleave", () => {
      setShow(false);
    });
  });
  useEffect(() => {
    setCurrentValue(value);
  }, [value]);
  return (
    <div
      className={`flex items-center gap-8 width-100 height-100 ${
        className ? className : ""
      }`}
      style={style}
    >
      {/* 最小值前缀:为0%或options第一项 */}
      {prefix && <div className="fs-12 color-gray-3">{prefix}</div>}
      {/* 背景分割线:不需要时为灰色底 */}
      <div
        className="StyleSliderBg relative flex-1 height-100 radius-8"
        style={{
          background: useDivider
            ? `linear-gradient(to right,transparent calc(100% - 2px), var(--color-border-1)  calc(100% - 2px),var(--color-border-1) 100%) 0 0 / 100% 100%,
          linear-gradient(to right,transparent calc(100% - 2px), var(--color-border-2)  calc(100% - 2px),
          var(--color-border-2) 100%) 0 0 / ${step}% 100%,var(--color-border-1) 0 0 / 100% 100%`
            : "var(--color-border-1)",
        }}
      >
        {/* hover提示气泡:显示百分比或数值 */}
        {usePop && (
          <SliderPop
            className="sliderPop absolute"
            style={{
              display: show ? "block" : "none",
              left:
                currentValue > 0 && currentValue < 100 / step
                  ? currentValue * step + "%"
                  : currentValue === 0
                  ? "-20px"
                  : "calc(100% - 36px)",
              transform:
                currentValue > 0 && currentValue < 100 / step
                  ? "translateX(-50%)"
                  : "none",
            }}
          >
            {currentValue * step}%
          </SliderPop>
        )}
        {/* slider:为0或options第一项 */}
        <StyleInput
          ref={InputRef}
          type="range"
          value={currentValue}
          min={0}
          max={100 / step}
          onChange={(e) => {
            onChange?.(Number(e.target.value));
            setCurrentValue(Number(e.target.value));
          }}
          // 选中部分样式
          style={{
            background:
              currentValue < 50 / step
                ? `linear-gradient(to right,var(--color-primary-6) calc(100% - 2px), var(--color-primary-6)  calc(100% - 2px)) 0 0 / ${
                    currentValue * step + 1
                  }% 100% no-repeat`
                : `linear-gradient(to right,var(--color-primary-6) calc(100% - 2px), var(--color-primary-6)  calc(100% - 2px)) 0 0 / ${
                    currentValue * step - 1
                  }% 100% no-repeat`,
          }}
          position={step >= 10 ? "absosulte" : "static"}
          left={
            step >= 10 && currentValue >= 0 && currentValue < 100 / step
              ? currentValue * step + "%"
              : "calc(100% - 16px)"
          }
          transform={
            step >= 10 && currentValue > 0 && currentValue < 100 / step
              ? "translateX(" + `${currentValue * step - 50}` + "%)"
              : "none"
          }
        />
      </div>
      {/* 最大值后缀:为100%或options最后一项 */}
      {suffix && <div className="fs-12 color-gray-3">{suffix}</div>}
    </div>
  );
};

const StyleInput = styled.input<{
  left?: number | string;
  transform?: string;
  position?: string;
}>`
  flex: 1;
  appearance: none;
  -webkit-appearance: none;
  height: 100%;
  width: 100%;
  margin: 0;
  border: 0px;
  outline: none;
  object-fit: contain;
  border-radius: 8px;
  &::-webkit-slider-runnable-track {
    height: 100%;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    background: var(--od-light-color);
    border: 1px solid rgba(68, 91, 125, 0.12);
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.04);
    position: ${(props) => props.position};
    left: ${(props) => props.left};
    transform: ${(props) => props.transform};
    &:hover {
      border-color: var(--od-blue-06);
      cursor: ew-resize;
    }
  }
`;
const SliderPop = styled.div`
  top: -46px;
  width: 52px;
  padding: 4px 6px;
  color: var(--color-text-2);
  text-align: center;
  border-radius: 4px;
  background: var(--color-bg-white);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.07),
    0px 3px 5px 0px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  z-index: 2;
  &::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: calc(50% - 6px);
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 2px;
    background: var(--color-bg-white);
    transform: rotate(45deg);
  }
`;
export default SliderBlock;
