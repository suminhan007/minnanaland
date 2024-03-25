import React from "react";
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
  return (
    <StyledLayout className="border width-100">
      <Header
        logo={<p>🌷🌷🌷</p>}
        name={<Title title="Web Site" type="h2" />}
        navData={[
          { key: 1, title: "设计", clickType: ClickType.SELF },
          { key: 2, title: "组件", clickType: ClickType.SELF },
          { key: 3, title: "文档", clickType: ClickType.SELF },
        ]}
        actived={1}
        align="end"
      />
      <Layout>
        <Sider placement="left">
          <Flex bothCenter h="100%">
            SiderLeft
          </Flex>
        </Sider>
        <Content style={{ minHeight: "464px" }}>
          <Flex bothCenter h="100%">
            Content
          </Flex>
        </Content>
        <Sider placement="right">
          <Flex bothCenter h="100%">
            SiderRight
          </Flex>
        </Sider>
      </Layout>
      <Footer>
        <Flex bothCenter>Footer</Flex>
      </Footer>
    </StyledLayout>
  );
};

const StyledLayout = styled(Layout)`
  height: 100vh;
`

export default Colors;
