import { Canvas } from "@react-three/fiber"
import Experience from "./world/experience"
import { BakeShadows } from "@react-three/drei";

import Info from "./Info/info"
const App = () => {
    const cameraSettings = {
        position: [0, 3, 8]
        // fov: 60
    }

    return (
        <>
            <div className="header">
                <Info  name="Jose Luis Hincapié Bucheli" biography="3D Web Developer"/>
            </div>
            <Canvas shadows camera={cameraSettings} >
                <Experience/>
                <BakeShadows/>
            </Canvas>

        </>
    )
}
export default App