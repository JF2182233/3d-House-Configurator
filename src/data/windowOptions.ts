export interface WindowOption {
  id: string;
  name: string;
  price: number;
  size: [number, number]; // width, height in meters
  texture: string; // placeholder image path
}

export const windowOptions: WindowOption[] = [
  {
    id: 'window-9x5',
    name: '9x5',
    price: 3500,
    size: [0.9, 0.5],
    texture: 'https://via.placeholder.com/80',
  },
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
  {
    id: 'window-9x16',
    name: '9x16',
    price: 7800,
    size: [0.9, 1.6],
    texture: 'https://via.placeholder.com/80',
  },
  {
    id: 'window-9x20',
    name: '9x20',
    price: 8200,
    size: [0.9, 2.0],
    texture: 'https://via.placeholder.com/80',
  },
  {
    id: 'window-5x20',
    name: '5x20',
    price: 5100,
    size: [0.5, 2.0],
    texture: 'https://via.placeholder.com/80',
  },
  {
    id: 'window-5x9',
    name: '5x9',
    price: 6400,
    size: [0.5, 0.9],
    texture: 'https://via.placeholder.com/80',
  },
  {
    id: 'window-5x5',
    name: '5x5',
    price: 5400,
    size: [0.5, 0.5],
    texture: 'https://via.placeholder.com/80',
  },
];
