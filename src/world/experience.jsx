import Room from "./Scenes/Room/Room"
import Bowling from "./Scenes/Bowling/Bowling"
import { CameraProvider } from "../Context/CameraContext"
import { Physics } from "@react-three/rapier"
import { KeyboardControls } from "@react-three/drei"

const Experience = () => {

  return (
    <>
      <CameraProvider>
        <Physics >
        <KeyboardControls
                map={[
                    { name: "forward", keys: ["ArrowUp", "w", "W"] },
                    { name: "backward", keys: ["ArrowDown", "s", "S"] },
                    { name: "left", keys: ["ArrowLeft", "a", "A"] },
                    { name: "right", keys: ["ArrowRight", "d", "D"] },
                    { name: "jump", keys: ["Space"] },
                ]}
            >
          <Room/>
          <Bowling/>
        </KeyboardControls>
        </Physics>
      </CameraProvider>
    </>
  )
}

export default Experience

