import { useContext, useEffect } from "react";
import CardContext from "../utils/CardContext";
import FavouritesDisplay from "./FavouritesDisplay";

const Favourites = () => {
  const { favouritesdata, setfavouritesdata } = useContext(CardContext);
  useEffect(() => {
    const favouritedata = JSON.parse(localStorage.getItem("favourites"));
    setfavouritesdata(favouritedata);
    localStorage.setItem("favourites", JSON.stringify(favouritedata));
  }, []);
  return (
    <div className="m-auto my-6 mt-18 ">
      <h1 className="text-3xl text-center text-blue-950 font-bold my-6">
        Favourite Pokemons
      </h1>
      <div className="flex flex-wrap items-center justify-center">
        {favouritesdata?.map((poke) => (
          <FavouritesDisplay key={poke.id} pokemondata={poke} setfavouritesdata={setfavouritesdata} favouritesdata={favouritesdata} />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
