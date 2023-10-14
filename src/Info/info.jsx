import React from 'react'
import {Text } from "@react-three/drei";
const Info = ({name,biography}) => {
  return (
    <div className='card'>
      <h3 >{name}</h3>
      {biography}
    </div>
  )
}

export default Info