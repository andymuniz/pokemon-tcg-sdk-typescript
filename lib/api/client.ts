import { URL, URLSearchParams } from "url";
import { ApiError } from "../errors/ApiError";
import type { Prefix } from "../utils/type-utils";
import type { ApiResponse, ICard, ISet } from "./types";

type CardField = keyof ICard;
type OrderField = CardField | Prefix<CardField, "-">;

/**
 * A list of fields to return in the response (ex. ["id", "name"]). By default, all fields are returned if this query parameter is not used.
 */
type SelectParameter = CardField[];

/**
 * The field(s) to order the results by.
 * e.g. Order all cards from Sun & Moon by their name (ascending) and then their number (descending)
 */
type OrderByParameter = OrderField[];

interface GetCardQueryParameters {
  select?: SelectParameter;
}

interface GetCardsQueryParameters {
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
  orderBy?: OrderByParameter;
  select?: SelectParameter;
}

function appendIfDefined(
  params: URLSearchParams,
  key: string,
  value: unknown | undefined
): void {
  if (value !== undefined) {
    params.append(key, String(value));
  }
}

class PokemonTcgApiClient {
  #baseUrl: string = "https://api.pokemontcg.io/v2";
  #headers = new Headers();

  setApiKey(apiKey: string) {
    this.#headers.set("X-Api-Key", apiKey);
  }

  async #fetch<T>(url: string): Promise<T> {
    // set the API key in the header
    const response = await fetch(url, {
      headers: this.#headers,
    });
    const data: ApiResponse<T> = await response.json();

    if ("error" in data) {
      throw new ApiError(data.error.message, data.error.code);
    }
    return data.data;
  }

  async getCards(params?: GetCardsQueryParameters): Promise<ICard[]> {
    const url = new URL(`${this.#baseUrl}/cards`);
    const searchParams = new URLSearchParams();

    const { q, page, pageSize, orderBy, select } = params ?? {};
    appendIfDefined(searchParams, "q", q);
    appendIfDefined(searchParams, "page", page);
    appendIfDefined(searchParams, "pageSize", pageSize);
    appendIfDefined(searchParams, "orderBy", orderBy);
    if (select?.length) {
      searchParams.append("select", select.join(","));
    }

    return this.#fetch<ICard[]>(url.toString());
  }

  async getCard(id: string, params?: GetCardQueryParameters): Promise<ICard> {
    const url = new URL(`${this.#baseUrl}/cards/${id}`);
    if (params?.select) {
      url.searchParams.set("select", params.select.join(","));
    }
    return this.#fetch<ICard>(url.toString());
  }

  async getSets(): Promise<ISet[]> {
    const url = new URL(`${this.#baseUrl}/sets`);
    return this.#fetch<ISet[]>(url.toString());
  }

  async getSet(id: string): Promise<ISet> {
    const url = new URL(`${this.#baseUrl}/sets/${id}`);
    return this.#fetch<ISet>(url.toString());
  }

  async getTypes(): Promise<string[]> {
    const url = new URL(`${this.#baseUrl}/types`);
    return this.#fetch<string[]>(url.toString());
  }

  async getType(id: string): Promise<string> {
    const url = new URL(`${this.#baseUrl}/types/${id}`);
    return this.#fetch<string>(url.toString());
  }
}

export { PokemonTcgApiClient };
