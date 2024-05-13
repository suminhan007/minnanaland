import React from "react";
import styled from "styled-components";
import House from "./scene/House";
import Flex from "../../components/Flex";

type Props = {};
const Home: React.FC<Props> = ({}) => {
  return (
    <StyleHomeWrap style={{ height: "100vh" }}>
      <Flex className="width-100 color-white justify-center">
        <h1 className="font-baloo">
          Hello, <br />
          welcome to my house!
        </h1>
        <div>
          <House />
        </div>
      </Flex>
    </StyleHomeWrap>
  );
};

const StyleHomeWrap = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding-top: 64px;
  background: linear-gradient(-135deg, #0aa344, #bce672);
  h1 {
    font-size: 64px;
  }
`;
export default Home;
