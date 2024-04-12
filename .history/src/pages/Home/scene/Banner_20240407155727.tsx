import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Banner() {
  const { scene } = useGLTF("banner.glb");
  return (
    <Canvas style={{ height: "600px" }} camera={{ position: [6, 0, 6] }}>
      <color attach={"background"} args={["#BBBFE7"]} />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 8, -4]}
        shadow-mapSize={1024}
        castShadow
      />
      <primitive object={scene} />
    </Canvas>
  );
}
