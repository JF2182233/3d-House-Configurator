interface PriceParams {
  floorArea: number;
  windowPrice: number;
  doorPrice: number;
}

export const calculatePrice = ({ floorArea, windowPrice, doorPrice }: PriceParams): number => {
  // Pricing formula: price = floor-area × €200 per m² + selected window and door prices
  const basePrice = floorArea * 200;

  return Math.round(basePrice + windowPrice + doorPrice);
};