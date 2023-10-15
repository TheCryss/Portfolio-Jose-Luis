import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useEffect,useState } from "react";
import { RigidBody } from "@react-three/rapier";

const Ball = (props) => {
    const { nodes, materials } = useGLTF("/assets/models/ball/ball.glb");
    const ballBodyRef = useRef();
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


    return (
        <RigidBody debug ref={ballBodyRef} colliders={"ball"} restitution={1.2} friction={1} gravityScale={2} linearDamping={0.5}  angularDamping={0.5}                     onCollisionEnter={()=>setPlay(!play)}
        onCollisionLeave={()=>setPlay(!play)}     >
        <group {...props} dispose={null} >
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
