import { Canvas } from "@react-three/fiber";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";

export default function Banner() {
  const { scene } = useGLTF("banner.glb");
  return (
    <Canvas style={{ height: "600px" }} camera={{ position: [0, 0, 5] }}>
      <color attach={"background"} args={["#BBBFE7"]} />
      <ambientLight intensity={5} />
      <directionalLight position={[5, 8, -4]} intensity={2} />
      <directionalLight position={[-5, 10, 0]} intensity={2} />
      <mesh>
        <boxGeometry args={[2, 2, 2]}/>
        <MeshTransmissionMaterial
          clearcoat={1}
          samples={3}
          thickness={40}
          chromaticAberration={0.25}
          anisotropy={0.4}
        />
      </mesh>
    </Canvas>
  );
}
