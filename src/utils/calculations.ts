interface PriceParams {
  floorArea: number;
  windowCount: number;
  doorCount: number;
}

export const calculatePrice = ({ floorArea, windowCount, doorCount }: PriceParams): number => {
  // Pricing formula: price = floor-area × €200 per m² + €250 per window + €400 per door
  const basePrice = floorArea * 200;
  const windowPrice = windowCount * 250;
  const doorPrice = doorCount * 400;
  
  return Math.round(basePrice + windowPrice + doorPrice);
};