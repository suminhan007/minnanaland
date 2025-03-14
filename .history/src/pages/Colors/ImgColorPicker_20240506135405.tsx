//@ts-nocheck
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Uploader from "../../components/Uploader";
import Pop from "../../components/Pop";
import ColorPicker from "../../components/ColorPicker";
import Title from "../../components/Title";
import {
  IconCloseCircle,
  IconColorPicker,
  IconDownload,
} from "../../components/Icon";
import Button from "../../components/Button";
// @ts-ignore
import tinycolor from "tinycolor2";
import { downloadHtmlAsImg } from "../../utils/downloadHtmlAsImg";
import Flex from "../../components/Flex";
import Check from "../../components/Check";
import Input from "../../components/Input";
import Select from "../../components/Select";
import AutoMedia from "../../components/AutoMedia";
import Message from "../../components/Message";
import HoverCardIcon from "../../components/HoverCardIcon";
// import { MY_COLOR_CARDS } from "./mock";

const unitImg = "colorcard.jpeg";
const unitColorArr = [
  { id: "1", value: "#b9a78f" },
  { id: "2", value: "#7e6d5b" },
  { id: "3", value: "#e5e6eb" },
  { id: "4", value: "#473f3c" },
  { id: "5", value: "#623726" },
  { id: "6", value: "#cab8ba" },
];

