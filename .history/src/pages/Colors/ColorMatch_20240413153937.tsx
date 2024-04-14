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
      
    </div>
  );
};

export default ColorMatch