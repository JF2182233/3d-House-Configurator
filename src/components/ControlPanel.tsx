import React, { useState } from 'react';
import Slider from './ui/Slider';
import Button from './ui/Button';
import { useHouseStore } from '../store/houseStore';
import { DoorOpen, Maximize2, Square } from 'lucide-react';
import { windowProducts, doorProducts } from '../data/products';

const ControlPanel: React.FC = () => {
  const {
    length, setLength,
    width, setWidth,
    height, setHeight,
    hasWindow, toggleWindow, windowProduct, setWindowProduct,
    hasDoor, toggleDoor, doorProduct, setDoorProduct
  } = useHouseStore();

  const [activeTab, setActiveTab] = useState<'dimensions' | 'features'>('dimensions');

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200">
        <button
          className={`py-2 px-4 text-sm font-medium ${activeTab === 'dimensions' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('dimensions')}
        >
          Dimensions
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium ${activeTab === 'features' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('features')}
        >
          Features
        </button>
      </div>

      {/* Tab Content */}
      <div className="pt-4">
        {activeTab === 'dimensions' && (
          <div className="space-y-4">
            <h3 className="font-medium text-gray-700">Dimensions</h3>
            <div className="space-y-5">
              {/* YOUR ORIGINAL SLIDER CODE HERE */}
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
        )}

        {activeTab === 'features' && (
          <div className="space-y-4">
            <h3 className="font-medium text-gray-700">Features</h3>
            <div className="flex flex-col space-y-2">
              {/* YOUR ORIGINAL BUTTON CODE HERE */}
              <Button
                onClick={toggleWindow}
                active={hasWindow}
                icon={<Square className="h-4 w-4" />}
              >
                {hasWindow ? 'Remove Window' : 'Add Window'}
              </Button>
              {hasWindow && (
                <div className="ml-4 space-y-1">
                  {windowProducts.map((product) => (
                    <label key={product.id} className="flex items-center space-x-2 text-sm">
                      <input
                        type="radio"
                        name="windowProduct"
                        checked={windowProduct?.id === product.id}
                        onChange={() => setWindowProduct(product)}
                      />
                      <span>{product.name} (€{product.price})</span>
                    </label>
                  ))}
                </div>
              )}
              <Button
                onClick={toggleDoor}
                active={hasDoor}
                icon={<DoorOpen className="h-4 w-4" />}
              >
                {hasDoor ? 'Remove Door' : 'Add Door'}
              </Button>
              {hasDoor && (
                <div className="ml-4 space-y-1">
                  {doorProducts.map((product) => (
                    <label key={product.id} className="flex items-center space-x-2 text-sm">
                      <input
                        type="radio"
                        name="doorProduct"
                        checked={doorProduct?.id === product.id}
                        onChange={() => setDoorProduct(product)}
                      />
                      <span>{product.name} (€{product.price})</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ControlPanel;
