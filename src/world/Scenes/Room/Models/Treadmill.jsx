import { useGLTF } from '@react-three/drei';
import React from 'react'
import { AxesHelper } from "three";
import { useRef } from "react";
import { useHelper } from '@react-three/drei';


const Treadmill = (props) => {
    const { nodes, materials } = useGLTF("/assets/models/treadmill/treadmill.glb");
    const treadMillRef = useRef()
    return (
    <group {...props} dispose={null}  >
      <group 
        position={[3.5, 0.495, -6]}
        rotation={[0, -0.378, 0]}
        scale={[2.3, 0.8, 0.64]}
        rotation-y={-Math.PI*.3}
      >
        <mesh 
          castShadow
          geometry={nodes.Object_4.geometry}
          material={materials["Material.001"]}
        />
        <mesh 
          castShadow          
          geometry={nodes.Object_5.geometry}
          material={materials["Material.002"]}
        />
      </group>
    </group>
  )
}

export default Treadmill
useGLTF.preload("/assets/models/treadmill/treadmill.glb")