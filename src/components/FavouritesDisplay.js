import { useState } from "react";
const FavouritesDisplay = ({ pokemondata ,setfavouritesdata,favouritesdata}) => {
  const { id, name, sprites } = pokemondata;
  const { front_shiny } = sprites;
  const [favouritetext, setfavouritetext] = useState(() => {
    const stored = localStorage.getItem(`favourite-${pokemondata.name}`);
    return stored || "Favourite";
  });
  const types = pokemondata?.types.map((typeObj) => typeObj.type.name);
  const removeFromFavourite = (id, pokemonName) => {
    const afterRemoval = favouritesdata.filter((poke) => poke.id !== id);
    const localStorageFavourites = JSON.parse(
      localStorage.getItem("favourites")
    );
    const updatedlocalStorageFavourites = localStorageFavourites.filter(
      (poke) => poke.id !== id
    );
    localStorage.setItem(
      "favourites",
      JSON.stringify(updatedlocalStorageFavourites)
    );
    localStorage.removeItem("favourite-" + pokemonName);
    setfavouritesdata(afterRemoval);
  };
  return (
    <div className="hover:border hover:border-blue-950 w-40 h-60 md:h-58 m-1  md:w-63 text-shadow-blue-950 p-2  md:m-2 md:p-2 rounded-xl shadow-2xl shadow-blue-400 hover:scale-105 text-blue-950 flex flex-col ">
      <div className="flex">
        <span className="bg-blue-200   p-1 rounded-lg font-bold"># {id}</span>
        <span className="font-bold ml-auto">{name}</span>
      </div>
      <img className="m-auto h-28 md:h-30" src={front_shiny} />
      <p className="text-center text-blue-900">
        <span className="font-bold text-blue-950">Types : </span>
        {types}
      </p>
      <div className="flex  justify-end mt-auto">
        <button
          onClick={() => {
            removeFromFavourite(id, name);
          }}
          className="w-full text-sm border shadow-md shadow-blue-700  border-blue-950 font-bold m-0.5 md:m-1 p-1 bg-blue-300 rounded-md hover:bg-blue-600 hover:text-white "
        >
          Remove
        </button>
      </div>
    </div>
  );
};
export default FavouritesDisplay;
