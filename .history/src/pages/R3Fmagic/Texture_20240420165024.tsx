import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react'
import { Physics, RigidBody, BallCollider, MeshCollider } from '@react-three/rapier'
type Props = {};
const Texture: React.FC<Props> = ({ }) => {
  return (
    <Canvas className='width-100 height-100' camera={{ position: [10, 0, 0] }}>
      <color attach={'background'} args={['#202020']} />
      <ambientLight />
      <Environment preset='sunset' blur={0} />
      <pointLight position={[300, 0, 0]} intensity={10} color='red' />
      <Physics debug>
        <RigidBody colliders={"ball"} restitution={2}>
          <MeshCollider type="trimesh">
            <mesh position={[0, 0, 0]} receiveShadow>
              <sphereGeometry />
            </mesh>
          </MeshCollider>
          <BallCollider args={[0.5]} />
        </RigidBody>
      </Physics>
      <OrbitControls />
    </Canvas >
  );
};

export default Texture;