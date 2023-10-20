import React from 'react'
import { RigidBody } from '@react-three/rapier'
import { useTexture } from "@react-three/drei";




const Walls = () => {
  const PATH = "/assets/textures/plank/";
  const propsTexture = useTexture({
    map: PATH + 'plankColor.jpg',
    normalMap: PATH + 'plankNormal.jpg',
    roughnessMap: PATH + 'plankRoughness.jpg',
    aoMap: PATH + 'plankAO.jpg',
  });
  return (
    <>
    <RigidBody type={"fixed"}>
    <mesh position={[0,4.6,-16]}>
        <boxGeometry args={[32, 10, 1]} />
        <meshStandardMaterial color={"orange"} />
    </mesh>
    <mesh position={[-16,4.6,0]}  rotation-y={Math.PI/2}>
        <boxGeometry args={[32, 10, 1]} />
        <meshStandardMaterial color={"orange"} />
    </mesh>
    <mesh position={[16,4.6,0]}  rotation-y={Math.PI/2}>
        <boxGeometry args={[32, 10, 1]} />
        <meshStandardMaterial color={"orange"} />
    </mesh>
    </RigidBody>
    </>
  )
}

export default Walls