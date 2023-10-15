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
    <RigidBody colliders={"cuboid"} friction={2} type="fixed">
      <mesh position-y={-0.4} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry  args={[32, 32]} />
        <meshStandardMaterial  color={"#2596be"} />
      </mesh>
    </RigidBody>
  );
};

export default Floor;
