import React from "react";
import styled from "styled-components";
import House from "./scene/House";
import Flex from "../../components/Flex";

type Props = {};
const Home: React.FC<Props> = ({}) => {
  return (
    <StyleHomeWrap className="relative" style={{ height: "100vh" }}>
      <div className="width-100 color-white">
        <h1 className="font-baloo">
          Hello, <br />
          welcome to my house!
        </h1>
      </div>
      <Style className="absolute flex-1 top-0 left-0">
        <House />
      </Style>
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
    white-space: nowrap;
  }
`;
export default Home;
