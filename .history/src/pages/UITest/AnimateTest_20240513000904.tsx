import React, { useMemo, useState } from "react";
import Flex from "../../components/Flex";
import styled from "styled-components";
import Uploader from "../../components/Uploader";
import { PageTitle } from "../components/PageTitle";
import AutoMedia from "../../components/AutoMedia";
import Input from "../../components/Input";

type Props = {};

const AnimateTest: React.FC<Props> = ({}) => {
  const [mediaUrl, setMediaUrl] = useState<string>("");
  const [type, setType] = useState<string>('image')
  const handleUpload = (url: string) => {
    console.log(url);
    setMediaUrl(url);
  };
  const media = () => {
    if()
  }
  return (
    <StyleAnimateTestWrap column className="width-100 height-100 p-24" gap={24}>
      {/* 上传框 */}
      <Flex column gap={16}>
        <PageTitle
          mainTitle="Step 01: 上传文件"
          subTitle="点击或拖拽来上传动画文件"
        />
        <div className="width-100" style={{ height: "240px" }}>
          <Uploader
            fileType="video/*,image/*"
            onUpload={(url) => {
              handleUpload(url);
            }}
            desc="点击或拖拽来上传动画文件"
            className="radius-12"
          ></Uploader>
        </div>
      </Flex>
      <Flex column gap={16}>
        <PageTitle
          mainTitle="Step 02: 动画调整"
          subTitle="调整并查看动画文件的呈现效果"
        />
        <StyleAnimationDisplay className="flex-1">
          <div>{media}</div>
          <Flex column>
            <Input />
          </Flex>
        </StyleAnimationDisplay>
      </Flex>
    </StyleAnimateTestWrap>
  );
};

const StyleAnimateTestWrap = styled(Flex)`
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const StyleAnimationDisplay = styled.div`
  /* resize: */
`;
export default AnimateTest;
