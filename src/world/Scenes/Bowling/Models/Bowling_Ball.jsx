import React from 'react'
import { useGLTF } from "@react-three/drei";
import { useKeyboardControls } from "@react-three/drei";
import { useCameraContext } from "./../../../../Context/CameraContext";
import { useRef } from "react";
import { useEffect,useState } from "react";
import { RigidBody,BallCollider } from "@react-three/rapier";

const Bowling_Ball = (props) => {
  const { nodes, materials } = useGLTF("/assets/models/bowling_ball/bowling_ball.glb");
  const moveSpeed = 15;
  const ballBodyRef = useRef();
  //const ballBodyReff = useRef();
  const camera = useCameraContext()

    const onHandleSphere = () => {
        ballBodyRef.current.wakeUp();
        ballBodyRef.current.applyImpulse({ x: 10, y: 0, z: 0 }, true);
        
    }
    useEffect(() => {
      ballBodyRef.current.sleep()
  },[])

  const [sub, get] = useKeyboardControls();
  
  useEffect(() => {
      return sub(
          (state) => state,
          (pressed) => {
              // console.log(camera["player"]);
              if (camera["player"] == "bowling") {
                  if (pressed.forward) {
                      ballBodyRef.current.applyImpulse({ x: 0, y: 0, z: -moveSpeed }, true);                 
                      // ballBodyReff.current.rotation.y = Math.PI ;
                  }
                  if (pressed.backward) {
                      ballBodyRef.current.applyImpulse({ x: 0, y: 0, z: moveSpeed }, true);                 
                      // ballBodyReff.current.rotation.y = Math.PI *2;

                  }
                  if (pressed.left){
                      ballBodyRef.current.applyImpulse({ x: -moveSpeed, y: 0, z: 0 }, true);                 
                      // ballBodyReff.current.rotation.y = Math.PI *1.5;
                  } 
                  if (pressed.right) {
                      ballBodyRef.current.applyImpulse({ x: moveSpeed, y: 0, z: 0 }, true);                 
                      // ballBodyReff.current.rotation.y = Math.PI *0.5;
                  }
                  if(pressed.jump){
                      ballBodyRef.current.applyImpulse({ x: 0, y: moveSpeed, z: 0 }, true);                 
                      // ballBodyReff.current.rotation.y = Math.PI *0.5;
                  }
          }
          }
      );
  }, [camera]);

  return (
    <RigidBody {...props}  mass={100} ref={ballBodyRef} colliders={false} restitution={1.2} friction={1} gravityScale={2} linearDamping={0.5}  angularDamping={0.5}>
    <group dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0, 2.2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere_0.geometry}
            material={materials.Bowling_Ball}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere_1.geometry}
            material={materials.Inside_ball}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere_2.geometry}
            material={materials.Rings}
          />
        </group>
      </group>
    </group>
    <BallCollider args={[2]} position={[-0,2,0]}/>
    </RigidBody>
  );
}

export default Bowling_Ball
useGLTF.preload("/assets/models/bowling_ball/bowling_ball.glb")
