import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Uploader from "../../components/Uploader";
import ImgColorPicker from "../../components/ImgColorPicker";
import Pop from "../../components/Pop";
// import Toast from '../../components/Toast'

type Props = {};
const ToolColorPicker: React.FC<Props> = ({}) => {
  const [imgUrl, setImgUrl] = useState<string>("");
  const [colors, setColors] = useState<any>([]);
  const convertRgbToHex = (rgb: string) => {
    let arr: string[] = rgb.slice(0, rgb.length).split(",");
    let hexColor: string = "#";
    for (let i = 0; i < arr.length; i++) {
      let t = Number(arr[i]).toString(16);
      if (t == "0") {
        t = t + "0";
      }
      hexColor += t;
    }
    return hexColor;
  };
  const [colorArr, setColorArr] = useState<any>([]);
  useEffect(() => {
    if (colorArr.length === 0) {
      let arr: { id: number; value: string }[] = [];
      colors?.map((item: any, index: number) => {
        arr.push({
          id: index + 1,
          value: convertRgbToHex(item[0]),
        });
      });
      setColorArr(arr);
    }
  }, [colors]);
  const handleChangeColor = (e: any, id: number) => {
    colorArr.splice(id - 1, 1, { id: id, value: e.target.value });
    setColorArr(colorArr);
  };
  const handleAddColor = (e: any) => {
    if (colorArr.length > 0) {
      colorArr.length < 12
        ? setColorArr([
            ...colorArr,
            { id: colorArr.length + 1, value: e.target.value },
          ])
        : handleShowToast(true, "已达上限～长按删除后重试");
    } else {
      handleShowToast(true, "请先上传图片并提取颜色～");
    }
  };
  const handleDeleteCOlor = (id: number) => {
    colorArr.splice(id - 1, 1);
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
  return (
    <StyleColorPickerWrap className="StyleColorPickerWrap flex column items-center">
      <StyleUploadBtn className="StyleUploadBtn hover-translate-y-4 transition mt-48">
        <Uploader
          fileType="image/*"
          component={<div className="color-gray-3">上传图片</div>}
          onUpload={(url) => setImgUrl(url)}
        />
      </StyleUploadBtn>
      <img
        src={imgUrl}
        className="radius-12 mt-32 border width-100"
        width="100%"
        style={{ minHeight: 120 }}
        alt=""
      />
      <StyleColorList
        className={`StyleColorList grid gap-12 px-24 py-12 mt-16 bg-gray radius-12 width-100 transition ${
          colors.length ? "show" : "hide"
        }`}
      >
        {colorArr?.map((item: any) => (
          <div className="flex column both-center gap-4">
            <StyleColorItem
              key={item.id}
              className="StyleColorItem relative width-100 pointer"
            >
              <input
                type="color"
                value={item.value}
                onChange={(e) => handleChangeColor(e, item.id)}
              />
              <Pop content="长按删除" />
            </StyleColorItem>
            <div
              className="fs-12 color-gray-2"
              onClick={(e: any) =>
                navigator.clipboard.writeText(e.target?.innerText)
              }
            >
              {item.value}
            </div>
          </div>
        ))}
        {colors.length ? (
          <StyleAddColorBtn className="StyleAddColorBtn flex both-center relative border radius-50 pointer">
            <div className="absolute">+</div>
            <input
              type="color"
              className="opacity-0 pointer"
              onChange={(e) => handleAddColor(e)}
            />
          </StyleAddColorBtn>
        ) : null}
      </StyleColorList>

      {colorArr && (
        <ColorPicker
          className="ImgColorPicker mt-16"
          url={imgUrl}
          colorLength={8}
          onChange={(colors) =>
            imgUrl ? setColors(colors) : handleShowToast(true, "请先上传图片～")
          }
        />
      )}
      {/* <Toast text={toastText} show={toast} /> */}
    </StyleColorPickerWrap>
  );
};

const StyleColorPickerWrap = styled.div`
  width: calc(100% - 48px);
  max-width: 960px;
  min-height: 100vh;
  margin: 0 auto;
`;

const StyleUploadBtn = styled.div`
  width: 160px;
`;

const StyleColorList = styled.div`
  grid-template-columns: repeat(auto-fill, minmax(48px, 1fr));
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
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  &.color {
    border-radius: 24px;
  }
  &:hover {
    .StylePop {
      opacity: 1;
    }
  }
`;

const StyleAddColorBtn = styled.div`
  width: 48px;
  height: 48px;
`;
export default ToolColorPicker;
