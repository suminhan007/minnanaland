import { useState } from "react";

/** 分析图片数据 */
const analyzeImageData = (imageData: any) => {
  let data: any = imageData;
  let rgbCounts: any = {};
  var r0,
    g0,
    b0 = 0;
  for (let i = 0; i < data.length; i += 24) {
    let r = data[i];
    let g = data[i + 1];
    let b = data[i + 2];
    // 将RGB组合成一个键，并计数
    if (
      Math.abs(r - r0) >= 10 ||
      Math.abs(g - g0) >= 10 ||
      Math.abs(b - b0) >= 10
    ) {
      let rgbKey = `${r},${g},${b}`;
      rgbCounts[rgbKey] = (rgbCounts[rgbKey] || 0) + 1;
    }
    r0 = data[i];
    g0 = data[i + 1];
    b0 = data[i + 2];
  }

  // 排序并获取出现次数最多的RGB值
  let sortedRgbCounts = Object.entries(rgbCounts).sort(
    (a: any, b: any) => b[1] - a[1]
  );
  let topRgbValues = sortedRgbCounts.slice(0, 6);
  // 输出或处理结果
  return topRgbValues;
};

/* 展示的颜色数据 */
const [imageColor, setImageColor] = useState<[string, unknown][]>([]);

/* 将图片绘制在canvas上 */
export const getImgData = (canvas: HTMLCanvasElement, url: string) => {
    if (!canvas || !url) return;
    const ctx = canvas.getContext("2d");
    const img = new Image(); // 加载图片
    img.crossOrigin = "anonymous"; // 处理跨域问题
    img.src = url;
    img.onload = () => {
      // 设置canvas尺寸与图片相同
      if (canvas) {
        canvas.width = img.width;
        canvas.height = img.height;
      }
      // 将图片绘制到canvas上
      ctx?.drawImage(img, 0, 0, img.width, img.height);

      // 获取图片的像素数据
      const imageData = ctx?.getImageData(0, 0, img.width, img.height).data;
      // 处理像素数据
      setImageColor(analyzeImageData(imageData));
    };
    // 图片加载失败时设置为空字符串
  img.onerror = () => setImageColor([]);
  retrun imageColor;
  };