import React, { useMemo, useState } from 'react'
import Flex from '../../components/Flex'
import ColorPicker from '../../components/ColorPicker';
import styled from 'styled-components';
import { Title } from "@suminhan/land-design";
import { StyleAddColorBtn } from './ImgColorPicker';
import { IconColorPicker } from '../../components/Icon';

type Props = {};

const ColorMatch: React.FC<Props> = ({}) => {
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
        <div
          className={`relative flex items-center justify-center flex-wrap gap-12 p-24 flex-1`}
          style={{ minWidth: "325px" }}
        >
          {colorArr.length === 0 && imgUrl && (
            <div className="absolute" style={{ zIndex: 1 }}>
              <Button
                text="提取颜色"
                type="background"
                onClick={() => {
                  getImgColor(imgUrl);
                }}
              />
            </div>
          )}
          {colorArr.length === 0
            ? unitColorArr?.map((item0: any, index0: number) => (
                <StyleColorItem
                  key={index0}
                  className="flex column relative justify-center gap-4 disabled"
                >
                  <ColorPicker value={item0.value} showDrop={false} />
                </StyleColorItem>
              ))
            : colorArr?.map((item: any, index: number) => (
                <StyleColorItem
                  key={index}
                  className="flex column relative justify-center gap-4"
                >
                  <ColorPicker
                    value={item.value}
                    showDrop={false}
                    onChange={(color) => {
                      const newColorArr = colorArr.map((itm) => {
                        return {
                          id: itm.id,
                          value:
                            itm.id == item.id
                              ? `#${tinycolor(color).toHex()}`
                              : itm.value,
                        };
                      });
                      setColorArr(newColorArr);
                    }}
                  />
                  <div
                    className="absolute cursor-pointer close-icon"
                    onClick={() => handleDeleteColor(item.id)}
                  >
                    <IconCloseCircle fill="var(--color-red-6)" />
                  </div>
                </StyleColorItem>
              ))}
            <StyleAddColorBtn
              className="StyleAddColorBtn relative flex both-center border radius-50 cursor-pointer hover-pop"
              // onClick={() => handlePick()}
            >
              <IconColorPicker />
            </StyleAddColorBtn>
          )}
        </div>
      </Flex>
    </div>
  );
};

export default ColorMatch