export interface RoofOption {
  id: string;
  name: string;
  price: number;
  type: 'gable' | 'flat';
  color: string; // hex color for material
  texture: string; // placeholder image path
}

export const roofOptions: RoofOption[] = [
  {
    id: 'roof-gable',
    name: 'Sadeltak',
    price: 15000,
    type: 'gable',
    color: '#d97706',
    texture: 'https://via.placeholder.com/80',
  },
  {
    id: 'roof-flat',
    name: 'Platt tak',
    price: 8000,
    type: 'flat',
    color: '#6b7280',
    texture: 'https://via.placeholder.com/80',
  },
];
