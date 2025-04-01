import { useEffect, useRef } from "react";
import Loading from "./Loading.tsx";

type Props = {
  onPreLoad?: () => void;
  isEnd?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
const AgentScrollLayout: React.FC<Props> = ({
  onPreLoad,
  isEnd,
  children,
  className = '',
  style,
}) => {
  const loadIndicatorRef = useRef(null);
  const options = {
    root: null, // 默认视口
    rootMargin: '0px',
    threshold: 1.0 // 完全可见时触发
  }
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // 当元素完全进入视口时触发（entry.isIntersecting）
      if (entry.isIntersecting) {
        onPreLoad?.();
        observer.disconnect(); // 触发后自动停止观察
      }
    }, options);

    if (loadIndicatorRef.current) {
      observer.observe(loadIndicatorRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return <div
    className={`ckt-agent-scroll-layout flex-1 height-1 width-100 py-24 ${className}`}
    style={{ overflow: 'auto', ...style }}
  >
    {!isEnd && <div ref={loadIndicatorRef} className="flex items-center mx-auto fs-14"
      style={{ width: 'fit-content', height: '64px' }} onClick={onPreLoad}>
      <Loading />
    </div>}
    <div className={' flex column gap-24 height-100'}>{children}</div>
  </div>
}
export default AgentScrollLayout;