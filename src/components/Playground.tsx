import { useQuery } from "react-query";
import { client } from "../util/client";
import { PokemonCard } from "./PokemonCard";
import { CardsSearchParameters, ICard } from "../../lib/types/api/ICard";

function Playground() {
  const params: CardsSearchParameters = {
    q: "name:pikachu",
    pageSize: 25,
  };
  const { data, isLoading, isSuccess, isError, error } = useQuery(
    ["cards", params],
    () => client.card.search(params)
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isSuccess) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-5 bg-gray-300">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 gap-4 mb-4">
          <PokemonCards cards={data} />;
        </div>
      </div>
    );
  }

  if (isError) {
    console.error(error);
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
    <article className="flex flex-col min-w-0 max-w-fit border border-solid border-black rounded bg-white p-4">
      <h2 className="whitespace-nowrap">{card.name}</h2>
      <p className="min-h-[3rem]">Set: {card.set.name}</p>
      <PokemonCard card={card} />
    </article>
  );
}

export { Playground };
