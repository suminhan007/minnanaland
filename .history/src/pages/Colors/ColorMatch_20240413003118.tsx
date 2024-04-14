import React, { useMemo, useState } from 'react'
import Flex from '../../components/Flex'
import ColorPicker from '../../components/ColorPicker';
import styled from 'styled-components';

type Props = {

}

const ColorMatch: React.FC<Props> = ({}) => {
  return (
    <div className="flex column items-start gap-32 px-24 pt-32 mb-24">
      <Flex column gap={8}>
          <Title title="Step 01: 上传图片" type="h3" />
          <Title
            title="点击或拖拽来上传图片，以像素为单位对颜色计"
            type="p"
            className="color-gray-4"
          />
        </Flex>
    </div>
  );
};

export default ColorMatch