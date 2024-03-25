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
import Button from "../../components/Button";

type Props = {};

const Colors: React.FC<Props> = ({}) => {
  const [activedNav, setActivedNav] = useState<number>(1);
  return (
    <Layout className="width-100vw">
      <Header
        globalMenu={<?xml version="1.0" encoding="UTF-8"?><svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z" fill="#202020"/><path d="M24 14C26.2091 14 28 12.2091 28 10C28 7.79086 26.2091 6 24 6C21.7909 6 20 7.79086 20 10C20 12.2091 21.7909 14 24 14Z" fill="#202020"/><path d="M38 14C40.2091 14 42 12.2091 42 10C42 7.79086 40.2091 6 38 6C35.7909 6 34 7.79086 34 10C34 12.2091 35.7909 14 38 14Z" fill="#202020"/><path d="M10 28C12.2091 28 14 26.2091 14 24C14 21.7909 12.2091 20 10 20C7.79086 20 6 21.7909 6 24C6 26.2091 7.79086 28 10 28Z" fill="#202020"/><path d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z" fill="#202020"/><path d="M38 28C40.2091 28 42 26.2091 42 24C42 21.7909 40.2091 20 38 20C35.7909 20 34 21.7909 34 24C34 26.2091 35.7909 28 38 28Z" fill="#202020"/><path d="M10 42C12.2091 42 14 40.2091 14 38C14 35.7909 12.2091 34 10 34C7.79086 34 6 35.7909 6 38C6 40.2091 7.79086 42 10 42Z" fill="#202020"/><path d="M24 42C26.2091 42 28 40.2091 28 38C28 35.7909 26.2091 34 24 34C21.7909 34 20 35.7909 20 38C20 40.2091 21.7909 42 24 42Z" fill="#202020"/><path d="M38 42C40.2091 42 42 40.2091 42 38C42 35.7909 40.2091 34 38 34C35.7909 34 34 35.7909 34 38C34 40.2091 35.7909 42 38 42Z" fill="#202020"/></svg>}
        logo={<p>❤️ 🧡 💛 💚 🩵 💙 💜</p>}
        name={<Title title="Colors" type="h2" />}
        align="end"
        menuProps={{
          data: [
            { key: 1, title: "Color Picker", clickType: ClickType.SELF },
            { key: 2, title: "AI 配色", clickType: ClickType.SELF },
          ],
          actived: activedNav,
          handleChangeTab: (key, type) =>
            type === ClickType.SELF && setActivedNav(key),
        }}
        rightComponent={
          <>
            <Button text="登录" />
            <Button text="注册" type="background" status="primary" />
          </>
        }
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
