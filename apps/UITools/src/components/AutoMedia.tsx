import React, { CSSProperties, useEffect, useRef, useState } from 'react'

type AutoMediaProps = {
  type?: "img" | "video";
  url?: string;
  className?: string;
  style?: CSSProperties;
  wrapClassName?: string;
  onChange?: (w: number, h: number) => void;
};
const AutoMedia: React.FC<AutoMediaProps> = ({
  type = "img",
  url,
  className,
  style,
  wrapClassName,
  onChange,
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [size, setSize] = useState<{ w: number; h: number; ratio: number }>({
    w: 200,
    h: 200,
    ratio: 1,
  });
  useEffect(() => {
    if (imgRef.current) {
      const img = imgRef.current.getBoundingClientRect();
      setSize({ w: img.width, h: img.height, ratio: img.width / img.height });
    }
    if (videoRef.current) {
      const video = videoRef.current.getBoundingClientRect();
      setSize({
        w: video.width,
        h: video.height,
        ratio: video.width / video.height,
      });
    }
    onChange?.(size.w, size.h);
  });
  const [ratio, setRatio] = useState<"h" | "v" | "s">("s");
  useEffect(() => {
    if (!wrapRef.current) return;
    const callback: ResizeObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const { width, height } = entry.contentRect;
        if (width / height > size.ratio) {
          setRatio("h");
        } else if (width / height < size.ratio) {
          setRatio("v");
        } else {
          setRatio("s");
        }
      });
    };
    const observer = new ResizeObserver(callback);
    observer.observe(wrapRef.current);
    return () => observer.disconnect();
  });
  return (
    <div
      ref={wrapRef}
      className={`flex items-center justify-center width-100 height-100 ${wrapClassName}`}
    >
      {type === "img" ? (
        <img
          ref={imgRef}
          src={url}
          className={`${ratio === "h" ? "height-100" : "width-100"
            } ${className}`}
          style={style}
        />
      ) : (
        <video
          src={url}
          ref={videoRef}
          preload="auto"
          muted
          autoPlay
          disablePictureInPicture
          x-webkit-airplay="deny"
          className={`${ratio === "h" ? "height-100" : "width-100"
            } ${className}`}
          style={style}
        />
      )}
    </div>
  );
};
export default AutoMedia;
