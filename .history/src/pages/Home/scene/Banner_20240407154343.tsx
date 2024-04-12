import { Canvas } from "@react-three/fiber";
import { Environment, useGLTF, useTexture } from "@react-three/drei";

export default function Banner() {
  const { nodes, materials } = useGLTF("banner.glb");
  log
  const envMap = useTexture('banner_hdr.png');
  return (
    <Canvas style={{ height: "600px" }} camera={{ position: [6, 0, 6] }}>
      <color attach={"background"} args={["#BBBFE7"]} />
      <ambientLight intensity={0.1} />
      <primitive object={scene} />
      <group>
        <mesh geometry={nodes.scene}></mesh>
      </group>
      <Environment environmentMap={envMap} />
    </Canvas>
  );
}
