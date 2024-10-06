import React from 'react'
import { useGLTF } from '@react-three/drei'

type ModelProps = {
  nodes: {
    Object_4: {
      geometry: any; 
    };
  };
  materials: {
    'Scene_-_Root': any; 
  };
}

export default function Model(props: any) {
  const { nodes, materials } = useGLTF('/models/planets/moon/moon.gltf') as unknown as ModelProps; 
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']} scale={2.128} />
    </group>
  )
}

useGLTF.preload('/models/planets/moon/moon.gltf')
