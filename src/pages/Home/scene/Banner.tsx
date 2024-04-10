import React from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
type Props = {

}
const Banner: React.FC<Props> = ({

}) => {
    const { scene } = useGLTF('banner.glb')
    return (
        <Canvas
            shadows
            dpr={[1, 1.5]}
            camera={{ position: [10, -2, 2], fov: 17.5, near: 1, far: 20 }}
        >
            <color attach="background" args={['#BBBFE7']} />
            <ambientLight intensity={1} />
            <primitive object={scene} />
        </Canvas >
    )
}

export default Banner;