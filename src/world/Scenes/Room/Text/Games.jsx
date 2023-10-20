import React from 'react'
import { Text3D } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { useState } from 'react'
import { useFrame } from "@react-three/fiber";
import { MathUtils } from 'three'


const Games = ({onClick}) => {

    return (
        <RigidBody colliders={"hull"}>
            <Text3D
                position={[8, 0, -1]}
                rotation-y={-Math.PI / 2}
                scale={1.2}
                fontSize={0.6}
                onClick={onClick}
                font="/assets/fonts/Lilita_One_Regular.json" >
                {`Games`}
                
                <meshNormalMaterial />

            </Text3D>
        </RigidBody>
    )
}

export default Games