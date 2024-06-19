//@ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Flex from "../../components/Flex";
import Title from "../../components/Title";
import Uploader from "../../components/Uploader";
import Button from "../../components/Button";
import { downloadHtmlAsImg } from "../../utils/downloadHtmlAsImg";
import Select from "../../components/Select";
import AutoMedia from "../../components/AutoMedia";

type Props = {};
const ColorChange: React.FC<Props> = ({ }) => {
  const colorChangeCanvasRef = useRef<HTMLCanvasElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const [imgUrl, setImgUrl] = useState<string>("");
  /** 处理滑条事件 */
  const [percentage, setPercentage] = useState<number>(50);
  const [move, setMove] = useState<boolean>(false);
  const handleThumbMove = (e: any) => {
    if (!maskRef.current || !move) return;
    const mask = maskRef.current.getBoundingClientRect();
    const diffX = e.clientX - mask.left;
    setPercentage(Math.round((diffX / mask.width) * 100));
  };
  /** 换色类型 */
  const [type, setType] = useState<string>("1");
  /** 换色 */
  useEffect(() => {
    if (!colorChangeCanvasRef.current) return;
    const newCanvas = colorChangeCanvasRef?.current;
    var image = new Image();
    image.src = imgUrl;
    image.crossOrigin = "Anonymous";
    image.onload = function () {
      image.src = imgUrl;
      newCanvas.width = image.width;
      newCanvas.height = image.height;
      newCanvas
        .getContext("2d")
        ?.drawImage(image, 0, 0, image.width, image.height);
    };
    var ctx = newCanvas.getContext("2d");
    if (ctx) {
      var imageData = ctx.getImageData(0, 0, newCanvas.width, newCanvas.width);
      var px = imageData.data;
      for (var i = 0; i < px.length; i += 4) {
        // 改变每个像素
        if (type === "1") {
          px[i] = 255 - px[i]; //r
          px[i + 1] = 255 - px[i + 1]; //g
          px[i + 2] = 255 - px[i + 2]; //b
        } else if (type === "2") {
        }
      }
      ctx.putImageData(imageData, 0, 0);
    }
  }, [imgUrl]);
  return (
    <div className="flex column items-start gap-32 px-24 pt-32 mb-24">
      {/* 上传框 */}
      <Flex column gap={24}>
        <Flex column gap={8}>
          <Title title="Step 01: 上传图片" type="h3" />
          <Title
            title="上传需要换色的图片，即可自动识别图片主体色，选择需要替换的颜色。"
            type="p"
            className="color-gray-4"
          />
        </Flex>
        <Uploader
          height="240px"
          fileType="image/*"
          onUpload={(url) => {
            setImgUrl(url);
          }}
          desc="点击上传图片或将图片拖拽于此"
          className="radius-12"
        >
          {imgUrl && <AutoMedia url={imgUrl} className="radius-6" />}
        </Uploader>
      </Flex>
    </div>
  );
};

const StyleImgContainer = styled.div`
  width: calc(100vw - 48px);
  height: 600px;
  max-height: calc(100vh - 317px);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  .mask-img-wrap {
    top: 0;
    left: 0;
  }
  .mask-img {
    width: calc(100vw - 48px);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .mask-thumb {
    top: -4px;
    width: 4px;
    height: calc(100% + 8px);
    border-radius: 2px;
    background-color: var(--color-primary-6);
    transform: translateX(-50%);
    cursor: ew-resize;
  }
  img {
    cursor: none;
  }
`;
export default ColorChange;
