import tinycolor from "tinycolor2";
/** 分析图片数据 */
function areColorsSimilar(color1: any, color2: any, threshold = 0.1) {
  const hsl1 = tinycolor(`rgb(${color1[0]},${color1[1]},${color1[2]})`).toHsl();
  const hsl2 = tinycolor(`rgb(${color2[0]},${color2[1]},${color2[2]})`).toHsl();
  const hueDiff = Math.abs(hsl1.h - hsl2.h);
  const satDiff = Math.abs(hsl1.s - hsl2.s);
  const lumDiff = Math.abs(hsl1.l - hsl2.l);
  return hueDiff < 5 && satDiff < threshold && lumDiff < threshold;
}
const analyzeImageData = (imageData: any) => {
  let data: [string | unknown][] = imageData;
  let colors: any = {};
  for (let i = 4; i < data.length; i += 4) {
    let r = data[i];
    let g = data[i + 1];
    let b = data[i + 2];
    let alpha: number | unknown = data[i + 3];
    if (alpha === 255) {
      let color = [r, g, b];
      let isSimilar = false;
      /* 过滤相似颜色 */
      for (const existingColor in colors) {
        const existingColorArr = existingColor.split(',').map(Number);
        if (areColorsSimilar(color, existingColorArr)) {
          isSimilar = true;
          break;
        }
      }
      if (!isSimilar) {
        const colorKey = color.join(',');
        if (colors[colorKey]) {
          colors[colorKey] = (colors[colorKey] || 0) + 1;
        } else {
          colors[colorKey] = 1;
        }
      }
    }
  }
  // 排序并获取出现次数最多的RGB值
  let sortedRgbCounts = Object.entries(colors).sort(
    (a: any, b: any) => b[1] - a[1]
  );
  let topRgbValues = sortedRgbCounts.slice(0, 6);

  // 输出或处理结果
  return topRgbValues;
};

/* 将图片绘制在canvas上 */
export const getImgColor = (url: string, canvas: HTMLCanvasElement | null) => {
  let mainColors: { id: string, value: string }[] = [];
  const ctx = canvas?.getContext("2d");
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
    mainColors = analyzeImageData(imageData)?.map((item: any) => {
      return {
        id: item[0],
        value: `#${tinycolor(`rgb(${item[0]})`).toHex()}`,
      };
    });
    return mainColors;
  };

  // 图片加载失败时设置为空字符串
  img.onerror = () => { mainColors = [] };
  return mainColors;
}