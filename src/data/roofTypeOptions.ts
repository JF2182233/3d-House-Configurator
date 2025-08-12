export interface RoofTypeOption {
  id: string;
  name: string;
  price: number;
  type: 'flat' | 'gable' | 'shed';
}

export const roofTypeOptions: RoofTypeOption[] = [
  {
    id: 'rooftype-plant',
    name: 'Plant innertak',
    price: 0,
    type: 'flat',
  },
  {
    id: 'rooftype-brutet',
    name: 'Brutet innertak',
    price: 0,
    type: 'gable',
  },
  {
    id: 'rooftype-pulpett',
    name: 'Pulpettak',
    price: 0,
    type: 'shed',
  },
];
