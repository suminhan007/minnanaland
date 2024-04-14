import React, { useMemo, useState } from 'react'
import Flex from '../../components/Flex'
import ColorPicker from '../../components/ColorPicker';
import styled from 'styled-components';
import { Title } from "@suminhan/land-design";
import { StyleAddColorBtn, StyleColorItem } from "./ImgColorPicker";
import {
  IconAdd,
  IconCloseCircle,
  IconColorPicker,
} from "../../components/Icon";
import tinycolor from "tinycolor2";
import Select from "../../components/Select";
import DropDown from "../../components/DropDown";
import Button from "../../components/Button";

type Props = {};

const ColorMatch: React.FC<Props> = ({}) => {
  const [colorArr, setColorArr] = useState<any>([]);
  return (
    <div className="flex column items-start gap-32 px-24 pt-32 mb-24">
      <Flex column gap={8}>
        <Title title="Step 01: 选取颜色" type="h3" />
        <Title
          title="输入自定义颜色，或从颜色库中选取颜色（支持 1-10 个颜色）"
          type="p"
          className="color-gray-4"
        />
        {/* 颜色列表 */}
        <div className="flex both-center">
          
        </div>
      </Flex>
    </div>
  );
};

export default ColorMatch