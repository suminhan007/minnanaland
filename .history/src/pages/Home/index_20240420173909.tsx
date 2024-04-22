import React from 'react'
import Banner from "./scene/Banner";
import { Canvas } from '@react-three/fiber';
type Props = {};
const Home: React.FC<Props> = ({ }) => {
  return (
    <div>
      <Banner />
      <Canvas>

      </Canvas>
    </div>
  );
};

export default Home;