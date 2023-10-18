import React from 'react'
import { RigidBody } from '@react-three/rapier'

const Walls = () => {
  return (
    <>
    <RigidBody type={"fixed"}>
    <mesh position={[0,4.6,-16]}>
        <boxGeometry args={[32, 10, 1]} />
        <meshStandardMaterial color="white" />
    </mesh>
    <mesh position={[-16,4.6,0]}  rotation-y={Math.PI/2}>
        <boxGeometry args={[32, 10, 1]} />
        <meshStandardMaterial color="white" />
    </mesh>
    <mesh position={[16,4.6,0]}  rotation-y={Math.PI/2}>
        <boxGeometry args={[32, 10, 1]} />
        <meshStandardMaterial color="white" />
    </mesh>
    </RigidBody>
    </>
  )
}

export default Walls