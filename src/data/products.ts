export interface FeatureOption {
  id: string;
  name: string;
  price: number;
}

export const windowOptions: FeatureOption[] = [
  { id: 'standard-window', name: 'Standard Window', price: 250 },
  { id: 'double-glazed-window', name: 'Double-Glazed Window', price: 400 },
];

export const doorOptions: FeatureOption[] = [
  { id: 'wooden-door', name: 'Wooden Door', price: 400 },
  { id: 'glass-door', name: 'Glass Door', price: 550 },
];
