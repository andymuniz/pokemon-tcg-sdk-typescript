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
    const data = await response.json();
    return data;
  }

  async getCards() {
    const url = `${this.#baseUrl}/cards`;
    return this.#fetch(url);
  }

  async getCard(id: string) {
    const url = `${this.#baseUrl}/cards/${id}`;
    return this.#fetch(url);
  }

  async getSets() {
    const url = `${this.#baseUrl}/sets`;
    return this.#fetch(url);
  }

  async getSet(id: string) {
    const url = `${this.#baseUrl}/sets/${id}`;
    return this.#fetch(url);
  }

  async getTypes() {
    const url = `${this.#baseUrl}/types`;
    return this.#fetch(url);
  }

  async getType(id: string) {
    const url = `${this.#baseUrl}/types/${id}`;
    return this.#fetch(url);
  }
}

export { PokemonTcgApiClient };
