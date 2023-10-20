import Room from "./Scenes/Room/Room"
import { CameraProvider } from "../Context/CameraContext"


const Experience = () => {

  return (
    <>
      <CameraProvider>
        <Room/>
      </CameraProvider>
    </>
  )
}

export default Experience

