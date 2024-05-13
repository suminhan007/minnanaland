import React from "react";
import styled from "styled-components";
import House from "./scene/House";
import Flex from "../../components/Flex";

type Props = {};
const Home: React.FC<Props> = ({}) => {
  return (
    <StyleHomeWrap style={{ height: "100vh" }}>
      <Flex>
        <div></div>
        <House />
      </Flex>
    </StyleHomeWrap>
  );
};

const StyleHomeWrap = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  margin-top: 64px;
`;
export default Home;
