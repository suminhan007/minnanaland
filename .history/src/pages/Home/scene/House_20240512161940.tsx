import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

type Props = {};
const House: React.FC<Props> = ({}) => {
  return (
    <Canvas style={{ height: "100vh" }}>
      <color attach={"background"} args={["gray"]} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};

function Model() {
  return <primitive object={scene} dispose={null} />;
}
export default House;
