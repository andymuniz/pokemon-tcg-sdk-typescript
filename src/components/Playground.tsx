import { useQuery } from "react-query";
import { client } from "../util/client";
import type { ICard } from "../../lib/types/types";
import "./Playground.css";

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
        <PokemonCardInfo key={card.id} card={card} />
      ))}
    </>
  );
}

function PokemonCardInfo({ card }: { card: ICard }) {
  return (
    <article className="pokemonCardInfo flex-column">
      <h2 className="cardName">{card.name}</h2>
      <p className="setName">Set: {card.set.name}</p>
      <PokemonCard card={card} />
    </article>
  );
}

function PokemonCard({ card }: { card: ICard }) {
  return (
    <figure className="flipImgContainer">
      <img className="pokemonCardImage" src={card.images.small} />
    </figure>
  );
}

export { Playground };
