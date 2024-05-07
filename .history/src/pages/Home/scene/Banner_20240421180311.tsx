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

const Model:React.FC<(url?: string) {
  const { nodes } = useGLTF("untitled.glb");
  return (
    <mesh>
      <primitive object={nodes.scene} />
    </mesh>
  );
}
export default Banner;
