import { useEffect, useState, useContext } from "react";
import CardContext from "../utils/CardContext";
import { Link } from "react-router-dom";

const PokemonCard = (props) => {
  const { pokemondata } = props;
  //if(pokemondata){
  const { url } = pokemondata;
  //}
  const [pokemondetails, setpokemondetails] = useState();
  const [imageurl, setimageurl] = useState();
  const [types, settypes] = useState();
  const [favouritetext, setfavouritetext] = useState("Add to Favourite");
  const [comparetext, setcomparetext] = useState("Compare");
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
    <div className="border border-black w-63 text-shadow-blue-950 font-bold m-2 p-2 rounded-xl shadow-2xl shadow-blue-400 hover:scale-105 ">
      <Link to="/details" state={{ pokemondata: pokemondetails }}>
        {" "}
        <div>
          <span className="bg-blue-200 p-0.5">
            #{pokemondetails?.id ? pokemondetails?.id : pokemondata.id}
          </span>
          <span>
            {" "}
            {pokemondetails?.name ? pokemondetails?.name : pokemondata.name}
          </span>
          <img
            className="m-auto h-30"
            src={imageurl ? imageurl : pokemondata?.sprites?.front_shiny}
          />

          <p>
            Type:{" "}
            {types && types.length > 0
              ? types.join(", ")
              : pokemondata.types
              ? pokemondata.types.map((t) => t.type.name).join(", ")
              : "Loading..."}
          </p>
        </div>
      </Link>
      {pokemondetails ? (
        <button
          className="border border-black m-1 p-1 bg-blue-200 rounded-md"
          onClick={() => {
            setfavouritetext("Favourite");
            const favouritedata = JSON.parse(
              localStorage.getItem("favourites")
            );
            favouritedata.push(pokemondetails);
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
          className="border border-black m-1 p-1 bg-blue-300 rounded-md"
          onClick={() => {
            const comparisions = JSON.parse(
              localStorage.getItem("comparisions")
            );
            comparisions.push(pokemondetails);
            setcomparetext("Selected");
            localStorage.setItem("comparisions", JSON.stringify(comparisions));
          }}
        >
          {comparetext}
        </button>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default PokemonCard;
