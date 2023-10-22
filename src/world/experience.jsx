import Room from "./Scenes/Room/Room"
import Bowling from "./Scenes/Bowling/Bowling"
import { CameraProvider } from "../Context/CameraContext"
import { Physics } from "@react-three/rapier"

const Experience = () => {

  return (
    <>
      <CameraProvider>
        <Physics >
        <Room/>
        <Bowling/>
        </Physics>
      </CameraProvider>
    </>
  )
}

export default Experience

