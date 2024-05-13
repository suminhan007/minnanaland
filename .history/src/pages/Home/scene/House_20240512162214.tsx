import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

type Props = {};
const House: React.FC<Props> = ({}) => {
  return (
    <Canvas style={{ height: "100vh" }}>
      <color attach={"background"} args={["gray"]} />
      <ambientLight />
      <spotLight position={[10, 10, 10]} intensity={100} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};

function Model() {
  const { scene } = useGLTF("f1.glb");
  return <mesh></mesh>;
}
export default House;
