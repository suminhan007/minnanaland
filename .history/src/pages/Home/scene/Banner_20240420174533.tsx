import React, { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import {
    Environment,
    OrbitControls,
    useAnimations,
    useGLTF,
} from "@react-three/drei";
type Props = {};
const Banner: React.FC<Props> = ({}) => {
  return (
    <Canvas
      style={{ height: "100vh" }}
      gl={{ antialias: false }}
      camera={{
        position: [7.196843028068542, 6.803564429283142, 14.964091777801514],
        fov: 17.5,
        near: 1,
        far: 20,
        scale: 3.0715229511260986,
      }}
    >
      <color attach="background" args={["ref"]} />
      <Environment preset="city" />
      <OrbitControls makeDefault />
    </Canvas>
  );
};

export default Banner;
