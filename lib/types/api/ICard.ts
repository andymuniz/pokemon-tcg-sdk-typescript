import { ICardmarket } from "./ICardmarket";
import { ITCGPlayer } from "./ITCGPlayer";
import { ICardImage } from "./ICardImage";
import { ILegality } from "./ILegality";
import { IResistance } from "./IResistance";
import { IAncientTrait } from "./IAncientTrait";
import { IWeakness } from "./IWeakness";
import { IAttack } from "./IAttack";
import { IAbility } from "./IAbility";
import { ISet } from "./ISet";
import { Prefix } from "../../utils/type-utils";

/**
 * The Pokemon Card Object.
 * @see https://docs.pokemontcg.io/api-reference/cards/card-object
 */
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

/**
 * Name of a card field.
 */
type CardField = keyof ICard;

/**
 * Field to order by. Prefix with "-" to order descending.
 */
type OrderField = CardField | Prefix<CardField, "-">;

/**
 * A list of fields to return in the response (ex. ["id", "name"]).
 * By default, all fields are returned if this query parameter is not used.
 */
type SelectParameter = CardField[];

/**
 * The field(s) to order the results by.
 * e.g. Order all cards from Sun & Moon by their name (ascending) and then their number (descending)
 *      ["name","-number"]
 */
type OrderByParameter = OrderField[];

export interface CardSearchParameters {
  select?: SelectParameter;
}

export interface CardsSearchParameters {
  /**
   * The search query.
   * https://docs.pokemontcg.io/api-reference/cards/search-cards
   */
  q?: string;
  /**
   * The page of data to access.
   */
  page?: number;
  /**
   * The maximum amount of cards to return.
   */
  pageSize?: number;
  /**
   * The field(s) to order the results by.
   * https://docs.pokemontcg.io/api-reference/cards/search-cards/#ordering-data
   */
  orderBy?: OrderByParameter;
  /**
   * A comma delimited list of fields to return in the response (ex. ?select=id,name).
   * By default, all fields are returned if this query parameter is not used.
   */
  select?: SelectParameter;
}
