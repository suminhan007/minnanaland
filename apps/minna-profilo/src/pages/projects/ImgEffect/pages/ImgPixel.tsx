import {LandButton, LandFlex, LandLoading, LandSlider, LandUploader} from "@suminhan/land-design";
import {useEffect, useMemo, useRef, useState} from "react";

const ImgPixel = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pixelatedCanvasRef = useRef<HTMLCanvasElement>(null);
    const [imgUrl, setImgUrl] = useState("");
    const [pixelatedImageSrc, setPixelatedImageSrc] = useState<string | null>(null);
    const [finished, setFinished] = useState<boolean>(false);
    const [imgSize, setImgSize] = useState<{w:number,h:number}>({w:100,h:100});
    const [pixelSize, setPixelSize] = useState<number>(1);
    const [loading, setLoading] = useState(false);
    const [imgData,setImgData] = useState<Uint8ClampedArray | null>(null);

    /*平均化*/
    const canvasRef2 = useRef<HTMLCanvasElement>(null);
    const pixelatedCanvasRef2 = useRef<HTMLCanvasElement>(null);
    const [pixelatedImageSrc2, setPixelatedImageSrc2] = useState<string | null>(null);
    useEffect(() => {
        if(!canvasRef.current || !canvasRef2.current) return;
        imgUrl && setFinished(false)
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const canvas2 = canvasRef2.current;
        const ctx2 = canvas2.getContext('2d');
        if(!ctx || !ctx2) return;
        const img = new Image();
        img.src = imgUrl;
        img.onload = () => {
            setImgSize({w:img.width, h:img.height});
            setPixelSize(Math.round(Math.min(img.width, img.height)/50));
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.clearRect(0, 0, img.width, img.height);
            ctx.drawImage(img, 0, 0, img.width, img.height);

            canvas2.width = img.width;
            canvas2.height = img.height;
            ctx2.clearRect(0, 0, img.width, img.height);
            ctx2.drawImage(img, 0, 0, img.width, img.height);

            // 获取图片像素数据
            const imageData = ctx.getImageData(0, 0, img.width, img.height);
            setImgData(imageData.data);
        }
    },[imgUrl])

    // 获取出现次数最多的颜色
    const getMostFrequentColor = (colors: string[]): string => {
        const colorCounts: { [key: string]: number } = {};
        let maxCount = 0;
        let mostFrequentColor = colors[0]; // 默认取第一个颜色

        // 统计每个颜色的出现次数
        colors.forEach((color) => {
            colorCounts[color] = (colorCounts[color] || 0) + 1;
            if (colorCounts[color] > maxCount) {
                maxCount = colorCounts[color];
                mostFrequentColor = color;
            }
        });

        return mostFrequentColor;
    };

    const pixelateImage = () => {
        setLoading(true);
        if (!imgUrl || !canvasRef.current || !pixelatedCanvasRef.current ||!imgData) return;

        const pixelatedCanvas = pixelatedCanvasRef.current;
        const pixelatedCtx = pixelatedCanvas.getContext('2d');

        if (!pixelatedCtx) return;

        // 设置 canvas 尺寸为图片尺寸
        pixelatedCanvas.width = imgSize.w;
        pixelatedCanvas.height = imgSize.h;
        pixelatedCtx.clearRect(0, 0, imgSize.w, imgSize.h);

        // 像素化处理
        for (let y = 0; y < imgSize.h; y += pixelSize) {
            for (let x = 0; x < imgSize.w; x += pixelSize) {
                const colors: string[] = [];

                // 遍历当前小块的像素
                for (let dy = 0; dy < pixelSize; dy++) {
                    for (let dx = 0; dx < pixelSize; dx++) {
                        const px = ((y + dy) * imgSize.w + (x + dx)) * 4;
                        const r = imgData[px];
                        const g = imgData[px + 1];
                        const b = imgData[px + 2];
                        const a = imgData[px + 3];
                        colors.push(`rgba(${r}, ${g}, ${b}, ${a / 255})`);
                    }
                }

                // 获取出现次数最多的颜色
                const mostFrequentColor = getMostFrequentColor(colors);

                // 将出现次数最多的颜色填充到当前小块
                pixelatedCtx.fillStyle = mostFrequentColor;
                pixelatedCtx.fillRect(x, y, pixelSize, pixelSize);
            }
        }

        // 将像素化后的图片转换为 URL
        setPixelatedImageSrc(pixelatedCanvas.toDataURL());
        setLoading(false);
    };

    const pixelateImage2 = () => {
        setLoading(true);
        if (!imgUrl || !canvasRef2.current || !pixelatedCanvasRef2.current ||!imgData) return;

        const pixelatedCanvas = pixelatedCanvasRef2.current;
        const pixelatedCtx = pixelatedCanvas.getContext('2d');

        if (!pixelatedCtx) return;

        // 设置 canvas 尺寸为图片尺寸
        pixelatedCanvas.width = imgSize.w;
        pixelatedCanvas.height = imgSize.h;
        pixelatedCtx.clearRect(0, 0, imgSize.w, imgSize.h);

        // 像素化处理
        for (let y = 0; y < imgSize.h; y += pixelSize) {
            for (let x = 0; x < imgSize.w; x += pixelSize) {
                // 计算当前小块的像素平均值
                let r = 0, g = 0, b = 0,  a = 0, count = 0;

                for (let dy = 0; dy < pixelSize; dy++) {
                    for (let dx = 0; dx < pixelSize; dx++) {
                        const px = ((y + dy) * imgSize.w + (x + dx)) * 4;
                        r += imgData[px];
                        g += imgData[px + 1];
                        b += imgData[px + 2];
                        a += imgData[px + 3]; // Alpha 通道
                        count++;
                    }
                }

                r = Math.floor(r / count);
                g = Math.floor(g / count);
                b = Math.floor(b / count);
                a = Math.floor(a / count); // 计算平均透明度

                // 将平均值填充到当前小块
                pixelatedCtx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a / 255})`;
                pixelatedCtx.fillRect(x, y, pixelSize, pixelSize);
            }
        }

        // 将像素化后的图片转换为 URL
        setPixelatedImageSrc2(pixelatedCanvas.toDataURL());
        setLoading(false);
    };
    const pixelMax = useMemo(() => Math.round(Math.min(imgSize.w, imgSize.h)/20), [imgSize.w, imgSize.h]);
    useEffect(() => {
        console.log(pixelMax,pixelSize);
    },[pixelMax,pixelSize]);
    return <div className={'width-100 height-100 py-32 border-box'}>
        <div className={'flex column gap-24 px-24 pt-32 width-100 height-100 mx-auto'}
             style={{maxWidth: '848px', boxSizing: 'border-box'}}>
            <LandUploader height={'240px'} onUpload={url => setImgUrl(url)} style={{boxSizing: 'border-box'}}>
                {imgUrl && <img src={imgUrl} alt="" width={'100%'} height={'100%'} className={'object-contain'}/>}
            </LandUploader>
            <LandFlex gap={12} align={'center'} className={'width-100'}>
                <div className={'flex-1 flex gap-8 items-center fs-12 color-gray-3 no-wrap'}>程度:
                    <LandSlider
                        value={pixelSize}
                        onChange={(val) => {
                            pixelateImage();
                            pixelateImage2();
                            setPixelSize(val)
                        }}
                        min={1}
                        max={pixelMax}
                        step={1}
                        height={16}
                        className={`${!imgUrl ? 'events-none cursor-not-allowed' :''}`}
                    />
                </div>
                <LandButton width={'120px'} type={'background'} status={'primary'} className={'mx-auto'}
                            onClick={() => {
                                setFinished(true);
                                pixelateImage?.();
                                pixelateImage2?.()
                            }}
                            disabled={loading || !imgUrl || finished} pop={!imgUrl ? '请先上传图片':''}>{loading ?
                    <LandLoading size={16}/> : '确定'}</LandButton>
            </LandFlex>
            <div className={'flex-1 flex gap-12 height-1'}>
                <div className={'flex-1 relative border'}>
                    <canvas ref={canvasRef} style={{display: 'none'}}/>
                    <canvas ref={pixelatedCanvasRef} style={{display: 'none'}}/>
                    {pixelatedImageSrc &&
                        <img src={pixelatedImageSrc} width={'100%'} height={'100%'} className={'object-contain'}/>}
                    <div
                        className={`absolute top-0 left-0 width-100 height-100 flex both-center transition ${loading ? '' : 'opacity-0 events-none'}`}
                        style={{zIndex: 1}}>
                        <LandLoading/></div>
                </div>
                <div className={'flex-1 relative border'}>
                    <canvas ref={canvasRef2} style={{display: 'none'}}/>
                    <canvas ref={pixelatedCanvasRef2} style={{display: 'none'}}/>
                    {pixelatedImageSrc2 &&
                        <img src={pixelatedImageSrc2} width={'100%'} height={'100%'} className={'object-contain'}/>}
                    <div
                        className={`absolute top-0 left-0 width-100 height-100 flex both-center transition ${loading ? '' : 'opacity-0 events-none'}`}
                        style={{zIndex: 1}}>
                        <LandLoading/></div>
                </div>
            </div>
        </div>
    </div>
}
export default ImgPixel