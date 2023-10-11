import { createRoot} from "react-dom/client";
import Experience from "./experience";
import "./styles.css"
import { Canvas } from "@react-three/fiber";
import Info from "./info";
import { extend } from '@react-three/fiber'
import { BakeShadows } from "@react-three/drei";


const root = createRoot(document.getElementById('root'));
//extend({ Info })
root.render(
  <>

  <div className="header">
    <Info  name="Jose Luis Hincapié Bucheli" biography="3D Web Developer"/>
  </div>
  
  <Canvas camera={{position:[0,3,8]}} style={{ background: "black   " }} shadows >
      <Experience/>
      <BakeShadows/>
  </Canvas>

  </>

)
