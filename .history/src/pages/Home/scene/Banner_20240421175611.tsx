import React, { useEffect } from "react";

type Props = {};
const Banner: React.FC<Props> = ({ }) => {
    const homeBannerRef = useRef();
    useEffect(() => {
        if(!homeBannerRef.current)
    })
  return <div id={homeBannerRef}>Banner</div>;
};
export default Banner;
