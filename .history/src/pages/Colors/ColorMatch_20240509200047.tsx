import React, { Fragment, useMemo, useState } from "react";
import Flex from "../../components/Flex";
import styled from "styled-components";
import Title from "../../components/Title";
import ColorPicker from "../../components/ColorPicker";
import { IconAdd, IconArrow, IconCloseCircle } from "../../components/Icon";
import { StyleAddColorBtn } from "./ImgColorPicker";
import { MY_COLORS } from "./mock";
import Select from "../../components/Select";
import Button from "../../components/Button";
import tinycolor from "tinycolor2";
import Check from "../../components/Check";

type Props = {};

const ColorMatch: React.FC<Props> = ({}) => {
  const [colorArr, setColorArr] = useState<{ id: string; value: string }[]>([]);
  const [showMoreColor, setShowMoreColor] = useState<boolean>(false);
  /* 主色 */
  const [mainColor, setMainColor] = useState<string>("0");
  /* 数量 */
  const [number, setNumber] = useState<string>("1");
  /* 类型 */
  const [type, setType] = useState<string>("1");
  /* 比例 */
  const [percentage, setPercentage] = useState<string>("0");
  const submitDisabled = useMemo(() => {
    if (colorArr.length === 0) {
      return true;
    }
    if (type === "0") {
      return true;
    }
    if (number === "0") {
      return true;
    }
  }, [colorArr, type, number]);
  const NumberSelects = useMemo(() => {
    if (type === "1") {
      return [{ id: "1", value: "2" }];
    } else {
      return [
        { id: "1", value: "2" },
        { id: "2", value: "3" },
        { id: "3", value: "4" },
      ];
    }
  }, [type]);
  /* 模版 */
  const template = useMemo(() => {
    if (type === "1") {
      return [
        { id: "1", url: "/src/assets/colorTemplates/template-text-1.png" },
      ];
    } else {
    }
  }, [type, number]);
  const [mapColors, setMapColors] = useState<any[]>([]);
  const getMapColors = () => {
    let mapColors: any[] = [];
    for (let i = 0; i < colorArr.length; i++) {
      for (let j = i + 1; j < colorArr.length; j++) {
        const hex1 = `#${tinycolor(colorArr[i].value).toHex()}`;
        const hex2 = `#${tinycolor(colorArr[j].value).toHex()}`;
        const contrast =
          (tinycolor(colorArr[i].value).toHsl().l + 0.05) /
          (tinycolor(colorArr[j].value).toHsl().l + 0.05);
        mapColors.push([
          { color: hex1, contrast: contrast.toFixed(2) },
          { color: hex2 },
        ]);
      }
    }
    setMapColors(mapColors);
  };
  const [filterChecked, setFilterChecked] = useState<boolean>(false);
  return (
    <StyleColorContainer className="flex items-center height-100">
      <StyleLeftBox className="flex-1 flex column gap-24 pl-24 pr-32 pt-32 pb-24 height-100 overflow-auto">
        
        <StyleSubmitButton
          text="立即生成"
          type="background"
          status="primary"
          disabled={submitDisabled}
          onClick={() => {
            getMapColors();
            setFilterChecked(false);
          }}
        />
      </StyleLeftBox>
      <StyleRightBox
        className="flex-1 pl-32 pr-24 height-100 py-32 border-left overflow-auto"
        style={{ flexShrink: 0 }}
      >
        {/* 操作项 */}
        {mapColors.length !== 0 && (
          <div className="flex gap-12 mb-12">
            <Check
              text="自动过滤"
              pop="勾选后将过滤掉对比度不理想的结果"
              checked={filterChecked}
              onChange={() => {
                setFilterChecked(!filterChecked);
                setMapColors(mapColors.filter((itm) => itm[0].contrast > 4.5));
              }}
            />
          </div>
        )}
        <StyleTemplateBox className="grid gap-12 width-100">
          {mapColors.map((item) => (
            <Fragment>
              {type === "1" && (
                <div className="flex">
                  {Array.from({ length: 2 }).map(
                    (_item1: any, index: number) => (
                      <StyleTemplateCard className="flex column">
                        <div
                          className="p-12 flex-2"
                          style={{
                            backgroundColor: item[index].color,
                            color: item[1 - index].color,
                          }}
                        >
                          <p className="fs-12">
                            The quick, brown, cerise red, and energy yellow fox
                            jumped over the lazy dog.
                          </p>
                          <p className="fs-12">
                            {item[0].color} {item[1].color}
                          </p>
                        </div>
                        {/* 结果 */}
                        <div className="flex-1 flex items-center gap-4 px-12 color-gray-3 bg-gray">
                          <p
                            style={{
                              color:
                                item[0].contrast > 4.5
                                  ? "var(--color-green-6)"
                                  : "var(--color-red-6)",
                            }}
                          >
                            {item[0].contrast > 4.5 ? "success" : "fail"}
                          </p>
                          <p className="fs-12">
                            对比度：
                            <span className="fs-16 fw-600">
                              {item[0].contrast}
                            </span>
                            :1
                          </p>
                        </div>
                      </StyleTemplateCard>
                    )
                  )}
                </div>
              )}
              {type === "3" && (
                <div
                  style={{
                    aspectRatio: 1,
                    background: `linear-gradient(to bottom, ${item[0].color} 0%, ${item[1].color} 100%)`,
                  }}
                ></div>
              )}
            </Fragment>
          ))}
        </StyleTemplateBox>
      </StyleRightBox>
    </StyleColorContainer>
  );
};

const StyleColorContainer = styled.div`
  height: calc(100vh - 64px);
  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: fit-content;
  }
`;

const StyleLeftBox = styled.div`
  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;

const StyleColorItem = styled.div`
  .close-icon {
    top: -6px;
    right: -6px;
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--transition-15) linear;
    will-change: opacity;
  }
  &:hover .close-icon {
    opacity: 1;
    pointer-events: all;
  }
`;

const StyleRightBox = styled.div`
  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;

const StyleColorsLib = styled.div`
  height: 84px;
  & + .StyleToggleBtn svg {
    transition: transform var(--transition-15) ease;
  }
  &.show {
    height: fit-content;
    overflow: visible;
    & + .StyleToggleBtn svg {
      transform: rotate(180deg);
    }
  }
`;
const StyleToggleBtn = styled.div`
  bottom: 0;
  left: 50%;
  background-color: var(--color-bg-white);
  transform: translate(-50%, 50%);
`;

const StyleTemplateBox = styled.div`
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  @media screen and (max-width: 800px) {
    width: calc(100vw - 48px);
  }
`;
const StyleSubmitButton = styled(Button)`
  width: 100%;
  font-weight: 500;
  text-align: center;
  @media screen and (max-width: 800px) {
    width: calc(100vw - 48px);
    margin: 12px 24px;
  }
`;

const StyleTemplateCard = styled.div`
  aspect-ratio: 0.75;
  line-height: 1.15em;
  animation: showin 0.3s linear 0s 1;
  @keyframes showin {
    from{
      filter: blur(2px);
    }
    to{
      filter: blur(0px);
    }
  }
`

export default ColorMatch;
