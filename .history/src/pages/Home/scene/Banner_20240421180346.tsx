import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

type Props = {};
const Banner: React.FC<Props> = ({}) => {
  return (
    <Canvas style={{ height: "100vh" }}>
      <color attach={"background"} args={["gray"]} />
      <Model />
    </Canvas>
  );
};

type ModelProps = {
  url?: string;
};
const Model: React.FC<ModelProps> = ({}) => {
  const { nodes } = useGLTF(url);
  return (
    <mesh>
      <primitive object={nodes.scene} />
    </mesh>
  );
};
export default Banner;
