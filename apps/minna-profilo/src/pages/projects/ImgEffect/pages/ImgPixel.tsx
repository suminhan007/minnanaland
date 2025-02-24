import {LandButton, LandFlex, LandLoading, LandNumberInput, LandUploader} from "@suminhan/land-design";
import { useState } from "react";
import getPixelData from "../../../../hooks/getPixelData.ts";

const ImgPixel = () => {
    const [imgUrl, setImgUrl] = useState("");
    const [pixelLevel, setPixelLevel] = useState(0);
    const [loading, setLoading] = useState(false);
    const pixelateImg = (img:HTMLImageElement) => {
        const pixelData: Uint8ClampedArray | undefined = getPixelData(img);
        if (!pixelData) return;
    }
    const handleClick = () => {
        setLoading(true)
        const img = new Image();
        img.src = imgUrl;
        img.onload = () => {
            pixelateImg(img)
            setLoading(false)
        }
    }
    return <div className={'width-100 height-100 pt-32'}>
        <div className={'flex column gap-24 px-24 pt-32 width-100 height-100 mx-auto'}
             style={{maxWidth: '848px', boxSizing: 'border-box'}}>
            <LandUploader height={'240px'} onUpload={url => setImgUrl(url)} style={{boxSizing: 'border-box'}}>
                {imgUrl && <img src={imgUrl} alt="" width={'100%'} height={'100%'} className={'object-contain'}/>}
            </LandUploader>
            <LandFlex gap={12} className={'width-100'}>
                <div className={'flex-1 flex gap-8 items-center fs-12 color-gray-3 no-wrap'}>数量: <LandNumberInput
                    width={'100%'} value={pixelLevel}
                    onChange={setPixelLevel}
                    min={1} max={10}/>
                </div>
                <LandButton width={'120px'} type={'background'} status={'primary'} className={'mx-auto'}
                            onClick={handleClick} disabled={loading}>{loading ?
                    <LandLoading size={16}/> : 'pick'}</LandButton>
            </LandFlex>

        </div>
    </div>
}
export default ImgPixel