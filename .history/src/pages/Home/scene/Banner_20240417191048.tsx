import React, { useEffect, useRef } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import {
  AccumulativeShadows,
  Environment,
  RandomizedLight,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
type Props = {};
const Banner: React.FC<Props> = ({}) => {
  const { nodes, materials, animations } = useGLTF("banner.glb");
  console.log(animations);

  const panelRef = useRef();
  const { actions } = useAnimations(animations);
  console.log(ref, actions);
  useEffect(() => {
    actions["mpver"].play();
  }, [actions]);
  return (
    <Canvas
      style={{ height: "100vh" }}
      shadows
      camera={{ position: [7.8, 5, 10], fov: 17.5, near: 1, far: 20 }}
    >
      <color attach="background" args={["#BBBFE7"]} />
      <Environment preset="forest" blur={1} />
      {/* light1 */}
      <directionalLight
        receiveShadow
        castShadow
        position={[4, 1, -6]}
        color="#6CA4FF"
        intensity={1.57}
        shadow-mapSize={1024}
      />
      {/* light2 */}
      <directionalLight
        receiveShadow
        castShadow
        position={[2, -4, 0]}
        color="#8D78FF"
        intensity={2.35}
        shadow-mapSize={1024}
      />
      {/* light3 */}
      <directionalLight
        receiveShadow
        castShadow
        position={[-10, 4, 10]}
        color="#6CA4FF"
        intensity={1.57}
        shadow-mapSize={1024}
      />
      {/* light4 */}
      <directionalLight
        receiveShadow
        castShadow
        position={[0, 4, -2]}
        color="#6687FF"
        intensity={3.9}
        shadow-mapSize={1024}
      />
      {/* light5 */}
      <directionalLight
        receiveShadow
        castShadow
        position={[0, 1, -4]}
        color="#ffffff"
        intensity={0.15}
        shadow-mapSize={1024}
      />
      {/* light6 */}
      <directionalLight
        receiveShadow
        castShadow
        position={[2, 1, -4]}
        color="#ffffff"
        intensity={0.39}
        shadow-mapSize={1024}
      />
      {/* light7 */}
      <directionalLight
        receiveShadow
        castShadow
        position={[0, 0, 4]}
        color="#ffffff"
        intensity={0.15}
        shadow-mapSize={1024}
      />
      <group rotation={[0, 0, 0]}>
        <mesh
          ref={panelRef}
          receiveShadow
          position={[0, 0, -2.8]}
          geometry={nodes.panelr.geometry}
          material={materials["blue_glass"]}
        />
        {/* <mesh
          position={[0, -0.5, 1]}
          geometry={nodes.panell.geometry}
          material={materials["blue_glass"]}
        /> */}
        <AccumulativeShadows
          temporal
          frames={200}
          color="purple"
          colorBlend={0.5}
          opacity={1}
          scale={10}
          alphaTest={0.85}
        >
          <RandomizedLight
            amount={8}
            radius={5}
            ambient={0.5}
            position={[5, 3, 2]}
            bias={0.001}
          />
        </AccumulativeShadows>
      </group>
      {/* <group>
                <mesh position={[0, 0, -2]} geometry={nodes.boxr.geometry} />
                <mesh position={[0, -0.5, 2]} geometry={nodes.boxl.geometry} />
            </group> */}
      {/* 辅助 */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
      </mesh>
      <mesh position={[2, -6, -2]}>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
      </mesh>
    </Canvas>
  );
};

export default Banner;
