import { ApiError } from "./errors/ApiError";
import type { ApiResponse } from "./types/api/ApiResponse";
import type {
  CardSearchParameters,
  CardsSearchParameters,
  ICard,
} from "./types/api/ICard";
import type { ISet } from "./types/api/ISet";
import { appendIfDefined } from "./utils/api-utils";

class BasePokemonTcgApiClient {
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

  async getCards(params?: CardsSearchParameters): Promise<ICard[]> {
    const url = new URL(`${this.#baseUrl}/cards`);
    const searchParams = url.searchParams;

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

  async getCard(id: string, params?: CardSearchParameters): Promise<ICard> {
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

class CardAPI {
  constructor(private client: BasePokemonTcgApiClient) {}

  /**
   * Finds all cards that match the given search parameters.
   * @param params Optional search parameters.
   * @returns A list of all cards that match the given search parameters.
   * @example
   * ```ts
   * const cards = await client.card.search();
   * ```
   * @example
   * ```ts
   * const cards = await client.card.search({ q: "name:charizard" });
   * ```
   * @example
   * ```ts
   * const cards = await client.card.search({ q: "name:charizard", orderBy: "name" });
   * ```
   */
  async search(params?: CardsSearchParameters): Promise<ICard[]> {
    return this.client.getCards(params);
  }

  /**
   * Finds a card by its ID.
   * @param id The ID of the card to find.
   * @param params Optional search parameters.
   * @returns The card with the given ID.
   * @example
   * ```ts
   * const card = await client.card.find("xy1-1");
   * ```
   * @example
   * ```ts
   * const card = await client.card.find("xy1-1", { select: ["name", "imageUrl"] });
   * ```
   */
  async find(id: string, params?: CardSearchParameters): Promise<ICard> {
    return this.client.getCard(id, params);
  }
}

class SetAPI {
  constructor(private client: BasePokemonTcgApiClient) {}

  /**
   * Finds all sets.
   * @returns A list of all sets.
   * @example
   * ```ts
   * const sets = await client.set.all();
   * ```
   */
  async all(): Promise<ISet[]> {
    return this.client.getSets();
  }

  /**
   * Finds a set by its ID.
   * @param id The ID of the set to find.
   * @returns The set with the given ID.
   * @example
   * ```ts
   * const set = await client.set.find("swsh1");
   * ```
   */
  async find(id: string): Promise<ISet> {
    return this.client.getSet(id);
  }
}

class TypeAPI {
  constructor(private client: BasePokemonTcgApiClient) {}

  /**
   * Finds all types.
   * @returns A list of all types.
   * @example
   * ```ts
   * const types = await client.type.all();
   * ```
   */
  async all(): Promise<string[]> {
    return this.client.getTypes();
  }

  /**
   * Finds a type by its ID.
   * @param id The ID of the type to find.
   * @returns The type with the given ID.
   * @example
   * ```ts
   * const type = await client.type.find("fire");
   * ```
   */
  async find(id: string): Promise<string> {
    return this.client.getType(id);
  }
}

class PokemonTcgApiClient {
  #baseClient = new BasePokemonTcgApiClient();

  /**
   * Sets the API key to use for all requests.
   * @param apiKey The API key to use.
   * @example
   * ```ts
   *  client.setApiKey("my-api-key");
   * ```
   * @see https://pokemontcg.io/
   */
  setApiKey(apiKey: string) {
    this.#baseClient.setApiKey(apiKey);
  }

  /** Card API methods. */
  card = new CardAPI(this.#baseClient);
  /** Set API methods. */
  set = new SetAPI(this.#baseClient);
  /** Type API methods. */
  type = new TypeAPI(this.#baseClient);
}

export { PokemonTcgApiClient };
