import PokemonCard from "./PokemonCard";
import { useContext, useEffect } from "react";
import CardContext from "../utils/CardContext";

const Favourites = () => {
  const { favouritesdata, setfavouritesdata } = useContext(CardContext);
  useEffect(() => {
    const favouritedata = JSON.parse(localStorage.getItem("favourites"));
    setfavouritesdata(favouritedata);
    localStorage.setItem("favourites", JSON.stringify(favouritedata));
  }, []);
  return (
    <div className="m-auto my-6 ">
            <h1 className="text-3xl text-center text-blue-950 font-bold my-6">Favourite Pokemons</h1>

    <div className="flex flex-wrap items-center justify-center">
      {favouritesdata?.map((poke, index) => (
        <PokemonCard key={index} pokemondata={poke} />
      ))}
    </div>
    </div>
  );
};

export default Favourites;
