import React, { useState } from "react";
import House from "./scene/House";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { ClickType } from "../../components/Menu";
type Props = {};
const Home: React.FC<Props> = ({}) => {
  const [activedNav, setActivedNav] = useState<number>(2);
  return <div style={{ height: "100vh" }}></div>;
};

export default Home;
