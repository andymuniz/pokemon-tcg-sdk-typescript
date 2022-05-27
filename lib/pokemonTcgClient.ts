import type { ICard, ISet } from "./types/api-types";

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

export class ApiError extends Error {
  code: number;
  constructor(message: string, code: number) {
    super(message);
    this.code = code;
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

  async getCards(): Promise<ICard[]> {
    const url = `${this.#baseUrl}/cards`;
    return this.#fetch<ICard[]>(url);
  }

  async getCard(id: string): Promise<ICard> {
    const url = `${this.#baseUrl}/cards/${id}`;
    return this.#fetch<ICard>(url);
  }

  async getSets(): Promise<ISet[]> {
    const url = `${this.#baseUrl}/sets`;
    return this.#fetch<ISet[]>(url);
  }

  async getSet(id: string): Promise<ISet> {
    const url = `${this.#baseUrl}/sets/${id}`;
    return this.#fetch<ISet>(url);
  }

  async getTypes(): Promise<string[]> {
    const url = `${this.#baseUrl}/types`;
    return this.#fetch<string[]>(url);
  }

  async getType(id: string): Promise<string> {
    const url = `${this.#baseUrl}/types/${id}`;
    return this.#fetch<string>(url);
  }
}

export { PokemonTcgApiClient };
