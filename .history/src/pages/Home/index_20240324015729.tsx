import React from "react";
import styled from "styled-components";
import {Land}

type Props = {};
const Home: React.FC<Props> = ({}) => {
  return (
    <StyleWrap>
      <StyleContentWrap className="StyleContentWrap"></StyleContentWrap>
    </StyleWrap>
  );
};

export const StyleWrap = styled.div`
  width: 100vw;
`;
export const StyleContentWrap = styled.div`
  margin: 64px auto 0;
  width: calc(100vw - 48px);
  max-width: 960px;
`;
export default Home;
