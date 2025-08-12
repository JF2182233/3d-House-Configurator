import React from 'react';
import { useHouseConfigStore } from '../../store/houseConfigStore';
import { windowOptions } from '../../data/windowOptions';
import { roofCoverOptions } from '../../data/roofCoverOptions';
import { doorOptions } from '../../data/doorOptions';
import { gateOptions } from '../../data/gateOptions';
import { foundationOptions } from '../../data/foundationOptions';
import { facadeColorOptions } from '../../data/facadeOptions';
import { undertakOptions } from '../../data/undertakOptions';
import {
  frameOptions,
  insulationOptions,
  installLayerOptions,
  innerSurfaceOptions,
} from '../../data/wallOptions';

const PRICE_PER_SQM = 200;

const PriceSummary: React.FC = () => {
  const {
    length,
    width,
    selectedWindowId,
    selectedRoofCoverId,
    selectedDoorId,
    selectedGateId,
    selectedFoundationId,
    selectedFacadeColorId,
    undertakId,
    frameId,
    insulationId,
    installLayerId,
    innerSurfaceId,
    extensionPorch,
    interiorDoor,
  } = useHouseConfigStore();

  const base = length * width * PRICE_PER_SQM;
  const windowPrice = selectedWindowId ? windowOptions.find((w) => w.id === selectedWindowId)?.price ?? 0 : 0;
  const roofCoverPrice = roofCoverOptions.find((r) => r.id === selectedRoofCoverId)?.price ?? 0;
  const doorPrice = selectedDoorId ? doorOptions.find((d) => d.id === selectedDoorId)?.price ?? 0 : 0;
  const gatePrice = selectedGateId ? gateOptions.find((g) => g.id === selectedGateId)?.price ?? 0 : 0;
  const foundationPrice = foundationOptions.find((f) => f.id === selectedFoundationId)?.price ?? 0;
  const facadePrice = facadeColorOptions.find((f) => f.id === selectedFacadeColorId)?.price ?? 0;
  const undertakPrice = undertakOptions.find((u) => u.id === undertakId)?.price ?? 0;
  const framePrice = frameOptions.find((f) => f.id === frameId)?.price ?? 0;
  const insulationPrice = insulationOptions.find((i) => i.id === insulationId)?.price ?? 0;
  const installLayerPrice = installLayerOptions.find((i) => i.id === installLayerId)?.price ?? 0;
  const innerSurfacePrice = innerSurfaceOptions.find((i) => i.id === innerSurfaceId)?.price ?? 0;
  const extensionPrice = extensionPorch ? 18700 : 0;
  const interiorDoorPrice = interiorDoor ? 1800 : 0;

  const extras =
    windowPrice +
    roofCoverPrice +
    doorPrice +
    gatePrice +
    foundationPrice +
    facadePrice +
    undertakPrice +
    framePrice +
    insulationPrice +
    installLayerPrice +
    innerSurfacePrice +
    extensionPrice +
    interiorDoorPrice;

  const total = base + extras;

  return (
    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
      <h3 className="text-lg font-medium text-gray-800 mb-1">Pris</h3>
      <div className="flex items-baseline">
        <span className="text-3xl font-bold text-blue-700">{total.toLocaleString()} kr</span>
      </div>
      <div className="mt-2 text-xs text-gray-500 space-y-1">
        <p>Bas: {length} × {width} m² @ {PRICE_PER_SQM} kr/m² = {base.toLocaleString()} kr</p>
        {roofCoverPrice > 0 && (
          <p>
            {roofCoverOptions.find((r) => r.id === selectedRoofCoverId)?.name}: +
            {roofCoverPrice.toLocaleString()} kr
          </p>
        )}
        {undertakPrice > 0 && (
          <p>
            {undertakOptions.find((u) => u.id === undertakId)?.name}: +
            {undertakPrice.toLocaleString()} kr
          </p>
        )}
        {facadePrice > 0 && (
          <p>
            {facadeColorOptions.find((f) => f.id === selectedFacadeColorId)?.name}: +
            {facadePrice.toLocaleString()} kr
          </p>
        )}
        {windowPrice > 0 && (
          <p>
            {windowOptions.find((w) => w.id === selectedWindowId)?.name}: +
            {windowPrice.toLocaleString()} kr
          </p>
        )}
        {doorPrice > 0 && (
          <p>
            {doorOptions.find((d) => d.id === selectedDoorId)?.name}: +
            {doorPrice.toLocaleString()} kr
          </p>
        )}
        {gatePrice > 0 && (
          <p>
            {(() => {
              const g = gateOptions.find((g) => g.id === selectedGateId);
              return g ? `${g.type} ${g.size}` : '';
            })()}: +{gatePrice.toLocaleString()} kr
          </p>
        )}
        {foundationPrice > 0 && (
          <p>
            {foundationOptions.find((f) => f.id === selectedFoundationId)?.name}: +
            {foundationPrice.toLocaleString()} kr
          </p>
        )}
        {framePrice > 0 && (
          <p>
            {frameOptions.find((f) => f.id === frameId)?.name}: +{framePrice.toLocaleString()} kr
          </p>
        )}
        {insulationPrice > 0 && (
          <p>
            {insulationOptions.find((i) => i.id === insulationId)?.name}: +
            {insulationPrice.toLocaleString()} kr
          </p>
        )}
        {installLayerPrice > 0 && (
          <p>
            {installLayerOptions.find((i) => i.id === installLayerId)?.name}: +
            {installLayerPrice.toLocaleString()} kr
          </p>
        )}
        {innerSurfacePrice > 0 && (
          <p>
            {innerSurfaceOptions.find((i) => i.id === innerSurfaceId)?.name}: +
            {innerSurfacePrice.toLocaleString()} kr
          </p>
        )}
        {extensionPrice > 0 && <p>Farstukvist/veranda: +{extensionPrice.toLocaleString()} kr</p>}
        {interiorDoorPrice > 0 && <p>Innerdörr 9x21: +{interiorDoorPrice.toLocaleString()} kr</p>}
        <p className="pt-1 font-medium text-gray-700">Totalt: {total.toLocaleString()} kr</p>
      </div>
    </div>
  );
};

export default PriceSummary;
