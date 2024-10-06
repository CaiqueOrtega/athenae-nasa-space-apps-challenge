import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import EarthModel from '../../../../public/models/planets/earth/index';

export default function EarthModelPage() {
  return (
    <div className="h-screen w-screen bg-[url('../../assets/images/backgrounds/starrySky.jpeg')] bg-cover flex">
      <div className='flex-1 flex items-center justify-center pb-14'>
        <div className='p-10 bg-zinc-900/90 rounded-2xl text-white border border-7 border-gray-500 max-w-lg h-[550px] overflow-scroll'>
          <p className="">
            <strong className='text-xl'>Earth</strong>
            <br /><br />
            Earth is a terrestrial planet with an internal structure composed of the crust, mantle, and core, in addition to an external structure formed by the lithosphere, hydrosphere, biosphere, and atmosphere, which provide conditions for life.
            <br />
            About <strong>70%</strong> of Earth is covered by water, and the combination of liquid water, oxygen, and the recycling of carbon dioxide makes it a unique planet. Despite astronomical discoveries, there is no evidence of another planet with conditions as favorable to life.
            <br />
            Formed approximately <strong>4.56 billion years ago</strong>, Earth’s origin is explained by the Solar Nebula Theory.
            <br /><br />
            <strong>General data about planet Earth:</strong>
            <br />
            Diameter: Approximately <strong>12,756.2 km</strong>
            <br />
            Surface area: Approximately <strong>510,072,000 km²</strong>
            <br />
            Mass: <strong>5.9736 x 10²⁴ kg</strong>
            <br />
            Distance from the Sun: About <strong>149,600,000 km</strong>
            <br />
            Natural satellite: <strong>1 (Moon)</strong>
            <br />
            Rotation period: <strong>23 hours, 56 minutes, and 4 seconds</strong>
            <br />
            Orbital period: <strong>365 days, 5 hours, and 48 minutes</strong>
            <br />
            Average temperature: <strong>14ºC</strong>
            <br />
            World population: Approximately <strong>7,722,522,000 inhabitants</strong>
          </p>
        </div>
      </div>

      <div className='flex-1'>
        <Canvas className="h-full w-full">
          <ambientLight />
          <OrbitControls minDistance={4}
            maxDistance={10} />
          <Suspense fallback={null}>
            <EarthModel />
          </Suspense>
          <Environment preset="sunset" />
          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.5}
            scale={40}
            blur={1}
            far={10}
            resolution={256}
            color="#000000"
          />
        </Canvas>
      </div>
    </div>
  );
}
