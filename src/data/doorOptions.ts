export interface DoorOption {
  id: string;
  name: string;
  price: number;
}

export const doorOptions: DoorOption[] = [
  { id: 'door-10x21-slat', name: '10x21 slät', price: 5700 },
  { id: 'door-10x21-glas-sproj', name: '10x21 m. glas/spröjs', price: 7000 },
  { id: 'door-10x21-stort-glas', name: '10x21 m. stort glas', price: 7000 },
  { id: 'door-9x21-helglas', name: '9x21 helglas', price: 12100 },
];
