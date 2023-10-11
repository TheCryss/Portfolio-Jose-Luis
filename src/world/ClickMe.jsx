import { Html, Text,Float,Text3D } from '@react-three/drei'
import '../styles.css'
import React from 'react'
export const ClickMe = (props) => {
  return (
    <Float>
        {/* [0,2.95,0.3] */}
    <Text3D position={[-3,5,-.2]} 
      fontSize={0.6} 
      font="/assets/fonts/Lilita_One_Regular.json" >
    {`¡Click Me!`}
      <meshNormalMaterial/>
    </Text3D>
    </Float>
  )
}
