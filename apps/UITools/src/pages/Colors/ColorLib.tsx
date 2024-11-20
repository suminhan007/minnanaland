import React, { Fragment } from 'react'
import { MY_COLORS } from './mock'
import styled from 'styled-components'
import Flex from '../../components/Flex'
import ColorPicker from '../../components/ColorPicker'

type Props = {

}
const ColorLib: React.FC<Props> = ({

}) => {
  return (
    <StyleColorsLib className='width-100 p-24'>
      {MY_COLORS.map((item: any) => (
        <Fragment key={item.id}>
          <p className="fs-14 mb-8 color-gray-3">【{item.name}】</p>
          <Flex wrap gap={12}>
            {item.data.map((color: any) => (
              <ColorPicker
                size={48}
                value={color.value}
                input={color.name}
                showDrop={false}
                pop={color.value}
              />
            ))}
          </Flex>
        </Fragment>
      ))}
    </StyleColorsLib>
  )
}
const StyleColorsLib = styled.div`
  
`

export default ColorLib;