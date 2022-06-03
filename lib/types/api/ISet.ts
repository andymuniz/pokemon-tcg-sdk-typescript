import { ISetImage } from "./ISetImage";
import { ILegality } from "./ILegality";

/**
 * The Pokemon Card Set Object.
 * @see https://docs.pokemontcg.io/api-reference/sets/set-object
 */
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
