import React from "react";
import { Canvas } from "@react-three/fiber";

type Props = {};
const Banner: React.FC<Props> = ({}) => {
  return (
    <Canvas style={{ height: "100vh" }}>
      <color attach={"background"} args={["gray"]} />
      <mesh></mesh>
    </Canvas>
  );
};

function Model(url: string) {
    const 
}
export default Banner;
