export interface SimpleOption {
  id: string;
  name: string;
  price: number;
}

export const frameOptions: SimpleOption[] = [
  { id: 'frame-145', name: 'Stomme 145 mm', price: 0 },
  { id: 'frame-195', name: 'Stomme 195 mm', price: 1500 },
];

export const insulationOptions: SimpleOption[] = [
  { id: 'insulation-none', name: 'Ingen isolering', price: 0 },
  { id: 'insulation-package', name: 'Isoleringspaket', price: 18500 },
];

export const installLayerOptions: SimpleOption[] = [
  { id: 'install-none', name: 'Inget installationsskikt', price: 0 },
  { id: 'install-layer', name: 'Med installationsskikt', price: 3300 },
];

export const innerSurfaceOptions: SimpleOption[] = [
  { id: 'inner-none', name: 'Inget invändigt ytskikt', price: 0 },
  { id: 'inner-osb-gips', name: 'OSB & gips', price: 12600 },
];
