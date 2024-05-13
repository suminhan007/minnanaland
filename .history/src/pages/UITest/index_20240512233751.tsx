import React, { useState } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Content from "../../components/Content";
import Title from "../../components/Title";
import { ClickType } from "../../components/Menu";
import ColorContrast from "./ColorContrast";
import AnimateTest from "./AnimateTest";
import Application from "../components/Application";
// import Application from "../components/Application";

type Props = {};

const UITest: React.FC<Props> = ({}) => {
  const [activedNav, setActivedNav] = useState<number>(2);
  return (
    <Layout>
      <Header
        logo={<p>💻💻💻</p>}
        name={<Title title="UITest" type="h2" />}
        align="end"
        applications={<Application />}
        menuProps={{
          data: [
            { key: 1, title: "色彩对比度检测", clickType: ClickType.SELF },
            { key: 2, title: "动画文件测试", clickType: ClickType.SELF },
          ],
          actived: activedNav,
          handleChangeTab: (key, type) =>
            type === ClickType.SELF && setActivedNav(key),
        }}
      />
      <Layout>
        <Content>
          {activedNav === 1 && <ColorContrast />}
          {activedNav === 2 && <AnimateTest />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default UITest;
