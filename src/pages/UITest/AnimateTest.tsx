import React, { useEffect, useState } from "react";
import Flex from "../../components/Flex";
import styled from "styled-components";
import Uploader from "../../components/Uploader";
import { PageTitle } from "../components/PageTitle";
import Input from "../../components/Input";
import ColorPicker from "../../components/ColorPicker";
import Title from "../../components/Title";
import Check from "../../components/Check";
import AutoMedia from "../../components/AutoMedia";

type Props = {};

const AnimateTest: React.FC<Props> = ({ }) => {
  const [mediaUrl, setMediaUrl] = useState<string>("");
  const [file, setFile] = useState<any>();
  const [fileType, setFileType] = useState<string>("gif");
  useEffect(() => {
    if (file?.type === "") {
      setFileType('pag')
    } else if (file?.type.includes("png") || file?.type.includes("jpg") || file?.type.includes("jpeg")) {
      setFileType('png')
    } else if (file?.type.includes("gif")) {
      setFileType('gif')
    } else if (file?.type.includes("video")) {
      setFileType('video')
    }
  }, [file])

  const [backgorund, setBackground] = useState<string>('#eee');
  const [removeVideoBg, setRemoveVideoBg] = useState<boolean>(false);
  const [radius, setRadius] = useState<number>(0);
  return (
    <StyleAnimateTestWrap column className="width-100 height-100 p-24" gap={24}>
      {/* 上传框 */}
      <Flex column gap={16}>
        <PageTitle
          mainTitle="Step 01: 上传文件"
          subTitle="点击或拖拽来上传动画文件，自动识别文件类型"
        />
        <div className="width-100" style={{ height: "240px" }}>
          <Uploader
            fileType="all"
            onUpload={(url, file) => {
              setMediaUrl(url);
              setFile(file);
            }}
            desc="点击或拖拽来上传动画文件"
            className="radius-12"
          >
            {file?.type}
          </Uploader>
        </div>
      </Flex>
      <Flex column gap={16}>
        <PageTitle
          mainTitle="Step 02: 预览&调整"
          subTitle="调整并查看动画文件的呈现效果"
        />
        <Flex gap={24} className="width-100">
          <div className="flex column gap-24">
            <div>
              <Title type="p" title="背景色" className="mb-8" />
              <ColorPicker
                value={backgorund}
                input={false}
                onChange={(val) => setBackground(val)}
              /></div>
            <div>
              <Title type="p" title="圆角" className="mb-8" info="" />
              <Input
                type="number"
                min={0}
                step={1}
                value={radius}
                onChange={(val) => setRadius(Number(val))}
              />
            </div>
            <Check text="去除动画背景" checked={removeVideoBg} onChange={() => setRemoveVideoBg(!removeVideoBg)} />
          </div>
          <StyleAnimationDisplay
            align="center"
            justify="center"
            className="StyleAnimationDisplay border"
            style={{
              flex: mediaUrl ? "" : "1",
              background: backgorund,
              aspectRatio: 5 / 3
            }}
          >
            {fileType === 'pag' && <></>}
            {(fileType === 'gif' || fileType === 'video') && <AutoMedia type={fileType === 'video' ? 'video' : 'img'} url={mediaUrl}
              style={{
                borderRadius: `${radius}px`,
                //@ts-ignore
                mixBlendMode: removeVideoBg ? 'screen' : '',

              }}
              wrapClassName="p-16"
            />}
          </StyleAnimationDisplay>
        </Flex>
      </Flex>
    </StyleAnimateTestWrap >
  );
};

const StyleAnimateTestWrap = styled(Flex)`
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const StyleAnimationDisplay = styled(Flex)`
  max-width: 100vw;

`
export default AnimateTest;