type Props = {};
const ImgColorPicker: React.FC<Props> = ({}) => {
  const [imgUrl, setImgUrl] = useState<string>("");
  const [colorArr, setColorArr] = useState<{ id: string; value: string }[]>([]);
  // 根据图片 size 处理色卡布局
  const [size, setSize] = useState<any>();
  useEffect(() => {
    let imgSize = { w: 200, h: 200, ratio: 1 };
    let img = new Image();
    img.src = imgUrl;
    imgSize = { w: img.width, h: img.height, ratio: img.width / img.height };
    setSize(imgSize);
  }, [imgUrl]);

  // 吸管
  const handlePick = () => {
    if (colorArr.length >= 0) {
      if (colorArr.length < 8) {
        let color: string = "";
        // @ts-ignore
        if (!window.EyeDropper) {
          handleShowToast(true, "你的浏览器不支持此功能");
        }
        // @ts-ignore
        const eyeDropper = new EyeDropper();
        eyeDropper
          .open()
          .then((result: any) => {
            color = result.sRGBHex;
            setColorArr([...colorArr, { id: `${color}`, value: color }]);
          })
          .catch(() => {
            handleShowToast(true, "出错了～");
          });
      } else {
        handleShowToast(true, "已达上限～长按删除后重试");
      }
    } else {
      handleShowToast(true, "请先上传图片～");
    }
  };

  // 删除颜色
  const handleDeleteColor = (id: number) => {
    const newColorLost = colorArr.filter((itm: any) => itm.id !== id);
    setColorArr(newColorLost);
  };

  //提示信息
  const [toast, setToast] = useState<boolean>(false);
  const [toastText, setToastText] = useState<string>("");

  const handleShowToast = (show: boolean, text: string) => {
    setToastText(text);
    setToast(show);
    const timer = setTimeout(() => {
      setToast(false);
      clearTimeout(timer);
    }, 1000);
  };

  /** 取色配置 */
  const [filter, setFilter] = useState<number>(10);
  const [filterChecked, setFilterChecked] = useState<boolean>(true);
  useEffect(() => {
    filter > 0 ? setFilterChecked(true) : setFilterChecked(false);
  }, [filter]);
  useEffect(() => {
    filterChecked ? setFilter(filter || 10) : setFilter(0);
  }, [filterChecked]);
  /** 取色数量 */
  const [colorNum, setColorNum] = useState<number>(6);
  useEffect(() => {
    getImgColor(imgUrl);
  }, [filter, filterChecked, colorNum]);

  /** 分析图片数据 */
  const isGrayColor = (color: any) => {
    const hsv = tinycolor(`rgb(${color[0]},${color[1]},${color[2]})`).toHsv();
    if (hsv.s <= filter / 100 || hsv.v <= filter / 100) {
      return true;
    } else {
      return false;
    }
  };
  function areColorsSimilar(color1: any, color2: any, threshold = 32) {
    if (isGrayColor(color1)) {
      return true;
    }
    const rDiff = color1[0] - color2[0];
    const gDiff = color1[1] - color2[1];
    const bDiff = color1[2] - color2[2];
    return Math.sqrt(rDiff * rDiff + gDiff * gDiff + bDiff * bDiff) < threshold;
  }
  const getPixelData = (img: HTMLImageElement) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx?.drawImage(img, 0, 0, img.width, img.height);
    return ctx?.getImageData(0, 0, img.width, img.height).data;
  };
  const getTopColors = (img: HTMLImageElement) => {
    const pixelData: Uint8ClampedArray | undefined = getPixelData(img);
    if (!pixelData) return;
    const colorCountMap = new Map();
    for (let i = 0; i < pixelData.length; i += 4) {
      const color = [pixelData[i], pixelData[i + 1], pixelData[i + 2]];
      const key = color.join(",");

      if (colorCountMap.has(key)) {
        colorCountMap.set(key, colorCountMap.get(key) + 1);
      } else {
        colorCountMap.set(key, 1);
      }
    }

    let sortedColors = Array.from(colorCountMap.entries())
      .sort((a, b) => b[1] - a[1])
      .map((entry) => entry[0].split(",").map((x: string) => parseInt(x)));
    const filteredColors: any[] = [];

    for (const color of sortedColors) {
      if (
        !filteredColors.some((filteredColor) =>
          areColorsSimilar(color, filteredColor, 32)
        ) &&
        !isGrayColor(color)
      ) {
        filteredColors.push(color);
      }
      if (filteredColors.length >= colorNum) {
        break;
      }
    }

    return filteredColors;
  };

  /* 将图片绘制在canvas上 */
  const getImgColor = (url: string) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      const mainColors = getTopColors(img)?.map((itm) => {
        return {
          id: itm[0] + itm[1] + itm[2],
          value: `#${tinycolor(`rgb(${itm[0]},${itm[1]},${itm[2]})`).toHex()}`,
        };
      });
      setColorArr(mainColors);
    };
  };
  //  自定义色卡名称
  const [cardName, setCardName] = useState<string[]>(["", "", "", "", "", ""]);
  return (
    <div className="flex column items-start gap-32 px-24 pt-32 mb-24">
      {/* 上传框 */}
      <Flex column gap={24}>
        <Flex column gap={8}>
          <Title title="Step 01: 上传图片" type="h3" />
          <Title
            title="点击或拖拽来上传图片，以像素为单位对颜色计数"
            type="p"
            className="color-gray-4"
          />
        </Flex>
        <div className="width-100" style={{ height: "240px" }}>
          <Uploader
            fileType="image/*"
            onUpload={(url) => {
              setImgUrl(url);
              setColorArr([]);
            }}
            desc="点击上传图片或将图片拖拽于此"
            className="radius-12"
          >
            {imgUrl && <AutoMedia url={imgUrl} />}
          </Uploader>
        </div>
      </Flex>
      {/* 颜色 */}

      <div className="flex flex-wrap width-100">
        {/* 取色配置 */}
        <div>
          <Title title="Step 02: 取色配置" type="h3" />
          <Title
            title={
              <>
                【过滤颜色】设置过滤中性色的范围
                <br />
                【提取数量】可一次提取6、8、10个颜色
                <br />
                【编辑颜色】支持删除、添加、修改提取的颜色列表
              </>
            }
            type="p"
            className="color-gray-4 mt-8"
          />
          {colorArr?.length !== 0 && (
            <div className="flex gap-24 mt-12">
              <div className="flex column gap-8" style={{ width: "124px" }}>
                <Check
                  text="过滤中性色"
                  checked={filterChecked}
                  onChange={() => {
                    setFilterChecked(!filterChecked);
                  }}
                  pop="勾选后将自动过滤饱和度或纯度低于 10 的颜色<br/>支持输入自定义过滤范围（≤35）"
                />
                <Input
                  type="number"
                  max={35}
                  min={0}
                  step={5}
                  value={String(filter)}
                  onChange={(val) => setFilter(Number(val))}
                />
              </div>
              <Select
                title="数量"
                width={124}
                data={[
                  { id: "1", value: "4" },
                  { id: "2", value: "6" },
                  { id: "3", value: "8" },
                ]}
                selected="2"
                onChange={(item) => {
                  setColorNum(Number(item.value));
                }}
              />
            </div>
          )}
        </div>
        {/* 颜色列表 */}
        <div
          className={`relative flex items-center justify-center flex-wrap gap-12 p-24 flex-1`}
          style={{ minWidth: "325px" }}
        >
          {colorArr.length === 0 && imgUrl && (
            <div className="absolute" style={{ zIndex: 1 }}>
              <Button
                text="提取颜色"
                type="background"
                onClick={() => {
                  getImgColor(imgUrl);
                }}
              />
            </div>
          )}
          {colorArr.length === 0
            ? unitColorArr?.map((item0: any, index0: number) => (
                <StyleColorItem
                  key={index0}
                  className="flex column relative justify-center gap-4 disabled"
                >
                  <ColorPicker value={item0.value} showDrop={false} />
                </StyleColorItem>
              ))
            : colorArr?.map((item: any, index: number) => (
                <HoverCardIcon onClick={() => handleDeleteColor(item.id)}>
                  <StyleColorItem
                    key={index}
                    className="flex column relative justify-center gap-4"
                  >
                    <ColorPicker
                      value={item.value}
                      showDrop={false}
                      onChange={(color) => {
                        const newColorArr = colorArr.map((itm) => {
                          return {
                            id: itm.id,
                            value:
                              itm.id == item.id
                                ? `#${tinycolor(color).toHex()}`
                                : itm.value,
                          };
                        });
                        setColorArr(newColorArr);
                      }}
                    />
                  </StyleColorItem>
                </HoverCardIcon>
              ))}
          {colorArr.length !== 0 && colorArr.length < 8 && (
            <StyleAddColorBtn
              className="StyleAddColorBtn relative flex both-center border radius-50 cursor-pointer hover-pop"
              onClick={() => handlePick()}
            >
              <IconColorPicker />
              <Pop content="点击吸取颜色" theme="dark" />
            </StyleAddColorBtn>
          )}
        </div>
      </div>
      {/* <Message text={toastText} show={toast} /> */}
      {/* </Flex> */}

      {/* 色卡 */}
      <Flex column gap={8}>
        <Title title="Step 03: 下载 & 保存色卡" type="h3" />
        <Title
          title="调整颜色至满意值后，点击下载色卡，即可保存到本地"
          type="p"
          className="color-gray-4"
        />
      </Flex>
      {colorArr?.length === 0 ? (
        <StyleColorCardWrap className="grid mx-32 gap-24 disabled" length={6}>
          {Array.from({ length: 6 }).map((_itm, index) => (
            <div className="flex column items-center gap-12">
              <StyleColorCardBox
                className={`relative p-24 flex gap-4 width-100 border color-card card-${index} column`}
                width={1000}
                height={667}
                ratio={1.5}
              >
                <div className="color-img">
                  <img src={unitImg} />
                </div>
                <div className="color-list grid gap-4">
                  {colorArr?.length === 0
                    ? unitColorArr.map((itm0: any) => (
                        <div className="color-item flex column items-center gap-4">
                          <div
                            key={itm0.id}
                            style={{
                              background: itm0.value,
                            }}
                            className="width-100 flex-1"
                          ></div>
                          <p>{itm0.value}</p>
                        </div>
                      ))
                    : colorArr.map((itm: any) => (
                        <div className="color-item flex column items-center gap-4">
                          <div
                            key={itm.id}
                            style={{
                              background: itm.value,
                            }}
                            className="width-100 flex-1"
                          ></div>
                          <p>{itm.value}</p>
                        </div>
                      ))}
                </div>
              </StyleColorCardBox>
              <Button
                type="background"
                className="width-100"
                text="下载色卡"
                icon={<IconDownload />}
              />
            </div>
          ))}
        </StyleColorCardWrap>
      ) : (
        <StyleColorCardWrap
          className="grid mx-32 gap-24"
          length={colorArr.length}
        >
          {Array.from({ length: 6 }).map((_itm, index) => (
            <div className="flex column items-center gap-12">
              <StyleColorCardBox
                className={`relative p-24 flex gap-4 width-100 border color-card card-${index} ${
                  size.ratio < 1 ? "" : ""
                }`}
                width={size.w}
                height={size.h}
                ratio={size.ratio}
              >
                <div className="color-img">
                  <img src={imgUrl} />
                </div>
                <div className="color-list grid gap-4">
                  {colorArr.map((itm: any) => (
                    <div className="color-item flex column items-center gap-4">
                      <div
                        key={itm.id}
                        style={{
                          background: itm.value,
                        }}
                        className="width-100 flex-1"
                      ></div>
                      <p>{itm.value}</p>
                    </div>
                  ))}
                </div>
              </StyleColorCardBox>
              <div className="width-100 flex gap-12">
                <Input
                  placeholder="自定义色卡名称"
                  value={cardName[index]}
                  onChange={(val) => {
                    const newArr = cardName.map((n, i) => {
                      if (i === index) {
                        return val;
                      } else {
                        return n;
                      }
                    });
                    setCardName(newArr);
                  }}
                  className="flex-1"
                />
                <Button
                  type="background"
                  className="flex-1"
                  text="下载色卡"
                  icon={<IconDownload />}
                  onClick={() => {
                    const card = document.querySelectorAll(".color-card");
                    downloadHtmlAsImg(card[index], cardName[index]);
                  }}
                />
              </div>
            </div>
          ))}
        </StyleColorCardWrap>
      )}
      <Message show={toast} text={toastText} />
    </div>
  );
};

