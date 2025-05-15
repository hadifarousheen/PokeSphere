import { useContext } from "react";
import CardContext from "../utils/CardContext";
import PokemonCard from "./PokemonCard";

const Body = () => {
  const { filteredpokemondata } = useContext(CardContext);

  return (
    <div className="flex flex-wrap m-4">
      {filteredpokemondata?.map((poke, index) => (
        <PokemonCard key={poke.name} pokemondata={poke} />
      ))}
    </div>
  );
};

export default Body;
