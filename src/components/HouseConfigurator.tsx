import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ControlPanel from './ControlPanel';
import HouseModel from './HouseModel';
import PriceDisplay from './PriceDisplay';
import { useHouseStore } from '../store/houseStore';

const HouseConfigurator: React.FC = () => {
  const { length, width, height } = useHouseStore();
  
  return (
    <div className="w-full max-w-7xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row">
      {/* 3D Viewer */}
      <div className="w-full lg:w-2/3 h-[400px] lg:h-[600px] relative">
        <Canvas
          camera={{ position: [10, 5, 10], fov: 50 }}
          shadows
          className="w-full h-full"
        >
          <ambientLight intensity={0.3} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1} 
            castShadow 
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <HouseModel />
          <OrbitControls 
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
            enableZoom={true}
            enablePan={true}
          />
          <gridHelper args={[30, 30, 'gray', 'gray']} />
        </Canvas>
        
        {/* Dimension Labels */}
        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm p-2 rounded-md shadow text-sm">
          <p>Length: {length} m</p>
          <p>Width: {width} m</p>
          <p>Height: {height} m</p>
        </div>
      </div>
      
      {/* Controls */}
      <div className="w-full lg:w-1/3 p-6 flex flex-col">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">House Configuration</h2>
        <ControlPanel />
        <div className="mt-auto pt-6">
          <PriceDisplay />
        </div>
      </div>
    </div>
  );
};

export default HouseConfigurator;