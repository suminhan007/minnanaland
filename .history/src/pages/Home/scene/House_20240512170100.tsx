import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

type Props = {};
const House: React.FC<Props> = ({}) => {
  return (
    <Canvas style={{ height: "100vh" }} camera={{ position: [2, 10, 0] }}>
      <color attach={"background"} args={["gray"]} />
      <ambientLight />
      <spotLight
        castShadow
        receiveShadow
        position={[10, 10, 10]}
        intensity={100}
      />
      <group scale={0.2}>
        <Model />
      </group>
      <OrbitControls />
    </Canvas>
  );
};

function Model({}) {
  const { scene } = useGLTF("outlook.glb");

  return <primitive object={scene} />;
}
export default House;
