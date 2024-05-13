import React from "react";
import styled from "styled-components";
import House from "./scene/House";

type Props = {};
const Home: React.FC<Props> = ({}) => {
  return (
    <StyleHomeWrap style={{ height: "100vh" }}>
      <Fle
      <House />
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
