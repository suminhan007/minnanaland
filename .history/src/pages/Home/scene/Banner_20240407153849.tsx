import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Banner() {
  const { scene } = useGLTF("banner.glb");
  return (
    <Canvas style={{ height: "600px" }} camera={{ position: [10, 0, 20] }}>
      <color attach={"background"} args={["#BBBFE7"]} />
      <ambientLight intensity={0.1} />
      <mesh>
        <primitive object={scene} />
        <meshStandardMaterial
          color={"#504FE7"}
          roughness={0.244}
          metalness={1}
        />
      </mesh>
    </Canvas>
  );
}
