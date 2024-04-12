import React, { useState } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Content from "../../components/Content";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
import { ClickType } from "../../components/Menu";
import Flex from "../../components/Flex";

type Props = {};

const Crochet: React.FC<Props> = ({}) => {
  const [activedNav, setActivedNav] = useState<number>(1);
  return (
    <Layout>
      <Header
        logo={<p>😍😍😍😍</p>}
        name={<Title title="Crochet" type="h2" />}
        align="end"
        menuProps={{
          data: [{ key: 1, title: "配色", clickType: ClickType.SELF }],
          actived: activedNav,
          handleChangeTab: (key, type) =>
            type === ClickType.SELF && setActivedNav(key),
        }}
      />
      <Layout>
        <Content>Crochet</Content>
      </Layout>
      <Footer>
        <Flex bothCenter className="width-100 color-gray-4">
          @suminhan
        </Flex>
      </Footer>
    </Layout>
  );
};

export default Crochet;
