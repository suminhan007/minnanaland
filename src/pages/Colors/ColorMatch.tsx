import React, { Fragment, useEffect, useMemo, useState } from "react";
import Flex from "../../components/Flex";
import styled from "styled-components";
import Title from "../../components/Title";
import ColorPicker from "../../components/ColorPicker";
import { IconAdd, IconArrow, IconCloseCircle } from "../../components/Icon";
import { StyleAddColorBtn } from "./ImgColorPicker";
import { MY_COLORS } from "./mock";
import Button from "../../components/Button";
import tinycolor from "tinycolor2";
import CheckedContainer from "../../components/CheckedContainer";
import Select from "../../components/Select";
const ColorMatch: React.FC<{}> = ({}) => {
  const [colorArr, setColorArr] = useState<{ id: string; value: string }[]>([]);
  const [showMoreColor, setShowMoreColor] = useState<boolean>(false);
  /* 类型 */
  const [type, setType] = useState<number>(0);
  const submitDisabled = useMemo(() => {
    if (colorArr.length <= 1) {
      return true;
    }
    if (type === 0) {
      return true;
    }
  }, [colorArr, type]);

  /* 模版 */
  const template = [
    { id: 1, name: "条纹" },
    { id: 2, name: "渐变" },
    { id: 3, name: "方格" },
    { id: 4, name: "波点" },
    { id: 5, name: "花朵" },
    { id: 6, name: "波浪" },
    { id: 7, name: "编织" },
    { id: 8, name: "菱格" },
  ];
  const templateCardRender = (
    curType: number,
    color1: string,
    color2: string,
    color3?: string
  ) => {
    const size = "20%";
    const newColor3 = color3 || color1;
    switch (curType) {
      case 1:
        return (
          <div
            className="auto-color-match flex both-center p-8 fs-12 color-primary flex-1 ratio-1"
            style={{
              background: `linear-gradient(${color1} 25%, ${color2} 0,${color2} 50%, ${color1} 0, ${color1} 75%,${color2} 0)`,
              backgroundSize: "30px 30px",
            }}
          ></div>
        );
      case 2:
        return (
          <div
            className="auto-color-match ratio-1 flex-1"
            style={{
              background:
                number === 3 && color3
                  ? `linear-gradient(to bottom, ${color2},${color1},${newColor3})`
                  : `linear-gradient(to bottom, ${color2},${color1})`,
            }}
          ></div>
        );
      case 3:
        return (
          <div
            className="auto-color-match ratio-1 flex-1"
            style={{
              backgroundImage: `conic-gradient(${color2} 0 25%,${color1} 0 50%,${color2} 0 75%,${color1} 0)`,
              backgroundSize: "30px 30px",
            }}
          ></div>
        );
      case 4:
        return (
          <div
            className="auto-color-match ratio-1 flex-1"
            style={{
              background: `radial-gradient(${color2} 50%, ${color1} 50%),
              radial-gradient(${color2} 50%, ${color1} 50%)`,
              backgroundSize: "30px 30px",
            }}
          ></div>
        );
      case 5:
        return (
          <div
            className="auto-color-match ratio-1 flex-1"
            style={{
              background: `radial-gradient(circle at right bottom,${color1} 10%,transparent 10%) 0 0/${size} ${size},radial-gradient(circle at left bottom,${color1} 10%,transparent 10%) 0 0/${size} ${size},radial-gradient(circle at left top,${color1} 10%,transparent 10%) 0 0/${size} ${size},radial-gradient(circle at right top,${color1} 10%,transparent 10%) 0 0/${size} ${size},radial-gradient(circle at left 25%,${color2} 20%,transparent 20%) 0 0/${size} ${size},radial-gradient(circle at left 75%,${color2} 20%,transparent 20%) 0 0/${size} ${size},radial-gradient(circle at left 100%,${color2} 20%,transparent 20%) 0 0/${size} ${size},radial-gradient(circle at right 25%,${color2} 20%,transparent 20%) 0 0/${size} ${size},radial-gradient(circle at right 75%,${color2} 20%,transparent 20%) 0 0/${size} ${size},radial-gradient(circle at right 100%,${color2} 20%,transparent 20%) 0 0/${size} ${size},radial-gradient(circle at 75% 0%,${color2} 20%,transparent 20%) 0 0/${size} ${size},radial-gradient(circle at 75% 100%,${color2} 20%,transparent 20%) 0 0/${size} ${size},radial-gradient(circle at 25% 0%,${color2} 20%,transparent 20%) 0 0/${size} ${size},radial-gradient(circle at 25% 100%,${color2} 20%,transparent 20%) 0 0/${size} ${size}`,
              backgroundColor: newColor3,
            }}
          ></div>
        );
      case 6:
        return (
          <div
            className="auto-color-match flex-1 ratio-1"
            style={{
              background: `radial-gradient(circle at 0 0,transparent 30.5%,${color2} 30.5%,${color2} 40%,transparent 40%) 0 0/${size} ${size},radial-gradient(circle at right 100%,transparent 30.5%,${color2} 30.5%,${color2} 40%,transparent 40%) 0 0/${size} ${size}`,
              backgroundColor: color1,
            }}
          ></div>
        );
      case 7:
        return (
          <div
            className="auto-color-match flex-1 ratio-1"
            style={{
              background: `linear-gradient(to bottom right,transparent 90%,${color1} 90%) 0 0/${size} ${size},linear-gradient(to bottom left,transparent 90%,${color1} 90%) 0 0/${size} ${size},linear-gradient(to top left,transparent 90%,${color1} 90%) 0 0/${size} ${size},linear-gradient(to top right,transparent 90%,${color1} 90%) 0 0/${size} ${size},radial-gradient(circle at bottom left,${color2} 20%,${color2} 20%,${color2} 40%,transparent 40%) 0 0/${size} ${size},radial-gradient(circle at top right,${color2} 20%,${color2} 20%,${color2} 40%,transparent 40%) 0 0/${size} ${size},radial-gradient(circle at top left,${color2} 20%,${color2} 20%,${color2} 40%,transparent 40%) 0 0/${size} ${size},radial-gradient(circle at bottom right,${color2} 20%,${color2} 20%,${color2} 40%,transparent 40%) 0 0/${size} ${size}`,
              backgroundColor: newColor3,
            }}
          ></div>
        );
      case 8:
        return (
          <div
            className="auto-color-match flex-1 ratio-1"
            style={{
              background: `linear-gradient(to top right,${color2} 30%,transparent 30%,transparent 70%,${color2} 70%) 0 0/${size} ${size},linear-gradient(to bottom right,${color2} 30%,transparent 30%,transparent 70%,${color2} 70%) 0 0/${size} ${size}`,
              backgroundColor: color1,
            }}
          ></div>
        );
      default:
        return null;
    }
  };
  /* 数量 */
  const [number, setNumber] = useState<number>(1);

  const [mapColors, setMapColors] = useState<any[]>([]);
  const handleSubmit = () => {
    let colors: any[] = [];
    if (
      number === 3 &&
      colorArr.length >= 3 &&
      (type === 2 || type === 5 || type === 7)
    ) {
      for (let i = 0; i < colorArr.length; i++) {
        for (let j = i + 1; j < colorArr.length; j++) {
          for (let k = j + 1; k < colorArr.length; k++) {
            const hex1 = `#${tinycolor(colorArr[i].value).toHex()}`;
            const hex2 = `#${tinycolor(colorArr[j].value).toHex()}`;
            const hex3 = `#${tinycolor(colorArr[k].value).toHex()}`;
            colors.push([{ color: hex1 }, { color: hex2 }, { color: hex3 }]);
          }
        }
      }
    } else {
      for (let i = 0; i < colorArr.length; i++) {
        for (let j = i + 1; j < colorArr.length; j++) {
          const hex1 = `#${tinycolor(colorArr[i].value).toHex()}`;
          const hex2 = `#${tinycolor(colorArr[j].value).toHex()}`;
          colors.push([{ color: hex1 }, { color: hex2 }]);
        }
      }
    }
    setMapColors(colors);
  };
  useEffect(() => {
    handleSubmit();
  }, [number, colorArr, type]);
  return (
    <StyleColorContainer className="flex items-center height-100">
      <StyleLeftBox className="flex-1 flex column height-100">
        <div className="flex-1 width-100 px-24 flex column gap-24 pt-32 pb-24 overflow-auto">
          {/* 输入颜色 */}
          <Flex column gap={12}>
            <Flex column gap={8}>
              <Title title="Step 01: 选取颜色" type="h3" />
              <Title
                title="输入自定义颜色，或从颜色库中选取颜色（支持 2-8 个颜色）"
                type="p"
                className="color-gray-4"
              />
            </Flex>
            {/* 颜色列表 */}
            <div className="flex column items-center gap-12 p-12 width-100 border radius-6">
              {colorArr.length > 0 && (
                <div className="flex flex-wrap both-center gap-12 ">
                  <>
                    {colorArr?.map((item: { id: string; value: string }) => (
                      <StyleColorItem className="relative">
                        <ColorPicker
                          value={item.value}
                          input={false}
                          showDrop={false}
                        />
                        <div
                          className="absolute cursor-pointer close-icon"
                          onClick={() => {
                            const newColorLost = colorArr.filter(
                              (itm: any) => itm.id !== item.id
                            );
                            setColorArr(newColorLost);
                          }}
                        >
                          <IconCloseCircle fill="var(--color-red-6)" />
                        </div>
                      </StyleColorItem>
                    ))}
                  </>
                </div>
              )}
              {colorArr?.length < 8 && (
                <ColorPicker
                  showList={false}
                  showOpacity={false}
                  onClick={(value) =>
                    setColorArr([...colorArr, { id: value, value: value }])
                  }
                >
                  <StyleAddColorBtn className="StyleAddColorBtn relative flex both-center border radius-50 cursor-pointer">
                    <IconAdd />
                  </StyleAddColorBtn>
                </ColorPicker>
              )}
            </div>
            {/* 颜色库 */}
            <div className="relative flex flex-column both-center gap-12 py-24 width-100 border radius-6">
              <StyleColorsLib
                className={`width-100 overflow-auto px-12 ${
                  showMoreColor ? "show" : ""
                }`}
              >
                {MY_COLORS.map((item: any) => (
                  <Fragment key={item.id}>
                    <p className="fs-14 mb-8 color-gray-3">【{item.name}】</p>
                    <div
                      className="grid gap-12 width-100 mb-12"
                      style={{
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(48px, 1fr))",
                      }}
                    >
                      {item.data.map((color: any) => (
                        <ColorPicker
                          key={color}
                          size={48}
                          value={color.value}
                          input={color.name}
                          showDrop={false}
                          onCardClick={() => {
                            setColorArr([
                              ...colorArr,
                              { id: color.value, value: color.value },
                            ]);
                          }}
                        />
                      ))}
                    </div>
                  </Fragment>
                ))}
              </StyleColorsLib>
              {/* 收起展开按钮 */}
              <StyleToggleBtn
                className="StyleToggleBtn absolute flex both-center px-12 py-4 border radius-12 cursor-pointer bg-hover-gray"
                onClick={() => setShowMoreColor(!showMoreColor)}
              >
                <IconArrow stroke="var(--color-text-4)" />
              </StyleToggleBtn>
            </div>
          </Flex>
          {/* 选择模版 */}
          <Flex column gap={12}>
            <Flex column gap={8}>
              <Title title="Step 02: 选择配色模版" type="h3" />
            </Flex>
            <StyleTemplateBox className="grid gap-8 width-100 p-12 border overflow-auto">
              {template?.map((item) => (
                <CheckedContainer key={item.id} checked={item.id === type}>
                  <div
                    className="flex column items-center gap-8 fs-12 color-gray-3 cursor-pointer"
                    onClick={() => {
                      setType(item.id);
                      if (item.id !== 2 && item.id !== 5 && item.id !== 7) {
                        setNumber(2);
                      }
                    }}
                  >
                    <div className="width-100 ratio-1">
                      {templateCardRender(
                        item.id,
                        "var(--color-primary-2)",
                        "var(--color-primary-4)",
                        "var(--color-primary-6)"
                      )}
                    </div>
                    {item.name}
                  </div>
                </CheckedContainer>
              ))}
            </StyleTemplateBox>
          </Flex>
          {/* 设置数量 */}
          <Flex column gap={12}>
            <Flex column gap={8}>
              <Title title="Step 03: 设置配色数量" type="h3" />
              <Select
                selected={number}
                data={[
                  { id: 1, value: 2 },
                  {
                    id: 2,
                    value: 3,
                    disabled:
                      colorArr.length < 3 ||
                      (type !== 2 && type !== 5 && type !== 7),
                  },
                ]}
                onChange={(item) => {
                  setNumber(Number(item.value));
                }}
              />
            </Flex>
          </Flex>
        </div>
        <div className="px-24 py-24 width-100 border-top">
          <Button
            text="立即生成"
            type="background"
            status="primary"
            width="100%"
            disabled={submitDisabled}
            pop={submitDisabled ? "请先填写完整" : ""}
            onClick={() => handleSubmit()}
          />
        </div>
      </StyleLeftBox>
      <StyleRightBox
        className="flex-1 pl-32 pr-24 height-100 py-32 border-left overflow-auto"
        style={{ flexShrink: 0 }}
      >
        <div
          className="grid gap-12 width-100"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          }}
        >
          {mapColors?.map((item) =>
            number === 3 && colorArr.length >= 3 && item.length === 3 ? (
              <div
                className="grid gap-4 width-100 ratio-2"
                style={{ gridTemplateColumns: "repeat(2,1fr)" }}
                key={item.id}
              >
                {[
                  [0, 1, 2],
                  [0, 2, 1],
                  [1, 2, 0],
                  [1, 0, 2],
                  [2, 1, 0],
                  [2, 0, 1],
                ].map((cardItem1, cardIndex1) => (
                  <Fragment key={cardIndex1}>
                    {templateCardRender(
                      type,
                      item[cardItem1[0]].color,
                      item[cardItem1[1]].color,
                      item[cardItem1[2]].color
                    )}
                  </Fragment>
                ))}
              </div>
            ) : (
              <Flex className="width-100 ratio-2" gap={4} key={item.id}>
                {Array.from({ length: 2 }).map((_cardItem2, cardIndex2) => (
                  <Fragment key={cardIndex2}>
                    {templateCardRender(
                      type,
                      item[cardIndex2].color,
                      item[1 - cardIndex2].color
                    )}
                  </Fragment>
                ))}
              </Flex>
            )
          )}
        </div>
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
  height: 96px;
  max-height: 332px;
  & + .StyleToggleBtn svg {
    transition: transform var(--transition-15) ease;
  }
  &.show {
    height: fit-content;
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
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  height: fit-content;
  max-height: 216px;
  @media screen and (max-width: 800px) {
    width: calc(100vw - 48px);
  }
`;

export default ColorMatch;
