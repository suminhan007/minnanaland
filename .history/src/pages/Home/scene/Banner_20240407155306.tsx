import { Canvas } from "@react-three/fiber";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";

export default function Banner() {
  const { scene } = useGLTF("banner.glb");
  return (
    <Canvas style={{ height: "600px" }} camera={{ position: [6, 0, 6] }}>
      <color attach={"background"} args={["#BBBFE7"]} />
      <ambientLight intensity={0.1} />
      <mesh>
        <primitive object={scene} />
        <MeshTransmissionMaterial
          samples={8}
          resolution={512}
          thickness={0.3}
          roughness={0.2}
          anisotropy={1}
          chromaticAberration={0.2}
        />
      </mesh>
    </Canvas>
  );
}
