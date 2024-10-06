import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import EarthModel from '../../../../public/models/planets/earth/index'

export default function EarthModelPage() {
  return (
    <div className="h-screen w-screen">
      <Canvas className="h-full w-full">
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <EarthModel />
        </Suspense>
        <Environment preset='sunset' />
        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={0.5}
          scale={40}
          blur={1}
          far={10}
          resolution={256}
          color={"#000000"}
        />
      </Canvas>
    </div>
  )
}
