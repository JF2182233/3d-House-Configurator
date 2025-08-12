import React from 'react';
import { useHouseConfigStore } from '../../store/houseConfigStore';
import { windowOptions } from '../../data/windowOptions';
import { roofCoverOptions } from '../../data/roofCoverOptions';
import { doorOptions } from '../../data/doorOptions';
import { gateOptions } from '../../data/gateOptions';

const PRICE_PER_SQM = 200;

const PriceSummary: React.FC = () => {
  const store = useHouseConfigStore();

  const base = store.length * store.width * PRICE_PER_SQM;
  const windowPrice = store.selectedWindowId
    ? windowOptions.find((w) => w.id === store.selectedWindowId)?.price ?? 0
    : 0;
  const roofPrice = roofCoverOptions.find((r) => r.id === store.roofCoverId)?.price ?? 0;
  const doorPrice = store.doorId ? doorOptions.find((d) => d.id === store.doorId)?.price ?? 0 : 0;
  const gatePrice = store.gateId ? gateOptions.find((g) => g.id === store.gateId)?.price ?? 0 : 0;
  const underRoofPrices = { kondensduk: 0, rospont: 7400 } as const;
  const foundationPrices = { none: 0, betong300: 19200, betong400: 21200, bjalklag: 11000 } as const;
  const facadePrices = { obehandlad: 0, oljgrund: 3400, falu: 3400 } as const;
  const framePrices = { '145': 0, '195': 1500 } as const;
  const insulationPrices = { none: 0, paket: 18500 } as const;
  const installLayerPrices = { none: 0, med: 3300 } as const;
  const innerFinishPrices = { none: 0, osb: 12600 } as const;
  const extensionPrice = store.extensionPorch ? 18700 : 0;
  const innerDoorPrice = store.innerDoorCount * 1800;

  const extras =
    windowPrice +
    roofPrice +
    doorPrice +
    gatePrice +
    underRoofPrices[store.underRoof] +
    foundationPrices[store.foundation] +
    facadePrices[store.facadeColor] +
    framePrices[store.frame] +
    insulationPrices[store.insulation] +
    installLayerPrices[store.installLayer] +
    innerFinishPrices[store.innerFinish] +
    extensionPrice +
    innerDoorPrice;

  const total = base + extras;

  return (
    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
      <h3 className="text-lg font-medium text-gray-800 mb-1">Pris</h3>
      <div className="flex items-baseline">
        <span className="text-3xl font-bold text-blue-700">{total.toLocaleString()} kr</span>
      </div>
      <div className="mt-2 text-xs text-gray-500 space-y-1">
        <p>
          Bas: {store.length} × {store.width} m² @ {PRICE_PER_SQM} kr/m² = {base.toLocaleString()} kr
        </p>
        {roofPrice > 0 && <p>{roofCoverOptions.find((r) => r.id === store.roofCoverId)?.name}: +{roofPrice.toLocaleString()} kr</p>}
        {windowPrice > 0 && <p>{windowOptions.find((w) => w.id === store.selectedWindowId)?.name}: +{windowPrice.toLocaleString()} kr</p>}
        {doorPrice > 0 && <p>{doorOptions.find((d) => d.id === store.doorId)?.name}: +{doorPrice.toLocaleString()} kr</p>}
        {gatePrice > 0 && <p>{gateOptions.find((g) => g.id === store.gateId)?.name}: +{gatePrice.toLocaleString()} kr</p>}
        {underRoofPrices[store.underRoof] > 0 && <p>Undertak: +{underRoofPrices[store.underRoof].toLocaleString()} kr</p>}
        {foundationPrices[store.foundation] > 0 && <p>Grund: +{foundationPrices[store.foundation].toLocaleString()} kr</p>}
        {facadePrices[store.facadeColor] > 0 && <p>Fasadkulör: +{facadePrices[store.facadeColor].toLocaleString()} kr</p>}
        {framePrices[store.frame] > 0 && <p>Stomme: +{framePrices[store.frame].toLocaleString()} kr</p>}
        {insulationPrices[store.insulation] > 0 && <p>Isolering: +{insulationPrices[store.insulation].toLocaleString()} kr</p>}
        {installLayerPrices[store.installLayer] > 0 && <p>Installationsskikt: +{installLayerPrices[store.installLayer].toLocaleString()} kr</p>}
        {innerFinishPrices[store.innerFinish] > 0 && <p>Inv. ytskikt: +{innerFinishPrices[store.innerFinish].toLocaleString()} kr</p>}
        {extensionPrice > 0 && <p>Farstukvist: +{extensionPrice.toLocaleString()} kr</p>}
        {innerDoorPrice > 0 && <p>Innerdörrar: +{innerDoorPrice.toLocaleString()} kr</p>}
        <p className="pt-1 font-medium text-gray-700">Totalt: {total.toLocaleString()} kr</p>
      </div>
    </div>
  );
};

export default PriceSummary;
