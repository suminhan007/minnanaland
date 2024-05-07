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
      shadows
      gl={{ antialias: false }}
      camera={{
        position: [7.196843028068542, 6.803564429283142, 14.964091777801514],
        fov: 17.5,
        near: 1,
        far: 20,
        scale: 3.0715229511260986,
      }}
    >
      <color attach="background" args="#BBBFE7"]} />
      <Environment preset="city" />
      <pointLight
        position={[2, 0, 2]}
        intensity={1}
        color="yellow"
        castShadow
      />
      <pointLight
        color={"yellow"}
        position={[4.076245307922363, 5.903861999511719, -1.0054539442062378]}
        quaternion={[
          0.5232754945755005, -0.28416627645492554, 0.7269423007965088,
          0.34203392267227173,
        ]}
        rotation={[-1.8389943748398965, 0.6021227383543977, 1.9315004544314547]}
      />
      {/* light1 */}
      <directionalLight
        position={[4.300821304321289, -1.2841389179229736, -2.7215471267700195]}
        quaternion={[
          0.42189517617225647, 0.01938297227025032, 0.9054824113845825,
          -0.04160023108124733,
        ]}
        rotation={[2.9994128236339344, 0.8670519704072118, -3.032885103545894]}
        scale={5.0777482986450195}
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
      {/* <AnimatePanelRight /> */}
      <OrbitControls makeDefault />
    </Canvas>
  );
};

type AnimatePanelProps = {
  children?: any;
  [key: string]: string;
};
// const AnimatePanelRight: React.FC<AnimatePanelProps> = ({}) => {
//   const { nodes, animations } = useGLTF("banner_booleaned.glb");

//   const mesh1Ref = useRef<any>();
//   const actions1 = useAnimations(animations, mesh1Ref).actions;
//   useEffect(() => {
//     actions1["mover"].play();
//   });
//   return (
//     <mesh ref={mesh1Ref} receiveShadow>
//       <primitive object={nodes.panelr} />
//     </mesh>
//   );
// };
// const AnimatePanelLeft: React.FC<AnimatePanelProps> = ({ }) => {
//     const { nodes, animations } = useGLTF("banner.glb");

//     const mesh2Ref = useRef<any>();
//     const actions2 = useAnimations(animations, mesh2Ref).actions;
//     useEffect(() => {
//         actions2["movel"].play();
//     });
//     return (
//         <mesh ref={mesh2Ref}>
//             <primitive object={nodes.panell} />
//         </mesh>
//     );
// };


export default Banner;
