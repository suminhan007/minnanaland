import React, { useState } from "react";
import Flex from "../../components/Flex";
import styled from "styled-components";
import Title from "../../components/Title";
import ColorPicker from "../../components/ColorPicker";
import { IconAdd } from "../../components/Icon";
import { StyleAddColorBtn } from "./ImgColorPicker";

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
        <div className="flex flex-wrap p-24 both-center gap-12 width-100 border radius-6">
          <div>
            {colorArr.map((item: { id: string; value: string }) => (
              <ColorPicker value={item.value} showInput={false} />
            ))}
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
        </div>
      </div>
      <div className="flex-1 height-100 bg-gray"></div>
    </StyleColorContainer>
  );
};

const StyleColorContainer = styled.div`
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export default ColorMatch;
