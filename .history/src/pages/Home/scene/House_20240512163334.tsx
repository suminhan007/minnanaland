import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ url: string }) {
  const { nodes } = useGLTF(url);
  console.log(nodes);

  return (
    <group>
      {Object.keys(nodes).map((key) => {
        const node = nodes[key];
        if (node.isMesh) {
          return (
            <mesh key={key} geometry={node.geometry} material={node.material} />
          );
        }
        return null;
      })}
    </group>
  );
}

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
      <Model url="f1.glb" />
      <OrbitControls />
    </Canvas>
  );
};

export default House;
