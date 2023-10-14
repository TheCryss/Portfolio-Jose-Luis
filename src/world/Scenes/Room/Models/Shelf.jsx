import React from 'react'
import { useGLTF } from "@react-three/drei";
import { useTexture } from '@react-three/drei';

const Shelf = (props) => {

    const { nodes, materials } = useGLTF("/assets/models/shelf/rack_book_shelf.glb");
    const PATH = "/assets/textures/plank/"
    const propsTexture = useTexture({
      map: PATH + 'plankColor.jpg',
      normalMap: PATH + 'plankNormal.jpg',
      roughnessMap: PATH + 'plankRoughness.jpg',
      aoMap: PATH + 'plankAO.jpg',
  })
    return (
      <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.25}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[0, 90, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[15, 60, 90]}
          >
            <mesh
              castShadow
              
              geometry={nodes.Rack_Book_Shelf_putih_0.geometry}
              material={materials.putih}
            >
              <meshStandardMaterial {...propsTexture} />
            </mesh>
            <mesh
              castShadow
              
              geometry={nodes.Rack_Book_Shelf_hitam_0.geometry}
              material={materials.hitam}
            >

            </mesh>
          </group>
        </group>
      </group>
    </group>
    );
}

export default Shelf
useGLTF.preload("/assets/models/shelf/rack_book_shelf.glb");
