# Pokemon TCG SDK

![npm](https://img.shields.io/npm/v/@andymuniz/pokemon-tcg-sdk-typescript)
![npm bundle size](https://img.shields.io/bundlephobia/min/@andymuniz/pokemon-tcg-sdk-typescript)

This is an unofficial TypeScript SDK for the [Pokemon TCG](https://pokemontcg.io) API.

## Installation

**npm**

```bash
npm install @andymuniz/pokemon-tcg-sdk-typescript
```

## Usage

```typescript
import { PokemonTcgApiClient } from "@andymuniz/pokemon-tcg-sdk-typescript";

// Create a client
const client = new PokemonTcgApiClient();

// Set API key (optional but recommended)
client.setApiKey("your-api-key");

// Search for cards
client.card
  .search({ q: "name:charizard", orderBy: ["name"] })
  .then(console.log);

// Find a card by ID
client.card.find("xy1-1").then(console.log);

// Get a list of cards.
// Order by name then number descending.
// Return only the "name" and "number" fields.
client.card
  .search({
    orderBy: ["name", "-number"],
    select: ["name", "number"],
  })
  .then(console.log);
```
