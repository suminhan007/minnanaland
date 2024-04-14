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
    <StyleColorContainer className="flex items-center mb-24 height-100">
      <div className="flex-1 flex column gap-24 pl-24 pr-32 pt-32">
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
        <div className="relative flex flex-wrap both-center gap-12 p-12 width-100 border radius-6">
          <StyleColorsLib
            className={`width-100 ${showMoreColor ? "show" : ""}`}
          >
            {MY_COLORS.map((item: any) => (
              <Fragment key={item.id}>
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
        {/* 数量 & 类型 */}
        <Flex column gap={8}>
          <Title title="Step 02: 设置配色数量与类型" type="h3" />
          <Title
            title="根据色彩占比等因素选择合适的配色模板"
            type="p"
            className="color-gray-4"
          />
        </Flex>
        <Flex gap={12}>
          <div className="flex-1 flex column gap-8">
            <p>数量</p>
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
            prefix="类型"
            placeholder="请选择配色类型"
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
          <Select
            prefix="类型"
            placeholder="请选择配色类型"
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
        <div className="flex gap-8 p-12 border overflow-auto">
          <div
            className="bg-gray"
            style={{ height: "120px", aspectRatio: 1 }}
          ></div>
          <div
            className="bg-gray"
            style={{ height: "120px", aspectRatio: 1 }}
          ></div>
          <div
            className="bg-gray"
            style={{ height: "120px", aspectRatio: 1 }}
          ></div>
          <div
            className="bg-gray"
            style={{ height: "120px", aspectRatio: 1 }}
          ></div>
          <div
            className="bg-gray"
            style={{ height: "120px", aspectRatio: 1 }}
          ></div>
        </div>
      </div>
      <StyleSubmitButton text="立即生成" type="background" status="primary" />
      <div
        className="flex-1 pl-32 pr-24 height-100 pt-32 border-left"
        style={{ flexShrink: 0 }}
      ></div>
    </StyleColorContainer>
  );
};

const StyleColorContainer = styled.div`
  @media screen and (max-width: 800px) {
    flex-direction: column;
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

const StyleSubmitButton = styled(Button)`
  width: 36px;
  font-weight: 500;
  text-align: center;
  margin-left: -18px;
  margin-right: -18px;
  @media screen and (max-width: 800px) {
    width: calc(100% - 48px);
    margin: 12px 24px;
  }
`;

export default ColorMatch;
