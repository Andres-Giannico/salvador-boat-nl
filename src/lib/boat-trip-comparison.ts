export type ComparisonCell = boolean | "partial";

export type ComparisonRow = {
  feature: string;
  salvador: ComparisonCell;
  partyBoat: ComparisonCell;
  catamaran: ComparisonCell;
};

export const generalBoatTripComparison: ComparisonRow[] = [
  { feature: "Kids & families welcome", salvador: true, partyBoat: false, catamaran: true },
  { feature: "Snorkelling equipment included", salvador: true, partyBoat: false, catamaran: "partial" },
  { feature: "Paddleboards & kayaks", salvador: true, partyBoat: false, catamaran: "partial" },
  { feature: "All-inclusive open bar & tapas", salvador: true, partyBoat: "partial", catamaran: "partial" },
  { feature: "Relaxed / non-party atmosphere", salvador: true, partyBoat: false, catamaran: true },
  { feature: "Traditional wooden boat", salvador: true, partyBoat: false, catamaran: false },
  { feature: "Sunset routes (west coast)", salvador: true, partyBoat: true, catamaran: true },
  { feature: "Departs San Antonio", salvador: true, partyBoat: "partial", catamaran: "partial" },
];

export const familyBoatTripComparison: ComparisonRow[] = [
  { feature: "Children allowed", salvador: true, partyBoat: false, catamaran: true },
  { feature: "Life jackets (all sizes)", salvador: true, partyBoat: "partial", catamaran: true },
  { feature: "Calm swim stops for kids", salvador: true, partyBoat: "partial", catamaran: true },
  { feature: "Snorkelling for children", salvador: true, partyBoat: false, catamaran: "partial" },
  { feature: "15 paddleboards included", salvador: true, partyBoat: false, catamaran: false },
  { feature: "Kid-friendly food & drinks", salvador: true, partyBoat: "partial", catamaran: "partial" },
  { feature: "Loud party music", salvador: false, partyBoat: true, catamaran: false },
  { feature: "Infants (0–5) free", salvador: true, partyBoat: false, catamaran: "partial" },
];

export const sunsetBoatTripComparison: ComparisonRow[] = [
  { feature: "Timed for golden hour", salvador: true, partyBoat: true, catamaran: true },
  { feature: "West coast sunset views", salvador: true, partyBoat: true, catamaran: true },
  { feature: "Swim stops at sunset", salvador: true, partyBoat: "partial", catamaran: "partial" },
  { feature: "Open bar & cava included", salvador: true, partyBoat: "partial", catamaran: "partial" },
  { feature: "Romantic / relaxed vibe", salvador: true, partyBoat: false, catamaran: true },
  { feature: "Traditional wooden boat", salvador: true, partyBoat: false, catamaran: false },
  { feature: "Family-friendly", salvador: true, partyBoat: false, catamaran: true },
  { feature: "Departs San Antonio", salvador: true, partyBoat: "partial", catamaran: "partial" },
];
