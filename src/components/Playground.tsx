import { useQuery } from "react-query";
import { client } from "../util/client";
import type { ICard } from "../../lib/types/types";
import "./Playground.scss";

function Playground() {
  const { data, isLoading, isSuccess, isError, error } = useQuery(
    ["cards"],
    () => client.getCards()
  );

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
        <PokemonCard key={card.id} card={card} />
      ))}
    </>
  );
}

function PokemonCard({ card }: { card: ICard }) {
  return (
    <article className="pokemonCard flex-column">
      <h2 className="cardName">{card.name}</h2>
      <p className="setName">Set: {card.set.name}</p>
      <figure>
        <img src={card.images.small} />
      </figure>
    </article>
  );
}

export { Playground };
