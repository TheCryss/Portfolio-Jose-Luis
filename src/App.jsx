import { Canvas } from "@react-three/fiber"
import Experience from "./world/experience"

import Info from "./Info/info"
const App = () => {
    const cameraSettings = {
        position: [0, 8, 12]
        // fov: 60
    }
    return (
        <>
            <div className="header">
                <Info  name="Jose Luis Hincapié Bucheli" biography="3D Web Developer"/>
            </div>
            <Canvas shadows camera={cameraSettings} >
                <Experience/>
            </Canvas>

        </>
    )
}
export default App