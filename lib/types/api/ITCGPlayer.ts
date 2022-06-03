import { IPrice } from "./IPrice";

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
