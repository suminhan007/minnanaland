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
const Banner: React.FC<Props> = ({ }) => {

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
                preset="city"
                blur={0.1}

            />
            <Miaowen />
            <pointLight color='white' position={[0, 4, 10]} intensity={40} />
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <LayerMaterial toneMapped={false} lighting="physical" shininess={10}>
                    <Gradient colorA="#2440EB" colorB="#BA1DFF" axes={'y'} contrast={0.8} start={0.5} end={0.1} />
                </LayerMaterial>
            </mesh>
            <OrbitControls makeDefault />
        </Canvas>
    );
};

const Miaowen = () => {
    const group = useRef()
    const { scene, nodes, animations } = useGLTF('miaowen-animation.glb');
    const { actions } = useAnimations(animations, group);
    console.log(animations);

    useEffect(() => {
        actions["eyesAction"].play();
    }, [actions]);
    return (
        <group >
            {nodes.Scene.children.map(item =>
                <>{item.type == 'Mesh' &&
                    item.name == 'eyes' ?
                    <group>
                        <mesh ref={group} geometry={item.geometry} material={item.material} scale={item.scale} position={item.position} rotation={item.rotation}>
                        </mesh>
                    </group>
                    :
                    <mesh geometry={item.geometry} material={item.name == 'shell' ? '' : item.material} scale={item.scale} position={item.position} rotation={item.rotation}>
                        {item.name == 'shell' &&
                            <>
                                <LayerMaterial toneMapped={false} lighting="physical" metalness={item.material.metalness} roughness={item.material.roughness} shininess={10}>
                                    <Gradient colorA="#2440EB" colorB="#BA1DFF" axes={'z'} contrast={0.8} start={0.5} end={0.1} />
                                </LayerMaterial>

                            </>
                        }
                    </mesh>
                }
                </>
            )}
        </group>
    )
}
export default Banner;
