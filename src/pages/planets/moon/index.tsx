import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import MoonModel from '../../../../public/models/planets/moon/index';

export default function MoonModelPage() {
  return (
    <div className="h-screen w-screen bg-[url('../../assets/images/backgrounds/starrySky.jpeg')] bg-cover flex">
      <div className='flex-1 flex items-center justify-center pb-14'>
        <div className='p-10 bg-zinc-900/90 rounded-2xl text-white border border-7 border-gray-500 max-w-lg h-[550px] overflow-scroll'>
          <p className="">
            <strong className='text-xl'>Moon</strong>
            <br /><br />
            The Moon is Earth's only natural satellite and plays a crucial role in the planet's natural systems. It is located approximately <strong>384,400 kilometers</strong> away from Earth, and interestingly, it drifts away from our planet at a rate of about <strong>3.78 centimeters</strong> each year.
            <br />
            The Moon has a thin and fragile exosphere, which means it lacks a substantial atmosphere, making it inhospitable for human life. Its internal structure consists of three main layers: the <strong>crust</strong>, <strong>mantle</strong>, and <strong>core</strong>.
            <br />
            The lunar surface is characterized by a myriad of impact craters formed by collisions with meteoroids, as well as various fragments of rock and fine dust known as regolith. This dusty surface can be deceptive, as it hides geological features like mountains, valleys, and ancient lava plains.
            <br /><br />
            <strong>Key Facts:</strong>
            <br />
            Gravity: <strong>1.62 m/s²</strong>
            <br />
            Orbital Period: <strong>27 days</strong>
            <br />
            Age: Approximately <strong>4.53 billion years</strong>
            <br />
            Distance from Earth: <strong>384,400 km</strong>
            <br /><br />
            The Moon has a profound impact on Earth, influencing ocean tides and various natural phenomena. Its presence has fascinated humanity for centuries, inspiring countless myths, legends, and scientific studies.
          </p>

        </div>
      </div>

      <div className='flex-1'>
        <Canvas className="h-full w-full">
          <ambientLight />
          <OrbitControls minDistance={4}
            maxDistance={10} />
          <Suspense fallback={null}>
            <MoonModel />
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
