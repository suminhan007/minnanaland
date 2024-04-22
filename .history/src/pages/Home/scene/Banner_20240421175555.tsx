import React from "react";

type Props = {};
const Banner: React.FC<Props> = ({ }) => {
    const homeBannerRef = useRef();
    
  return <div id={homeBannerRef}>Banner</div>;
};
export default Banner;
