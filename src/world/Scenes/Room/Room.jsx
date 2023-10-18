import  Environment  from '../../Staging/Environment'
import React from "react";
import { Controls } from "../../Controls/Controls";
import Lights from "../../Staging/Lights"
import ShelfWithItems from "./Models/shelf_with_objects";
import Floor from "./Models/Floor";
import Cat from "./Models/Cat";
import Treadmill from "./Models/Treadmill";
import  Sign  from "./Models/Sign";
import { ClickMe } from "./Text/ClickMe";
import Ball from "./Models/Ball";
import { Physics } from "@react-three/rapier";
import { KeyboardControls } from '@react-three/drei';
import { useState,useMemo } from 'react';
import { RigidBody } from '@react-three/rapier';
import Player from './Models/Player';
import Hoop from './Models/Hoop';
import Walls from './Models/Walls';
const Room = () => {
    return (
        <>
            <Controls />
            <Lights />
            <KeyboardControls
            map={[
                { name: "forward", keys: ["ArrowUp", "w", "W"] },
                { name: "backward", keys: ["ArrowDown", "s", "S"] },
                { name: "left", keys: ["ArrowLeft", "a", "A"] },
                { name: "right", keys: ["ArrowRight", "d", "D"] },
                { name: "jump", keys: ["Space"] },
                ]}
            >
            <Physics  >
                <group position={[0,-2,0]}>
                <Environment />
                <ShelfWithItems />
                <Sign position={[5, -0.3, -5]} scale={0.6}>
                <ClickMe />
                </Sign>
                <Ball scale={0.017}  position={[-1,4,0]}/>
                <Floor></Floor>
                <Walls></Walls>
                <Player position={[0,-9,0]}/>
                <group position={[-8, 0, -2]} rotation-y={-Math.PI/5 }>
                    <RigidBody>
                    <Cat  />
                    <Treadmill position={[-3.5, -1, 6]} />
                    </RigidBody>
                </group>
                <Hoop position={[0,0,-6]} scale={1.5} rotation-y={-Math.PI/2}/>
                </group>
            </Physics>
            
            </KeyboardControls>
        </>
    );
};

export default Room;
