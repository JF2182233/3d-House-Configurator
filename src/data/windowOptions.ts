export interface WindowOption {
  id: string;
  name: string;
  price: number;
  size: [number, number]; // width, height in meters
  texture: string; // placeholder image path
}

export const windowOptions: WindowOption[] = [
  {
    id: 'window-9x9',
    name: '9x9',
    price: 7300,
    size: [0.9, 0.9],
    texture: 'https://via.placeholder.com/80',
  },
  {
    id: 'window-9x12',
    name: '9x12',
    price: 8300,
    size: [0.9, 1.2],
    texture: 'https://via.placeholder.com/80',
  },
];
