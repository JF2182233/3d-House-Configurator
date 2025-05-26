import React from 'react';
import Slider from './ui/Slider';
import Button from './ui/Button';
import { useHouseStore } from '../store/houseStore';
import { DoorOpen, Maximize2, Square } from 'lucide-react';

const ControlPanel: React.FC = () => {
  const { 
    length, setLength,
    width, setWidth, 
    height, setHeight,
    hasWindow, toggleWindow,
    hasDoor, toggleDoor
  } = useHouseStore();

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-medium text-gray-700">Dimensions</h3>
        
        <div className="space-y-5">
          <Slider
            label="Length"
            value={length}
            onChange={(value) => setLength(value)}
            min={4}
            max={12}
            step={0.1}
            icon={<Maximize2 className="h-4 w-4 text-blue-600" />}
          />
          
          <Slider
            label="Width"
            value={width}
            onChange={(value) => setWidth(value)}
            min={4}
            max={10}
            step={0.1}
            icon={<Maximize2 className="h-4 w-4 text-blue-600" />}
          />
          
          <Slider
            label="Roof Height"
            value={height}
            onChange={(value) => setHeight(value)}
            min={2}
            max={5}
            step={0.1}
            icon={<Square className="h-4 w-4 text-blue-600" />}
          />
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="font-medium text-gray-700">Features</h3>
        
        <div className="flex flex-col space-y-2">
          <Button
            onClick={toggleWindow}
            active={hasWindow}
            icon={<Square className="h-4 w-4" />}
          >
            {hasWindow ? 'Remove Window' : 'Add Window'}
          </Button>
          
          <Button
            onClick={toggleDoor}
            active={hasDoor}
            icon={<DoorOpen className="h-4 w-4" />}
          >
            {hasDoor ? 'Remove Door' : 'Add Door'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;