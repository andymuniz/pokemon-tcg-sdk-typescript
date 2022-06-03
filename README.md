# Pokemon TCG SDK &middot; [![npm version](https://badge.fury.io/js/@andymuniz%2Fpokemon-tcg-sdk-typescript.svg)](https://badge.fury.io/js/@andymuniz%2Fpokemon-tcg-sdk-typescript)

This is an unofficial TypeScript SDK for the [Pokemon TCG](https://pokemontcg.io) API.

## Installation

**npm**

```bash
npm install @andymuniz/pokemon-tcg-sdk-typescript
```

## Usage

```typescript
import { PokemonTcgApiClient } from '@andymuniz/pokemon-tcg-sdk-typescript';

// Create a client
const client = new PokemonTcgApiClient();

// Set API key (optional but recommended)
client.setApiKey('your-api-key');

// Get a list of cards
client.getCards().then(console.log);

// Get a card
client.getCard('xy1-1').then(console.log);

// Get a list of cards.
// Order by name then number descending.
// Return only the "name" and "number" fields.
client.getCards({
  orderBy: ["name", "-number"],
  select: ["name", "number"]
}).then(console.log);
```