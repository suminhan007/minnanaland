import React, { useEffect, useState, useRef } from "react";
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

type Props = {};
const ImgColorPicker: React.FC<Props> = ({}) => {
  const [imgUrl, setImgUrl] = useState<string>("");
  const [colorArr, setColorArr] = useState<{ id: number; value: string }[]>([]);
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
            setColorArr([
              ...colorArr,
              { id: colorArr.length + 1, value: color },
            ]);
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
    const newColorLost = colorArr.filter((itm: any) => itm.id != id);
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

  function isVisuallySimilar(color1: any[], color2: any[], threshold = 1) {
    const rDiff = (color1[0] / 255 - color2[0] / 255) ** 2;
    const gDiff = (color1[1] / 255 - color2[1] / 255) ** 2;
    const bDiff = (color1[2] / 255 - color2[2] / 255) ** 2;
    const distance = Math.sqrt(rDiff + gDiff + bDiff);
    return distance <= threshold;
  }
  const canvasRef = useRef<HTMLCanvasElement>(null);
  /** 分析图片数据 */
  const analyzeImageData = (imageData: any) => {
    let data: [string | unknown][] = imageData;
    let rgbCounts: any = {};
    for (let i = 4; i < data.length; i += 4) {
      let index0: number = 0;
      if (
        isVisuallySimilar(
          [data[i], data[i + 1], data[i + 2]],
          [data[i - 4], data[i - 3], data[i - 2]]
        )
      ) {
        let r = data[i];
        let g = data[i + 1];
        let b = data[i + 2];
        let rgbKey = `${r},${g},${b}`;
        rgbCounts[rgbKey] = (rgbCounts[rgbKey] || 0) + 1;
      } else {
        index0 = i
      }
    }
    // 排序并获取出现次数最多的RGB值
    let sortedRgbCounts = Object.entries(rgbCounts).sort(
      (a: any, b: any) => b[1] - a[1]
    );
    let topRgbValues = sortedRgbCounts.slice(0, 20);
    // 输出或处理结果
    return topRgbValues;
  };

  /* 将图片绘制在canvas上 */
  useEffect(() => {
    if (!canvasRef.current || !imgUrl) return;
    const ctx = canvasRef.current.getContext("2d");
    const img = new Image(); // 加载图片
    img.crossOrigin = "anonymous"; // 处理跨域问题
    img.src = imgUrl;
    img.onload = () => {
      // 设置canvas尺寸与图片相同
      if (canvasRef.current) {
        canvasRef.current.width = img.width;
        canvasRef.current.height = img.height;
      }
      // 将图片绘制到canvas上
      ctx?.drawImage(img, 0, 0, img.width, img.height);

      // 获取图片的像素数据
      const imageData = ctx?.getImageData(0, 0, img.width, img.height).data;
      // 处理像素数据
      const colors = analyzeImageData(imageData);
      setColorArr(
        colors?.map((item: any, index: number) => {
          return {
            id: index + 1,
            value: `#${tinycolor(`rgb(${item[0]})`).toHex()}`,
          };
        })
      );
    };
    // 图片加载失败时设置为空字符串
    img.onerror = () => setColorArr([]);
  }, [imgUrl]);
  return (
    <div className="flex column items-center gap-12 px-24">
      {/* 上传框 */}
      <Uploader
        fileType="image/*"
        onUpload={(url) => {
          setImgUrl(url);
        }}
        desc="点击上传图片或将图片拖拽于此"
        className="radius-12 mt-32"
        style={{ height: "240px" }}
      >
        {imgUrl && <img src={imgUrl} className="height-100 radius-8" />}
      </Uploader>
      {/* 颜色列表 */}
      <StyleColorList
        className={`StyleColorList flex items-center flex-wrap gap-12 p-24 ${
          colorArr.length ? "show" : "hide"
        }`}
      >
        {colorArr?.map((item: any) => (
          <StyleColorItem
            className="flex column relative justify-center gap-4"
            onClick={() => handleShowToast(true, "已复制~")}
          >
            <ColorPicker value={item.value} showDrop={false} />
            <div
              className="absolute cursor-pointer close-icon"
              onClick={() => handleDeleteColor(item.id)}
            >
              <IconCloseCircle fill="var(--color-red-6)" />
            </div>
          </StyleColorItem>
        ))}
        {colorArr.length ? (
          <StyleAddColorBtn
            className="StyleAddColorBtn relative flex both-center border radius-50 cursor-pointer hover-pop"
            onClick={() => handlePick()}
          >
            <IconColorPicker />
            <Pop content="点击吸取颜色" />
          </StyleAddColorBtn>
        ) : null}
      </StyleColorList>
      <canvas className="none" ref={canvasRef} />
      <Message text={toastText} show={toast} />
      {/* 色卡 */}
      {colorArr.length !== 0 && (
        <StyleColorCardWrap className="grid mx-32 gap-24">
          {Array.from({ length: 4 }).map((_itm, index) => (
            <div className="flex column items-center gap-12">
              <StyleColorCardBox
                className={`border cursor-pointer p-24 width-100 card-${index}`}
                // width={size.w}
                // height={size.h}
                // dir={size.w > size.h ? "h" : size.w < size.h ? "v" : "s"}
              >
                <div className="color-img">
                  <img src={imgUrl} />
                </div>
                <div className="color-list">
                  {colorArr.map((itm: any) => (
                    <div
                      key={itm.id}
                      style={{
                        background: itm.value,
                        border:
                          itm.value !== "#ffffff"
                            ? "none"
                            : "1px solid var(--color-border-1)",
                      }}
                      className="color-item flex both-center"
                    >
                      <p
                        style={{
                          mixBlendMode:
                            itm.value !== "#ffffff" ? "soft-light" : "unset",
                          color:
                            itm.value !== "#ffffff"
                              ? itm.value
                              : "var(--color-border-2)",
                        }}
                      >
                        {itm.value}
                      </p>
                    </div>
                  ))}
                </div>
              </StyleColorCardBox>
              <Button
                type="background"
                className="width-100"
                text="保存色卡"
                icon={<IconDownload />}
              />
            </div>
          ))}
        </StyleColorCardWrap>
      )}
    </div>
  );
};

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

const StyleColorCardWrap = styled.div`
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(302px, 1fr));
`;

const StyleColorCardBox = styled.div<{
  width?: number;
  heigh?: number;
  dir?: string;
}>`
  display: flex;
  flex-direction: ${(props) => (props.dir === "h" ? "column" : "row")};
  position: relative;
  box-sizing: border-box;
  font-size: 8px;
  p {
    mix-blend-mode: soft-light;
  }
  img {
    object-fit: contain;
  }
  &.card-0,
  &.card-1,
  &.card-2,
  &.card-3 {
    gap: 4px;
    .color-img {
      width: 100%;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .color-list {
      display: grid;
      gap: 4px;
      grid-auto-flow: column;
    }
    .color-item {
      height: 32px;
    }
  }
  &.card-1 {
    img,
    .color-item {
      border-radius: 4px;
    }
  }
  &.card-2 {
    .color-list {
      display: flex;
      justify-content: space-between;
    }
    .color-item {
      border-radius: 50%;
      aspect-ratio: 1;
    }
  }
  &.card-3 {
    .color-list {
      padding-bottom: 20px;
    }
    .color-item {
      height: 12px;
      p {
        transform: translateY(16px);
        mix-blend-mode: unset !important;
      }
    }
  }
`;
export default ImgColorPicker;
