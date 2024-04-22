import React, { useEffect, useRef } from "react";

type Props = {};
const Banner: React.FC<Props> = ({}) => {
  const homeBannerRef = useRef();
  useEffect(() => {
    if (!homeBannerRef.current) return;
  });
  return <div ref={homeBannerRef}>Banner</div>;
};
export default Banner;
