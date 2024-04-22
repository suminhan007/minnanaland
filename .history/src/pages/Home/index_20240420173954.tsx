import React from 'react'
import Banner from "./scene/Banner";
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
type Props = {};
const Home: React.FC<Props> = ({ }) => {
  const [nodes] = useGLTF('banner.glb')
  return (
    <div>
      <Banner />
      <Canvas>
        <mesh>
          <primitive object={nodes.panel}/>
      </mesh>
      </Canvas>
    </div>
  );
};

export default Home;