export const StyleColorItem = styled.div`
  &.disabled {
    opacity: var(--opacity-02);
    pointer-events: none;
  }
`;

export const StyleAddColorBtn = styled.div`
  width: 48px;
  height: 48px;
  color: var(--color-text-3);
`;

const StyleColorCardWrap = styled.div<{
  length: number;
}>`
  width: 100%;
  grid-template-columns: ${(props) =>
    `repeat(auto-fit, minmax(${props.length * 40 + 48}px, 1fr))`};
  &.disabled {
    opacity: var(--opacity-02);
    pointer-events: none;
  }
`;

const StyleColorCardBox = styled.div<{
  width: number;
  height: number;
  ratio: number;
}>`
  box-sizing: border-box;
  min-width: 240px;
  p {
    color: var(--color-text-4);
    font-size: 8px;
  }
  &.card-0,
  &.card-1,
  &.card-2,
  &.card-3,
  &.card-4,
  &.card-5 {
    .color-img {
      width: 100%;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .color-list {
      grid-auto-flow: ${(props) => (props.ratio >= 1 ? "column" : "row")};
      width: ${(props) => (props.ratio >= 1 ? "auto" : "64px")};
      height: ${(props) => (props.ratio >= 1 ? "32px" : "auto")};
      flex-shrink: 0;
    }
    .color-item {
      flex-shrink: 0;
    }
  }
  &.card-1 {
    img,
    .color-item div {
      border-radius: 4px;
    }
  }
  &.card-2 {
    .card-img {
      height: 80%;
    }
    .color-item {
      height: ${(props) => (props.ratio >= 1 ? "20px" : "auto")};
    }
  }
  &.card-3 {
    padding-bottom: ${(props) => (props.ratio >= 1 ? "60px" : "24px")};
    .color-img {
      width: ${(props) => (props.ratio >= 1 ? "100%" : "calc(100% - 68px)")};
    }
    .color-list {
      position: absolute;
      left: ${(props) => (props.ratio >= 1 ? "50%" : "")};
      bottom: ${(props) => (props.ratio >= 1 ? "12px" : "")};
      right: ${(props) => (props.ratio >= 1 ? "" : "12px")};
      top: ${(props) => (props.ratio >= 1 ? "" : "50%")};
      padding: 12px;
      width: ${(props) => (props.ratio >= 1 ? "60%" : "120px")};
      height: ${(props) => (props.ratio >= 1 ? "84px" : "60%")};
      border-radius: var(--radius-4);
      background-color: var(--color-bg-white);
      transform: ${(props) =>
    props.ratio >= 1 ? "translateX(-50%)" : "translateY(-50%)"};
    }
    .color-item div {
      border-radius: 4px;
    }
    .color-item {
      position: relative;
    }
    p {
      position: absolute;
      left: 4px;
      top: 0;
      transform: ${(props) => (props.ratio >= 1 ? "rotate(90deg)" : "")};
      transform-origin: left bottom;
      color: var(--color-text-light);
    }
  }
  &.card-4 {
    .color-item div {
      width: unset;
      border-radius: 50%;
      aspect-ratio: 1;
      outline: 2px solid var(--color-bg-white);
      overflow: hidden;
    }
  }
  &.card-5 {
    justify-content: center;
    padding: ${(props) => (props.ratio >= 1 ? "42px 24px" : "24px 36px")};
    .color-img {
      width: ${(props) => (props.ratio >= 1 ? "100%" : "calc(100% - 44px)")};
    }
    .color-list {
      display: flex;
      justify-content: center;
      flex-direction: ${(props) => (props.ratio >= 1 ? "row" : "column")};
      gap: 0;
      position: absolute;
      left: ${(props) => (props.ratio >= 1 ? "" : "50%")};
      bottom: ${(props) => (props.ratio >= 1 ? "64px" : "50%")};
      height: 40px;
      width: ${(props) => (props.ratio >= 1 ? "calc(100% - 48px)" : "48px")};
      transform: ${(props) =>
    props.ratio > 1 ? "translateX(4px)" : "translate(-50%,50%)"};
    }
    .color-item div {
      border-radius: 50%;
      aspect-ratio: 1;
      outline: 2px solid var(--color-bg-white);
      overflow: hidden;
    }
    .color-item {
      position: relative;
      margin-left: -4px;
      width: 40px;
    }
    p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: var(--color-text-light);
    }
  }
`;

const StyleMyColorCardWrap = styled.div`
  
`
export default ImgColorPicker;
