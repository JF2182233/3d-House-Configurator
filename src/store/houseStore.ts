import { create } from 'zustand';

import { Product } from '../data/products';

interface HouseState {
  length: number;
  width: number;
  height: number;
  hasWindow: boolean;
  hasDoor: boolean;
  windowProduct: Product | null;
  doorProduct: Product | null;
  setLength: (length: number) => void;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  toggleWindow: () => void;
  toggleDoor: () => void;
  setWindowProduct: (product: Product | null) => void;
  setDoorProduct: (product: Product | null) => void;
}

export const useHouseStore = create<HouseState>((set) => ({
  // Default dimensions for a 6m × 8m × 3m house
  length: 8,
  width: 6,
  height: 3,
  hasWindow: false,
  hasDoor: false,
  windowProduct: null,
  doorProduct: null,

  setLength: (length) => set({ length }),
  setWidth: (width) => set({ width }),
  setHeight: (height) => set({ height }),
  toggleWindow: () => set((state) => ({ hasWindow: !state.hasWindow, windowProduct: null })),
  toggleDoor: () => set((state) => ({ hasDoor: !state.hasDoor, doorProduct: null })),
  setWindowProduct: (product) => set({ windowProduct: product, hasWindow: !!product }),
  setDoorProduct: (product) => set({ doorProduct: product, hasDoor: !!product }),
}));
