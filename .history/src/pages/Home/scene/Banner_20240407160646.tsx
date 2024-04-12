import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Banner() {
  const { scene } = useGLTF("banner.glb");
  return (
    <Canvas style={{ height: "600px" }} camera={{ position: [6, 0, 6] }}>
      <color attach={"background"} args={["#BBBFE7"]} />
      <ambientLight intensity={5} />
      <directionalLight
        position={[5, 8, -4]}
        shadow-mapSize={1024}
        castShadow
      />
      <primitive object={scene} />
      <MeshTransmissionMaterial clearcoat={1} samples={3} thickness={40} chromaticAberration={0.25} anisotropy={0.4}>
            {/** Render a portalled scene into the "buffer" attribute of transmission material, which is a texture.
                 Since we're moving the contents with the letter shape in world space we take the standard event compute. */}
            <RenderTexture attach="buffer" stencilBuffer={stencilBuffer} width={512} height={512} compute={events.compute}>
              {/** Everything in here is self-contained, behaves like a regular canvas, but we're *in* the texture */}
              <color attach="background" args={['#4899c9']} />
              <group ref={contents} matrixAutoUpdate={false}>
                {/** Drop the children in here, this is where the sandboxes land. */}
                {children}
              </group>
              <Preload all />
            </RenderTexture>
          </MeshTransmissionMaterial>
    </Canvas>
  );
}
