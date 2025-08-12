import { create } from 'zustand';
import { roofOptions } from '../data/roofOptions';
import { roofCoverOptions } from '../data/roofCoverOptions';
import { foundationOptions } from '../data/foundationOptions';
import { facadeColorOptions } from '../data/facadeOptions';
import {
  frameOptions,
  insulationOptions,
  installLayerOptions,
  innerSurfaceOptions,
} from '../data/wallOptions';
import { undertakOptions } from '../data/undertakOptions';

interface HouseConfigState {
  length: number;
  width: number;
  height: number;
  carportSide: 'none' | 'short' | 'long';
  roofConstruction: string;
  undertakId: string;
  selectedRoofId: string;
  selectedRoofCoverId: string;
  extensionPorch: boolean;
  selectedFacadeColorId: string;
  panelDirection: 'stående' | 'liggande';
  selectedWindowId: string | null;
  selectedDoorId: string | null;
  selectedGateId: string | null;
  selectedFoundationId: string;
  frameId: string;
  insulationId: string;
  installLayerId: string;
  innerSurfaceId: string;
  interiorDoor: boolean;
  setLength: (val: number) => void;
  setWidth: (val: number) => void;
  setHeight: (val: number) => void;
  setCarportSide: (v: 'none' | 'short' | 'long') => void;
  setRoofConstruction: (v: string) => void;
  setUndertak: (id: string) => void;
  selectRoof: (id: string) => void;
  selectRoofCover: (id: string) => void;
  toggleExtensionPorch: () => void;
  setFacadeColor: (id: string) => void;
  setPanelDirection: (v: 'stående' | 'liggande') => void;
  selectWindow: (id: string | null) => void;
  selectDoor: (id: string | null) => void;
  selectGate: (id: string | null) => void;
  setFoundation: (id: string) => void;
  setFrame: (id: string) => void;
  setInsulation: (id: string) => void;
  setInstallLayer: (id: string) => void;
  setInnerSurface: (id: string) => void;
  toggleInteriorDoor: () => void;
}

export const useHouseConfigStore = create<HouseConfigState>((set) => ({
  length: 8,
  width: 6,
  height: 3,
  carportSide: 'none',
  roofConstruction: 'fackverk',
  undertakId: undertakOptions[0].id,
  selectedRoofId: roofOptions[0].id,
  selectedRoofCoverId: roofCoverOptions[0].id,
  extensionPorch: false,
  selectedFacadeColorId: facadeColorOptions[0].id,
  panelDirection: 'stående',
  selectedWindowId: null,
  selectedDoorId: null,
  selectedGateId: null,
  selectedFoundationId: foundationOptions[0].id,
  frameId: frameOptions[0].id,
  insulationId: insulationOptions[0].id,
  installLayerId: installLayerOptions[0].id,
  innerSurfaceId: innerSurfaceOptions[0].id,
  interiorDoor: false,
  setLength: (length) => set({ length }),
  setWidth: (width) => set({ width }),
  setHeight: (height) => set({ height }),
  setCarportSide: (carportSide) => set({ carportSide }),
  setRoofConstruction: (roofConstruction) => set({ roofConstruction }),
  setUndertak: (undertakId) => set({ undertakId }),
  selectRoof: (selectedRoofId) => set({ selectedRoofId }),
  selectRoofCover: (selectedRoofCoverId) => set({ selectedRoofCoverId }),
  toggleExtensionPorch: () => set((s) => ({ extensionPorch: !s.extensionPorch })),
  setFacadeColor: (selectedFacadeColorId) => set({ selectedFacadeColorId }),
  setPanelDirection: (panelDirection) => set({ panelDirection }),
  selectWindow: (id) => set({ selectedWindowId: id }),
  selectDoor: (id) => set({ selectedDoorId: id }),
  selectGate: (id) => set({ selectedGateId: id }),
  setFoundation: (selectedFoundationId) => set({ selectedFoundationId }),
  setFrame: (frameId) => set({ frameId }),
  setInsulation: (insulationId) => set({ insulationId }),
  setInstallLayer: (installLayerId) => set({ installLayerId }),
  setInnerSurface: (innerSurfaceId) => set({ innerSurfaceId }),
  toggleInteriorDoor: () => set((s) => ({ interiorDoor: !s.interiorDoor })),
}));
