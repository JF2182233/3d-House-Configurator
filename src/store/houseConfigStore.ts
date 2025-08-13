import { create } from 'zustand';
import { roofTypeOptions } from '../data/roofTypeOptions';
import { roofCoverOptions } from '../data/roofCoverOptions';

interface HouseConfigState {
  length: number;
  width: number;
  height: number;
  carportSide: 'none' | 'short' | 'long';
  roofTypeId: string;
  roofCoverId: string;
  underRoof: 'kondensduk' | 'rospont';
  roofConstruction: 'fackverk' | 'as';
  extensionPorch: boolean;
  facadeColor: 'obehandlad' | 'oljgrund' | 'falu';
  panelDirection: 'stående' | 'liggande';
  selectedWindowId: string | null;
  doorId: string | null;
  gateId: string | null;
  foundation: 'none' | 'betong300' | 'betong400' | 'bjalklag';
  frame: '145' | '195';
  insulation: 'none' | 'paket';
  installLayer: 'none' | 'med';
  innerFinish: 'none' | 'osb';
  innerDoorCount: number;
  setLength: (val: number) => void;
  setWidth: (val: number) => void;
  setHeight: (val: number) => void;
  setCarportSide: (val: 'none' | 'short' | 'long') => void;
  selectRoofType: (id: string) => void;
  selectRoofCover: (id: string) => void;
  setUnderRoof: (val: 'kondensduk' | 'rospont') => void;
  setRoofConstruction: (val: 'fackverk' | 'as') => void;
  toggleExtensionPorch: () => void;
  setFacadeColor: (val: 'obehandlad' | 'oljgrund' | 'falu') => void;
  setPanelDirection: (val: 'stående' | 'liggande') => void;
  selectWindow: (id: string | null) => void;
  selectDoor: (id: string | null) => void;
  selectGate: (id: string | null) => void;
  setFoundation: (val: 'none' | 'betong300' | 'betong400' | 'bjalklag') => void;
  setFrame: (val: '145' | '195') => void;
  setInsulation: (val: 'none' | 'paket') => void;
  setInstallLayer: (val: 'none' | 'med') => void;
  setInnerFinish: (val: 'none' | 'osb') => void;
  setInnerDoorCount: (val: number) => void;
}

export const useHouseConfigStore = create<HouseConfigState>((set) => ({
  length: 8,
  width: 6,
  height: 3,
  carportSide: 'none',
  roofTypeId: roofTypeOptions[0].id,
  roofCoverId: roofCoverOptions[0].id,
  underRoof: 'kondensduk',
  roofConstruction: 'fackverk',
  extensionPorch: false,
  facadeColor: 'obehandlad',
  panelDirection: 'stående',
  selectedWindowId: null,
  doorId: null,
  gateId: null,
  foundation: 'none',
  frame: '145',
  insulation: 'none',
  installLayer: 'none',
  innerFinish: 'none',
  innerDoorCount: 0,
  setLength: (length) => set({ length }),
  setWidth: (width) => set({ width }),
  setHeight: (height) => set({ height }),
  setCarportSide: (carportSide) => set({ carportSide }),
  selectRoofType: (roofTypeId) => set({ roofTypeId }),
  selectRoofCover: (roofCoverId) => set({ roofCoverId }),
  setUnderRoof: (underRoof) => set({ underRoof }),
  setRoofConstruction: (roofConstruction) => set({ roofConstruction }),
  toggleExtensionPorch: () => set((s) => ({ extensionPorch: !s.extensionPorch })),
  setFacadeColor: (facadeColor) => set({ facadeColor }),
  setPanelDirection: (panelDirection) => set({ panelDirection }),
  selectWindow: (selectedWindowId) => set({ selectedWindowId }),
  selectDoor: (doorId) => set({ doorId }),
  selectGate: (gateId) => set({ gateId }),
  setFoundation: (foundation) => set({ foundation }),
  setFrame: (frame) => set({ frame }),
  setInsulation: (insulation) => set({ insulation }),
  setInstallLayer: (installLayer) => set({ installLayer }),
  setInnerFinish: (innerFinish) => set({ innerFinish }),
  setInnerDoorCount: (innerDoorCount) => set({ innerDoorCount }),
}));
