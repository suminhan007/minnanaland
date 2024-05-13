//@ts-nocheck
import React, { useMemo, useState } from "react";
import Flex from "../../components/Flex";
import styled from "styled-components";
import Uploader from "../../components/Uploader";
import { PageTitle } from "../components/PageTitle";

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
    <StyleAnimateTestWrap className="width-100 height-100 flex p-24">
      {/* 上传框 */}
      <Flex column gap={24}>
        <PageTitle
          mainTitle="Step 02: 上传文件"
          subTitle="点击或拖拽来上传动画文件"
        />
        <div className="width-100" style={{ height: "240px" }}>
          <Uploader
            fileType="video/*,image"
            onUpload={(url) => {}}
            desc="点击或拖拽来上传动画文件"
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
