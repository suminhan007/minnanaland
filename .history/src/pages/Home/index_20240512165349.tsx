import React from "react";
import styled from "styled-components";
type Props = {};
const Home: React.FC<Props> = ({}) => {
  return <StyleHomeWrap style={{ height: "100vh" }}></StyleHomeWrap>;
};

const StyleHomeWrap = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  margin-top: 64px;
`;
export default Home;
