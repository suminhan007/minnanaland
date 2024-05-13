import React from "react";
import styled from "styled-components";
import House from "./scene/House";
import Flex from "../../components/Flex";

type Props = {};
const Home: React.FC<Props> = ({}) => {
  return (
    <StyleHomeWrap style={{ height: "100vh" }}>
      <Flex>
        <div>Hello</div>
        <div className="">
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
  /* background: linear-gradient(to bottom, #0aa344, #bce672); */
  background-color: aliceblue;
`;
export default Home;
