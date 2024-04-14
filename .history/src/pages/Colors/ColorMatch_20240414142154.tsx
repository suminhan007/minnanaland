import React, { Fragment, useState } from "react";
import Flex from "../../components/Flex";
import styled from "styled-components";
import Title from "../../components/Title";
import ColorPicker from "../../components/ColorPicker";
import { IconAdd, IconArrow, IconCloseCircle } from "../../components/Icon";
import { StyleAddColorBtn, StyleColorItem } from "./ImgColorPicker";
import { MY_COLORS } from "./mock";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";

type Props = {};

const ColorMatch: React.FC<Props> = ({}) => {
  const [colorArr, setColorArr] = useState<{ id: string; value: string }[]>([]);
  const [showMoreColor, setShowMoreColor] = useState<boolean>(false);
  return (
    <StyleColorContainer className="flex items-center height-100">
      <StyleLeftBox className="flex-1 flex column gap-24 pl-24 pr-32 pt-32 pb-24 height-100 overflow-auto">
        <
        {/* 数量 & 类型 */}
        <Title title="Step 02: 设置配色数量与类型" type="h3" />
        <Flex gap={12}>
          <div className="flex-1 flex column gap-8">
            <Title title="数量" type="p" info="info" />
            <Input
              type="number"
              max={colorArr.length}
              min={0}
              step={1}
              value={"1"}
              // onChange={(val) => setFilter(Number(val))}
            />
          </div>
          <Select
            title="类型"
            info="类型"
            placeholder="请选择配色类型"
            width={124}
            data={[
              { id: "1", value: "文字" },
              { id: "2", value: "色块" },
            ]}
            // selected="2"
            onChange={(_id, val) => {
              // setColorNum(Number(val));
            }}
            className="flex-1"
          />
          <Select
            title="比例"
            info="类型"
            placeholder="请选择颜色占比分配"
            width={124}
            data={[
              { id: "1", value: "文字" },
              { id: "2", value: "6" },
              { id: "3", value: "8" },
            ]}
            // selected="2"
            onChange={(_id, val) => {
              // setColorNum(Number(val));
            }}
            className="flex-1"
          />
        </Flex>
        {/* 选择模版 */}
        <Flex column gap={8}>
          <Title title="Step 03: 设置配色模版" type="h3" />
          <Title
            title="根据色彩占比等因素选择合适的配色模板"
            type="p"
            className="color-gray-4"
          />
        </Flex>
        <StyleTemplateBox className="grid gap-8 width-100 p-12 border">
          <div className="bg-gray" style={{ aspectRatio: 1 }}></div>
          <div className="bg-gray" style={{ aspectRatio: 1 }}></div>
          <div className="bg-gray" style={{ aspectRatio: 1 }}></div>
          <div className="bg-gray" style={{ aspectRatio: 1 }}></div>
          <div className="bg-gray" style={{ aspectRatio: 1 }}></div>
        </StyleTemplateBox>
      </StyleLeftBox>
      <StyleSubmitButton text="立即生成" type="background" status="primary" />
      <StyleRightBox
        className="flex-1 pl-32 pr-24 height-100 pt-32 border-left"
        style={{ flexShrink: 0 }}
      ></StyleRightBox>
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

const StyleRightBox = styled.div`
  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;

const StyleColorsLib = styled.div`
  height: 84px;
  overflow: hidden;
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
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  @media screen and (max-width: 800px) {
    width: calc(100vw - 48px);
  }
`;
const StyleSubmitButton = styled(Button)`
  width: 36px;
  font-weight: 500;
  text-align: center;
  margin-left: -18px;
  margin-right: -18px;
  @media screen and (max-width: 800px) {
    width: calc(100vw - 48px);
    margin: 12px 24px;
  }
`;

export default ColorMatch;
