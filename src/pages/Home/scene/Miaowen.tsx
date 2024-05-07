//@ts-nocheck
import React, { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import {
    Environment,
    OrbitControls,
    useAnimations,
    useGLTF,
} from "@react-three/drei";
import { Gradient, LayerMaterial } from 'lamina';
type Props = {};
const Miaowen: React.FC<Props> = ({ }) => {

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
            <color attach="background" args={["#BBBFE7"]} />
            <Environment
                preset="sunset"
                blur={1}
            />
            {/* <ambientLight intensity={3} /> */}
            <Miaowen />
            {/* main-light */}
            <directionalLight
                position={[1.2079130411148071, 1.838667631149292, 1.7030878067016602]}
                quaternion={[0.8913910388946533, -0.3365384042263031, 0.28401750326156616, 0.10722880065441132]}
                scale={4.352912425994873}
                rotation={[-0.8236599516972478, 0.4491145864741496, 0.43832137139491606]}
            />
            {/* top-light */}
            <pointLight
                color='#BA1DFF'
                position={[-0.041497908532619476, 2.6493566036224365, -0.006899714469909668]}
                quaternion={[0.4607762098312378, -0.453517884016037, -0.5437119603157043, -0.5351486802101135]}
                rotation={[-1.5733989827328867, -0.015660718607818237, -1.7355747178062366]}
                scale={3.091878652572632}
                intensity={8}
            />
            {/* bottom-light */}
            <directionalLight
                position={[-0.037198662757873535, -2.0513269901275635, 3.9892544746398926]}
                quaternion={[0.971926212310791, 0.23523972928524017, -0.00453136907890439, 0.0010967479320243]}
                rotation={[0.47495336997722304, -0.008292410433959427, 0.004263991722153096]}
                scale={4.352912425994873}
            />
            {/* rimming-light */}
            <directionalLight
                position={[0.017103195190429688, 0.9734896421432495, -2.459726333618164]}
                quaternion={[0.003415049286559224, -0.0006512015825137496, 0.9822947978973389, 0.18730966746807098]}
                rotation={[-2.764736874083904, 0.006465262634576718, 3.1390339103230747]}
                scale={4.7009124755859375}
            />
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <LayerMaterial toneMapped={false} lighting="physical">
                    <Gradient colorA="#BA1DFF" colorB="#2440EB" axes={'y'} contrast={0.8} start={0.5} end={0.1} />
                </LayerMaterial>
            </mesh>
            <MiaowenModel />
            <OrbitControls makeDefault />
        </Canvas>
    );
};

const MiaowenModel = () => {
    const group = useRef()
    const { nodes, animations } = useGLTF('miaowen-animation.glb');
    const { actions } = useAnimations(animations, group);
    useEffect(() => {
        // actions["eyesAction"].play();
    }, [actions]);
    return (
        <group >
            {nodes.Scene.children.map(item =>
                <>{item.type == 'Mesh' &&
                    item.name == 'eyes' ?
                    <group>
                        <mesh geometry={item.geometry} material={item.material} scale={item.scale} position={item.position} rotation={item.rotation}>
                        </mesh>
                    </group>
                    :
                    <mesh geometry={item.geometry} material={item.material} scale={item.scale} position={item.position} rotation={item.rotation}>
                        {/* {item.name == 'shell' &&
                            <>
                                <LayerMaterial toneMapped={false} lighting="physical" metalness={item.material.metalness} roughness={item.material.roughness} shininess={10}>
                                    <Gradient colorA="#2440EB" colorB="#BA1DFF" axes={'z'} contrast={0.8} start={0.5} end={0.1} />
                                </LayerMaterial>

                            </>
                        } */}
                    </mesh>
                }
                </>
            )}
        </group>
    )
}
export default Miaowen;
