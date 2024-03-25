import React, { useState } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Content from "../../components/Content";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
import { ClickType } from "../../components/Menu";
import Button from "../../components/Button";
import ImgColorPicker from "./ImgColorPicker";

type Props = {};

const Colors: React.FC<Props> = ({}) => {
  const [activedNav, setActivedNav] = useState<number>(1);
  return (
    <Layout className="width-100vw">
      <Header
        logo={<p>🌈🌈🌈</p>}
        name={<Title title="Colors" type="h2" />}
        align="end"
        applications={<>00</>}
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
        <Content>{activedNav === 1 && <ImgColorPicker />}</Content>
      </Layout>
      <Footer>@suminhan</Footer>
    </Layout>
  );
};

export default Colors;
