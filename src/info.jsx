import React from 'react'
import {Text } from "@react-three/drei";
const Info = ({name,biography}) => {
  return (
    <div>
      <h2>{name}</h2>
      {biography}
    </div>
  )
}

export default Info