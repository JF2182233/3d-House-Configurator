interface PriceParams {
  floorArea: number;
  windowPrice: number;
  doorPrice: number;
}

export const calculatePrice = ({ floorArea, windowPrice, doorPrice }: PriceParams): number => {
  const basePrice = floorArea * 200;
  return Math.round(basePrice + windowPrice + doorPrice);
};
