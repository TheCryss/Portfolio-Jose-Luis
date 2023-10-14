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


const Room = () => {
    return (
        <>
            <Controls />
            <Lights />
            <Environment />
            <ShelfWithItems />
            <Floor></Floor>
            <Sign position={[5, -0.3, -5]} scale={0.6}>
            <ClickMe />
            </Sign>
            <group position={[0, 0, -2]} rotation-y={Math.PI * 0.05}>
                <Cat />
                <Treadmill position={[-3.5, -1, 6]} />
            </group>
        </>
    );
};

export default Room;
