import React from "react";
import styled from "styled-components";
import {
  LandLayout,
  LandHeader,
  LandContent,
  LandFooter,
} from "@suminhan/land-design";

type Props = {};
const Home: React.FC<Props> = ({}) => {
  return (
    <LandLayout className="border width-100" style={{ height: 600 }}>
    <Header logo={<p>🌷🌷🌷</p>} name={<Title title="Web Site" type="h2" />} navData={[
        { key: 1, title: "设计", clickType: ClickType.SELF },
        { key: 2, title: "组件", clickType: ClickType.SELF },
        { key: 3, title: "文档", clickType: ClickType.SELF },
    ]} actived={1} align="end" />
    <LandLayout>
        <Sider placement='left'><Flex bothCenter h="100%">SiderLeft</Flex></Sider>
        <Content style={{ minHeight: '464px' }}><Flex bothCenter h="100%">Content</Flex></Content>
        <Sider placement='right'><Flex bothCenter h="100%">SiderRight</Flex></Sider>
    </LandLayout>
    <Footer><Flex bothCenter>Footer</Flex></Footer>
    </LandLayout>
  );
};

export const StyleWrap = styled.div`
  width: 100vw;
`;
export const StyleContentWrap = styled.div`
  margin: 64px auto 0;
  width: calc(100vw - 48px);
  max-width: 960px;
`;
export default Home;
