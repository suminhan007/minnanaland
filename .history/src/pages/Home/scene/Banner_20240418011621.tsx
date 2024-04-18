import React, { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Environment,
  MeshTransmissionMaterial,
  OrbitControls,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { Base, Geometry, Intersection } from "@react-three/csg";
type Props = {};
const Banner: React.FC<Props> = ({}) => {
  return (
    <Canvas
      style={{ height: "100vh" }}
      shadows
      gl={{ antialias: false }}
          //   camera={{ position: [7.8, 5, 10], fov: 17.5, near: 1, far: 20 }}
          camera={{position:[-0.7196843028068542,-0.6803564429283142, 1.4964091777801514]}}
    >
      <color attach="background" args={["#BBBFE7"]} />
      <Environment
        preset="forest"
        blur={1}
        files="/night.hdr"
        ground={{ scale: 100 }}
      />
      {/* light1 */}
      <directionalLight
        castShadow
        position={[4, 1, -6]}
        color="#6CA4FF"
        intensity={1.57}
      />
      {/* light2 */}
      <directionalLight
        castShadow
        position={[2, -4, 0]}
        color="#8D78FF"
        intensity={2.35}
      />
      {/* light3 */}
      <directionalLight
        castShadow
        position={[-10, 4, 10]}
        color="#6CA4FF"
        intensity={1.57}
      />
      {/* light4 */}
      <directionalLight
        castShadow
        position={[0, 4, -2]}
        color="#6687FF"
        intensity={3.9}
      />
      {/* light5 */}
      <directionalLight
        castShadow
        position={[0, 1, -4]}
        color="#ffffff"
        intensity={0.15}
      />
      {/* light6 */}
      <directionalLight
        castShadow
        position={[2, 1, -4]}
        color="#ffffff"
        intensity={0.39}
      />
      {/* light7 */}
      <directionalLight
        castShadow
        position={[0, 0, 4]}
        color="#ffffff"
        intensity={0.15}
          />
          
      <Model />
      <OrbitControls />
      {/* <group>
                <mesh position={[0, 0, -2]} geometry={nodes.boxr.geometry} />
                <mesh position={[0, -0.5, 2]} geometry={nodes.boxl.geometry} />
            </group> */}
      {/* 辅助 */}
      {/* <mesh position={[0, 0, 0]}>
                <boxGeometry args={[0.2, 0.2, 0.2]} />
            </mesh>
            <mesh position={[2, -6, -2]}>
                <boxGeometry args={[0.2, 0.2, 0.2]} />
            </mesh> */}
    </Canvas>
  );
};

type ModelProps = {};
const Model: React.FC<ModelProps> = ({}) => {
  const { nodes, animations, cameras } = useGLTF("banner_booleaned.glb");
  console.log(nodes);

  const panel1Ref = useRef();
  const panel2Ref = useRef();
  const actions1 = useAnimations(animations, panel1Ref).actions;
  useEffect(() => {
    actions1["mover"].play();
  });
  const actions2 = useAnimations(animations, panel2Ref).actions;
  useEffect(() => {
    actions2["movel"].play();
  });
  return (
    <group>
      <group ref={panel1Ref}>
        <primitive object={nodes.panelr} dispose={null} />
        <MeshTransmissionMaterial
          clearcoat={1}
          thickness={0.1}
          anisotropicBlur={0.1}
          chromaticAberration={0.1}
          samples={8}
          resolution={512}
        />

        {/* <primitive object={nodes.boxr} /> */}
      </group>
      <group ref={panel2Ref}>
        <primitive object={nodes.panell} />
        {/* <primitive object={nodes.boxl} /> */}
      </group>
    </group>
  );
};


{/* <mesh
          position={[0, -0.5, 1]}
          geometry={nodes.panell.geometry}
          material={materials["blue_glass"]}
        /> */}
{/* <mesh
          position={[0, -0.5, 1]}
          geometry={nodes.panell.geometry}
          material={materials["blue_glass"]}
        /> */}
export default Banner;
