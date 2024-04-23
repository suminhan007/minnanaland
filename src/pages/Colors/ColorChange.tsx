import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Flex from '../../components/Flex'
import Title from '../../components/Title'
import Uploader from '../../components/Uploader'
import Button from '../../components/Button'
import { downloadHtmlAsImg } from '../../utils/downloadHtmlAsImg'
import Radio from '../../components/Radio'
import html2canvas from 'html2canvas'

type Props = {

}
const ColorChange: React.FC<Props> = ({

}) => {
  const colorChangeCanvasRef = useRef<HTMLCanvasElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const [imgUrl, setImgUrl] = useState<string>("");
  const [resultImg, setResultImg] = useState<string>("");
  /** 处理滑条事件 */
  const [percentage, setPercentage] = useState<number>(50);
  const [move, setMove] = useState<boolean>(false);
  const handleThumbMove = (e: any) => {
    if (!maskRef.current || !move) return;
    const mask = maskRef.current.getBoundingClientRect();
    const diffX = e.clientX - mask.left;
    setPercentage(Math.round(diffX / mask.width * 100))
  }
  /** 换色类型 */
  const [type, setType] = useState<number>(1);
  /** 换色 */
  useEffect(() => {
    if (!colorChangeCanvasRef.current) return;
    const newCanvas = colorChangeCanvasRef?.current;
    var image = new Image();
    image.src = imgUrl;
    image.crossOrigin = "Anonymous";
    image.onload = function () {
      newCanvas.width = image.width;
      newCanvas.height = image.height;
      newCanvas.getContext("2d")?.drawImage(image, 0, 0, image.width, image.height);
    }
    var ctx = newCanvas.getContext("2d");
    if (ctx) {
      var imageData = ctx.getImageData(0, 0, newCanvas.width, newCanvas.width);
      var px = imageData.data;
      for (var i = 0; i < px.length; i += 4) {
        // 改变每个像素
        px[i] = 255 - px[i]; //r
        px[i + 1] = 255 - px[i + 1]; //g
        px[i + 2] = 255 - px[i + 2]; //b 
      }
      ctx.putImageData(imageData, 0, 0);
      html2canvas(colorChangeCanvasRef?.current).then(function (canvas) {
        const image = canvas.toDataURL('image/png');
        setResultImg(image.src);
      })
      console.log(image.src);
    }
  }, [imgUrl])
  return (
    <div className="flex column items-start gap-32 px-24 pt-32 mb-24">
      {/* 上传框 */}
      <Flex column gap={24}>
        <Flex column gap={8}>
          <Title title="Step 01: 上传图片" type="h3" />
          <Title
            title="点击或拖拽来上传图片，"
            type="p"
            className="color-gray-4"
          />
        </Flex>
        <div
          className="width-100"
          style={{ height: "120px" }}
        >
          <Uploader
            fileType="image/*"
            onUpload={(url) => {
              setImgUrl(url);
            }}
            desc="点击上传图片或将图片拖拽于此"
            className="radius-12"
          />
        </div>
      </Flex>

      <Radio
        checked={type}
        data={[
          { value: 1, label: "反色" },
          { value: 2, label: "换色" },
          { value: 3, label: "滤色" },
        ]}
        onChange={val => setType(val.value)}
        titleProps={{
          title: '类型',
          type: 'p',
          info: 'ooo'
        }}
      />
      <StyleImgContainer
        ref={maskRef}
        className='StyleImgContainer relative border-dash'
        onMouseUp={() => setMove(false)}
        onMouseMove={(e) => handleThumbMove(e)}
        style={{ backgroundImage: imgUrl ? `url(${imgUrl})` : "url('colorcard-contrast.png')", opacity: imgUrl ? 1 : 0.2 }}
      >
        {imgUrl && <div
          className='mask-img-wrap width-100 height-100 absolute flex justify-start items-center overflow-hidden'
          style={{
            width: `${percentage}%`
          }}
        >
          <div className='mask-img height-100' style={{ backgroundImage: `url(${resultImg})` }}></div>
          <canvas ref={colorChangeCanvasRef} className='mask-canvas opacity-0'></canvas>
        </div>}
        {imgUrl &&
          <div
            className='mask-thumb absolute'
            style={{ left: `${percentage}%` }}
            onMouseUp={() => setMove(false)}
            onMouseDown={() => setMove(true)}
          ></div>
        }
      </StyleImgContainer>
      <Flex gap={12} justify='center' className='width-100'>
        <Button text='下载对比图' onClick={() => {
          const contrastImg = document.querySelector(".StyleImgContainer");
          downloadHtmlAsImg(contrastImg, 'img-contrast');
        }} />
        <Button text='下载转换图' type='background' onClick={() => {
          const contrastedImg = document.querySelector(".mask-img");
          downloadHtmlAsImg(contrastedImg, 'img-contrasted');
        }} />
      </Flex>
    </div>
  )
}

const StyleImgContainer = styled.div`
  width: calc(100vw  - 48px);
  height: 600px;
  max-height: calc(100vh - 317px);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  .mask-img-wrap{
    top: 0;
    left: 0;
  }
  /* .mask-img{
    width: calc(100vw  - 48px);
    mix-blend-mode: color-burn;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  } */
  .mask-thumb{
    top: -4px;
    width: 2px;
    height: calc(100% + 8px);
    border-radius: 2px;
    background-color: var(--color-primary-6);
    transform: translateX(-50%);
    cursor: ew-resize;
  }
  img{
    cursor: none;
  }
`
export default ColorChange;