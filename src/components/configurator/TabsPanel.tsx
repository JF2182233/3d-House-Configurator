import React from 'react';
import { Tab } from '@headlessui/react';
import Slider from '../ui/Slider';
import RoofSelector from './RoofSelector';
import WindowSelector from './WindowSelector';
import { roofTypeOptions } from '../../data/roofTypeOptions';
import { doorOptions } from '../../data/doorOptions';
import { gateOptions } from '../../data/gateOptions';
import { useHouseConfigStore } from '../../store/houseConfigStore';

const TabsPanel: React.FC = () => {
  const store = useHouseConfigStore();

  const tabs = [
    {
      label: 'Form',
      content: (
        <div className="space-y-4">
          <Slider label="Bredd" value={store.width} onChange={store.setWidth} min={4} max={10} step={0.1} />
          <Slider label="Längd" value={store.length} onChange={store.setLength} min={4} max={12} step={0.1} />
          <Slider label="Vägg höjd" value={store.height} onChange={store.setHeight} min={2} max={5} step={0.1} />
          <label className="block">
            <span className="text-sm font-medium">Carport</span>
            <select
              value={store.carportSide}
              onChange={(e) =>
                store.setCarportSide(e.target.value as 'none' | 'short' | 'long')
              }
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
      label: 'Taktyp',
      content: (
        <div className="space-y-4">
          <div>
            <span className="text-sm font-medium">Taktyp</span>
            <div className="mt-2 flex space-x-2">
              {roofTypeOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => store.selectRoofType(opt.id)}
                  className={`px-3 py-1 rounded border text-sm ${
                    store.roofTypeId === opt.id ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300'
                  }`}
                >
                  {opt.name}
                </button>
              ))}
            </div>
          </div>
          <label className="block">
            <span className="text-sm font-medium">Konstruktion</span>
            <select
              value={store.roofConstruction}
              onChange={(e) =>
                store.setRoofConstruction(e.target.value as 'fackverk' | 'as')
              }
              className="mt-1 block w-full border rounded-md p-2"
            >
              <option value="fackverk">Fackverk</option>
              <option value="as">Ås/sparrtak</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium">Undertak</span>
            <select
              value={store.underRoof}
              onChange={(e) =>
                store.setUnderRoof(e.target.value as 'kondensduk' | 'rospont')
              }
              className="mt-1 block w-full border rounded-md p-2"
            >
              <option value="kondensduk">Kondensduk (0 kr)</option>
              <option value="rospont">Råspont &amp; papp (+7 400 kr)</option>
            </select>
          </label>
        </div>
      ),
    },
    { label: 'Yttertak', content: <RoofSelector /> },
    {
      label: 'Utbyggnader',
      content: (
        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={store.extensionPorch} onChange={store.toggleExtensionPorch} />
          <span>Farstukvist/veranda (+18 700 kr)</span>
        </label>
      ),
    },
    {
      label: 'Fasad',
      content: (
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium">Kulör</span>
            <select
              value={store.facadeColor}
              onChange={(e) =>
                store.setFacadeColor(e.target.value as 'obehandlad' | 'oljgrund' | 'falu')
              }
              className="mt-1 block w-full border rounded-md p-2"
            >
              <option value="obehandlad">Obehandlad (0 kr)</option>
              <option value="oljgrund">Oljgrund (+3 400 kr)</option>
              <option value="falu">Falu röd (+3 400 kr)</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium">Panelriktning</span>
            <select
              value={store.panelDirection}
              onChange={(e) =>
                store.setPanelDirection(e.target.value as 'stående' | 'liggande')
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
        <label className="block">
          <span className="text-sm font-medium">Modell</span>
          <select
            value={store.doorId ?? ''}
            onChange={(e) => store.selectDoor(e.target.value || null)}
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
      ),
    },
    {
      label: 'Portar',
      content: (
        <label className="block">
          <span className="text-sm font-medium">Typ</span>
          <select
            value={store.gateId ?? ''}
            onChange={(e) => store.selectGate(e.target.value || null)}
            className="mt-1 block w-full border rounded-md p-2"
          >
            <option value="">Ingen</option>
            {gateOptions.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name} (+{g.price.toLocaleString()} kr)
              </option>
            ))}
          </select>
        </label>
      ),
    },
    {
      label: 'Grund',
      content: (
        <label className="block">
          <span className="text-sm font-medium">Typ</span>
          <select
            value={store.foundation}
            onChange={(e) =>
              store.setFoundation(
                e.target.value as 'none' | 'betong300' | 'betong400' | 'bjalklag'
              )
            }
            className="mt-1 block w-full border rounded-md p-2"
          >
            <option value="none">Ingen (0 kr)</option>
            <option value="betong300">Betong 300 mm (+19 200 kr)</option>
            <option value="betong400">Betong 400 mm (+21 200 kr)</option>
            <option value="bjalklag">Bjälklag i trä (+11 000 kr)</option>
          </select>
        </label>
      ),
    },
    {
      label: 'Yttervägg',
      content: (
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium">Stomme</span>
            <select
              value={store.frame}
              onChange={(e) => store.setFrame(e.target.value as '145' | '195')}
              className="mt-1 block w-full border rounded-md p-2"
            >
              <option value="145">145 mm (0 kr)</option>
              <option value="195">195 mm (+1 500 kr)</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium">Isolering</span>
            <select
              value={store.insulation}
              onChange={(e) =>
                store.setInsulation(e.target.value as 'none' | 'paket')
              }
              className="mt-1 block w-full border rounded-md p-2"
            >
              <option value="none">Ingen (0 kr)</option>
              <option value="paket">Isoleringspaket (+18 500 kr)</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium">Installationsskikt</span>
            <select
              value={store.installLayer}
              onChange={(e) =>
                store.setInstallLayer(e.target.value as 'none' | 'med')
              }
              className="mt-1 block w-full border rounded-md p-2"
            >
              <option value="none">Ingen (0 kr)</option>
              <option value="med">Med skikt (+3 300 kr)</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium">Invändigt ytskikt</span>
            <select
              value={store.innerFinish}
              onChange={(e) =>
                store.setInnerFinish(e.target.value as 'none' | 'osb')
              }
              className="mt-1 block w-full border rounded-md p-2"
            >
              <option value="none">Ingen (0 kr)</option>
              <option value="osb">OSB &amp; gips (+12 600 kr)</option>
            </select>
          </label>
        </div>
      ),
    },
    {
      label: 'Interiör',
      content: (
        <div className="space-y-4">
          <p>Innervägg: inget prispåslag</p>
          <Slider
            label="Innerdörr 9x21 antal"
            value={store.innerDoorCount}
            onChange={store.setInnerDoorCount}
            min={0}
            max={10}
            step={1}
          />
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
