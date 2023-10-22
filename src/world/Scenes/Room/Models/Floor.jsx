import { useTexture } from "@react-three/drei";
import React from "react";
import { RigidBody } from "@react-three/rapier";
const Floor = () => {
  const PATH = "/assets/textures/marble/";
  const propsTexture = useTexture({
    map: PATH + "marbleColor.jpg",
    normalMap: PATH + "marbleNormal.jpg",
    roughnessMap: PATH + "marbleRoughness.jpg",
    aoMap: PATH + "marbleAO.jpg",
  });
  return (
    <>
    <RigidBody colliders={"cuboid"} friction={2} type="fixed">
      <mesh position-y={-0.4} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry  args={[16, 32]} />
        <meshStandardMaterial  color={"orange"}/>
      </mesh>
      </RigidBody>
      <mesh rotation-x={-Math.PI / 2} position-y={-0.39} receiveShadow >
        <planeGeometry  args={[16, 0.8]}  />
        <meshStandardMaterial/>

      </mesh>
      <mesh rotation-x={-Math.PI / 2} position-y={-0.38} receiveShadow >
        <torusGeometry  args={[4, 0.3 , 2, 64 ]}  />
        <meshStandardMaterial color={"white"}/>
      </mesh>
      </>
  );
};

export default Floor;
