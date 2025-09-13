import CardContext from "../utils/CardContext";
import { useState, useContext } from "react";

const Filter = () => {
  const [showfiltertype, setfiltertype] = useState(false);
  const [typevalues, settypevalues] = useState([]);
  const { pokemondata, setfilteredpokemondata } = useContext(CardContext);
  // const[isChecked,setIsChecked]=useState(false);
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

  return (
    <div className="block">
      <h1
        className="bg-blue-300 mt-2 md:mt-0 shadow-md shadow-blue-700  border border-blue-950 w-fit font-bold p-1 rounded-lg text-black hover:bg-blue-400"
        onClick={() => setfiltertype(!showfiltertype)}
      >
        Type Filter {showfiltertype ? "🔼" : "🔽"}
      </h1>

      {showfiltertype && (
        <div className="border border-blue-950 shadow-md shadow-blue-700 rounded-lg my-2">
        <div className="grid  grid-cols-4 md:block  my-2 p-1   font-bold text-black">
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
          </div>
          <div className="ml-1 block">
            <button
              className="border border-blue-950 md:mx-1 my-2 rounded-lg text-blue-900 bg-blue-300 p-0.5 hover:bg-blue-400 font-bold"
              onClick={() => {
                const filterPokemons = pokemondata.filter((pokemon) =>
                  pokemon.types.some((t) => typevalues.includes(t.type.name))
                );
                setfilteredpokemondata(filterPokemons);
              }}
            >
              Filter
            </button>
            <button
              className=" border border-blue-950 text-blue-900 mx-1 rounded-lg px-2 md:p-0.5  bg-blue-300 hover:bg-blue-400 font-bold"
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
