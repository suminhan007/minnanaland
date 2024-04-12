import React, { useState } from 'react'
import LandInput from "../../components/Input";
import { IconClear } from "../../components/Icon";
// import {/}
type Props = {};
const ComponentPicker: React.FC<Props> = ({}) => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="StyleWrap">
      <div className="StyleContentWrap flex column items-center">
        <div className="flex gap-12" style={{ width: "480px", height: "40px" }}>
          <LandInput
            placeholder="请输入你想探索的网站"
            value={inputValue}
            onChange={(val) => setInputValue(val)}
            suffix={
              <IconClear
                size={22}
                fill="#999"
                className="pointer"
                onClick={() => setInputValue("")}
              />
            }
          />
        </div>
        <StyleIframe
          className="StyleIframe mt-24 width-100"
          ref={WebsiteRef}
          src={src}
        />
      </div>
      {/* <Link>链接</Link> */}
    </div>
  );
};

export default ComponentPicker;
