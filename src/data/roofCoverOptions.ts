export interface RoofCoverOption {
  id: string;
  name: string;
  price: number;
}

export const roofCoverOptions: RoofCoverOption[] = [
  { id: 'roof-none', name: 'Inget', price: 0 },
  { id: 'roof-trp20', name: 'TRP-20 plåt', price: 16700 },
  { id: 'roof-tegelprofil', name: 'Tegelprofilplåt', price: 17900 },
  { id: 'roof-takpannor', name: 'Takpannor', price: 12700 },
  { id: 'roof-klickfals', name: 'Klickfals', price: 20300 },
];
