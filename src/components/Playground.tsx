import { useQuery } from "react-query";
import { client } from "../util/client";
import type { ICard } from "../../lib/api/types";
import "./Playground.css";
import { PokemonCard } from "./PokemonCard";
import { ApiError } from "../../lib/errors/ApiError";

function Playground() {
  const { data, isLoading, isSuccess, isError, error } = useQuery<
    unknown,
    ApiError,
    ICard[]
  >(["cards"], () => client.getCards());

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isSuccess) {
    return (
      <div className="container">
        <div className="grid">
          <PokemonCards cards={data} />;
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <pre>
        <code>Error: {JSON.stringify(error)}</code>
      </pre>
    );
  }

  return null;
}

function PokemonCards({ cards }: { cards: ICard[] }) {
  return (
    <>
      {cards.map((card) => (
        <PokemonCardInfo key={card.id} card={card} />
      ))}
    </>
  );
}

function PokemonCardInfo({ card }: { card: ICard }) {
  return (
    <article className="pokemonCardInfo flex-column">
      <h2 className="cardName bg-red-700">{card.name}</h2>
      <p className="setName">Set: {card.set.name}</p>
      <PokemonCard card={card} />
    </article>
  );
}

export { Playground };
