import React, { CSSProperties, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { IconUpload } from "./Icon";

type Props = {
  /**上传文件描述 */
  desc?: string;
  /**文件类型 */
  fileType?: string;
  /**上传事件 */
  onUpload?: (url: any, file: string) => void;
  children?: React.ReactNode;
  width?: string;
  height?: string;
  style?: CSSProperties;
  className?: string;
  innerClassName?: string;
};
const Uploader: React.FC<Props> = ({
  desc,
  fileType,
  onUpload,
  children,
  width = '100%',
  height = '100%',
  style,
  className = "",
  innerClassName = ""
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [url, setUrl] = useState<string | ArrayBuffer | null>();
  const [file, setFile] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: any, file: any) => {
    e.preventDefault();
    setLoading(true);
    if (file) {
      setFile(file);
      let reader = new FileReader();
      reader.readAsDataURL(file);
      setUrl(URL.createObjectURL(file));
      setLoading(false);
    }
  };
  useEffect(() => {
    onUpload?.(url, file);
  }, [url]);
  const [drag, setDrag] = useState<boolean>(false);
  return (
    <StyleUploadForm
      className={`${drag ? 'drag' : ''} ${className}`}
      style={style}
      onDragOver={(e: any) => { setDrag(true); e.preventDefault() }}
      onDrop={(e: any) => handleChange(e, e.dataTransfer.files[0])}
      onDragLeave={() => setDrag(false)}
      width={width}
      height={height}
    >
      <StyleFileInput
        ref={fileInputRef}
        type="file"
        accept={fileType}
        className={innerClassName}
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
          {(desc || drag) && <div className="land-uploader-desc">{drag ? '释放即可上传' : desc}</div>}
        </>
      )}
    </StyleUploadForm>
  );
};

const StyleUploadForm = styled.label<{
  width?: string;
  height?: string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-8);
  padding: 16px;
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: var(--color-bg-1);
  border: 1px dashed var(--color-border-2);
  transition: background-color var(--transition-15) linear;
  cursor: pointer;
  &.drag,
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
    transition: all var(--transition-15) linear;
  }
`;

const StyleFileInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
`;

export default Uploader;
