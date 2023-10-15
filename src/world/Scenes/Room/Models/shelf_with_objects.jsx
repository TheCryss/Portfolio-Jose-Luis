import React from 'react'
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Shelf from './Shelf';
import { RigidBody } from '@react-three/rapier';
const ShelfWithItems = (props) => {


    const boxRef = useRef(null);
    const sphereRef = useRef(null);
    const coneRef =useRef(null);
    const torusRef =useRef(null);
  
    
  
    useFrame(({ clock }, delta)=>{
      //sphereRef.current.rotation.x += 1 * delta;
      //sphereRef.current.rotation.y += 1 * delta;
      //coneRef.current.rotation.x += 1 * delta
       //sphereRef.current.position.y = Math.sin(clock.getElapsedTime())*0.1; // Adjust the amplitude (1.5 in this example)
       //sphereRef.current.position.x = Math.cos(clock.getElapsedTime())*0.1; 
  
    })
    return (
        <>
        <RigidBody colliders={"cuboid"} type='fixed'>
        <group {...props}>
        <mesh position={[-5,0,-5]} castShadow>
        <Shelf scale={2} position={[0,-0.385,0]} rotation-y={Math.PI/2}/> 
        
            <mesh ref={boxRef} position={[0, 2.66, 0]} scale={0.4}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="yellow" />
            </mesh>
            <mesh ref={sphereRef} position={[0, 1.87, 0]} scale={0.4}>
                <sphereGeometry args={[0.8, 32, 32]} />
                <meshLambertMaterial color="blue" />
            </mesh>
            <mesh ref={coneRef} position={[0, 0.9, 0]} scale={0.4}>
                <coneGeometry args={[1, 1.5, 32]} />
                <meshLambertMaterial color="red" />
            </mesh>
            <mesh ref={torusRef} position={[0,-0.2, 0]} rotation-x={Math.PI/2} scale={0.4}>
                <torusGeometry args={[0.8, .2, 20, 48]} />
                <meshMatcapMaterial color="violet" />
            </mesh>
        </mesh>
        </group>
        </RigidBody>
        </>
        
    )
}

export default ShelfWithItems