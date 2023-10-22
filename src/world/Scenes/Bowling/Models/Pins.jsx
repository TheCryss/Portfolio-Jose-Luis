import React from 'react'
import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier";


const Pins = (props) => {

    const { nodes, materials } = useGLTF("/assets/models/pins/pins.glb");
    return (
      
      <group {...props} dispose={null}>
        <RigidBody>
        <group position={[-9.177, 0.278, 0.411]} scale={0.188}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.Bowling_Pins_White}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.Bowling_Pins_Stripes}
          />
        </group>
        </RigidBody>
        <RigidBody>
        <group position={[-5.294, 0.278, -2.76]} scale={0.188}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.Bowling_Pins_White}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.Bowling_Pins_Stripes}
          />
        </group>
        </RigidBody>
        <RigidBody>
        <group position={[-5.294, 0.278, 3.68]} scale={0.188}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials.Bowling_Pins_White}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11.geometry}
            material={materials.Bowling_Pins_Stripes}
          />
        </group>
        </RigidBody>
        <RigidBody>
        <group position={[-1.475, 0.278, 0.411]} scale={0.188}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13.geometry}
            material={materials.Bowling_Pins_White}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_14.geometry}
            material={materials.Bowling_Pins_Stripes}
          />
        </group>
        </RigidBody>
        <RigidBody>
        <group position={[-1.475, 0.278, -6.255]} scale={0.188}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={materials.Bowling_Pins_White}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_17.geometry}
            material={materials.Bowling_Pins_Stripes}
          />
        </group>
        </RigidBody>
        <RigidBody>
        <group position={[-1.475, 0.278, 7.078]} scale={0.188}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_19.geometry}
            material={materials.Bowling_Pins_White}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_20.geometry}
            material={materials.Bowling_Pins_Stripes}
          />
        </group>
        </RigidBody>
        <RigidBody>
        <group position={[2.343, 0.278, -2.76]} scale={0.188}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_22.geometry}
            material={materials.Bowling_Pins_White}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_23.geometry}
            material={materials.Bowling_Pins_Stripes}
          />
        </group>
        </RigidBody>
        <RigidBody>
        <group position={[2.343, 0.278, 3.68]} scale={0.188}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_25.geometry}
            material={materials.Bowling_Pins_White}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_26.geometry}
            material={materials.Bowling_Pins_Stripes}
          />
        </group>
        </RigidBody>
        <RigidBody>
        <group position={[2.343, 0.278, 10.541]} scale={0.188}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_28.geometry}
            material={materials.Bowling_Pins_White}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_29.geometry}
            material={materials.Bowling_Pins_Stripes}
          />
        </group>
        </RigidBody>
        <RigidBody>
        <group position={[2.343, 0.278, -9.75]} scale={0.188}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_31.geometry}
            material={materials.Bowling_Pins_White}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_32.geometry}
            material={materials.Bowling_Pins_Stripes}
          />
        </group>
        </RigidBody>
      </group>
    );
}

export default Pins

useGLTF.preload("/assets/models/pins/pins.glb")