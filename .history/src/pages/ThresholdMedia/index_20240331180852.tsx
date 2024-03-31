import React from 'react'
import styled from 'styled-components'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Lightformer, useGLTF, useTexture } from '@react-three/drei'

const ThresholdMedia: React.FC = () => {
    // const [materials, setMaterials] = useState<any>();
    const MyMesh = () => {
        const mapProps = useTexture({ map: 'map.png' });
        // const model = useGLTF('model.glb')
        return <mesh>
            {/* <primitive object={model.scene} /> */}
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial {...mapProps} />
        </mesh>
    }
    useFrame(() => {

    })
    return (
        <StyleCanvasWrap className="StyleCanvasWrap">
            <Canvas shadows dpr={[1, 1.5]} gl={{ antialias: true }} camera={{ position: [0, 0, 0], fov: 17.5, near: 1, far: 20 }}>
                <ambientLight intensity={0.4} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <MyMesh />
                <Environment resolution={256}>
                    <group rotation={[-Math.PI / 3, 0, 1]}>
                        <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
                        <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
                        <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
                        <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
                    </group>
                </Environment>
            </Canvas>
        </StyleCanvasWrap>
    )
}

const StyleCanvasWrap = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(#D7F0FF,#F6F7F8);
`
export default ThresholdMedia;
