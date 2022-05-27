import type { ICard, ISet } from "./types/types";

interface ApiResponse<T extends object = any> {
  data: T;
}

interface ApiError {
  message: string;
  code: number;
}

class PokemonTcgApiClient {
  #baseUrl: string = "https://api.pokemontcg.io/v2";
  #headers = new Headers();

  setApiKey(apiKey: string) {
    this.#headers.set("X-Api-Key", apiKey);
  }

  async #fetch(url: string) {
    // set the API key in the header
    const response = await fetch(url, {
      headers: this.#headers,
    });
    const data: ApiResponse = await response.json();
    return data.data;
  }

  async getCards(): Promise<ICard[]> {
    const url = `${this.#baseUrl}/cards`;
    return this.#fetch(url);
  }

  async getCard(id: string): Promise<ICard> {
    const url = `${this.#baseUrl}/cards/${id}`;
    return this.#fetch(url);
  }

  async getSets(): Promise<ISet[]> {
    const url = `${this.#baseUrl}/sets`;
    return this.#fetch(url);
  }

  async getSet(id: string): Promise<ISet> {
    const url = `${this.#baseUrl}/sets/${id}`;
    return this.#fetch(url);
  }

  async getTypes(): Promise<string[]> {
    const url = `${this.#baseUrl}/types`;
    return this.#fetch(url);
  }

  async getType(id: string): Promise<string> {
    const url = `${this.#baseUrl}/types/${id}`;
    return this.#fetch(url);
  }
}

export { PokemonTcgApiClient };
