import { useTexture } from "@react-three/drei";
import React from "react";
import { RigidBody } from "@react-three/rapier";
const Floor = () => {
  return (
    <>
      <RigidBody colliders={"cuboid"} friction={2} type="fixed">
        <mesh position-y={-0.4} rotation-x={-Math.PI / 2} position-x={16}  receiveShadow>
          <planeGeometry  args={[16, 32]} />
          <meshBasicMaterial  color={"white"} />
        </mesh>

      </RigidBody>
      <mesh rotation-x={-Math.PI / 2}  rotation-z={-Math.PI / 2}  position-y={-0.39} receiveShadow position-x={16}  >
          <planeGeometry  args={[32, 10]}  />
          <meshStandardMaterial color={"black"}/>
        </mesh>
      </>
  );
};

export default Floor;
