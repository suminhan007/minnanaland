import { Canvas } from "@react-three/fiber";
import {
  AccumulativeShadows,
  Environment,
  MeshTransmissionMaterial,
  RandomizedLight,
  useGLTF,
} from "@react-three/drei";

export default function Banner() {
  const { scene } = useGLTF("bunny-transformed.glb");
  return (
    <Canvas style={{ height: "600px" }} camera={{ position: [6, 0, 6] }}>
      <color attach={"background"} args={["#BBBFE7"]} />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 8, -4]}
        shadow-mapSize={1024}
        castShadow
      />
      <mesh>
        <primitive object={scene} />
        {/* <MeshTransmissionMaterial
          samples={8}
          resolution={512}
          thickness={0.3}
          roughness={0.2}
          anisotropy={1}
          chromaticAberration={0.2}
        /> */}
        <MeshTransmissionMaterial
          clearcoat={1}
          thickness={0.1}
          anisotropicBlur={0.1}
          chromaticAberration={0.1}
          samples={8}
          resolution={512}
        />
      </mesh>
    </Canvas>
  );
}
