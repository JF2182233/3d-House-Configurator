import React from 'react';
import { Tab } from '@headlessui/react';
import RoofSelector from './RoofSelector';
import WindowSelector from './WindowSelector';
import Slider from '../ui/Slider';
import { useHouseConfigStore } from '../../store/houseConfigStore';
import { undertakOptions } from '../../data/undertakOptions';
import { roofCoverOptions } from '../../data/roofCoverOptions';
import { facadeColorOptions } from '../../data/facadeOptions';
import { doorOptions } from '../../data/doorOptions';
import { gateOptions } from '../../data/gateOptions';
import { foundationOptions } from '../../data/foundationOptions';
import {
  frameOptions,
  insulationOptions,
  installLayerOptions,
  innerSurfaceOptions,
} from '../../data/wallOptions';

const TabsPanel: React.FC = () => {
  const {
    length,
    width,
    height,
    setLength,
    setWidth,
    setHeight,
    carportSide,
    setCarportSide,
    roofConstruction,
    setRoofConstruction,
    undertakId,
    setUndertak,
    selectedRoofCoverId,
    selectRoofCover,
    extensionPorch,
    toggleExtensionPorch,
    selectedFacadeColorId,
    setFacadeColor,
    panelDirection,
    setPanelDirection,
    selectedDoorId,
    selectDoor,
    selectedGateId,
    selectGate,
    selectedFoundationId,
    setFoundation,
    frameId,
    setFrame,
    insulationId,
    setInsulation,
    installLayerId,
    setInstallLayer,
    innerSurfaceId,
    setInnerSurface,
    interiorDoor,
    toggleInteriorDoor,
  } = useHouseConfigStore();

  const tabs = [
    {
      label: 'Form',
      content: (
        <div className="space-y-4">
          <Slider
            label="Längd (m)"
            value={length}
            onChange={(v) => setLength(v)}
            min={4}
            max={12}
            step={0.1}
          />
          <Slider
            label="Bredd (m)"
            value={width}
            onChange={(v) => setWidth(v)}
            min={4}
            max={10}
            step={0.1}
          />
          <Slider
            label="Vägghöjd (m)"
            value={height}
            onChange={(v) => setHeight(v)}
            min={2}
            max={5}
            step={0.1}
          />
          <label className="block">
            <span className="text-sm font-medium">Carport</span>
            <select
              value={carportSide}
              onChange={(e) => setCarportSide(e.target.value as 'none' | 'short' | 'long')}
              className="mt-1 block w-full border rounded-md p-2"
            >
              <option value="none">Ingen</option>
              <option value="short">Kortsida</option>
              <option value="long">Långsida</option>
            </select>
          </label>
        </div>
      ),
    },
    {
      label: 'Tak & undertak',
      content: (
        <div className="space-y-4">
          <RoofSelector />
          <label className="block">
            <span className="text-sm font-medium">Konstruktion</span>
            <select
              value={roofConstruction}
              onChange={(e) => setRoofConstruction(e.target.value)}
              className="mt-1 block w-full border rounded-md p-2"
            >
              <option value="fackverk">Fackverk</option>
              <option value="as-sparr">Ås/sparrtak</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium">Undertak</span>
            <select
              value={undertakId}
              onChange={(e) => setUndertak(e.target.value)}
              className="mt-1 block w-full border rounded-md p-2"
            >
              {undertakOptions.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name} {u.price > 0 ? `(+${u.price.toLocaleString()} kr)` : ''}
                </option>
              ))}
            </select>
          </label>
        </div>
      ),
    },
    {
      label: 'Yttertak',
      content: (
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium">Takbeklädnad</span>
            <select
              value={selectedRoofCoverId}
              onChange={(e) => selectRoofCover(e.target.value)}
              className="mt-1 block w-full border rounded-md p-2"
            >
              {roofCoverOptions.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.name} {o.price > 0 ? `(+${o.price.toLocaleString()} kr)` : ''}
                </option>
              ))}
            </select>
          </label>
        </div>
      ),
    },
    {
      label: 'Utbyggnader',
      content: (
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={extensionPorch}
              onChange={toggleExtensionPorch}
            />
              Farstukvist/veranda (+18 700 kr)
          </label>
        </div>
      ),
    },
    {
      label: 'Fasad',
      content: (
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium">Kulör</span>
            <select
              value={selectedFacadeColorId}
              onChange={(e) => setFacadeColor(e.target.value)}
              className="mt-1 block w-full border rounded-md p-2"
            >
              {facadeColorOptions.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} {c.price > 0 ? `(+${c.price.toLocaleString()} kr)` : ''}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium">Panelriktning</span>
              <select
                value={panelDirection}
                onChange={(e) =>
                  setPanelDirection(e.target.value as 'stående' | 'liggande')
                }
                className="mt-1 block w-full border rounded-md p-2"
              >
              <option value="stående">Stående</option>
              <option value="liggande">Liggande</option>
            </select>
          </label>
        </div>
      ),
    },
    { label: 'Fönster', content: <WindowSelector /> },
    {
      label: 'Ytterdörrar',
      content: (
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium">Modell</span>
            <select
              value={selectedDoorId ?? ''}
              onChange={(e) => selectDoor(e.target.value || null)}
              className="mt-1 block w-full border rounded-md p-2"
            >
              <option value="">Ingen</option>
              {doorOptions.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name} (+{d.price.toLocaleString()} kr)
                </option>
              ))}
            </select>
          </label>
        </div>
      ),
    },
    {
      label: 'Portar',
      content: (
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium">Typ & storlek</span>
            <select
              value={selectedGateId ?? ''}
              onChange={(e) => selectGate(e.target.value || null)}
              className="mt-1 block w-full border rounded-md p-2"
            >
              <option value="">Ingen</option>
              {gateOptions.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.type} {g.size} (+{g.price.toLocaleString()} kr)
                </option>
              ))}
            </select>
          </label>
        </div>
      ),
    },
    {
      label: 'Grund',
      content: (
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium">Typ</span>
            <select
              value={selectedFoundationId}
              onChange={(e) => setFoundation(e.target.value)}
              className="mt-1 block w-full border rounded-md p-2"
            >
              {foundationOptions.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.name} {f.price > 0 ? `(+${f.price.toLocaleString()} kr)` : ''}
                </option>
              ))}
            </select>
          </label>
        </div>
      ),
    },
    {
      label: 'Yttervägg',
      content: (
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium">Stomme</span>
            <select
              value={frameId}
              onChange={(e) => setFrame(e.target.value)}
              className="mt-1 block w-full border rounded-md p-2"
            >
              {frameOptions.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.name} {f.price > 0 ? `(+${f.price.toLocaleString()} kr)` : ''}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium">Isolering</span>
            <select
              value={insulationId}
              onChange={(e) => setInsulation(e.target.value)}
              className="mt-1 block w-full border rounded-md p-2"
            >
              {insulationOptions.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.name} {f.price > 0 ? `(+${f.price.toLocaleString()} kr)` : ''}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium">Installationsskikt</span>
            <select
              value={installLayerId}
              onChange={(e) => setInstallLayer(e.target.value)}
              className="mt-1 block w-full border rounded-md p-2"
            >
              {installLayerOptions.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.name} {f.price > 0 ? `(+${f.price.toLocaleString()} kr)` : ''}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium">Invändigt ytskikt</span>
            <select
              value={innerSurfaceId}
              onChange={(e) => setInnerSurface(e.target.value)}
              className="mt-1 block w-full border rounded-md p-2"
            >
              {innerSurfaceOptions.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.name} {f.price > 0 ? `(+${f.price.toLocaleString()} kr)` : ''}
                </option>
              ))}
            </select>
          </label>
        </div>
      ),
    },
    {
      label: 'Interiör',
      content: (
        <div className="space-y-2">
          <p className="text-sm text-gray-600">Innervägg: inget prispåslag</p>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={interiorDoor}
              onChange={toggleInteriorDoor}
            />
              Innerdörr 9x21 (+1 800 kr)
          </label>
        </div>
      ),
    },
    {
      label: 'Export',
      content: (
        <div className="space-y-2">
          <button className="px-3 py-1 border rounded">Spara ritning</button>
          <button className="px-3 py-1 border rounded">Återuppta projekt</button>
          <button className="px-3 py-1 border rounded">Ladda ner produktblad</button>
          <button className="px-3 py-1 border rounded">Begär offert</button>
          <button className="px-3 py-1 border rounded">Köp bygglovsritning</button>
          <button className="px-3 py-1 border rounded">Chatt för bygglov</button>
        </div>
      ),
    },
  ];

  return (
    <Tab.Group>
      <Tab.List className="flex overflow-x-auto border-b border-gray-200">
        {tabs.map((tab) => (
          <Tab
            key={tab.label}
            className={({ selected }) =>
              `px-4 py-2 text-sm whitespace-nowrap ${selected ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`
            }
          >
            {tab.label}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-4">
        {tabs.map((tab) => (
          <Tab.Panel key={tab.label}>{tab.content}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default TabsPanel;
