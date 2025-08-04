import { create } from 'zustand';
import { roofOptions } from '../data/roofOptions';

interface HouseConfigState {
  length: number;
  width: number;
  height: number;
  selectedWindowId: string | null;
  selectedRoofId: string;
  setLength: (val: number) => void;
  setWidth: (val: number) => void;
  setHeight: (val: number) => void;
  selectWindow: (id: string | null) => void;
  selectRoof: (id: string) => void;
}

export const useHouseConfigStore = create<HouseConfigState>((set) => ({
  length: 8,
  width: 6,
  height: 3,
  selectedWindowId: null,
  selectedRoofId: roofOptions[0].id,
  setLength: (length) => set({ length }),
  setWidth: (width) => set({ width }),
  setHeight: (height) => set({ height }),
  selectWindow: (id) => set({ selectedWindowId: id }),
  selectRoof: (id) => set({ selectedRoofId: id }),
}));
