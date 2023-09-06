import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


const Experience = () => {

  const boxRef = useRef(null);
  const sphereRef = useRef(null);
  const coneRef =useRef(null);
  const torusRef =useRef(null);

  

  useFrame(({ clock }, delta)=>{
    boxRef.current.rotation.x += 1*delta;
    //boxRef.current.rotation.y += 1*delta;
    sphereRef.current.rotation.x += 1 * delta;
    sphereRef.current.rotation.y += 1 * delta;
    //coneRef.current.rotation.x += 1 * delta
    coneRef.current.rotation.y += 1 * delta
    //torusRef.current.rotation.x += 1 * delta
    //torusRef.current.rotation.y += 1 * delta
    sphereRef.current.position.y = Math.sin(clock.getElapsedTime()*2)*2; // Adjust the amplitude (1.5 in this example)
    sphereRef.current.position.x = Math.cos(clock.getElapsedTime()*2)*2; 

  })

  return (
    
    <>
      <OrbitControls makeDefault />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />

      <mesh ref={boxRef} position={[-4,0,0]}>  
        <boxGeometry args={[1,1,1]} />
        <meshStandardMaterial   color="yellow"/>      
      </mesh>
      <mesh ref={sphereRef} position={[0,0,0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshLambertMaterial color="blue" />
      </mesh>
      <mesh ref={coneRef} position={[4,0,0]}>
        <coneGeometry args={[1, 1.5, 32]} />
        <meshLambertMaterial color="red" />
      </mesh>
      <mesh ref={torusRef} position={[8,0,0]}>
        <torusGeometry args={[1, 0.4, 12,48]} />
        <meshPhongMaterial color="gray" />
      </mesh>
    </>
  )
}

export default Experience

