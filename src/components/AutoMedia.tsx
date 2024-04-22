import React, { useEffect, useRef, useState } from 'react'

type AutoMediaProps = {
  url?: string;
}
const AutoMedia: React.FC<AutoMediaProps> = ({
  url
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [size, setSize] = useState<{ w: number, h: number, ratio: number }>({ w: 200, h: 200, ratio: 1 });
  useEffect(() => {
    if (imgRef.current) {
      const img = imgRef.current.getBoundingClientRect();
      setSize({ w: img.width, h: img.height, ratio: img.width / img.height });
    }
  }, [url]);
  const [ratio, setRatio] = useState<'h' | 'v' | 's'>('s');
  useEffect(() => {
    if (!wrapRef.current) return;
    const callback: ResizeObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const { width, height } = entry.contentRect;
        if (width / height > size.ratio) {
          setRatio('h')
        } else if (width / height < size.ratio) {
          setRatio('v')
        } else {
          setRatio('s')
        }
      });
    };
    const observer = new ResizeObserver(callback);
    observer.observe(wrapRef.current);
    return () => observer.disconnect();
  })
  return (
    <div ref={wrapRef} className='flex items-center justify-center width-100 height-100'>
      <img ref={imgRef} src={url} className={`radius-8 ${ratio === 'h' ? 'height-100' : 'width-100'}`} />
    </div>
  )
}
export default AutoMedia;
