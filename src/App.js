import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Favourites from "./components/Favourites";
import Comparison from "./components/Comparison";
import PokemonDetails from "./components/PokemonDetails";
import RandomPokemon from "./components/RandomPokemon";
import CardContext from "./utils/CardContext";

const App = () => {
  const [pokemondata, setpokemondata] = useState([]);
  const [filteredpokemondata, setfilteredpokemondata] = useState([]);
  const [favouritesdata, setfavouritesdata] = useState([]);
  const [comparisiondata, setcomparisiondata] = useState([]);

  useEffect(() => {
    fetchData();
    if (!localStorage.getItem("favourites")) {
      localStorage.setItem("favourites", JSON.stringify([]));
    }
    if (!localStorage.getItem("comparisions")) {
      localStorage.setItem("comparisions", JSON.stringify([]));
    }
  }, []);

  async function fetchData() {
    const allPokemons = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=500"
    );
    const allPokemonsJson = await allPokemons?.json();
    const completePokemonsData = await Promise.all(
      allPokemonsJson.results?.map((pokemon) => fetch(pokemon.url))
    );
    const completePokemonsDataJson = await Promise.all(
      completePokemonsData?.map((response) => response.json())
    );
    console.log(completePokemonsDataJson);
    setpokemondata(completePokemonsDataJson);
  }

  return (
    <CardContext.Provider
      value={{
        pokemondata: pokemondata,
        setpokemondata: setpokemondata,
        filteredpokemondata: filteredpokemondata,
        setfilteredpokemondata,
        favouritesdata: favouritesdata,
        setfavouritesdata: setfavouritesdata,
        comparisiondata: comparisiondata,
        setcomparisiondata: setcomparisiondata,
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/details" element={<PokemonDetails />} />
        <Route path="/compare" element={<Comparison />} />
        <Route path="/random" element={<RandomPokemon />} />
      </Routes>
    </CardContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
