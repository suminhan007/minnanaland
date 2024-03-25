import React, { CSSProperties, useEffect, useRef, useState } from "react";
import styled from "styled-components";

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

  const handleChange = (e: any, file: any) => {
    e.preventDefault();
    if (file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      setUrl(URL.createObjectURL(file));
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
      ) : (
        <>
          <div className="land-fs-20 color-gray-4">+</div>
          <div className="color-gray-4 fs-16">{desc}</div>
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
  border-radius: var(--radius-8);
  background-color: var(--color-bg-1);
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-2);
  }
  &:active {
    background-color: var(--color-bg-3);
  }
`;

const StyleFileInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
`;

export default Uploader;
