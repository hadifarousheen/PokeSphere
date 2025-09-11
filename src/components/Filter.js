import CardContext from "../utils/CardContext";
import { useState, useContext, useEffect } from "react";

const Filter = () => {
  const [showfiltertype, setfiltertype] = useState(false);
  const [typevalues, settypevalues] = useState([]);
  const [pokemondetailsfilter, setpokemondetailsfilter] = useState([]);
  const { pokemondata, setfilteredpokemondata } = useContext(CardContext);
  const types = [
    "fire",
    "water",
    "grass",
    "poison",
    "flying",
    "bug",
    "normal",
    "electric",
    "ground",
    "fairy",
    "fighting",
    "psychic",
    "rock",
    "steel",
    "ice",
    "ghost",
    "dark",
    "dragon",
  ];

  useEffect(() => {
    fetchData();
  }, []);

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
      <h1
        className="bg-blue-300 shadow-md shadow-blue-700  border border-blue-950 w-fit font-bold p-1 rounded-lg text-black hover:bg-blue-400"
        onClick={() => setfiltertype(!showfiltertype)}
      >
        Type Filter {showfiltertype ? "🔼" : "🔽"}
      </h1>

      {showfiltertype && (
        <div className="grid grid-rows-3 grid-cols-6 md:block border border-blue-950 my-2 p-1 rounded-lg shadow-md shadow-blue-700 font-bold text-black">
          {types?.map((type,index) => {
            return (
              <span key={type}>
                {" "}
                <input
                  className="mx-0.5"
                  type="checkbox"
                  value={type}
                 
                  onClick={() => {
                    settypevalues((prev) => [...prev, type]);
                  }}
                />
                <span >{type}</span>
              </span>
            );
          })}
          <div className="inline">
            <button
              className="border border-blue-950 md:mx-1 my-2 rounded-lg text-blue-900 bg-blue-300 p-0.5 hover:bg-blue-400"
              onClick={() => {
                const filterPokemons = pokemondetailsfilter.filter((pokemon) =>
                  pokemon.types.some((t) => typevalues.includes(t.type.name))
                );

                setfilteredpokemondata(filterPokemons);
              }}
            >
              Filter
            </button>
            <button
              className=" border border-blue-950 text-blue-900 mx-1 rounded-lg px-2 md:p-0.5  bg-blue-300 hover:bg-blue-400"
              onClick={() => {
                settypevalues([]);
              }}
            >
              Clear Filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
