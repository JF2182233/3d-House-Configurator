export interface RoofOption {
  id: string;
  name: string;
  texture: string; // placeholder image path
}

export const roofOptions: RoofOption[] = [
  {
    id: 'roof-plant',
    name: 'Plant innertak',
    texture: 'https://via.placeholder.com/80',
  },
  {
    id: 'roof-brutet',
    name: 'Brutet innertak',
    texture: 'https://via.placeholder.com/80',
  },
  {
    id: 'roof-pulpett',
    name: 'Pulpettak',
    texture: 'https://via.placeholder.com/80',
  },
];
