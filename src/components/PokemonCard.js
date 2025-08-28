import { useEffect, useState, useContext } from "react";
import CardContext from "../utils/CardContext";
import { Link } from "react-router-dom";

const PokemonCard = (props) => {
  const { pokemondata } = props;
  const { url } = pokemondata;
  const [pokemondetails, setpokemondetails] = useState();
  const [imageurl, setimageurl] = useState();
  const [types, settypes] = useState();
  const [favouritetext, setfavouritetext] = useState(() => {
    const stored = localStorage.getItem(`favourite-${pokemondata.name}`);
    return stored || "Favourite";
  });
  const [comparetext, setcomparetext] = useState(() => {
    const stored = localStorage.getItem(`Compare-${pokemondata.name}`);
    return stored || "Compare";
  });
  const [favalltypes, setfavalltypes] = useState();
  const {
    pokemoncompletedata,
    setpokemoncompletedata,
    setfavouritesdata,
    setcomparisiondata,
    comparisiondata,
    setfilteredpokemondata,
  } = useContext(CardContext);
  useEffect(() => {
    fetchimageurl();
  }, []);
  async function fetchimageurl() {
    try {
      const data = await fetch(url);
      const jsondata = await data.json();
      setpokemoncompletedata(jsondata);
      setimageurl(jsondata.sprites.front_shiny);
      setpokemondetails(jsondata);
      const allTypes = jsondata?.types.map((typeObj) => typeObj.type.name);
      settypes(allTypes);
      const favalltypes = pokemondata?.types.map(
        (typeObj) => typeObj.type.name
      );
      setfavalltypes(favalltypes);
    } catch (error) {}
  }

  return (
    <div className="border border-black w-40 m-1  md:w-63 text-shadow-blue-950 p-2  md:m-2 md:p-2 rounded-xl shadow-2xl shadow-blue-400 hover:scale-105 ">
      <Link to="/details" state={{ pokemondata: pokemondetails }}>
      
        <div>
          <div className="flex">
          <span className="bg-blue-200   p-1 rounded-lg font-bold">
            # {pokemondetails?.id ? pokemondetails?.id : pokemondata.id}
          </span>
          <span className="font-bold ml-auto">
         
            {pokemondetails?.name ? pokemondetails?.name : pokemondata.name}
          </span>
          </div>
          <img
            className="m-auto h-28 md:h-30"
            src={imageurl ? imageurl : pokemondata?.sprites?.front_shiny}
          />

          <p className="text-center">
            <span className="font-bold">Types : </span>
            {types && types.length > 0
              ? types.join(", ")
              : pokemondata.types
              ? pokemondata.types.map((t) => t.type.name).join(", ")
              : ""}
          </p>
        </div>
      </Link>
      <div className="flex justify-center">
        {pokemondetails ? (
          <button
            className="text-sm border border-black m-0.5 md:m-1 p-1 bg-blue-200 rounded-md"
            onClick={() => {
              setfavouritetext("Added");
              localStorage.setItem(`favourite-${pokemondata.name}`, "Added");

              const favouritedata = JSON.parse(
                localStorage.getItem("favourites") || []
              );
              const presentid = favouritedata.find(
                (item) => item.id == pokemondetails.id
              );
              if (presentid == undefined) {
                favouritedata.push(pokemondetails);
              }
              localStorage.setItem("favourites", JSON.stringify(favouritedata));
            }}
          >
            {favouritetext}
          </button>
        ) : (
          <span></span>
        )}
        {pokemondetails ? (
          <button
            className=" text-sm border border-black m-0.5 md:m-1 p-1 bg-blue-300 rounded-md"
            onClick={() => {
              const comparisions = JSON.parse(
                localStorage.getItem("comparisions") || []
              );
              setcomparetext("Selected");
              localStorage.setItem(`Compare-${pokemondata.name}`, "Selected");
              const present = comparisions.find(
                (item) => item.id == pokemondetails.id
              );
              if (present == undefined) {
                comparisions?.push(pokemondetails);
              }

              localStorage.setItem(
                "comparisions",
                JSON.stringify(comparisions)
              );
            }}
          >
            {comparetext}
          </button>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};

export default PokemonCard;
