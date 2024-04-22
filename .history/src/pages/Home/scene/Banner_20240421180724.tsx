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

function Model({}) {
  const { nodes } = useGLTF("./banner.glb");
  useGLTF.preload("/banner.gltf");
  return <primitive object={nodes.scene} />;
}
export default Banner;
