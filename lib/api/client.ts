import { URL } from "url";
import { ApiError } from "../errors/ApiError";
import type { ApiResponse, ICard, ISet } from "./types";

interface GetCardQueryParameters {
  /**
   * A comma delimited list of fields to return in the response (ex. ?select=id,name). By default, all fields are returned if this query parameter is not used.
   */
  select?: Array<keyof ICard>;
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

  async getCards(): Promise<ICard[]> {
    const url = new URL(`${this.#baseUrl}/cards`);
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
