import { Canvas } from '@react-three/fiber';
import React, { useRef, useEffect, useMemo } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';

// type PandelProps = {
//     position: any;
// }
// const Panel: React.FC<PandelProps> = ({
//     position
// }) => {
//     const panelRef = useRef(null);
//     useFrame((_state, delta) => {
//         if (!panelRef.current) return;
//         panelRef.current.position.x += delta;
//         // panelRef.current.scale.y -= delta;
//         // panelRef.current.scale.z -= delta;
//     })
//     return (
//         <group position={position}>
//             <mesh ref={panelRef}>
//                 <boxGeometry args={[0.1, 5, 5]} />
//                 <meshStandardMaterial color="#82ADF4" metalness={0.23} />
//             </mesh>
//         </group>
//     )
// }
type SceneProps = {

}
const Scene: React.FC<SceneProps> = ({

}) => {

    return (
        <div style={{ height: '100vh' }}>
            <Canvas
                shadows
                camera={{ position: [30, 0, -3], fov: 35, near: 1, far: 50 }}
            >
                <color attach='background' args={['#BBBFE7']} />
                <ambientLight intensity={0.5} />
                {/* Main */}
                <directionalLight
                    position={[1, 10, -2]}
                    intensity={1}
                    shadow-camera-far={70}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                    shadow-mapSize={[512, 512]}
                    castShadow
                />
                {/* Strip */}
                <directionalLight position={[-10, -10, 2]} intensity={3} />
                {
                    Array.from({ length: 36 }).map((_item, index) =>
                        <Panel url='banner_panel.glb' scale={3} position={[0, 0, -0]} />
                    )
                }

            </Canvas>
        </div>
    )
}

type PanelProps = {
    url: string;
    position?: number[];
    [key: string]: any;
}
const Panel: React.FC<PanelProps> = ({
    url,
    position = [0, 0, 0],
    ...restProps
}) => {
    const { nodes, scene, animations } = useGLTF(url);
    const newMaterial = useMemo(() => new MeshStandardMaterial({ color: '#504FE7' }), []);
    const { actions, mixer } = useAnimations(animations, scene)
    useEffect(() => {
        mixer.timeScale = 0.5;
        actions["平面Action"] && actions["平面Action"].play();
    }, [])
    return <group>
        {Object.keys(nodes).map((key) => {
            const node = nodes[key];
            if (node.isMesh) {
                node.material = newMaterial;
                return <primitive key={key} object={scene} position={position} {...restProps} />
            }
        })}
    </group>
}
export default Scene;
