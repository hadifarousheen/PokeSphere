import { useContext } from "react";
import CardContext from "../utils/CardContext";
import { Link } from "react-router-dom";
const Header = () => {
  const {
    pokemondata,
    setfilteredpokemondata,
    setcomparisiondata,
    setfavouritesdata,
  } = useContext(CardContext);
  return (
    <div className="bg-blue-400 p-2 mb-2 shadow-xl/20">
      <nav className="flex flex-wrap">
        <h1 className="text-3xl font-bold ml-2">Pokemon API</h1>
        <div className="flex ml-auto  my-auto">
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
      </nav>
    </div>
  );
};
export default Header;
