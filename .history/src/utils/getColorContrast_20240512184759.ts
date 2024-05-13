function luminance(r: number, g: number, b: number) {
    const a = [r, g, b].map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
  
export function getColorContrast(color1: string, color2: string) {
    const rgb1 = tinycolor(colorArr[i].value).toRgb();
        const rgb2 = tinycolor(colorArr[j].value).toRgb();
    const l1 = luminance(rgb1.r, rgb1.g, rgb1.b);
        const l2 = luminance(rgb2.r, rgb2.g, rgb2.b);
        const contrast =
          l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
}