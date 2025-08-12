export interface FacadeColorOption {
  id: string;
  name: string;
  price: number;
}

export const facadeColorOptions: FacadeColorOption[] = [
  { id: 'facade-obehandlad', name: 'Obehandlad', price: 0 },
  { id: 'facade-oljgrund', name: 'Oljgrund', price: 3400 },
  { id: 'facade-falu', name: 'Falu röd', price: 3400 },
];
