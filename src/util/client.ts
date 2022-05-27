import { PokemonTcgApiClient } from "../../lib/api/client";

const client = new PokemonTcgApiClient();
client.setApiKey(import.meta.env.VITE_POKEMON_API_KEY);

export { client };
