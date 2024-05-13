import React from "react";
import styled from "styled-components";
import Base3D from "./scene/

type Props = {};
const Home: React.FC<Props> = ({ }) => {
  
  return <StyleHomeWrap style={{ height: "100vh" }}>
    <div className="enter_page">
    <div id="guideContainer">
        <div className="guideDes">
            <p className="welc">Hello! Welcome to my home!</p>
            <p className="des">你可以：<br>点击顶部导航栏直达目标，或者<br>点击下方按钮依次探索房间。</p>
            <a href="#house"><div className="guideButton">开始探索 <p>{ '>>'}</p></div></a>
        </div>    
    </div>
    <div id="houseScene" className="canvas" v-if="this.module"></div>
    <progress id="outlook_prog" max="100" stroke-width="200px" v-if="this.module"></progress>
    <img className="scene-img" src="../assets/images/house.png" v-if="!this.module">
    </div>
    <div classNameName="house_page">
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
