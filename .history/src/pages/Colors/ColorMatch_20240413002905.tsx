import React, { useMemo, useState } from 'react'
import Flex from '../../components/Flex'
import ColorPicker from '../../components/ColorPicker';
import styled from 'styled-components';

type Props = {

}

const ColorMatch: React.FC<Props> = ({

}) => {
  
  return (
    <StyleColorContrastWrap className='width-100 height-100 flex'>
      <div
        className={`flex-1 height-100 ${isWhiteBg ? 'border-right' : ''}`}
        style={{
          background: background,
          color: text
        }}
      >
        一些测试文字
      </div>
      <Flex column className='flex-1 p-24' align='center'>
        <div className='flex bg-gray' style={{ width: '100%', height: '320px' }}>

        </div>
        <Flex>
          <ColorPicker size={120} value={text} onChange={(val) => setText(val)} />
          <ColorPicker size={120} value={background} onChange={(val) => setBackground(val)} />
        </Flex>
      </Flex>
    </StyleColorContrastWrap>
  )
}

const StyleColorContrastWrap = styled.div`
  @media screen and (max-width: 800px){
    flex-direction: column;
  }
`

export default ColorMatch