import React from "react";
import { Canvas } from "@react-three/fiber";

type Props = {};
const Banner: React.FC<Props> = ({}) => {
  return (
    <Canvas style={{ height: "100vh" }}>
      <mesh></mesh>
    </Canvas>
  );
};
export default Banner;
