import React from 'react';
import { useHouseConfigStore } from '../../store/houseConfigStore';
import { windowOptions } from '../../data/windowOptions';
import { roofOptions } from '../../data/roofOptions';

const PRICE_PER_SQM = 200;

const PriceSummary: React.FC = () => {
  const { length, width, selectedWindowId, selectedRoofId } = useHouseConfigStore();

  const base = length * width * PRICE_PER_SQM;
  const windowPrice = selectedWindowId ? windowOptions.find((w) => w.id === selectedWindowId)?.price ?? 0 : 0;
  const roofPrice = roofOptions.find((r) => r.id === selectedRoofId)?.price ?? 0;
  const extras = windowPrice + roofPrice;
  const total = base + extras;

  return (
    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
      <h3 className="text-lg font-medium text-gray-800 mb-1">Pris</h3>
      <div className="flex items-baseline">
        <span className="text-3xl font-bold text-blue-700">{total.toLocaleString()} kr</span>
      </div>
      <div className="mt-2 text-xs text-gray-500 space-y-1">
        <p>Bas: {length} × {width} m² @ {PRICE_PER_SQM} kr/m² = {base.toLocaleString()} kr</p>
        {roofPrice > 0 && (
          <p>{roofOptions.find((r) => r.id === selectedRoofId)?.name}: +{roofPrice.toLocaleString()} kr</p>
        )}
        {windowPrice > 0 && (
          <p>{windowOptions.find((w) => w.id === selectedWindowId)?.name}: +{windowPrice.toLocaleString()} kr</p>
        )}
        <p className="pt-1 font-medium text-gray-700">Totalt: {total.toLocaleString()} kr</p>
      </div>
    </div>
  );
};

export default PriceSummary;
