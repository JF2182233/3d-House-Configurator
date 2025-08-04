import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import RoofSelector from './RoofSelector';
import WindowSelector from './WindowSelector';
import Slider from '../ui/Slider';
import { useHouseConfigStore } from '../../store/houseConfigStore';

const TabsPanel: React.FC = () => {
  const { length, width, height, setLength, setWidth, setHeight } = useHouseConfigStore();

  const [outerRoofMaterial, setOuterRoofMaterial] = useState('tile');
  const [outerRoofColor, setOuterRoofColor] = useState('#d97706');
  type ExtensionKey = 'garage' | 'carport' | 'balcony';
  const [extensions, setExtensions] = useState<Record<ExtensionKey, boolean>>({
    garage: false,
    carport: false,
    balcony: false,
  });
  const [facadeMaterial, setFacadeMaterial] = useState('wood');
  const [facadeColor, setFacadeColor] = useState('#ffffff');
  const [doorType, setDoorType] = useState('single');
  const [doorColor, setDoorColor] = useState('#6b7280');
  const [gateType, setGateType] = useState('none');
  const [foundationType, setFoundationType] = useState('slab');
  const [wallMaterial, setWallMaterial] = useState('timber');

  const tabs = [
    {
      label: 'Form',
      content: (
        <div className="space-y-4">
          <Slider
            label="Length"
            value={length}
            onChange={(v) => setLength(v)}
            min={4}
            max={12}
            step={0.1}
          />
          <Slider
            label="Width"
            value={width}
            onChange={(v) => setWidth(v)}
            min={4}
            max={10}
            step={0.1}
          />
          <Slider
            label="Height"
            value={height}
            onChange={(v) => setHeight(v)}
            min={2}
            max={5}
            step={0.1}
          />
        </div>
      ),
    },
    { label: 'Taktyp', content: <RoofSelector /> },
    {
      label: 'Yttertak',
      content: (
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium">Material</span>
            <select
              value={outerRoofMaterial}
              onChange={(e) => setOuterRoofMaterial(e.target.value)}
              className="mt-1 block w-full border rounded-md p-2"
            >
              <option value="tile">Tegelpannor</option>
              <option value="metal">Plåt</option>
              <option value="shingle">Shingel</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium">Färg</span>
            <input
              type="color"
              value={outerRoofColor}
              onChange={(e) => setOuterRoofColor(e.target.value)}
              className="mt-1"
            />
          </label>
        </div>
      ),
    },
    {
      label: 'Utbyggnader',
      content: (
        <div className="space-y-2">
          {(
            [
              { key: 'garage', label: 'Garage' },
              { key: 'carport', label: 'Carport' },
              { key: 'balcony', label: 'Balkong' },
            ] as { key: ExtensionKey; label: string }[]
          ).map((opt) => (
            <label key={opt.key} className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={extensions[opt.key]}
                onChange={() =>
                  setExtensions((prev) => ({ ...prev, [opt.key]: !prev[opt.key] }))
                }
              />
              {opt.label}
            </label>
          ))}
        </div>
      ),
    },
    {
      label: 'Fasad',
      content: (
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium">Material</span>
            <select
              value={facadeMaterial}
              onChange={(e) => setFacadeMaterial(e.target.value)}
              className="mt-1 block w-full border rounded-md p-2"
            >
              <option value="wood">Trä</option>
              <option value="brick">Tegel</option>
              <option value="plaster">Puts</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium">Färg</span>
            <input
              type="color"
              value={facadeColor}
              onChange={(e) => setFacadeColor(e.target.value)}
              className="mt-1"
            />
          </label>
        </div>
      ),
    },
    { label: 'Fönster', content: <WindowSelector /> },
    {
      label: 'Dörrar',
      content: (
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium">Typ</span>
            <select
              value={doorType}
              onChange={(e) => setDoorType(e.target.value)}
              className="mt-1 block w-full border rounded-md p-2"
            >
              <option value="single">Enkel</option>
              <option value="double">Dubbel</option>
              <option value="sliding">Skjutdörr</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium">Färg</span>
            <input
              type="color"
              value={doorColor}
              onChange={(e) => setDoorColor(e.target.value)}
              className="mt-1"
            />
          </label>
        </div>
      ),
    },
    {
      label: 'Portar',
      content: (
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium">Typ</span>
            <select
              value={gateType}
              onChange={(e) => setGateType(e.target.value)}
              className="mt-1 block w-full border rounded-md p-2"
            >
              <option value="none">Ingen</option>
              <option value="single">Enkel</option>
              <option value="double">Dubbel</option>
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
            <span className="text-sm font-medium">Grundtyp</span>
            <select
              value={foundationType}
              onChange={(e) => setFoundationType(e.target.value)}
              className="mt-1 block w-full border rounded-md p-2"
            >
              <option value="slab">Platta på mark</option>
              <option value="crawl">Krypgrund</option>
              <option value="basement">Källare</option>
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
            <span className="text-sm font-medium">Material</span>
            <select
              value={wallMaterial}
              onChange={(e) => setWallMaterial(e.target.value)}
              className="mt-1 block w-full border rounded-md p-2"
            >
              <option value="timber">Träpanel</option>
              <option value="brick">Tegel</option>
              <option value="concrete">Betong</option>
            </select>
          </label>
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
