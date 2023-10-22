import React from 'react'
import { Physics } from '@react-three/rapier'
import Floor from './Models/Floor'
import Bowling_Ball from './Models/Bowling_Ball'
import Pins from './Models/Pins'

const Bowling = () => {
  return (
    <>
    <Floor ></Floor>
    <Pins scale={0.3} position={[16,0,-8]}  rotation-y={Math.PI/2}/>
    <Bowling_Ball scale={0.54} position={[15.4,-0.5,5]} />
    </>
  )
}

export default Bowling