import React, { Fragment, useState } from "react";
import Flex from "../../components/Flex";
import styled from "styled-components";
import Title from "../../components/Title";
import ColorPicker from "../../components/ColorPicker";
import { IconAdd, IconArrow, IconCloseCircle } from "../../components/Icon";
import { StyleAddColorBtn } from "./ImgColorPicker";
import { MY_COLORS } from "./mock";
import Select from "../../components/Select";
import Button from "../../components/Button";
import Pop from "../../components/Pop";

type Props = {};

const ColorMatch: React.FC<Props> = ({}) => {
  const [colorArr, setColorArr] = useState<{ id: string; value: string }[]>([]);
  const [showMoreColor, setShowMoreColor] = useState<boolean>(false);
  const [mainColor, setMainColor] = useState<string>("0");
  return (
    <StyleColorContainer className="flex items-center height-100">
      <StyleLeftBox className="flex-1 flex column gap-24 pl-24 pr-32 pt-32 pb-24 height-100 overflow-auto">
        {/* 输入颜色 */}
        <Flex column gap={12}>
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
                    <styleColorItem
                      className={`relative hover-pop ${
                        mainColor === item.value ? "active" : ""
                      }`}
                      onClick={() => setMainColor(item.value)}
                    >
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
                      <Pop content="标记为主色" theme="dark" />
                    </styleColorItem>
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
                      <styleColorItem
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
                      </styleColorItem>
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
        </Flex>
        {/* 数量 & 类型 */}
        <Flex column gap={12}>
          <Title title="Step 02: 设置配色数量与类型" type="h3" />
          <Flex gap={12}>
            <Select
              title="数量"
              info="类型"
              placeholder="请选择"
              width={124}
              data={[
                { id: "1", value: "2" },
                { id: "2", value: "3" },
                { id: "3", value: "4" },
              ]}
              // selected="2"
              onChange={(_id, val) => {
                // setColorNum(Number(val));
              }}
              className="flex-1"
            />
            <Select
              title="类型"
              info="类型"
              placeholder="请选择"
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
              placeholder="请选择"
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
        </Flex>
        {/* 选择模版 */}
        <Flex column gap={12}>
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
        </Flex>
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

const styleColorItem = styled.div`
  &.active
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
