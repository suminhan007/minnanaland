import React, { useMemo, useState } from 'react'
import Flex from '../../components/Flex'
import ColorPicker from '../../components/ColorPicker';
import styled from 'styled-components';

type Props = {

}

const ColorMatch: React.FC<Props> = ({

}) => {
  
  return <div className="flex column items-start gap-32 px-24 pt-32 mb-24">;
}

const StyleColorMatchWrap = styled.div`
  @media screen and (max-width: 800px){
    flex-direction: column;
  }
`

export default ColorMatch