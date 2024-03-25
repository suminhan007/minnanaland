import React from "react";
import styled from "styled-components";
import House from "../../scene/House";

type Props = {};
const Home: React.FC<Props> = ({}) => {
  return (
    <StyleWrap>
      <House />
    </StyleWrap>
  );
};

export const StyleWrap = styled.div`
  width: 100vw;
  100vh
`;
export default Home;
