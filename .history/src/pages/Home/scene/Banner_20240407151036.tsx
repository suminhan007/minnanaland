import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Banner() {
  const { scene } = useGLTF("banner.glb");
  return (
    <Canvas style={{ height: "600px" }}>
      <color attach={"background"} />
      <primitive object={scene} />
    </Canvas>
  );
}
