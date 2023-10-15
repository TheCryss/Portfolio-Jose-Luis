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

const Room = () => {
    return (
        <>
            <Controls />
            <Lights />
            <Physics debug>
                <Environment />
                <ShelfWithItems />
                <Sign position={[5, -0.3, -5]} scale={0.6}>
                <ClickMe />
                </Sign>
                <Ball scale={0.025}  position={[-1,4,0]}/>
                <Floor></Floor>
                <group position={[0, 0, -2]} rotation-y={Math.PI * 0.05}>
                    <Cat />
                    <Treadmill position={[-3.5, -1, 6]} />
                </group>
            </Physics>
        </>
    );
};

export default Room;
