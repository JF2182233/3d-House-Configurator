import { create } from 'zustand';

interface HouseState {
  length: number;
  width: number;
  height: number;
  hasWindow: boolean;
  hasDoor: boolean;
  setLength: (length: number) => void;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  toggleWindow: () => void;
  toggleDoor: () => void;
}

export const useHouseStore = create<HouseState>((set) => ({
  // Default dimensions for a 6m × 8m × 3m house
  length: 8,
  width: 6,
  height: 3,
  hasWindow: false,
  hasDoor: false,
  
  setLength: (length) => set({ length }),
  setWidth: (width) => set({ width }),
  setHeight: (height) => set({ height }),
  toggleWindow: () => set((state) => ({ hasWindow: !state.hasWindow })),
  toggleDoor: () => set((state) => ({ hasDoor: !state.hasDoor })),
}));