import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
const { useGLTF, useAnimations } = require("@react-three/drei");
import {RigidBody} from '@react-three/rapier'

const Cat = () => {
    const catRef = useRef();
    const catReff = useRef();
    const catModel = useGLTF("/assets/models/cat/scene.gltf");
    const { animations } = catModel;
    const { actions } = useAnimations(animations, catRef);
    const moveSpeed = 10;

    useEffect(() => {
        const action = actions["Scene"]; //walk
        action.play();
    }, []);
    const [sub, get] = useKeyboardControls();
    // useEffect(() => {
    //     return sub(
    //         (state) => state,
    //         (pressed) => {
    //             console.log("forward", pressed.forward);
    //             catReff.current.wakeUp();
    //             if (pressed.forward) {
    //                 catReff.current.applyImpulse({ x: 0, y:0 , z: -moveSpeed }, true);
    //                 catRef.current.rotation.y = Math.PI ;
    //             }
    //             if (pressed.backward) {
    //                 catReff.current.applyImpulse({ x: 0, y:0 , z: moveSpeed }, true);
    //                 catRef.current.rotation.y = Math.PI *2;

    //             }
    //             if (pressed.left){
    //                 catReff.current.applyImpulse({ x: -moveSpeed, y:0 , z: 0 }, true);
    //                 catRef.current.rotation.y = Math.PI *1.5;
    //             } 
    //             if (pressed.right) {
    //                 catReff.current.applyImpulse({ x: moveSpeed, y:0 , z: 0 }, true);
    //                 catRef.current.rotation.y = Math.PI *0.5;
    //             }
    //         }
    //     );
    // }, []);

    // useEffect(() => {
    //     catReff.current.sleep()
    // },[])


    return (
        // <RigidBody colliders={"cuboid"} ref={catReff} friction={0} type="fixed">
        <mesh  ref={catRef} rotation-y={Math.PI * 0.2} castShadow position={[0,0,0]}>
            <primitive scale={0.006} object={catModel.scene}></primitive>
        </mesh>
        // </RigidBody>
    );
};

export default Cat;
useGLTF.preload("/assets/models/cat/scene.gltf");
