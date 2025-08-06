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
        className="border border-black w-fit font-bold p-1 rounded-sm hover:bg-blue-400"
        onClick={() => setfiltertype(!showfiltertype)}
      >
        Type Filter {showfiltertype ? "🔼" : "🔽"}
      </h1>

      {showfiltertype && (
        <div className="border border-black my-2 p-1 rounded-sm">
          {types?.map((type, index) => {
            return (
              <>
                {" "}
                <input
                  className="mx-1"
                  type="checkbox"
                  value={type}
                  key={index}
                  onClick={() => {
                    settypevalues((prev) => [...prev, type]);
                  }}
                />
                <span key={index}>{type}</span>
              </>
            );
          })}
          <div>
            <button
              className="border border-black mx-1 my-2 rounded bg-blue-300 p-0.5 hover:bg-blue-400"
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
              className="border border-black mx-1 rounded p-0.5  bg-blue-300 hover:bg-blue-400"
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
