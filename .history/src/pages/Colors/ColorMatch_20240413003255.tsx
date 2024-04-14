import React, { useMemo, useState } from 'react'
import Flex from '../../components/Flex'
import ColorPicker from '../../components/ColorPicker';
import styled from 'styled-components';
import { Title } from "@suminhan/land-design";

type Props = {};

const ColorMatch: React.FC<Props> = ({}) => {
  return (
    <div className="flex column items-start gap-32 px-24 pt-32 mb-24">
      <Flex column gap={8}>
        <Title title="Step 01: 选择颜色" type="h3" />
        <Title
          title="输入自定义颜色，或从颜色库中选取颜色"
          type="p"
          className="color-gray-4"
        />
      </Flex>
    </div>
  );
};

export default ColorMatch