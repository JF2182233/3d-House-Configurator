export interface Product {
  id: string;
  name: string;
  price: number;
  url: string;
}

export const windowProducts: Product[] = [
  {
    id: 'velux-ggl-3066',
    name: 'VELUX GGL 3066 Centre-Pivot Roof Window',
    price: 750,
    url: 'https://www.velux.com',
  },
  {
    id: 'andersen-400-casement',
    name: 'Andersen 400 Series Casement Window',
    price: 680,
    url: 'https://www.andersenwindows.com',
  },
  {
    id: 'pella-250-double-hung',
    name: 'Pella 250 Series Double-Hung Window',
    price: 540,
    url: 'https://www.pella.com',
  },
];

export const doorProducts: Product[] = [
  {
    id: 'jeldwen-steel-36',
    name: 'JELD-WEN 36" Steel Front Door',
    price: 410,
    url: 'https://www.jeld-wen.com',
  },
  {
    id: 'masonite-6-panel-32',
    name: 'Masonite 32" 6-Panel Interior Door',
    price: 215,
    url: 'https://www.masonite.com',
  },
  {
    id: 'pella-encompass-fiberglass',
    name: 'Pella Encompass Fiberglass Entry Door',
    price: 620,
    url: 'https://www.pella.com',
  },
];

