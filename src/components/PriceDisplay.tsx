import React from 'react';
import { useHouseStore } from '../store/houseStore';
import { calculatePrice } from '../utils/calculations';

const PriceDisplay: React.FC = () => {
  const { length, width, windowOption, doorOption } = useHouseStore();

  const price = calculatePrice({
    floorArea: length * width,
    windowPrice: windowOption?.price ?? 0,
    doorPrice: doorOption?.price ?? 0,
  });

  return (
    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
      <h3 className="text-lg font-medium text-gray-800 mb-1">Estimated Price</h3>
      <div className="flex items-baseline">
        <span className="text-3xl font-bold text-blue-700">€{price.toLocaleString()}</span>
        <span className="ml-1 text-sm text-gray-500">estimated total</span>
      </div>
      <div className="mt-2 text-xs text-gray-500">
        <p>Base: {length} × {width} m² @ €200/m²</p>
        {windowOption && <p>{windowOption.name}: +€{windowOption.price}</p>}
        {doorOption && <p>{doorOption.name}: +€{doorOption.price}</p>}
      </div>
    </div>
  );
};

export default PriceDisplay;