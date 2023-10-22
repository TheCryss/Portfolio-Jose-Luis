import Environment from '../../Staging/Environment'
import { Controls } from "../../Controls/Controls";
import Lights from "../../Staging/Lights"
import ShelfWithItems from "./Models/shelf_with_objects";
import Floor from "./Models/Floor";
import Cat from "./Models/Cat";
import Treadmill from "./Models/Treadmill";
import Sign from "./Models/Sign";
import { ClickMe } from "./Text/ClickMe";
import Ball from "./Models/Ball";
import { KeyboardControls } from '@react-three/drei';
import { RigidBody, Physics } from '@react-three/rapier';
import Player from './Models/Player';
import Hoop from './Models/Hoop';
import Walls from './Models/Walls';
import { useCameraContext, useCameraToggleContext } from './../../../Context/CameraContext'
import { useFrame } from "@react-three/fiber";
import { Vector3, AxesHelper, MathUtils } from 'three';
import Games from './Text/Games';



const Room = () => {
    const camera = useCameraContext()
    const setCamera = useCameraToggleContext()

    const handleClickBowling = () => {
        setCamera({
            position: [15, 8, 12],
            direction: [15, 4, 0],
            player: "bowling"
        })

    }
    //only for development
    //handleClickBowling()
    useFrame((state) => {

        const x = state.camera.position.x;
        const y = state.camera.position.y;
        const z = state.camera.position.z;

        if (state.camera.position.x != camera["position"][0]) {
            state.camera.position.x = MathUtils.lerp(x, camera["position"][0], 0.1);
            state.camera.position.y = MathUtils.lerp(y, camera["position"][1], 0.1);
            state.camera.position.z = MathUtils.lerp(z, camera["position"][2], 0.1);
            state.camera.lookAt(camera["direction"][0], camera["direction"][1], camera["direction"][2]);

        }


        state.camera.lookAt(camera["direction"][0], camera["direction"][1], camera["direction"][2]);

    })

    return (
        <>
            <Controls />
            <Lights />
            <group position={[0, 0, 0]}>
                <Environment />
                <ShelfWithItems position={[2, 0.1, -3]} scale={1.2} />
                <Sign position={[5, -0.3, -8]} scale={0.6}>
                    <ClickMe />
                </Sign>
                <Ball scale={0.017} position={[0, 4, 0]} />
                <Floor></Floor>
                <Walls handleClickBowling={handleClickBowling} ></Walls>
                <Games onClick={handleClickBowling} text={"Welcome"} />
                {/*                         <group position={[-8, 0, -2]} rotation-y={-Math.PI / 5}>
                            <RigidBody>
                                <Cat />
                                <Treadmill position={[-3.5, -1, 6]} />
                            </RigidBody>
                        </group> */}
                <Hoop position={[0, 0, -6]} scale={1.5} rotation-y={-Math.PI / 2} />
            </group>
        </>
    );
};

export default Room;
