import { DirectionalLightHelper,SpotLightHelper,HemisphereLightHelper ,PointLightHelper} from "three";
import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import React from 'react'
import { SpotLight } from "@react-three/drei";

const Lights = () => {
    const SpotLightRef = useRef();
    const hemisphereLightRef = useRef(); 
    const pointLightRef = useRef();

    const directionalLightRef = useRef();

/*     useHelper(hemisphereLightRef, HemisphereLightHelper);
    useHelper(SpotLightRef,SpotLightHelper)
    useHelper(pointLightRef, PointLightHelper);
 */    return (
        <>
            <ambientLight intensity={0.2} color={0xfff} />
            <pointLight ref={pointLightRef} position={[0, 10 , 0  ]} intensity={80} color={"white"} castShadow />
            <pointLight ref={pointLightRef} position={[16, 10, 0  ]} intensity={80} color={"black"} castShadow />
            {/* <directionalLight ref={directionalLightRef} position={[24,10,0]}  intensity={10} castShadow/> */}
            <SpotLight ref={SpotLightRef} position={[13, 8, 2]}    angle={Math.PI / 4} ></SpotLight>
  *        <SpotLight ref={SpotLightRef} position={[-2, 8, 2]}
            
            angle={Math.PI / 5}
            intensity={100}
            color={"white"}
            penumbra={1}
            castShadow
            distance={80}/>
            <hemisphereLight 
            ref={hemisphereLightRef} 
            position={[8, 15, -2]}
            intensity={5}
            color={"red"}
            /> 

        </>
    )
}

export default Lights