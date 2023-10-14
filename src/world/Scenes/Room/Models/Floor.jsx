import { useTexture } from '@react-three/drei'
import React from 'react'

const Floor = () => {
    const PATH = "/assets/textures/marble/"
    const propsTexture = useTexture({
      map: PATH + 'marbleColor.jpg',
      normalMap: PATH + 'marbleNormal.jpg',
      roughnessMap: PATH + 'marbleRoughness.jpg',
      aoMap: PATH + 'marbleAO.jpg',
  })
  return (
    <mesh position-y={-.4} rotation-x={-Math.PI / 2} receiveShadow>
    <planeGeometry attach="geometry" args={[32, 32]} />
    <meshStandardMaterial attach="material" color={"#2596be"} />

</mesh>
  )
}

export default Floor