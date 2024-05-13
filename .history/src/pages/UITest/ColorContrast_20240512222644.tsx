import React, { useMemo, useState } from "react";
import Flex from "../../components/Flex";
import ColorPicker from "../../components/ColorPicker";
import styled from "styled-components";

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
          <p>Contrast Results based on WCAG 2.0</p>
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
