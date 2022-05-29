export type ApiResponse<T = unknown> =
  | {
      data: T;
    }
  | {
      error: {
        message: string;
        code: number;
      };
    };

export interface ICard {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp?: string;
  types?: string[];
  evolvesFrom?: string;
  evolvesTo?: string[];
  rules?: string[];
  ancientTrait?: IAncientTrait;
  abilities?: IAbility[];
  attacks?: IAttack[];
  weaknesses?: IWeakness[];
  resistances?: IResistance[];
  retreatCost?: string[];
  convertedRetreatCost?: number;
  set: ISet;
  number: string;
  artist?: string;
  rarity: string;
  flavorText?: string;
  nationalPokedexNumbers?: number[];
  legalities: ILegality;
  regulationMark: string;
  images: ICardImage;
  tcgplayer: ITCGPlayer;
  cardmarket: ICardmarket;
}

export interface ISet {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: ILegality;
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: ISetImage;
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

export interface ILegality {
  unlimited: string;
  standard: string;
  expanded: string;
}

export interface ISetImage {
  symbol: string;
  logo: string;
}

export interface ICardImage {
  small: string;
  large: string;
}

export interface ITCGPlayer {
  url: string;
  updatedAt: string;
  prices: Partial<{
    normal: IPrice;
    holofoil: IPrice;
    reverseHolofoil: IPrice;
    "1stEditionNormal": IPrice;
    "1stEditionHolofoil": IPrice;
  }>;
}

export interface IPrice {
  low: number | null;
  mid: number | null;
  high: number | null;
  market: number | null;
  directLow: number | null;
}

export interface ICardmarket {
  url: string;
  updatedAt: string;
  prices: {
    averageSellPrice: number | null;
    lowPrice: number | null;
    trendPrice: number | null;
    germanProLow: number | null;
    suggestedPrice: number | null;
    reverseHoloSell: number | null;
    reverseHoloLow: number | null;
    reverseHoloTrend: number | null;
    lowPriceExPlus: number | null;
    avg1: number | null;
    avg7: number | null;
    avg30: number | null;
    reverseHoloAvg1: number | null;
    reverseHoloAvg7: number | null;
    reverseHoloAvg30: number | null;
  };
}

// TODO: IQuery for the search API parameters
