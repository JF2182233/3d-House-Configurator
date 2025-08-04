import React from 'react';
import { roofOptions } from '../../data/roofOptions';
import { useHouseConfigStore } from '../../store/houseConfigStore';

const RoofSelector: React.FC = () => {
  const selectedId = useHouseConfigStore((s) => s.selectedRoofId);
  const selectRoof = useHouseConfigStore((s) => s.selectRoof);

  return (
    <div className="flex space-x-4 overflow-x-auto pb-2">
      {roofOptions.map((opt) => (
        <button
          key={opt.id}
          onClick={() => selectRoof(opt.id)}
          className={`flex-shrink-0 w-32 border rounded-lg p-2 ${selectedId === opt.id ? 'border-blue-600' : 'border-gray-200'}`}
        >
          <img src={opt.texture} alt={opt.name} className="w-full h-20 object-cover rounded" />
          <div className="mt-2 text-sm text-center">
            <p className="font-medium text-gray-700">{opt.name}</p>
            <p className="text-gray-500 text-xs">+{opt.price.toLocaleString()} kr</p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default RoofSelector;
