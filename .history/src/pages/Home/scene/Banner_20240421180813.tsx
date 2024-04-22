import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function Model({}) {
  const { nodes } = useGLTF("banner.glb");
  //   useGLTF.preload("banner.glb");
  return <primitive object={nodes.scene} />;
}

type Props = {};
const Banner: React.FC<Props> = ({}) => {
  return (
    <Canvas style={{ height: "100vh" }}>
      <color attach={"background"} args={["gray"]} />
      <Model />
    </Canvas>
  );
};
export default Banner;
