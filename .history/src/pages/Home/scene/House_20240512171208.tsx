import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

type Props = {};
const House: React.FC<Props> = ({}) => {
  return (
    <Canvas
      style={{ background: "transparent", width: 600, height: 600 }}
      camera={{ position: [2, 0, 5] }}
    >
      <ambientLight intensity={2} />
      <directionalLight
        castShadow
        receiveShadow
        color={"lightyellow"}
        position={[10, 10, 10]}
        intensity={1}
      />
      <group scale={0.2} receiveShadow castShadow>
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
