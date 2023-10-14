import { useEffect, useRef } from 'react'
const { useGLTF, useAnimations } = require("@react-three/drei")

const Cat = () => {
    const catRef = useRef();
    const catModel= useGLTF('/assets/models/cat/scene.gltf')
    const {animations} = catModel;
    const {actions}= useAnimations(animations,catRef)

    useEffect(() => {
        const action = actions["Scene"] //walk
        action.play()
    }, [])


    return(
    <mesh ref={catRef} rotation-y={Math.PI*.2}
    castShadow> 
        <primitive scale={0.006} object={catModel.scene}></primitive>
    </mesh>
  ) 
}

export default Cat
useGLTF.preload('/assets/models/cat/scene.gltf')