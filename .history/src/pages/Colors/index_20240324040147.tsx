import React, { useState } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Sider from "../../components/Sider";
import Content from "../../components/Content";
import Footer from "../../components/Footer";
import Flex from "../../components/Flex";
import Title from "../../components/Title";
import { ClickType } from "../../components/Menu";
import styled from "styled-components";

type Props = {};

const Colors: React.FC<Props> = ({}) => {
  const [activedNav, setActivedNav] = useState<number>(1);
  return (
    <Layout className="width-100vw">
      <Header
        logo={<p>🎨🎨🎨</p>}
        name={<Title title="Colors" type="h2" />}
        align="end"
        menuProps={{
          data: [
            { key: 1, title: "Color Picker", clickType: ClickType.SELF },
            { key: 2, title: "AI 配色", clickType: ClickType.SELF },
            { key: 3, title: "文档", clickType: ClickType.SELF },
          ],
          actived: activedNav,
          handleChangeTab: (key, type) =>
            type === ClickType.SELF && setActivedNav(key),
        }}
        rig
      />
      <Layout>
        <Sider placement="left">
          <Flex bothCenter h="100%">
            SiderLeft
          </Flex>
        </Sider>
        <Content>
          <Flex bothCenter h="100%">
            Content
          </Flex>
        </Content>
      </Layout>
      <Footer>@suminhan</Footer>
    </Layout>
  );
};

export default Colors;
