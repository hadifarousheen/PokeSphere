import { useContext, useEffect, useState } from "react";
import CardContext from "../utils/CardContext";
import Pagination from "./Pagination";
import ShimmerCard from "./ShimmerCard";
import Function from "./Function";
import PokemonCard from "./PokemonCard";

const Container=()=>{
    const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { filteredpokemondata, pokemondata } = useContext(CardContext);
  const PAGE_SIZE = isMobile ? 30 : 8;
  const totalPokemons = pokemondata?.length;
  const noOfPages = Math.ceil(totalPokemons / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
    return(
        <div className="mt-16 flex flex-col ">
      <Function />
      <div className="flex flex-wrap md:m-4 items-center justify-center">
        {filteredpokemondata.length != 0 ? (
          filteredpokemondata?.map((poke) => (
            <PokemonCard key={poke.name} pokemondata={poke} />
          ))
        ) : pokemondata.length == 0 ? (
          <ShimmerCard />
        ) : (
          pokemondata
            ?.slice(start, end)
            .map((poke) => <PokemonCard key={poke.name} pokemondata={poke} />)
        )}
      </div>
      {pokemondata.length == 0 ||
        (filteredpokemondata.length == 0 && (
          <div className="bg-white  mt-8  ">
            <Pagination
              start={start}
              end={end}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              noOfPages={noOfPages}
            />
          </div>
        ))}
    </div>
    )
}

export default Container;