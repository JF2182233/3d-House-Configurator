export interface GateOption {
  id: string;
  type: string;
  size: string;
  price: number;
}

export const gateOptions: GateOption[] = [
  { id: 'slag-25x21', type: 'Slagport', size: '25x21', price: 14500 },
  { id: 'slag-25x23', type: 'Slagport', size: '25x23', price: 18800 },
  { id: 'tak-25x21', type: 'Takskjutport', size: '25x21', price: 12200 },
  { id: 'tak-35x21', type: 'Takskjutport', size: '35x21', price: 25050 },
  { id: 'tak-47x21', type: 'Takskjutport', size: '47x21', price: 30100 },
  { id: 'vik-29x27', type: 'Vikport', size: '29x27', price: 24700 },
  { id: 'vik-29x32', type: 'Vikport', size: '29x32', price: 27400 },
  { id: 'vik-35x32', type: 'Vikport', size: '35x32', price: 28500 },
  { id: 'vik-35x37', type: 'Vikport', size: '35x37', price: 29600 },
  { id: 'vik-41x37', type: 'Vikport', size: '41x37', price: 32000 },
  { id: 'vik-41x44', type: 'Vikport', size: '41x44', price: 33900 },
];
