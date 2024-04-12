import React, { useState } from 'react'
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import {Cli}
import { Title } from '@suminhan/land-design';

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
                <Content>
                <div>
            {/* 第一步：上传文档 */}
            <input
                type='file'
                accept='.pdf, .md, .doc, .docx'
                onChange={(e) => handleFileChange(e)}
            />
            {/* 第二步：展示分析大纲 */}
            <img src={file} alt="" />
        </div></Content>
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
