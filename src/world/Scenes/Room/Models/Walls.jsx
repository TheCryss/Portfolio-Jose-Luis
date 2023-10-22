import React from 'react'
import { RigidBody } from '@react-three/rapier'
import { useTexture } from "@react-three/drei";




const Walls = () => {
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
    <RigidBody type={"fixed"} >
    <mesh position={[0,4.6,-16]} receiveShadow>
        <boxGeometry args={[16, 10, 1]} />
        <meshPhysicalMaterial {...propsTexture} color={"skyblue"}  />
    </mesh>
    <mesh position={[-8,4.6,-0.5]}   rotation-y={Math.PI/2} receiveShadow>
        <boxGeometry args={[32, 10, 1]} />
        <meshPhysicalMaterial {...propsTexture} color={"#3FEFEA"} />
    </mesh>
    <mesh position={[8,4.6,-10.5]}  rotation-y={Math.PI/2} receiveShadow>
        <boxGeometry args={[12, 10, 1]} />
        <meshPhysicalMaterial {...propsTexture}color={"skyblue"} />
    </mesh>
    <mesh position={[8,4.6,10]}  rotation-y={Math.PI/2} receiveShadow>
        <boxGeometry args={[12, 10, 1]} />
        <meshPhysicalMaterial {...propsTexture}color={"skyblue"} />
    </mesh>
    <mesh position={[8,1.6,0]}  rotation-y={Math.PI/2} receiveShadow>
        <boxGeometry args={[10, 4, 1]} />
        <meshPhysicalMaterial {...propsTexture}color={"skyblue"} />
    </mesh>
    <mesh position={[8,8.1,0]}  rotation-y={Math.PI/2} receiveShadow>
        <boxGeometry args={[10, 3 , 1]} />
        <meshPhysicalMaterial {...propsTexture}color={"skyblue"} />
    </mesh>

    </RigidBody>
    </>
  )
}

export default Walls