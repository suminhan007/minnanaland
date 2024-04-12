import React, { useState } from 'react'

type Props = {

}
const PPTEditor: React.FC<Props> = ({

}) => {
    const [file, setFIle] = useState<any>();
    const handleFileChange = (e: any) => {
        console.log(e);
        setFIle(e.target);
    }
    return (
        <Layout>
      <Header
        logo={<p>❤️💛🩵💜</p>}
        name={<Title title="Colors" type="h2" />}
        align="end"
        // applications={<Application />}
        menuProps={{
          data: [
            { key: 1, title: "ColorPicker", clickType: ClickType.SELF },
            // { key: 2, title: "AI 配色", clickType: ClickType.SELF },
          ],
          actived: activedNav,
          handleChangeTab: (key, type) =>
            type === ClickType.SELF && setActivedNav(key),
        }}
      />
      <Layout>
        <Content>{activedNav === 1 && <ImgColorPicker />}</Content>
      </Layout>
      <Footer>
        <Flex bothCenter className="width-100 color-gray-4">
          @suminhan
        </Flex>
      </Footer>
    </Layout>
    )
}
export default PPTEditor;
