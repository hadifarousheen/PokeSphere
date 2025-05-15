import CardContext from "../utils/CardContext";
import { useState, useContext, useEffect } from "react";

const Filter = () => {
  const [showfiltertype, setfiltertype] = useState(false);
  const [typevalues, settypevalues] = useState([]); 
  const [pokemondetailsfilter, setpokemondetailsfilter] = useState([]);
  const {
    pokemondata,
    setfilteredpokemondata
  } = useContext(CardContext);

  
  useEffect(() => {
    fetchData();
  },[]);

  async function fetchData() {
    const responses = await Promise.all(
      pokemondata.map((pokemon) => fetch(pokemon.url))
    );

    const data = await Promise.all(
      responses.map((response) => response.json())
    );

    
    setpokemondetailsfilter(data);
  }

  return (
    <div>
      <h1 onClick={() => setfiltertype(!showfiltertype)}>Filter</h1>

      {showfiltertype && (
        <div>
          <input
            type="checkbox"
            value={"fire"}
            onClick={() => {
              settypevalues((prev) => [...prev, "fire"]);
            }}
          />{" "}
          Fire
          <input
            type="checkbox"
            value={"water"}
            onClick={() => {
              settypevalues((prev) => [...prev, "water"]);
            }}
          />{" "}
          Water
          <input
            type="checkbox"
            value={"grass"}
            onClick={() => {
              settypevalues((prev) => [...prev, "grass"]);
            }}
          />{" "}
          Grass
          <input
            type="checkbox"
            value={"poison"}
            onClick={() => {
              settypevalues((prev) => [...prev, "poison"]);
            }}
          />{" "}
          Poison
          <input
            type="checkbox"
            value={"flying"}
            onClick={() => {
              settypevalues((prev) => [...prev, "flying"]);
            }}
          />{" "}
          Flying
          <input
            type="checkbox"
            value={"bug"}
            onClick={() => {
              settypevalues((prev) => [...prev, "bug"]);
            }}
          />{" "}
        Bug
          <input
            type="checkbox"
            value={"normal"}
            onClick={() => {
              settypevalues((prev) => [...prev, "normal"]);
            }}
          />{" "}
          Normal
          <input
            type="checkbox"
            value={"electric"}
            onClick={() => {
              settypevalues((prev) => [...prev, "electric"]);
            }}
          />{" "}
          Electric
          <input
            type="checkbox"
            value={"ground"}
            onClick={() => {
              settypevalues((prev) => [...prev, "ground"]);
            }}
          />{" "}
          Ground
          <input
            type="checkbox"
            value={"fairy"}
            onClick={() => {
              settypevalues((prev) => [...prev, "fairy"]);
            }}
          />{" "}
          Fairy
          <input
            type="checkbox"
            value={"fighting"}
            onClick={() => {
              settypevalues((prev) => [...prev, "fighting"]);
            }}
          />{" "}
          Fighting
          <input
            type="checkbox"
            value={"psychic"}
            onClick={() => {
              settypevalues((prev) => [...prev, "psychic"]);
            }}
          />{" "}
          psychic
          <input type="checkbox" value={"rock"} onClick={()=>{
            settypevalues(prev => [...prev, "rock"]);

          }}/> Rock
          <input type="checkbox" value={"steel"} onClick={()=>{
            settypevalues(prev => [...prev, "steel"]);

          }}/> Steel
          <input type="checkbox" value={"ice"} onClick={()=>{
            settypevalues(prev => [...prev, "ice"]);

          }}/> Ice
          <input type="checkbox" value={"ghost"} onClick={()=>{
            settypevalues(prev => [...prev, "ghost"]);

          }}/> Ghost
          <input type="checkbox" value={"dark"} onClick={()=>{
            settypevalues(prev => [...prev, "dark"]);

          }}/> dark
          <input type="checkbox" value={"dragon"} onClick={()=>{
            settypevalues(prev => [...prev, "dragon"]);

          }}/> Dragon
          <button
            onClick={() => {
              
              const filterPokemons = pokemondetailsfilter.filter((pokemon) =>
                pokemon.types.some((t) => typevalues.includes(t.type.name))
              );
      
              setfilteredpokemondata(filterPokemons);
            }}
          >
            Filter
          </button>
          <button>Clear Filter</button>
        </div>
      )}
    </div>
  );
};

export default Filter;
