import { useContext } from "react";
import CardContext from "../utils/CardContext";
import PokemonCard from "./PokemonCard";
import Function from "./Function";

const Body = () => {
  const { filteredpokemondata } = useContext(CardContext);
  return (
    <div>
      <Function />
      <div className="flex flex-wrap md:m-4 items-center justify-center">
        {filteredpokemondata?.map((poke,index) => (
          <PokemonCard key={index} pokemondata={poke} />
        ))}
      </div>
    </div>
  );
};

export default Body;
