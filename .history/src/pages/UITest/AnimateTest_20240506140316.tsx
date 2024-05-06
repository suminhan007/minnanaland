import React, { useMemo, useState } from "react";
import Flex from "../../components/Flex";
import ColorPicker from "../../components/ColorPicker";
import styled from "styled-components";

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
      <Flex column className="flex-1 p-24" align="center">
        <div
          className="flex bg-gray"
          style={{ width: "100%", height: "320px" }}
        ></div>
        <Flex>
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
    </StyleAnimateTestWrap>
  );
};

const StyleAnimateTestWrap = styled.div`
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export default AnimateTest;
