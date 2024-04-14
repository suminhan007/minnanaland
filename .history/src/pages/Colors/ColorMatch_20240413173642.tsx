import React, { useState } from "react";
import Flex from "../../components/Flex";
import styled from "styled-components";
import Title from "../../components/Title";
import ColorPicker from "../../components/ColorPicker";
import { IconAdd, IconArrow, IconCloseCircle } from "../../components/Icon";
import { StyleAddColorBtn, StyleColorItem } from "./ImgColorPicker";
import { MY_COLORS } from "./mock";

type Props = {};

const ColorMatch: React.FC<Props> = ({}) => {
  const [colorArr, setColorArr] = useState<{ id: string; value: string }[]>([]);
  const [showMoreColor, setShowMoreColor] = useState<boolean>(false);
  return (
    <StyleColorContainer className="flex mb-24 height-100">
      <div className="flex-1 flex column gap-24 px-24 mt-32">
        <Flex column gap={8}>
          <Title title="Step 01: 选取颜色" type="h3" />
          <Title
            title="输入自定义颜色，或从颜色库中选取颜色（支持 1-10 个颜色）"
            type="p"
            className="color-gray-4"
          />
        </Flex>
        {/* 颜色列表 */}
        <div className="flex column items-center gap-24 p-12 width-100 border radius-6">
          {colorArr.length > 0 && (
            <div className="flex flex-wrap both-center gap-12 ">
              <>
                {colorArr?.map((item: { id: string; value: string }) => (
                  <StyleColorItem className="relative">
                    <ColorPicker value={item.value} input={false} />
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
          {colorArr?.length < 10 && (
            <ColorPicker
              onChange={(value) =>
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
        <StyleColorsLib
          className={`relative flex flex-wrap both-center gap-12 p-12 width-100 border radius-6 ${
            showMoreColor ? "show" : ""
          } `}
        >
          {MY_COLORS.map((item: any) => (
            <div className="width-100">
              <p className="fs-14 mb-8">【{item.name}】</p>
              <Flex>
                {item.data.map((color: any) => (
                  <StyleColorItem
                    onClick={() =>
                      setColorArr([
                        ...colorArr,
                        { id: color.value, value: color.value },
                      ])
                    }
                  >
                    <ColorPicker
                      size={36}
                      value={color.value}
                      input={color.name}
                      showDrop={false}
                    />
                  </StyleColorItem>
                ))}
              </Flex>
            </div>
          ))}
          {/* 收起展开按钮 */}
          <StyleToggleBtn
            className="absolute flex both-center px-12 py-4 border radius-12 cursor-pointer"
            onClick={() => setShowMoreColor(!showMoreColor)}
          >
            <IconArrow stroke="var(--color-text-4)" />
          </StyleToggleBtn>
        </StyleColorsLib>
      </div>
      <div className="flex-1 px-24 height-100 mt-32">
        <Flex column gap={8}>
          <Title title="Step 02: 设置配色模版" type="h3" />
          <Title
            title="根据色彩占比等因素选择合适的配色模板"
            type="p"
            className="color-gray-4"
          />
        </Flex>
      </div>
    </StyleColorContainer>
  );
};

const StyleColorContainer = styled.div`
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const StyleColorsLib = styled.div`
  &.hei
`
const StyleToggleBtn = styled.div`
  bottom: 0;
  left: 50%;
  background-color: var(--color-bg-white);
  transform: translate(-50%, 50%);
`;

export default ColorMatch;
