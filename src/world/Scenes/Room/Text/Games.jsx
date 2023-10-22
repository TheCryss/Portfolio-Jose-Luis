import React from 'react'
import { Text3D } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { useState } from 'react'
import { useFrame } from "@react-three/fiber";
import { MathUtils } from 'three'


const Games = ({onClick,text}) => {

    return (

            <Text3D
                position={[-3.3, 0, 8]}
                rotation-x={-Math.PI / 2}
                scale={1.2}
                fontSize={0.6}
                onClick={onClick}
                font="/assets/fonts/Lilita_One_Regular.json" >
                {text}
                
                <meshStandardMaterial color={"skyblue"} />

            </Text3D>
    )
}

export default Games