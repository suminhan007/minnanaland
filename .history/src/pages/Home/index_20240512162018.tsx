import React, { useState } from "react";
import House from "./scene/House";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { ClickType } from "../../components/Menu";
type Props = {};
const Home: React.FC<Props> = ({}) => {
  const [activedNav, setActivedNav] = useState<number>(2);
  return (
    <div style={{ height: "100vh" }}>
      <Header
        f
        logo={<img width={32} src="vite.svg" />}
        name={<Title title="minna's land" type="h2" />}
        align="end"
        menuProps={{
          data: [
            { key: 1, title: "Colors", clickType: ClickType.SELF },
            { key: 2, title: "UITest", clickType: ClickType.SELF },
          ],
          actived: activedNav,
          handleChangeTab: (key, type) =>
            type === ClickType.SELF && setActivedNav(key),
        }}
      />
      <House />
    </div>
  );
};

export default Home;
