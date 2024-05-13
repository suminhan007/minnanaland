import React, { useState } from "react";
import Flex from "../../components/Flex";
import styled from "styled-components";
import Uploader from "../../components/Uploader";
import { PageTitle } from "../components/PageTitle";
import Input from "../../components/Input";
import ColorPicker from "../../components/ColorPicker";

type Props = {};

const AnimateTest: React.FC<Props> = ({}) => {
  const [mediaUrl, setMediaUrl] = useState<string>("");
  const [file, setFile] = useState<any>();
  const media = () => {
    if (file?.type.includes("image")) {
      return <img src={mediaUrl} />;
    } else if (file?.type.indexOf("video")) {
      return <video src={mediaUrl} />;
    }
    return <img src={mediaUrl} />;
  };
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
            onUpload={(url, file) => {
              setMediaUrl(url);
              setFile(file);
            }}
            desc="点击或拖拽来上传动画文件"
            className="radius-12"
          >
            {file.type}
          </Uploader>
        </div>
      </Flex>
      <Flex column gap={16}>
        <PageTitle
          mainTitle="Step 02: 动画调整"
          subTitle="调整并查看动画文件的呈现效果"
        />
        <Flex>
          {" "}
          <StyleAnimationDisplay
            align="center"
            justify="center"
            className="flex-2"
          >
            {media()}
          </StyleAnimationDisplay>
        </Flex>
      </Flex>
    </StyleAnimateTestWrap>
  );
};

const StyleAnimateTestWrap = styled(Flex)`
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const StyleAnimationDisplay = styled(Flex)`
  /* resize: */
`;
export default AnimateTest;
