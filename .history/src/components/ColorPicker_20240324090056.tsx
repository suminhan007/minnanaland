import React from "react";
import styled from "styled-components";

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
  return (
    <StyledColorPicker
      className="land-color-picker"
      color={value}
      size={typeof size === "string" ? size : `${size}px`}
    >
      <div className="land-color-trigger"></div>
      <div className="land-color-drop">
      <StyledColorPanel
              className={`land-color-drop absolute flex flex-column gap-8 bg-white radius-6 p-16 ${true ? 'show' : ''}`}
            >
              <StyledColorGrid
                className='StyledColorGrid relative width-100 radius-6'
                selectColor={currentColor}
                onMouseMove={(e: React.UIEvent) => handleMoveColorThumb(e)}
              >
                <div
                  className='color-thumb absolute'
                  style={{ top: `${v * 100}%`, left: `${s * 100}%` }}

                ></div >
              </StyledColorGrid>
              <StyledColorSlider
                className='radius-6'
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
                  className='radius-6'
                  currentColor={currentColor}
                  opacity={inputOpacity}
                />
              </StyledOpacityWrap>
              <div className='flex gap-8 mt-8'>
                <Input
                  prefix="#"
                  width={102}
                  height={36}
                  borderless
                  value={inputColor}
                  onChange={(_e, v) => handleHexInputChange(v)}
                  onBlur={() => onChange?.(getRgbaColor(currentColor, currentOpacity))}
                  maxLength={6}
                />
                {opacity && (
                  <TaccNumberInput
                    background
                    prefix={opacityIcon}
                    unit='%'
                    width={112}
                    height={30}
                    max={100}
                    value={inputOpacity}
                    onChange={(_e: any, v: string) => setInputOpacity(v)}
                    onBlur={() => onChange?.(getRgbaColor(currentColor, currentOpacity))}
                    className="flex-1"
                  />
                )}
              </div>
            </StyledColorPanel>
      </div>
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
  bottom: 0;
  left: 268px;
  width: 100%;
  height: 212px;
  border: 1px solid var(--od-gray-08);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.05), 0px 6px 15px 0px rgba(0, 0, 0, 0.05);
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
`
export default ColorPicker;
