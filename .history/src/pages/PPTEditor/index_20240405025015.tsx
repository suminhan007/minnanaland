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
        
        <div>
            {/* 第一步：上传文档 */}
            <input
                type='file'
                accept='.pdf, .md, .doc, .docx'
                onChange={(e) => handleFileChange(e)}
            />
            {/* 第二步：展示分析大纲 */}
            <img src={file} alt="" />
        </div>
    )
}
export default PPTEditor;
