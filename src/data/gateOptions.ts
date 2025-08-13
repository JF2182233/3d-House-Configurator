export interface GateOption {
  id: string;
  name: string;
  price: number;
}

export const gateOptions: GateOption[] = [
  { id: 'slagport-25x21', name: 'Slagport 25x21', price: 14500 },
  { id: 'slagport-25x23', name: 'Slagport 25x23', price: 18800 },
  { id: 'takskjut-25x21', name: 'Takskjutport 25x21', price: 12200 },
  { id: 'takskjut-35x21', name: 'Takskjutport 35x21', price: 25050 },
  { id: 'takskjut-47x21', name: 'Takskjutport 47x21', price: 30100 },
  { id: 'vikport-29x27', name: 'Vikport 29x27', price: 24700 },
  { id: 'vikport-29x32', name: 'Vikport 29x32', price: 27400 },
  { id: 'vikport-35x32', name: 'Vikport 35x32', price: 28500 },
  { id: 'vikport-35x37', name: 'Vikport 35x37', price: 29600 },
  { id: 'vikport-41x37', name: 'Vikport 41x37', price: 32000 },
  { id: 'vikport-41x44', name: 'Vikport 41x44', price: 33900 },
];
