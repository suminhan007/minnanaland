import React, { CSSProperties, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { IconUpload } from "./Icon";
import getImgWh from "get-img-wh";

type Props = {
  /**上传文件描述 */
  desc?: string;
  /**文件类型 */
  fileType?: string;
  /**上传事件 */
  onUpload?: (url: any) => void;
  children?: React.ReactNode;
  style?: CSSProperties;
  className?: string;
};
const Uploader: React.FC<Props> = ({
  desc,
  fileType,
  onUpload,
  children,
  style,
  className = "",
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [url, setUrl] = useState<string | ArrayBuffer | null>();
  const [loading, setLoading] = useState<boolean>(false);
  c
  const handleChange = (e: any, file: any) => {
    e.preventDefault();
    setLoading(true);
    if (file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      new Promise((resolve, reject) => {
        reader.onload = function (e) {
          const base64 = e.target.result;
          resolve(getImgWh(base64));
          setUrl(URL.createObjectURL(file));
          setLoading(false);
        };
        reader.onerror = function () {
          reject("上传失败");
        };
      });

      // const { w, h } = getImgWh(file);
    }
  };
  useEffect(() => {
    onUpload?.(url);
  }, [url]);
  return (
    <StyleUploadForm
      className={className}
      style={style}
      onDragOver={(e: any) => e.preventDefault()}
      onDrop={(e: any) => handleChange(e, e.dataTransfer.files[0])}
    >
      <StyleFileInput
        ref={fileInputRef}
        type="file"
        accept={fileType}
        onChange={(e: any) => {
          handleChange(e, e.target.files[0]);
        }}
      />
      {children ? (
        children
      ) : loading ? (
        <>上传中</>
      ) : (
        <>
          <div className="land-uploader-icon">
            <IconUpload />
          </div>
          <div className="land-uploader-desc">{desc}</div>
        </>
      )}
    </StyleUploadForm>
  );
};

const StyleUploadForm = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-8);
  padding: 16px;
  width: 100%;
  height: 100%;
  background-color: var(--color-bg-1);
  border: 1px dashed var(--color-border-2);
  transition: background-color var(--transition-15) linear;
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-2);
  }
  &:active {
    background-color: var(--color-bg-3);
  }
  .land-uploader-icon {
    font-size: 20px;
    color: var(--color-text-5);
  }
  .land-uploader-desc {
    font-size: var(---font-content-large);
    color: var(--color-text-5);
  }
`;

const StyleFileInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
`;

export default Uploader;
