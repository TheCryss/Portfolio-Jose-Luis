import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
const { useGLTF, useAnimations } = require("@react-three/drei");
import { RigidBody } from '@react-three/rapier'

const Player = () => {
    const catModel = useGLTF("/assets/models/player/scene.gltf");
    const catRef = useRef();
    const catReff = useRef();
    const { animations } = catModel;
    const { actions } = useAnimations(animations, catRef);
    const moveSpeed = 10;

    useEffect(() => {
        const action = actions["Walking"]; //walk
        action.play();
    }, []);

    return (
        <RigidBody  ref={catReff} friction={0}>
            <mesh ref={catRef} rotation-y={Math.PI * 0.2} castShadow >
                <primitive scale={3} object={catModel.scene}></primitive>
            </mesh>
        </RigidBody>
    )
}

export default Player
useGLTF.preload("/assets/models/player/scene.gltf");