import React, { useState } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Content from "../../components/Content";
import Title from "../../components/Title";
import { ClickType } from "../../components/Menu";
import 
import Application from "../components/Application";

type Props = {};

const UITest: React.FC<Props> = ({}) => {
  const [activedNav, setActivedNav] = useState<number>(2);
  return (
    <Layout>
      <Header
        logo={<p>❤️💛🩵💜</p>}
        name={<Title title="Colors" type="h2" />}
        align="end"
        applications={<Application />}
        menuProps={{
          data: [
            { key: 1, title: "可用性测试", clickType: ClickType.SELF },
            { key: 2, title: "自动配色", clickType: ClickType.SELF },
            { key: 3, title: "图片换色", clickType: ClickType.SELF },
            { key: 4, title: "颜色库", clickType: ClickType.SELF },
          ],
          actived: activedNav,
          handleChangeTab: (key, type) =>
            type === ClickType.SELF && setActivedNav(key),
        }}
      />
      <Layout>
        <Content>{activedNav === 1 && <ImgColorPicker />}</Content>
      </Layout>
    </Layout>
  );
};

export default UITest;
