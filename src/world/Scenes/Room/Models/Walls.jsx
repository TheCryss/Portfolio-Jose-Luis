import React from 'react'
import { RigidBody, CuboidCollider, Physics } from '@react-three/rapier'
import { useTexture } from "@react-three/drei";




const Walls = ({handleClickBowling}) => {
    const PATH = "/assets/textures/frabric/";
    const propsTexture = useTexture({
        // map: PATH + 'fabricColor2.jpg',
        /*     normalMap: PATH + 'plankNormal.jpg',
            roughnessMap: PATH + 'plankRoughness.jpg',
            aoMap: PATH + 'plankAO.jpg', */
    });
    // Use the Vector2 class to set the repeat value
    return (
        <>
        {/* <Physics debug> */}
            <RigidBody type={"fixed"} >
                <CuboidCollider
                    position={[8, 5, 1]}
                    args={[6.5, 2, 0.1]}
                    rotation={[0, Math.PI / 2, 0]}
                    sensor
                    onIntersectionEnter={handleClickBowling}
                />
            </RigidBody>
            {/* </Physics> */}
            <RigidBody type={"fixed"} >
                <mesh position={[0, 4.6, -16]} receiveShadow>
                    <boxGeometry args={[16, 10, 1]} />
                    <meshPhysicalMaterial {...propsTexture} color={"skyblue"} />
                </mesh>
                <mesh position={[-8, 4.6, -0.5]} rotation-y={Math.PI / 2} receiveShadow>
                    <boxGeometry args={[32, 10, 1]} />
                    <meshPhysicalMaterial {...propsTexture} color={"#3FEFEA"} />
                </mesh>
                <mesh position={[8, 4.6, -10.5]} rotation-y={Math.PI / 2} receiveShadow castShadow>
                    <boxGeometry args={[12, 10, 1]} />
                    <meshPhysicalMaterial {...propsTexture} color={"skyblue"} />
                </mesh>
                <mesh position={[8, 4.6, 10]} rotation-y={Math.PI / 2} receiveShadow castShadow> 
                    <boxGeometry args={[12, 10, 1]} />
                    <meshPhysicalMaterial {...propsTexture} color={"skyblue"} />
                </mesh>
                <mesh position={[8, 1.6, 0]} rotation-y={Math.PI / 2} receiveShadow>
                    <boxGeometry args={[10, 4, 1]} />
                    <meshPhysicalMaterial {...propsTexture} color={"skyblue"} />
                </mesh>
                <mesh position={[8, 8.1, 0]} rotation-y={Math.PI / 2} receiveShadow>
                    <boxGeometry args={[10, 3, 1]} />
                    <meshPhysicalMaterial {...propsTexture} color={"skyblue"} />
                </mesh>
                {/* Second Room [Bowling] */}
                <mesh position={[24, 4.6, -0.5]} rotation-y={Math.PI / 2} receiveShadow>
                    <boxGeometry args={[32, 10, 1]} />
                    <meshPhysicalMaterial {...propsTexture} color={"skyblue"} />
                </mesh>
                <mesh position={[0, 4.6, -16]} receiveShadow>
                    <boxGeometry args={[16, 10, 1]} />
                    <meshPhysicalMaterial {...propsTexture} color={"skyblue"} />
                </mesh>

            </RigidBody>
        </>
    )
}

export default Walls