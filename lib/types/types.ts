export interface ICard {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp: string;
  types: string[];
  evolvesFrom: string;
  evolvesTo: string[];
  rules: string[];
  ancientTrait: IAncientTrait;
  abilities: IAbility[];
  attacks: IAttack[];
  weaknesses: IWeakness[];
  resistances: IResistance[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: ISet;
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers: number[];
  legalities: ILegalities;
  regulationMark: string;
  images: ICardImages;
  tcgplayer: ITcgPlayer;
  cardmarket: ICardMarket;
}

export interface ISet {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: ILegalities;
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: ISetImages;
}

export interface IAbility {
  name: string;
  text: string;
  type: string;
}

export interface IAttack {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}

export interface IWeakness {
  type: string;
  value: string;
}

export interface IAncientTrait {
  name: string;
  text: string;
}

export interface IResistance {
  type: string;
  value: string;
}

export interface ILegalities {
  unlimited: string;
  standard: string;
  expanded: string;
}

export interface ISetImages {
  symbol: string;
  logo: string;
}

export interface ICardImages {
  small: string;
  large: string;
}

export interface ITcgPlayer {
  url: string;
  updatedAt: string;
  prices: ITcgPlayerPrices;
}

export interface ITcgPlayerPrices {
  normal: IPricePoints;
  holofoil: IPricePoints;
  reverseHolofoil: IPricePoints;
  "1stEditionHolofoil": IPricePoints;
  "1stEditionNormal": IPricePoints;
}

export interface IPricePoints {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number;
}

export interface ICardMarket {
  url: string;
  updatedAt: string;
  prices: IPrices;
}

export interface IPrices {
  averageSellPrice: number;
  lowPrice: number;
  trendPrice: number;
  germanProLow: number;
  suggestedPrice: number;
  reverseHoloSell: number;
  reverseHoloLow: number;
  reverseHoloTrend: number;
  lowPriceExPlus: number;
  avg1: number;
  avg7: number;
  avg30: number;
  reverseHoloAvg1: number;
  reverseHoloAvg7: number;
  reverseHoloAvg30: number;
}
