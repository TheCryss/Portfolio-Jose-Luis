import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier";

const Hoop = (props) => {
    const { nodes, materials } = useGLTF("/assets/models/hoop/basketball_hoop.glb");
    return (
        <RigidBody colliders={"trimesh"} type="fixed">
        <group {...props} dispose={null}>
            <group
                position={[0, 5.903, 0]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1.146, 0.13, 1.713]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials["Material.001"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials["Material.002"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials["Material.003"]}
                />
            </group>
        </group>
        </RigidBody>
    );
}

export default Hoop
useGLTF.preload("/assets/models/hoop/basketball_hoop.glb")