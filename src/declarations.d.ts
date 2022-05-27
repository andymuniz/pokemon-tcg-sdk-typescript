import { PokemonTcgApiClient } from "../lib/pokemonTcgClient";

declare global {
  // Attach client instance to window for easy browser testing
  interface Window {
    Pokemon: PokemonTcgApiClient;
  }
}
