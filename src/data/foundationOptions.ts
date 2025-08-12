export interface FoundationOption {
  id: string;
  name: string;
  price: number;
}

export const foundationOptions: FoundationOption[] = [
  { id: 'foundation-none', name: 'Ingen', price: 0 },
  { id: 'foundation-betong300', name: 'Betong 300 mm', price: 19200 },
  { id: 'foundation-betong400', name: 'Betong 400 mm', price: 21200 },
  { id: 'foundation-bjalklag', name: 'Bjälklag i trä', price: 11000 },
];
