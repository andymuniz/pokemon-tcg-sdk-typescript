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
client.getCards().then(cards => {
  console.log(cards);
});

// Get a card
client.getCard('xy1-1').then(card => {
  console.log(card);
});
```