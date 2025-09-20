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
import Container from "./components/Container";
import { fetchPokemonData } from "./utils/fetchPokemonData";

const App = () => {
  const [pokemondata, setpokemondata] = useState([]);
  const [filteredpokemondata, setfilteredpokemondata] = useState([]);
  const [favouritesdata, setfavouritesdata] = useState([]);
  const [comparisiondata, setcomparisiondata] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const completePokemonsDataJson = await fetchPokemonData();
      setpokemondata(completePokemonsDataJson);
    };
    getData();
    if (!localStorage.getItem("favourites")) {
      localStorage.setItem("favourites", JSON.stringify([]));
    }
    if (!localStorage.getItem("comparisions")) {
      localStorage.setItem("comparisions", JSON.stringify([]));
    }
  }, []);

  return (
    <CardContext.Provider
      value={{
        pokemondata,
        setpokemondata,
        filteredpokemondata,
        setfilteredpokemondata,
        favouritesdata,
        setfavouritesdata,
        comparisiondata,
        setcomparisiondata,
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<Container />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/details" element={<PokemonDetails />} />
          <Route path="/compare" element={<Comparison />} />
          <Route path="/random" element={<RandomPokemon />} />
        </Route>
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
