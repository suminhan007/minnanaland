import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

type Props = {};
const House: React.FC<Props> = ({}) => {
  return (
    <Canvas
      style={{ background: "transparent", width: "100vw", height: "100vh" }}
      camera={{ position: [0, 0.5, 20] }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight
        castShadow
        receiveShadow
        color={"lightyellow"}
        position={[10, 10, 10]}
        intensity={1}
      />
      <pointLight color="#FFD336" position={[-2, 4, 10]} intensity={100} />
      <pointLight color="#FFD336" position={[0, 4, -10]} intensity={200} />
      <pointLight color="#4EF4FF" position={[12, 6, 0]} intensity={200} />
      <pointLight color="white" position={[1, -1, 5.5]} intensity={20} />
      <group scale={1} receiveShadow castShadow>
        <Model />
      </group>
      <OrbitControls />
    </Canvas>
  );
};

function Model(url:string) {
  const { scene } = useGLTF("hidden.glb");

  return <primitive object={scene} />;
}
export default House;
