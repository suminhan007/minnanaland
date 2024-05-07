import React from 'react'
import Banner from "./scene/Banner";
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
type Props = {};
const Home: React.FC<Props> = ({ }) => {
  const [nodes] = useGLTF
  return (
    <div>
      <Banner />
      <Canvas>
        <mesh>
          <primitive/>
      </mesh>
      </Canvas>
    </div>
  );
};

export default Home;