import React, { useState, useRef, useMemo, useEffect } from "react";
import styled from "styled-components";
import Uploader from "../../components/Uploader";
import Pop from "../../components/Pop";
import Message from "../../components/Message";
import ColorPicker from "../../components/ColorPicker";
import {
  IconCloseCircle,
  IconColorPicker,
  IconDownload,
} from "../../components/Icon";
import Button from "../../components/Button";
// @ts-ignore
import tinycolor from "tinycolor2";
import { downloadHtmlAsImg } from "../../utils/downloadHtmlAsImg";

type Props = {};
const ImgColorPicker: React.FC<Props> = ({}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgUrl, setImgUrl] = useState<string>("");
  const [colorArr, setColorArr] = useState<{ id: string; value: string }[]>([]);
  // 根据图片 size 处理色卡布局
  const [size, setSize] = useState<any>();
  useEffect(() => {
    let imgSize = { w: 200, h: 200, ratio: 1 };
    if (imgRef.current) {
      const img = imgRef.current.getBoundingClientRect();
      imgSize = { w: img.width, h: img.height, ratio: img.width / img.height };
    }
    setSize(imgSize);
  });
  // 吸管
  const handlePick = () => {
    if (colorArr.length >= 0) {
      if (colorArr.length < 10) {
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

  /** 分析图片数据 */
  function areColorsSimilar(color1: any, color2: any, threshold = 32) {
    if (
      (color1[0] < 10 && color1[1] < 10 && color1[2] < 10) ||
      (color1[0] > 250 && color1[1] > 250 && color1[2] > 250)
    ) {
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
        )
      ) {
        filteredColors.push(color);
      }
      if (filteredColors.length >= 6) {
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
  return (
    <div className="flex column items-center gap-12 px-24">
      {/* 上传框 */}
      <Uploader
        fileType="image/*"
        onUpload={(url) => {
          setImgUrl(url);
          getImgColor(url);
        }}
        desc="点击上传图片或将图片拖拽于此"
        className="radius-12 mt-32"
        style={{ height: "240px" }}
      >
        {imgUrl && (
          <img ref={imgRef} src={imgUrl} className="height-100 radius-8" />
        )}
      </Uploader>
      {/* 颜色列表 */}
      <StyleColorList
        className={`StyleColorList flex items-center flex-wrap gap-12 p-24 ${
          colorArr.length !== 0 ? "show" : "hide"
        }`}
      >
        {colorArr.length !== 0 &&
          colorArr?.map((item: any, index: number) => (
            <StyleColorItem
              key={index}
              className="flex column relative justify-center gap-4"
              onClick={() => handleShowToast(true, "已复制~")}
            >
              <ColorPicker
                value={item.value}
                showDrop={false}
                onChange={(color) => {
                  const newColorArr = colorArr.map((itm) => {
                    return {
                      id: itm.id,
                      value: idcolor,
                    };
                  });
                  setColorArr(newColorArr);
                }}
              />
              <div
                className="absolute cursor-pointer close-icon"
                onClick={() => handleDeleteColor(item.id)}
              >
                <IconCloseCircle fill="var(--color-red-6)" />
              </div>
            </StyleColorItem>
          ))}
        {colorArr.length !== 0 ? (
          <StyleAddColorBtn
            className="StyleAddColorBtn relative flex both-center border radius-50 cursor-pointer hover-pop"
            onClick={() => handlePick()}
          >
            <IconColorPicker />
            <Pop content="点击吸取颜色" />
          </StyleAddColorBtn>
        ) : null}
      </StyleColorList>
      <Message text={toastText} show={toast} />
      {/* 色卡 */}
      {colorArr.length !== 0 && (
        <StyleColorCardWrap
          className="grid mx-32 gap-24"
          length={colorArr.length}
        >
          {Array.from({ length: 5 }).map((_itm, index) => (
            <div className="flex column items-center gap-12">
              <StyleColorCardBox
                className={`relative p-24 flex gap-4 width-100 border color-card card-${index} ${
                  size.ratio > 1 ? "column" : ""
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
              <Button
                type="background"
                className="width-100"
                text="保存色卡"
                icon={<IconDownload />}
                onClick={() => {
                  const card = document.querySelectorAll(".color-card");
                  downloadHtmlAsImg(card[index]);
                }}
              />
            </div>
          ))}
        </StyleColorCardWrap>
      )}
      {/* <StyleDrag className="container">
        <div className="item" draggable="true">
          1
        </div>
        <div className="item" draggable="true">
          2
        </div>
        <div className="item" draggable="true">
          3
        </div>
        <div className="item" draggable="true">
          4
        </div>
        <div className="item" draggable="true">
          5
        </div>
      </StyleDrag> */}
    </div>
  );
};

const StyleDrag = styled.div`
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    margin: 10px;
    cursor: move;
  }
`;
const StyleColorList = styled.div`
  width: fit-content;
  max-width: 100%;
  &.show {
    opacity: 1;
    pointer-events: all;
    & + .ImgColorPicker {
      transform: translateY(0px);
    }
  }
  &.hide {
    opacity: 0;
    pointer-events: none;
    & + .ImgColorPicker {
      transform: translateY(-24px);
    }
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

const StyleAddColorBtn = styled.div`
  width: 48px;
  height: 48px;
  color: var(--color-text-3);
`;

const StyleColorCardWrap = styled.div<{
  length: number;
}>`
  width: 100%;
  grid-template-columns: ${(props) =>
    `repeat(auto-fit, minmax(${props.length * 36 + 48}px, 1fr))`};
`;

const StyleColorCardBox = styled.div<{
  width: number;
  height: number;
  ratio: number;
}>`
  box-sizing: border-box;
  p {
    color: var(--color-text-4);
    font-size: 8px;
  }
  &.card-0,
  &.card-1,
  &.card-2,
  &.card-3,
  &.card-4 {
    .color-img {
      width: 100%;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .color-list {
      grid-auto-flow: ${(props) => (props.ratio > 1 ? "column" : "row")};
      width: ${(props) => (props.ratio > 1 ? "auto" : "64px")};
      height: ${(props) => (props.ratio > 1 ? "32px" : "auto")};
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
      height: ${(props) => (props.ratio > 1 ? "20px" : "auto")};
    }
  }
  &.card-3 {
    padding-bottom: 60px;
    .color-list {
      position: absolute;
      left: 50%;
      bottom: 24px;
      padding: 12px 12px 0;
      width: 60%;
      height: 84px;
      border-radius: var(--radius-4);
      background-color: var(--color-bg-white);
      transform: translateX(-50%);
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
      transform: rotate(90deg);
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
`;
export default ImgColorPicker;
