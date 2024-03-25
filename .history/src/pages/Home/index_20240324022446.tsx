import React from "react";
import styled from "styled-components";
import House from "../../scene/House";

type Props = {};
const Home: React.FC<Props> = ({}) => {
  return (
      <StyleWrap>
          {/* 3D 场景 */}
          <House />
          mo shi
    </StyleWrap>
  );
};

const StyleWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;
export default Home;
