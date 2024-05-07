import React, { useEffect, useRef } from "react";

type Props = {};
const Banner: React.FC<Props> = ({}) => {
  const homeBannerRef = useRef();
  useEffect(() => {
    if (!homeBannerRef.current) return;
  });
    return <Canvas>
        <mesh>
            
      </mesh>
  </Canvas>;
};
export default Banner;
