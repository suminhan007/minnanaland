export const CSGModel = () => {
    return (
        <mesh receiveShadow castShadow>
        <Geometry>
            <Base scale={1.5} position={[0, -1.04, 0]} >
                <Box url="banner_Box.glb" position={[0, 0, -2.1]} />
            </Base>
            <Subtraction position={[-1, 1, 1]}>
                <sphereGeometry args={[0.4, 32, 32]} />
                <meshStandardMaterial color="orange" side={THREE.DoubleSide} />
            </Subtraction>
            <Addition scale={0.5} rotation={[0.5, 0.2, Math.PI / 4]} position={[-0.75, 0.5, -0.25]}>
                <boxGeometry />
                <meshStandardMaterial color="skyblue" side={THREE.DoubleSide} />
            </Addition>
            {/* <Addition scale={0.5} rotation={[0.5, 0.2, Math.PI / 4]} position={[-0.75, 0.5, -0.25]}>
                <Box url="banner_Box.glb" position={[0, 0, -2.1]} />
            </Addition> */}
        </Geometry>
    </mesh>
    )
}