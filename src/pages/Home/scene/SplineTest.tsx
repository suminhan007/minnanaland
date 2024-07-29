
import * as THREE from 'three';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Lightformer, useGLTF } from '@react-three/drei';
import { CuboidCollider, BallCollider, Physics, RigidBody } from '@react-three/rapier';
import { EffectComposer, N8AO } from '@react-three/postprocessing';
import { easing } from 'maath';

const shuffle = [
  { color: '#fff', roughness: 0.1, accent: true },
  { color: '#beeafe', roughness: 0.75, },
  { color: '#fff', roughness: 0.75 },
  { color: '#beeafe', roughness: 0.1 },
  { color: '#fff', roughness: 0.75 },
  { color: '#2D8EFF', roughness: 0.1 },
  { color: '#2D8EFF', roughness: 0.75, metalness: 1 }
];

type Props = {
  [key: string]: any;
}
const HomeBannerThree: React.FC<Props> = ({
  ...restProps
}) => (
  <Canvas shadows dpr={[1, 1.5]} gl={{ antialias: false }} camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }} {...restProps}>
    <ambientLight intensity={1} />
    <spotLight position={[16, 20, 20]} angle={0.15} penumbra={1} intensity={1} castShadow />
    <Physics gravity={[5, 0, 0]}>
      <Pointer />
      {shuffle.map((props, i) => <Connector key={i} scale={undefined} position={undefined} children={undefined} {...props} />) /* prettier-ignore */}
    </Physics>
    <EffectComposer disableNormalPass multisampling={8}>
      <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
    </EffectComposer>
    <Environment resolution={256}>
      <group rotation={[-Math.PI / 3, 0, 1]}>
        <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
        <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
        <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
        <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
      </group>
    </Environment>
  </Canvas>
)

function Connector({ position, vec = new THREE.Vector3(), scale, r = THREE.MathUtils.randFloatSpread, ...props }) {
  const api = useRef<any>();
  const pos = useMemo(() => position || [r(10), r(10), r(10)], []);
  useFrame((_state, delta) => {
    delta = Math.min(0.1, delta);
    api.current?.applyImpulse(vec.copy(api.current.translation()).negate().multiplyScalar(0.2));
  });
  return (
    <RigidBody linearDamping={4} angularDamping={1} friction={0.1} position={pos} ref={api} colliders={false}>
      <CuboidCollider args={[0.38, 1.27, 0.38]} />
      <CuboidCollider args={[1.27, 0.38, 0.38]} />
      <CuboidCollider args={[0.38, 0.38, 1.27]} />
      <Model children={null} {...props} />
    </RigidBody>
  );
};

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef<any>();
  useFrame(({ mouse, viewport }) => {
    ref.current?.setNextKinematicTranslation(vec.set((mouse.x * viewport.width) / 2, (mouse.y * viewport.height) / 2, 0));
  });
  return (
    <RigidBody position={[0, 0, 0]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[1]} />
    </RigidBody>
  );
};

function Model({ children, color = 'white' }) {
  const ref = useRef<any>();
  //@ts-ignore
  const { nodes, materials } = useGLTF('./miaosi_logo.glb');
  useFrame((_state, delta) => {
    if (!ref.current) return;
    easing.dampC(ref.current.material.color, color, 0.2, delta);
  });
  return (
    <mesh ref={ref} castShadow receiveShadow scale={1.2} rotation={[1.2, 1, 1]} geometry={nodes.Cube.geometry} >
      <meshStandardMaterial metalness={0.2} depthWrite={false} {...materials} />
      {children}
    </mesh>
  );
}

export default HomeBannerThree;
