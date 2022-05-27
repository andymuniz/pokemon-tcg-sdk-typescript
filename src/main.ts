import { PokemonTcgApiClient } from "../lib/pokemonTcgClient";

const client = new PokemonTcgApiClient();
client.setApiKey(import.meta.env.VITE_POKEMON_API_KEY);

window.Pokemon = client;
