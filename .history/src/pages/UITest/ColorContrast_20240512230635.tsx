import React, { useMemo, useState } from "react";
import Flex from "../../components/Flex";
import ColorPicker from "../../components/ColorPicker";
import styled from "styled-components";
import { getColorContrast } from "../../utils/getColorContrast";
import Link from "../../components/Link";
import Pop from "../../components/Pop";

type Props = {};

const ColorContrast: React.FC<Props> = ({}) => {
  const [background, setBackground] = useState<string>("#fafafa");
  const [text, setText] = useState<string>("#0d0d0d");
  const isWhiteBg = useMemo(() => {
    return (
      background === "#fff" ||
      background === "#ffffff" ||
      background === "#FFF" ||
      background === "#FFFFFF"
    );
  }, [background]);
  const contrast = useMemo(() => {
    return getColorContrast(background, text).toFixed(2);
  }, [background, text]);
  const isContrastOK = useMemo(() => {
    return Number(contrast) >= 4.5;
  }, [contrast]);
  const isBigContrastOK = useMemo(() => {
    return Number(contrast) >= 3;
  }, [contrast]);
  return (
    <StyleColorContrastWrap className="width-100 height-100 flex">
      <div
        className={`flex-1 height-100 fs-32 p-12 ${
          isWhiteBg ? "border-right" : ""
        }`}
        style={{
          background: background,
          color: text,
        }}
      >
        The quick, brown, cerise red, and energy yellow fox jumped over the lazy
        dog.
      </div>
      <Flex column gap={24} className="flex-1 p-24" align="center">
        <div
          className="flex column bg-gray items-center p-24"
          style={{ width: "100%", height: "240px" }}
        >
          {isBigContrastOK ? <p>✅</p> : <p>❌</p>}
          <div className="fs-14">
            对比度：<span className="fs-32 fw-600">{contrast} </span>
            <span className="fs-20 fw-600">: 1</span>
          </div>
          <p className="fs-12 color-gray-4">
            Contrast Results based on{" "}
            <Link href="https://www.w3.org/TR/WCAG20/">WCAG 2.0</Link>
          </p>
          <Flex gap={16} justify="center">
            <Flex align="baseline">
              <div className="relative hover-pop cursor-pointer">
                正常文本
                <Pop
                  theme="dark"
                  content="至少 18 点或 14 点粗体或字体大小可产生与中文、日文和韩文 (CJK)字体相同的大小"
                  style={{ maxWidth: "160px" }}
                />
              </div>
              <span
                className="fs-12"
                style={{
                  color: isBigContrastOK
                    ? "var(--color-green-6)"
                    : "var(--color-red-6)",
                }}
              >
                {isBigContrastOK ? "Success" : "Fail"}
              </span>
            </Flex>
            <Flex align="baseline">
              <div className="relative hover-pop cursor-pointer">
                大文本
                <Pop
                  theme="dark"
                  content="至少 18 点或 14 点粗体或字体大小可产生与中文、日文和韩文 (CJK)字体相同的大小"
                  style={{ maxWidth: "160px" }}
                />
              </div>
              <span
                className="fs-12"
                style={{
                  color: isBigContrastOK
                    ? "var(--color-green-6)"
                    : "var(--color-red-6)",
                }}
              >
                {isBigContrastOK ? "Success" : "Fail"}
              </span>
            </Flex>
          </Flex>
        </div>
        <Flex gap={24} className="width-100" justify="center">
          <ColorPicker
            size={160}
            input={
              <Flex className="" align="baseline" justify="space-between">
                <span className="fs-16">Text</span>
                <span className="fs-12">{text}</span>
              </Flex>
            }
            value={text}
            onChange={(val) => setText(val)}
          />
          <ColorPicker
            size={160}
            input={
              <Flex className="" align="baseline" justify="space-between">
                <span className="fs-16">Background</span>
                <span className="fs-12">{text}</span>
              </Flex>
            }
            value={background}
            onChange={(val) => setBackground(val)}
          />
        </Flex>
      </Flex>
    </StyleColorContrastWrap>
  );
};

const StyleColorContrastWrap = styled.div`
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export default ColorContrast;
