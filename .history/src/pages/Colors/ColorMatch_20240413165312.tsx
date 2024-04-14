import React, { useState } from "react";
import Flex from "../../components/Flex";
import styled from "styled-components";
import Title from "../../components/Title";
import ColorPicker from "../../components/ColorPicker";
import { IconAdd, IconCloseCircle } from "../../components/Icon";
import { StyleAddColorBtn, StyleColorItem } from "./ImgColorPicker";

type Props = {};

const ColorMatch: React.FC<Props> = ({}) => {
  const [colorArr, setColorArr] = useState<{ id: string; value: string }[]>([]);
  return (
    <StyleColorContainer className="flex mb-24 height-100">
      <div className="flex-1 flex column gap-24 p-24 pt-32">
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
          <div className="flex flex-wrap both-center gap-12 ">
            {colorArr.map((item: { id: string; value: string }) => (
              <StyleColorItem className="relative">
                <ColorPicker value={item.value} showInput={false} />
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
          </div>
          {colorArr?.length < 10 && (
            <ColorPicker
              onChange={(value) =>
                setColorArr([...colorArr, { id: value, value: value }])
              }
            >
              <StyleAddColorBtn className="StyleAddColorBtn relative flex both-center border radius-50 cursor-pointer hover-pop">
                <IconAdd />
              </StyleAddColorBtn>
            </ColorPicker>
          )}
        </div>
        {/* 颜色库 */}
        <div className="flex flex-wrap both-center gap-12 p-12 width-100 border radius-6">
          {colorArr.map((item: { id: string; value: string }) => (
            <StyleColorItem className="relative">
              <ColorPicker value={item.value} showInput={false} />
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
        </div>
      </div>
      <div className="flex-1 height-100"></div>
    </StyleColorContainer>
  );
};

const StyleColorContainer = styled.div`
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export default ColorMatch;
