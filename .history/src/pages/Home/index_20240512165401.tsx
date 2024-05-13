import React from "react";
import styled from "styled-components";
type Props = {};
const Home: React.FC<Props> = ({}) => {
  return <StyleHomeWrap style={{ height: "100vh" }}>
    <div id="enter_page">
      <Guide :getF="getF"/>
      <Scene :module="module"/>
    </div>
    <div id="house_page">
      <House v-if="this.module" :floorId="floorId" :roomId="roomId"/>
      <HouseImg v-if="!this.module" :floorId="floorId" :roomId="roomId" :module="module"/>
      <Room :floorId="floorId" :getR="getR" :getFloor="getFloor"/>
    </div>
    <Contact/>
  </StyleHomeWrap>;
};

const StyleHomeWrap = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  margin-top: 64px;
`;
export default Home;
