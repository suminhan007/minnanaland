import React, { useState } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Content from "../../components/Content";
import Title from "../../components/Title";
import { ClickType } from "../../components/Menu";
import ColorContrast from "./ColorContrast";
// import Application from "../components/Application";

type Props = {};

const UITest: React.FC<Props> = ({}) => {
  const [activedNav, setActivedNav] = useState<number>(1);
  return (
    <Layout>
      <Header
        logo={<p>❤️💛🩵💜</p>}
        name={<Title title="UITest" type="h2" />}
        align="end"
        // applications={<Application />}
        menuProps={{
          data: [
            { key: 1, title: "可用性测试", clickType: ClickType.SELF },
            { key: 2, title: "视频测试", clickType: ClickType.SELF },
            { key: 3, title: "3", clickType: ClickType.SELF },
            { key: 4, title: "4", clickType: ClickType.SELF },
          ],
          actived: activedNav,
          handleChangeTab: (key, type) =>
            type === ClickType.SELF && setActivedNav(key),
        }}
      />
      <Layout>
        <Content>{activedNav === 1 && <ColorContrast />}</Content>
      </Layout>
    </Layout>
  );
};

export default UITest;
