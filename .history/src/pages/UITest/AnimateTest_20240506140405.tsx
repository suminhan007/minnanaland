import React, { useMemo, useState } from "react";
import Flex from "../../components/Flex";
import ColorPicker from "../../components/ColorPicker";
import styled from "styled-components";
import { Title } from "@suminhan/land-design";
import Uploader from "../../components/Uploader";

type Props = {};

const AnimateTest: React.FC<Props> = ({}) => {
  const [background, setBackground] = useState<string>("#fffff");
  const [text, setText] = useState<string>("#0d0d0d");
  const isWhiteBg = useMemo(() => {
    return (
      background === "#fff" ||
      background === "#ffffff" ||
      background === "#FFF" ||
      background === "#FFFFFF"
    );
  }, [background]);
  return (
    <StyleAnimateTestWrap className="width-100 height-100 flex">
      {/* 上传框 */}
      <Flex column gap={24}>
        <Flex column gap={8}>
          <Title title="Step 01: 上传图片" type="h3" />
          <Title
            title="点击或拖拽来上传图片，以像素为单位对颜色计数"
            type="p"
            className="color-gray-4"
          />
        </Flex>
        <div className="width-100" style={{ height: "240px" }}>
          <Uploader
            fileType="image/*"
            onUpload={(url) => {}}
            desc="点击上传图片或将图片拖拽于此"
            className="radius-12"
          >
            {/* {imgUrl && <AutoMedia url={imgUrl} />} */}
          </Uploader>
        </div>
      </Flex>
    </StyleAnimateTestWrap>
  );
};

const StyleAnimateTestWrap = styled.div`
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export default AnimateTest;
