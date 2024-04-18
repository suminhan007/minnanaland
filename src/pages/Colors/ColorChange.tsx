import React, { Fragment, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Flex from '../../components/Flex'
import Title from '../../components/Title'
import Uploader from '../../components/Uploader'
import AutoMedia from '../../components/AutoMedia'

type Props = {

}
const ColorChange: React.FC<Props> = ({

}) => {
  const maskRef = useRef<HTMLDivElement>(null);
  const [imgUrl, setImgUrl] = useState<string>("");
  const [percentage, setPercentage] = useState<number>(100);
  const [move, setMove] = useState<boolean>(false);
  const handleThumbMove = (e: any) => {
    if (!maskRef.current) return;
    const mask = maskRef.current.getBoundingClientRect();
    const diffX = e.clientX - mask.left;
  }
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
      <StyleImgContainer className='relative flex-1 border-dash'>
        <div className='width-100 height-100'>
          {imgUrl && (
            <AutoMedia url={imgUrl} />
          )}
        </div>
        <div className='mask-img absolute height-100' style={{ width: `${percentage}%` }}>
          {imgUrl && (
            <AutoMedia url={imgUrl} />
          )}
        </div>
        {imgUrl &&
          <div
            ref={maskRef}
            className='mask-thumb absolute'
            style={{ left: `${percentage}%` }}
            onMouseDown={() => setMove(true)}
            onMouseMove={(e) => handleThumbMove(e)}
          ></div>
        }
      </StyleImgContainer>
    </div>
  )
}

const StyleImgContainer = styled.div`
  .mask-img{
    top: 0;
    left: 0;
    mix-blend-mode: color-burn;
  }
  .mask-thumb{
    top: -4px;
    width: 4px;
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