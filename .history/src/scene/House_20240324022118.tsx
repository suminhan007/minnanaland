import React, { useState } from 'react'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { Environment, Lightformer, useGLTF } from '@react-three/drei'

type Props = {
}
const House: React.FC<Props> = ({
    // animate = false
}) => {
    const [hover, setHover] = useState<boolean>(false);
    const gltf = useGLTF('model.glb')
    return (
        <StyleCanvasWrap className="StyleCanvasWrap">
            <Canvas shadows dpr={[1, 1.5]} gl={{ antialias: true }} camera={{ position: [0, 0, 0], fov: 17.5, near: 1, far: 20 }}>
                <ambientLight intensity={0.4} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <mesh
                    onPointerOver={(e) => setHover(true)}
                >
                    <primitive object={gltf.scene} />
                    <primitive object={gltf.scene} />
                </mesh>
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
    height: 404px;
    background: linear-gradient(#D7F0FF,#F6F7F8);
`
export default House;
