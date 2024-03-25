import React from "react";
import Layout from "../../components/Layout";

type Props = {};

const Colors: React.FC<Props> = ({}) => {
  return <Layout className="border width-100" style={{ height: 600 }}>
  <Header logo={<p>🌷🌷🌷</p>} name={<Title title="Web Site" type="h2" />} navData={[
    { key: 1, title: "设计", clickType: ClickType.SELF },
    { key: 2, title: "组件", clickType: ClickType.SELF },
    { key: 3, title: "文档", clickType: ClickType.SELF },
  ]} actived={1} align="end" />
  <Layout>
    <Sider placement='left'><Flex bothCenter h="100%">SiderLeft</Flex></Sider>
    <Content style={{ minHeight: '464px' }}><Flex bothCenter h="100%">Content</Flex></Content>
    <Sider placement='right'><Flex bothCenter h="100%">SiderRight</Flex></Sider>
  </Layout>
  <Footer><Flex bothCenter>Footer</Flex></Footer>
</Layout>
};

export default Colors;
