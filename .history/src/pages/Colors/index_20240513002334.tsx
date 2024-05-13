import React, { useState } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Content from "../../components/Content";
import Title from "../../components/Title";
import { ClickType } from "../../components/Menu";
import ImgColorPicker from "./ImgColorPicker";
import ColorMatch from "./ColorMatch";
import ColorLib from "./ColorLib";
import ColorChange from "./ColorChange";
import Application from "../components/Application";

type Props = {};

const Colors: React.FC<Props> = ({}) => {
  const [activedNav, setActivedNav] = useState<number>(1);
  return (
    <Layout>
      <Header
        logo={<p>❤️💛🩵💜</p>}
        name={<Title title="Colors" type="h2" />}
        align="end"
        applications={<Application />}
        menuProps={{
          data: [
            { key: 1, title: "图片取色", clickType: ClickType.SELF },
            { key: 2, title: "自动配色", clickType: ClickType.SELF },
            { key: 3, title: "图片滤镜", clickType: ClickType.SELF },
            // { key: 4, title: "颜色库", clickType: ClickType.SELF },
          ],
          actived: activedNav,
          handleChangeTab: (key, type) =>
            type === ClickType.SELF && setActivedNav(key),
        }}
      />
      <Layout>
        <Content>
          {activedNav === 1 && <ImgColorPicker />}
          {activedNav === 2 && <ColorMatch />}
          {activedNav === 3 && <ColorChange />}
          {activedNav === 4 && <ColorLib />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Colors;
