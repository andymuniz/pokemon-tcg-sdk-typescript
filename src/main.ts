import { PokemonTcgApiClient } from "../lib/pokemonTcgClient";

const client = new PokemonTcgApiClient();
client.setApiKey("62c12cea-f2fd-48c5-af98-e9a03b94af4d");

window.Pokemon = client;
