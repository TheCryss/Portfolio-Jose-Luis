import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {SphereGeometry, useRef } from "react";


const Experience = () => {

  const boxRef = useRef(null);
  const sphereRef = useRef(null);

  useFrame((state, delta)=>{
    boxRef.current.rotation.x += 1*delta;
    sphereRef.current.rotation.x += 1 * delta;
    sphereRef.current.rotation.y += 1 * delta;
  })

  return (
    
    <>
      <OrbitControls makeDefault />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <mesh ref={boxRef} position={[-2,0,0]}>  
        <boxGeometry args={[1,1,1]} />
        <meshStandardMaterial   color="green"/>      
      </mesh>
      <mesh ref={sphereRef} position={[0,0,0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshLambertMaterial color="yellow" />
      </mesh>
    </>
  )
}

export default Experience

