import { OrbitControls, useHelper , useTexture} from "@react-three/drei";
import { useRef } from "react";

import Cat from "./world/Cat";
import Treadmill from "./world/Treadmill";
import ShelfWithItems from "./shelf_with_objects";
import Floor from "./world/Floor";
import Lights from "./world/Lights";

const Experience = () => {



  return (
    <>
      <OrbitControls makeDefault />
      <Lights/>
      <group position={[0, 0, -2]} rotation-y={Math.PI * .05}>
        <Cat />
        <Treadmill position={[-3.5, -1, 6]} />
      </group>
      <ShelfWithItems  />
      <Floor></Floor>
      
    </>
  )
}

export default Experience

