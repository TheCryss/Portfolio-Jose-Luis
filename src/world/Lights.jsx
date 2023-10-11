import { DirectionalLightHelper,SpotLightHelper } from "three";
import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import React from 'react'
import { SpotLight } from "@react-three/drei";

const Lights = () => {
    const directionalLightRef = useRef();
    const SpotLightRef = useRef();
    // useHelper(SpotLightRef,SpotLightHelper)
    useHelper(directionalLightRef, DirectionalLightHelper);
    return (
        <>
            <ambientLight intensity={0.2} color={0xfff} />
            <directionalLight ref={directionalLightRef} position={[2, 16, 20]} intensity={1.2} castShadow />
            <SpotLight ref={SpotLightRef} position={[-0, 8, 2]}
            angle={Math.PI / 5}
            intensity={100}
            color={"white"}
            penumbra={1}
            castShadow
            distance={80}/>
        </>
    )
}

export default Lights