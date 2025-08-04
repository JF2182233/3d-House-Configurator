import React from 'react';
import { Tab } from '@headlessui/react';
import RoofSelector from './RoofSelector';
import WindowSelector from './WindowSelector';
import Slider from '../ui/Slider';
import { useHouseConfigStore } from '../../store/houseConfigStore';

const TabsPanel: React.FC = () => {
  const { length, width, height, setLength, setWidth, setHeight } = useHouseConfigStore();

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
    { label: 'Yttertak', content: <div className="p-4 text-gray-500">Kommer snart</div> },
    { label: 'Utbyggnader', content: <div className="p-4 text-gray-500">Kommer snart</div> },
    { label: 'Fasad', content: <div className="p-4 text-gray-500">Kommer snart</div> },
    { label: 'Fönster', content: <WindowSelector /> },
    { label: 'Dörrar', content: <div className="p-4 text-gray-500">Kommer snart</div> },
    { label: 'Portar', content: <div className="p-4 text-gray-500">Kommer snart</div> },
    { label: 'Grund', content: <div className="p-4 text-gray-500">Kommer snart</div> },
    { label: 'Yttervägg', content: <div className="p-4 text-gray-500">Kommer snart</div> },
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
