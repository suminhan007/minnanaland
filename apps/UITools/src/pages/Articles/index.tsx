import React, { useState } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Content from "../../components/Content";
import Title from "../../components/Title";
import Menu, { ClickType } from "../../components/Menu";
import Flex from "../../components/Flex";
import Button from "../../components/Button";
import { IconArrow } from "../../components/Icon";
import Input from "../../components/Input";
import styled from "styled-components";
import CheckBar from "../../components/CheckBar";
type Props = {};

const Articles: React.FC<Props> = ({ }) => {
  const [activedNav, setActivedNav] = useState<number>(1);
  const [spread, setSpread] = useState<boolean>(true);
  return (
    <Layout>
      <Header
        logo={<p>📒📒📒</p>}
        name={<Title title="Articles" type="h2" />}
        align="end"
      />
      <Layout>
        <Content>
          <Flex h="100%">
            <Flex column gap={16} className="py-24 height-100 border-right transition" style={{ width: spread ? "248px" : "0px" }}>
              {/* 搜索 */}
              <div className={`width-100 overflow-hidden transition ${spread ? 'px-24' : ''}`}><Input placeholder="输入文章关键字" /></div>
              {/* 标签 */}
              <div className="px-24 width-100">
                <CheckBar
                  checked={1}
                  data={[
                    { value: 1, text: 'CSS' },
                    { value: 2, text: '颜色' }
                  ]}
                />
              </div>
              {/* 导航 */}
              <StyleLeftMenu className="relative flex-1 width-100">
                <Menu
                  data={[
                    { key: 1, title: "Know about web colors", clickType: ClickType.SELF },
                  ]}
                  actived={activedNav}
                  direction='column'
                  border={false}
                  handleChangeTab={(key, type) => type === ClickType.SELF && setActivedNav(key)}
                />
                <StyleLeftMenuToggle className={`absolute left-100 top-50 ${spread ? '-translate-50 opacity-0 events-none' : '-translateY-50'}`} spread={spread}>
                  <Button icon={<IconArrow style={{ transform: 'rotate(-90deg)' }} />} onClick={() => setSpread(!spread)} />
                </StyleLeftMenuToggle>
              </StyleLeftMenu>
            </Flex>
            <div className="flex-1 p-24">
              {activedNav === 1 && <>Know about web colors</>}
            </div>
          </Flex>
        </Content>
      </Layout>
    </Layout>
  );
};
const StyleLeftMenuToggle = styled.div<{
  spread?: boolean;
}>`
  transition: opacity var(--transition-15) linear;
  .land-button{
    border-top-left-radius: ${props => props.spread ? '4px' : '0px'};
    border-bottom-left-radius: ${props => props.spread ? '4px' : '0px'};
  }
`
const StyleLeftMenu = styled.div`
  &:hover{
    ${StyleLeftMenuToggle}{
      opacity: 1;
      pointer-events: all;
    }
  }
`
export default Articles;
