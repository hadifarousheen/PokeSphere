import PokemonCard from "./PokemonCard";
import { useContext } from "react";
import CardContext from "../utils/CardContext";
const RandomPokemon = () => {
  const { filteredpokemondata } = useContext(CardContext);
   const randomPoke = filteredpokemondata?.[0];
  return (
    <div className="w-fit m-auto mt-18">
      <h1 className="text-3xl font-bold my-4 text-blue-950 mb-10">
        Random Pokemon
      </h1>
        {randomPoke && <PokemonCard pokemondata={randomPoke} />}
    </div>
  );
};

export default RandomPokemon;
