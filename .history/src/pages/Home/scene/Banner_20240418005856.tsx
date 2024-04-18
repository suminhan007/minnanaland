import React, { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import {
    Environment,
    OrbitControls,
    useAnimations,
    useGLTF,
} from "@react-three/drei";
import { Base, Geometry, Intersection } from '@react-three/csg'
type Props = {};
const Banner: React.FC<Props> = ({ }) => {
    return (
      <Canvas
        style={{ height: "100vh" }}
        shadows
        camera={{ position: [7.8, 5, 10], fov: 17.5, near: 1, far: 20 }}
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
const Model: React.FC<ModelProps> = ({ }) => {
    const { nodes, animations, cameras } = useGLTF("banner.glb");

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
