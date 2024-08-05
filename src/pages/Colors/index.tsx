import React, { useState } from "react";
import { ClickType } from "../../components/Menu";
import ImgColorPicker from "./ImgColorPicker";
import ColorMatch from "./ColorMatch";
import ColorLib from "./ColorLib";
import ColorChange from "./ColorChange";
import Application from "../components/Application";
import { LandHeader, LandLayout, Title } from "@suminhan/land-design";
import Content from "../../components/Content";

type Props = {};

const Colors: React.FC<Props> = ({ }) => {
  const [activedNav, setActivedNav] = useState<number
    | string>(1);
  return (
    <LandLayout>
      <LandHeader
        logo={<p>❤️💛🩵💜</p>}
        name={<Title title="Colors" type="h2" />}
        align="end"
        applications={<Application />}
        menuProps={{
          data: [
            { key: 1, title: "图片取色", clickType: ClickType.SELF },
            { key: 2, title: "自动配色", clickType: ClickType.SELF },
            { key: 3, title: "图片换色", clickType: ClickType.SELF },
            // { key: 4, title: "颜色库", clickType: ClickType.SELF },
          ],
          active: activedNav,
          onChange: (item) => setActivedNav(item.key)
        }}
      />
      <LandLayout>
        <Content>
          {activedNav === 1 && <ImgColorPicker />}
          {activedNav === 2 && <ColorMatch />}
          {activedNav === 3 && <ColorChange />}
          {activedNav === 4 && <ColorLib />}
        </Content>
      </LandLayout>
    </LandLayout>
  );
};

export default Colors;
