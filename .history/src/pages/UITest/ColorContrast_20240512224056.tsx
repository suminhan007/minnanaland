import React, { useMemo, useState } from "react";
import Flex from "../../components/Flex";
import ColorPicker from "../../components/ColorPicker";
import styled from "styled-components";
import { getColorContrast } from "../../utils/getColorContrast";
import Link from "../../components/Link";

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
          className="flex bg-gray"
          style={{ width: "100%", height: "320px" }}
        >
          <div className="flex column gap-8 items-start">
            <div className="fs-14">
              对比度：<span className="fs-32 fw-600">{contrast}</span>
              <span className="fs-16 fw-600">:1</span>
            </div>
            <p className="fs-12 color-gray-4">
              Contrast Results based on{" "}
              <Link href="https://www.w3.org/TR/WCAG20/">WCAG 2.0</Link>
            </p>
          </div>
        </div>
        <Flex gap={24} className="width-100" justify="center">
          <ColorPicker
            size={120}
            value={text}
            onChange={(val) => setText(val)}
          />
          <ColorPicker
            size={120}
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
