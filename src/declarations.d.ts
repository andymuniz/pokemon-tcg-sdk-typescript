import { PokemonTcgApiClient } from "../lib/client";

declare global {
  // Attach client instance to window for easy browser testing
  interface Window {
    Pokemon: PokemonTcgApiClient;
  }
}
