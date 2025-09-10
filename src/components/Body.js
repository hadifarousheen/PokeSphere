import { useContext, useState } from "react";
import CardContext from "../utils/CardContext";
import PokemonCard from "./PokemonCard";
import Function from "./Function";
import Pagination from "./Pagination";

const Body = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { filteredpokemondata, pokemondata } = useContext(CardContext);
  const PAGE_SIZE = 20;
  const totalPokemons = pokemondata?.length;
  const noOfPages = Math.ceil(totalPokemons / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  return (
    <div>
      <Function />
      <div className="flex flex-wrap md:m-4 items-center justify-center">
        {filteredpokemondata?.slice(start, end).map((poke, index) => (
          <PokemonCard key={index} pokemondata={poke} />
        ))}
      </div>
      <div className="bg-white mt-8 mb-4">
        <Pagination
          start={start}
          end={end}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          noOfPages={noOfPages}
        />
      </div>
    </div>
  );
};

export default Body;
