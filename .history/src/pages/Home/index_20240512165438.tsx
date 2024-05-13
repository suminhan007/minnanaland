import React from "react";
import styled from "styled-components";
type Props = {};
const Home: React.FC<Props> = ({}) => {
  return <StyleHomeWrap style={{ height: "100vh" }}>
    <div className="enter_page">
    <div id="guideContainer">
        <div class="guideDes">
            <p class="welc">Hello! Welcome to my home!</p>
            <p class="des">你可以：<br>点击顶部导航栏直达目标，或者<br>点击下方按钮依次探索房间。</p>
            <a href="#house"><div class="guideButton">开始探索 <p>>></p></div></a>
            <ul class="floorSelect">
                <li 
                    v-for="(p) of floors" 
                    :key="p.id"
                    @click="changeF(p.id)"
                >
                    <a href="#house" title="即将前往1楼的第个房间"><p>{{p.name}}</p></a>
                </li>
            </ul>
        </div>    
    </div>
      <Scene :module="module"/>
    </div>
    <div className="house_page">
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
