import { useState,useEffect, useContext } from "react";
import CardContext from "../utils/CardContext";
import { Link } from "react-router-dom";
const FavouritesDisplay=(props)=>{
    const { pokemondata,favouritesdata } = props;
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
  if (pokemondata?.url) {
    fetchimageurl();
  }
}, [pokemondata]);
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

  const  removeFromFavourite=(id,pokemonName)=>{
   const afterRemoval=favouritesdata.filter((poke)=>poke.id!==id);
   const localStorageFavourites=JSON.parse(localStorage.getItem('favourites'));
    
   const updatedlocalStorageFavourites=localStorageFavourites.filter((poke)=>poke.id!==id);
   localStorage.setItem('favourites',JSON.stringify(updatedlocalStorageFavourites));
   localStorage.removeItem('favourite-'+pokemonName)
  setfavouritesdata(afterRemoval);
  }
    return (
<div className="hover:border hover:border-blue-950 w-40 h-60 md:h-58 m-1  md:w-63 text-shadow-blue-950 p-2  md:m-2 md:p-2 rounded-xl shadow-2xl shadow-blue-400 hover:scale-105 text-blue-950 flex flex-col ">
          <div className="flex">
          <span className="bg-blue-200   p-1 rounded-lg font-bold">
            # {pokemondata.id}
          </span>
          <span className="font-bold ml-auto">
         
            { pokemondata.name}
          </span>
          </div>
          <img
            className="m-auto h-28 md:h-30"
            src={imageurl ? imageurl : pokemondata?.sprites?.front_shiny}
          />

          <p className="text-center text-blue-900">
            <span className="font-bold text-blue-950">Types : </span>
            {types && types.length > 0
              ? types.join(", ")
              : pokemondata.types
              ? pokemondata.types.map((t) => t.type.name).join(", ")
              : ""}
          </p>
          <div className="flex  justify-end mt-auto">
          <button onClick={()=>{
            removeFromFavourite(pokemondata.id,pokemondata.name)
          }} className="w-full text-sm border shadow-md shadow-blue-700  border-blue-950 font-bold m-0.5 md:m-1 p-1 bg-blue-300 rounded-md hover:bg-blue-600 hover:text-white ">Remove</button>
        </div>
      </div>
    )
}
export default FavouritesDisplay;