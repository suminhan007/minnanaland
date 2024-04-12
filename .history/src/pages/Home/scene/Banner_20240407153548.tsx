import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Banner() {
  const { scene } = useGLTF("banner.glb");
  return (
    <Canvas style={{ height: "600px" }} camera={{ position: [10, 10, -20] }}>
      <color attach={"background"} args={["#BBBFE7"]} />
      <ambientLight/>
      <mesh>
        <primitive object={scene} />
        <meshStandardMaterial color={"#504FE7"} />
      </mesh>
    </Canvas>
  );
}
