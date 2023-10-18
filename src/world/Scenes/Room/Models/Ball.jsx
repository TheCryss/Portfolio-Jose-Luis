import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useEffect,useState } from "react";
import { RigidBody } from "@react-three/rapier";
import { useKeyboardControls } from "@react-three/drei";
const Ball = (props) => {
    const { nodes, materials } = useGLTF("/assets/models/ball/ball.glb");
    const ballBodyRef = useRef();
    const ballBodyReff = useRef();
    const moveSpeed = 2;
    const onHandleSphere = () => {
        ballBodyRef.current.wakeUp();
        ballBodyRef.current.applyImpulse({ x: 10, y: 0, z: 0 }, true);
        
    }
    const [play, setPlay] = useState(false);
    const [hitSound] = useState(() => new Audio("/assets/sounds/hit.wav"))
    useEffect(() => {
        if (play) {
            hitSound.currentTime = 0
            hitSound.volume = Math.random()
            hitSound.play();
        }
    }, [play])
    useEffect(() => {
        ballBodyRef.current.sleep()
    },[])

    const [sub, get] = useKeyboardControls();
    useEffect(() => {
        return sub(
            (state) => state,
            (pressed) => {
                console.log("forward", pressed.forward);
                if (pressed.forward) {
                    ballBodyRef.current.applyImpulse({ x: 0, y: 0, z: -moveSpeed }, true);                 
                    ballBodyReff.current.rotation.y = Math.PI ;
                }
                if (pressed.backward) {
                    ballBodyRef.current.applyImpulse({ x: 0, y: 0, z: moveSpeed }, true);                 
                    ballBodyReff.current.rotation.y = Math.PI *2;

                }
                if (pressed.left){
                    ballBodyRef.current.applyImpulse({ x: -moveSpeed, y: 0, z: 0 }, true);                 
                    ballBodyReff.current.rotation.y = Math.PI *1.5;
                } 
                if (pressed.right) {
                    ballBodyRef.current.applyImpulse({ x: moveSpeed, y: 0, z: 0 }, true);                 
                    ballBodyReff.current.rotation.y = Math.PI *0.5;
                }
                if(pressed.jump){
                    ballBodyRef.current.applyImpulse({ x: 0, y: moveSpeed*15, z: 0 }, true);                 
                    ballBodyReff.current.rotation.y = Math.PI *0.5;
                }
            }
        );
    }, []);


    return (
        <RigidBody debug ref={ballBodyRef} colliders={"ball"} restitution={1.2} friction={1} gravityScale={2} linearDamping={0.5}  angularDamping={0.5}                     onCollisionEnter={()=>setPlay(!play)}
        onCollisionLeave={()=>setPlay(!play)}     >
        <group {...props} dispose={null}  ref={ballBodyReff} >
            <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.BasketballBall_MainColor_0.geometry}
                    material={materials.MainColor}
                    onClick={onHandleSphere}

                    
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.BasketballBall_Lines_0.geometry}
                    material={materials.Lines}
                />
            </group>
        </group>
        </RigidBody>
    );
}

export default Ball
useGLTF.preload("/assets/models/ball/ball.glb");
