export type ComparisonCell = boolean | "partial";

export type ComparisonRow = {
  feature: string;
  salvador: ComparisonCell;
  partyBoat: ComparisonCell;
  catamaran: ComparisonCell;
};

export const generalBoatTripComparison: ComparisonRow[] = [
  { feature: "Kinderen & gezinnen welkom", salvador: true, partyBoat: false, catamaran: true },
  { feature: "Snorkeluitrusting inbegrepen", salvador: true, partyBoat: false, catamaran: "partial" },
  { feature: "Paddleboards & kajaks", salvador: true, partyBoat: false, catamaran: "partial" },
  { feature: "All-inclusive open bar & tapas", salvador: true, partyBoat: "partial", catamaran: "partial" },
  { feature: "Ontspannen / geen party-sfeer", salvador: true, partyBoat: false, catamaran: true },
  { feature: "Traditionele houten boot", salvador: true, partyBoat: false, catamaran: false },
  { feature: "Zonsondergangroutes (westkust)", salvador: true, partyBoat: true, catamaran: true },
  { feature: "Vertrek San Antonio", salvador: true, partyBoat: "partial", catamaran: "partial" },
];

export const familyBoatTripComparison: ComparisonRow[] = [
  { feature: "Kinderen toegestaan", salvador: true, partyBoat: false, catamaran: true },
  { feature: "Reddingsvesten (alle maten)", salvador: true, partyBoat: "partial", catamaran: true },
  { feature: "Rustige zwemstops voor kids", salvador: true, partyBoat: "partial", catamaran: true },
  { feature: "Snorkelen voor kinderen", salvador: true, partyBoat: false, catamaran: "partial" },
  { feature: "15 paddleboards inbegrepen", salvador: true, partyBoat: false, catamaran: false },
  { feature: "Kindvriendelijk eten & drinken", salvador: true, partyBoat: "partial", catamaran: "partial" },
  { feature: "Harde partymuziek", salvador: false, partyBoat: true, catamaran: false },
  { feature: "Baby's (0–5) gratis", salvador: true, partyBoat: false, catamaran: "partial" },
];

export const sunsetBoatTripComparison: ComparisonRow[] = [
  { feature: "Getimed op gouden uur", salvador: true, partyBoat: true, catamaran: true },
  { feature: "Zonsondergang westkust", salvador: true, partyBoat: true, catamaran: true },
  { feature: "Zwemstops bij zonsondergang", salvador: true, partyBoat: "partial", catamaran: "partial" },
  { feature: "Open bar & cava inbegrepen", salvador: true, partyBoat: "partial", catamaran: "partial" },
  { feature: "Romantische / ontspannen sfeer", salvador: true, partyBoat: false, catamaran: true },
  { feature: "Traditionele houten boot", salvador: true, partyBoat: false, catamaran: false },
  { feature: "Gezinsvriendelijk", salvador: true, partyBoat: false, catamaran: true },
  { feature: "Vertrek San Antonio", salvador: true, partyBoat: "partial", catamaran: "partial" },
];
