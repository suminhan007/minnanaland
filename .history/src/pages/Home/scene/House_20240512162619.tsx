import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

type Props = {};
const House: React.FC<Props> = ({}) => {
  return (
    <Canvas style={{ height: "100vh" }}>
      <color attach={"background"} args={["gray"]} />
      <ambientLight />
      <spotLight
        castShadow
        receiveShadow
        position={[10, 10, 10]}
        intensity={100}
      />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};

function Model() {
  const { nodes } = useGLTF("f1.glb");
  console.log(nodes);

  return (
    <group>
      <mesh receiveShadow castShadow geometry={nodes.Cube.geometry} material={nodes.cu}></mesh>
    </group>
  );
}
export default House;
