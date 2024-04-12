import { Canvas } from "@react-three/fiber";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";

export default function Banner() {
  const { scene } = useGLTF("banner.glb");
  return (
    <Canvas style={{ height: "600px" }} camera={{ position: [6, 0, 6] }}>
      <color attach={"background"} args={["#BBBFE7"]} />
      <ambientLight intensity={5} />
      <directionalLight position={[5, 8, -4]} />
      <boxGeometry a/>
      <MeshTransmissionMaterial
        clearcoat={1}
        samples={3}
        thickness={40}
        chromaticAberration={0.25}
        anisotropy={0.4}
      />
    </Canvas>
  );
}
