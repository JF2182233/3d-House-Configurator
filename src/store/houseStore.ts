import { create } from 'zustand';
import { FeatureOption } from '../data/products';

interface HouseState {
  length: number;
  width: number;
  height: number;
  windowOption: FeatureOption | null;
  doorOption: FeatureOption | null;
  setLength: (length: number) => void;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  selectWindow: (option: FeatureOption | null) => void;
  selectDoor: (option: FeatureOption | null) => void;
}

export const useHouseStore = create<HouseState>((set) => ({
  // Default dimensions for a 6m × 8m × 3m house
  length: 8,
  width: 6,
  height: 3,
  windowOption: null,
  doorOption: null,

  setLength: (length) => set({ length }),
  setWidth: (width) => set({ width }),
  setHeight: (height) => set({ height }),
  selectWindow: (option) => set({ windowOption: option }),
  selectDoor: (option) => set({ doorOption: option }),
}));