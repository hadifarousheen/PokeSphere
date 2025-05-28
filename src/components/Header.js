import { useContext, useState } from "react";
import CardContext from "../utils/CardContext";
import { Link } from "react-router-dom";
const Header = () => {
  const[showmenu,setshowmenu]=useState(false);
  const {
    pokemondata,
    setfilteredpokemondata,
    setcomparisiondata,
    setfavouritesdata,
  } = useContext(CardContext);
  return (
    <div className="bg-blue-400 p-2 mb-2 shadow-xl/20">
      <nav className="flex flex-wrap justify-between">
        <h1 className="text-xl md:text-3xl font-bold ml-2">Pokemon API</h1>
        <img className="md:hidden h-8 " src="https://cdn-icons-png.flaticon.com/128/5358/5358649.png" onClick={()=>{
          setshowmenu(!showmenu);
        }}/>
       <div className="hidden md:flex ml-auto   my-auto">
          <Link to="/">
            {" "}
            <h2
              className="border border-blue-950 m-1 p-1.5 rounded text-blue-950 font-bold shadow-xl hover:bg-blue-500 "
              onClick={() => {
                setfilteredpokemondata(pokemondata);
              }}
            >
              Get All Cards
            </h2>
          </Link>
          <Link to="/favourites">
            {" "}
            <h2
              className="border border-blue-950 m-1 p-1.5 rounded text-blue-950 font-bold shadow-xl hover:bg-blue-500"
              onClick={() => {
                const favouritedata = JSON.parse(
                  localStorage.getItem("favourites")
                );
                setfavouritesdata(favouritedata);
                localStorage.setItem(
                  "favourites",
                  JSON.stringify(favouritedata)
                );
              }}
            >
              Favourites
            </h2>
          </Link>
          <Link to="/compare">
            {" "}
            <h2
              className="border border-blue-950 m-1 p-1.5 rounded text-blue-950 font-bold shadow-xl hover:bg-blue-500"
              onClick={() => {
                const comparisiondata2 = JSON.parse(
                  localStorage.getItem("comparisions")
                );

                setcomparisiondata(comparisiondata2);
                localStorage.setItem(
                  "comparisions",
                  JSON.stringify(comparisiondata2)
                );
              }}
            >
              Comparision
            </h2>
          </Link>
          <Link to="/random">
            {" "}
            <h2
              className="border border-blue-950 m-1 p-1.5 rounded text-blue-950 font-bold shadow-xl hover:bg-blue-500"
              onClick={() => {
                if (pokemondata && pokemondata.length > 0) {
                  const randomIndex = Math.floor(
                    Math.random() * pokemondata.length
                  );
                  const randomPokemon = pokemondata[randomIndex];
                  if (randomPokemon) {
                    setfilteredpokemondata([randomPokemon]);
                  } else {
                    console.warn(
                      "Random selection failed: undefined at index",
                      randomIndex
                    );
                  }
                } else {
                  console.warn("Pokemon data not loaded yet.");
                }
              }}
            >
              Random Pokemon
            </h2>
          </Link>
        </div>
       {
        showmenu &&    <div className="absolute top-12 left-72 bg-blue-300 w-30 text-sm">
          <Link to="/">
            {" "}
            <h2
              className="border border-blue-950 m-1 p-1 rounded text-blue-950 font-bold shadow-xl hover:bg-blue-500 "
              onClick={() => {
                setfilteredpokemondata(pokemondata);
              }}
            >
              Get All Cards
            </h2>
          </Link>
          <Link to="/favourites">
            {" "}
            <h2
              className="border border-blue-950 m-1 p-1 rounded text-blue-950 font-bold shadow-xl hover:bg-blue-500"
              onClick={() => {
                const favouritedata = JSON.parse(
                  localStorage.getItem("favourites")
                );
                setfavouritesdata(favouritedata);
                localStorage.setItem(
                  "favourites",
                  JSON.stringify(favouritedata)
                );
              }}
            >
              Favourites
            </h2>
          </Link>
          <Link to="/compare">
            {" "}
            <h2
              className="border border-blue-950 m-1 p-1 rounded text-blue-950 font-bold shadow-xl hover:bg-blue-500"
              onClick={() => {
                const comparisiondata2 = JSON.parse(
                  localStorage.getItem("comparisions")
                );

                setcomparisiondata(comparisiondata2);
                localStorage.setItem(
                  "comparisions",
                  JSON.stringify(comparisiondata2)
                );
              }}
            >
              Comparision
            </h2>
          </Link>
          <Link to="/random">
            {" "}
            <h2
              className="border border-blue-950 m-1 p-1 rounded text-blue-950 font-bold shadow-xl hover:bg-blue-500"
              onClick={() => {
                if (pokemondata && pokemondata.length > 0) {
                  const randomIndex = Math.floor(
                    Math.random() * pokemondata.length
                  );
                  const randomPokemon = pokemondata[randomIndex];
                  if (randomPokemon) {
                    setfilteredpokemondata([randomPokemon]);
                  } else {
                    console.warn(
                      "Random selection failed: undefined at index",
                      randomIndex
                    );
                  }
                } else {
                  console.warn("Pokemon data not loaded yet.");
                }
              }}
            >
              Random Pokemon
            </h2>
          </Link>
        </div>
       }
            
      </nav>
    </div>
  );
};
export default Header;
