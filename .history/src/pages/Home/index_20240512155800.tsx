import React from 'react'
import Banner from "./scene/Banner";
type Props = {};
const Home: React.FC<Props> = ({}) => {
  return (
    <div style={{ height: "100vh" }}>
      <Header
        logo={<p>💻💻💻</p>}
        name={<Title title="UITest" type="h2" />}
        align="end"
        applications={<Application />}
        menuProps={{
          data: [
            { key: 1, title: "可用性测试", clickType: ClickType.SELF },
            { key: 2, title: "动画文件测试", clickType: ClickType.SELF },
          ],
          actived: activedNav,
          handleChangeTab: (key, type) =>
            type === ClickType.SELF && setActivedNav(key),
        }}
      />
      <Banner />
    </div>
  );
};

export default Home;