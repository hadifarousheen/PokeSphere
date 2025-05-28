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
    <div className="block">
      <h1 className="border border-black w-fit font-bold p-1 rounded-sm hover:bg-blue-400" onClick={() => setfiltertype(!showfiltertype)}>Type Filter {showfiltertype?'🔼':'🔽'}</h1>

      {showfiltertype && (
        <div className="border border-black my-2 p-1 rounded-sm">
          <input className="mx-1"
            type="checkbox"
            value={"fire"}
            onClick={() => {
              settypevalues((prev) => [...prev, "fire"]);
            }}
          />{" "}
          Fire
          <input className="mx-1"
            type="checkbox"
            value={"water"}
            onClick={() => {
              settypevalues((prev) => [...prev, "water"]);
            }}
          />{" "}
          Water
          <input className="mx-1"
            type="checkbox"
            value={"grass"}
            onClick={() => {
              settypevalues((prev) => [...prev, "grass"]);
            }}
          />{" "}
          Grass
          <input className="mx-1"
            type="checkbox"
            value={"poison"}
            onClick={() => {
              settypevalues((prev) => [...prev, "poison"]);
            }}
          />{" "}
          Poison
          <input className="mx-1"
            type="checkbox"
            value={"flying"}
            onClick={() => {
              settypevalues((prev) => [...prev, "flying"]);
            }}
          />{" "}
          Flying
          <input className="mx-1"
            type="checkbox"
            value={"bug"}
            onClick={() => {
              settypevalues((prev) => [...prev, "bug"]);
            }}
          />{" "}
        Bug
          <input className="mx-1"
            type="checkbox"
            value={"normal"}
            onClick={() => {
              settypevalues((prev) => [...prev, "normal"]);
            }}
          />{" "}
          Normal
          <input className="mx-1"
            type="checkbox"
            value={"electric"}
            onClick={() => {
              settypevalues((prev) => [...prev, "electric"]);
            }}
          />{" "}
          Electric
          <input className="mx-1"
            type="checkbox"
            value={"ground"}
            onClick={() => {
              settypevalues((prev) => [...prev, "ground"]);
            }}
          />{" "}
          Ground
          <input className="mx-1"
            type="checkbox"
            value={"fairy"}
            onClick={() => {
              settypevalues((prev) => [...prev, "fairy"]);
            }}
          />{" "}
          Fairy
          <input className="mx-1"
            type="checkbox"
            value={"fighting"}
            onClick={() => {
              settypevalues((prev) => [...prev, "fighting"]);
            }}
          />{" "}
          Fighting
          <input className="mx-1"
            type="checkbox"
            value={"psychic"}
            onClick={() => {
              settypevalues((prev) => [...prev, "psychic"]);
            }}
          />{" "}
          psychic
          <input className="mx-1" type="checkbox" value={"rock"} onClick={()=>{
            settypevalues(prev => [...prev, "rock"]);

          }}/> Rock
          <input className="mx-1" type="checkbox" value={"steel"} onClick={()=>{
            settypevalues(prev => [...prev, "steel"]);

          }}/> Steel
          <input className="mx-1" type="checkbox" value={"ice"} onClick={()=>{
            settypevalues(prev => [...prev, "ice"]);

          }}/> Ice
          <input className="mx-1" type="checkbox" value={"ghost"} onClick={()=>{
            settypevalues(prev => [...prev, "ghost"]);

          }}/> Ghost
          <input className="mx-1" type="checkbox" value={"dark"} onClick={()=>{
            settypevalues(prev => [...prev, "dark"]);

          }}/> dark
          <input className="mx-1" type="checkbox" value={"dragon"} onClick={()=>{
            settypevalues(prev => [...prev, "dragon"]);

          }}/> Dragon
          <div>
          <button className="border border-black mx-1 my-2 rounded bg-blue-300 p-0.5 hover:bg-blue-400"
            onClick={() => {
              
              const filterPokemons = pokemondetailsfilter.filter((pokemon) =>
                pokemon.types.some((t) => typevalues.includes(t.type.name))
              );
      
              setfilteredpokemondata(filterPokemons);
            }}
          >
            Filter
          </button>
          <button className="border border-black mx-1 rounded p-0.5  bg-blue-300 hover:bg-blue-400" onClick={()=>{
            settypevalues([])
          }}>Clear Filter</button>
        </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
