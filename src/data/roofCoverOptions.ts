export interface RoofCoverOption {
  id: string;
  name: string;
  price: number;
  color: string; // hex color for material
  texture: string; // placeholder image path
}

export const roofCoverOptions: RoofCoverOption[] = [
  {
    id: 'roof-none',
    name: 'Inget',
    price: 0,
    color: '#ffffff',
    texture: 'https://via.placeholder.com/80',
  },
  {
    id: 'roof-trp20',
    name: 'TRP-20 plåt',
    price: 16700,
    color: '#b91c1c',
    texture: 'https://via.placeholder.com/80',
  },
  {
    id: 'roof-tegelprofil',
    name: 'Tegelprofilplåt',
    price: 17900,
    color: '#92400e',
    texture: 'https://via.placeholder.com/80',
  },
  {
    id: 'roof-takpannor',
    name: 'Takpannor',
    price: 12700,
    color: '#d97706',
    texture: 'https://via.placeholder.com/80',
  },
  {
    id: 'roof-klickfals',
    name: 'Klickfals',
    price: 20300,
    color: '#374151',
    texture: 'https://via.placeholder.com/80',
  },
];
