import {  useState} from "react";
import { Link } from "react-router-dom";


const PokemonCard = ({pokemondata}) => {
  const {id, name, sprites,types} = pokemondata;
  const{front_shiny}=sprites;
  const alltypes=types.map((type)=>type.type.name);
 
  const [favouritetext, setfavouritetext] = useState(() => {
    const stored = localStorage.getItem(`favourite-${pokemondata.name}`);
    return stored || "Favourite";
  });
  const [comparetext, setcomparetext] = useState(() => {
    const stored = localStorage.getItem(`Compare-${pokemondata.name}`);
    return stored || "Compare";
  });
      
  return (
    <div className=" border-blue-950 w-40 h-60 m-1  md:w-63  md:h-58   text-shadow-blue-950 p-2  md:m-2 md:p-2 rounded-xl shadow-2xl shadow-blue-400 hover:scale-105 hover:border flex flex-col  ">
      <Link to="/details" state={{ pokemondata: pokemondata }}>
        <div>
          <div className="flex">
          <span className="bg-blue-200   p-1 rounded-lg font-bold">
            # {id}
          </span>
          <span className="font-bold ml-auto md:text-xl text-blue-950">
            {name}
          </span>
          </div>
          <img
            className="m-auto h-28 md:h-30"
            src={front_shiny}
          />
          <p className="text-center text-blue-900 md:text-lg">
            <span className="font-bold text-blue-950">Types : </span>
            {alltypes.join(" , ")}
          </p>
        </div>
      </Link>
      <div className="flex justify-center  mt-auto">
          <button
            className="w-1/2 text-sm font-bold shadow-md shadow-blue-700  border border-blue-950 m-0.5 md:m-1 p-1 bg-blue-200 rounded-md hover:bg-blue-600 hover:text-white"
            onClick={() => {
              setfavouritetext("Added");
              localStorage.setItem(`favourite-${name}`, "Added");

              const favouritedata = JSON.parse(
                localStorage.getItem("favourites") || []
              );
              const presentid = favouritedata.find(
                (item) => item.id ==id
              );
              if (presentid == undefined) {
                favouritedata.push(pokemondata);
              }
              localStorage.setItem("favourites", JSON.stringify(favouritedata));
            }}
          >
            {favouritetext}
          </button>
          <button
            className="w-1/2 text-sm border shadow-md shadow-blue-700  border-blue-950 font-bold m-0.5 md:m-1 p-1 bg-blue-300 rounded-md hover:bg-blue-600 hover:text-white"
            onClick={() => {
              const comparisions = JSON.parse(
                localStorage.getItem("comparisions") || []
              );
              setcomparetext("Selected");
              localStorage.setItem(`Compare-${name}`, "Selected");
              const present = comparisions.find(
                (item) => item.id == id
              );
              if (present == undefined) {
                comparisions?.push(pokemondata);
              }

              localStorage.setItem(
                "comparisions",
                JSON.stringify(comparisions)
              );
            }}
          >
            {comparetext}
          </button>
      </div>
    </div>
  );
};

export default PokemonCard;
