import { PokemonTcgApiClient } from "../lib/api/client";

declare global {
  // Attach client instance to window for easy browser testing
  interface Window {
    Pokemon: PokemonTcgApiClient;
  }
}
