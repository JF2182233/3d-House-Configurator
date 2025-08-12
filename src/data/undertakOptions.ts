export interface UndertakOption {
  id: string;
  name: string;
  price: number;
}

export const undertakOptions: UndertakOption[] = [
  { id: 'undertak-kondensduk', name: 'Kondensduk', price: 0 },
  { id: 'undertak-råspont', name: 'Råspont & papp', price: 7400 },
];
