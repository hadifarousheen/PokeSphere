import { useState, useContext } from "react";
import CardContext from "../utils/CardContext";

const Sort = () => {
  const {
    pokemondata,
    setpokemondata,
    filteredpokemondata,
    setfilteredpokemondata,
  } = useContext(CardContext);
  const [showsort, setshowsort] = useState(false);
  const [sortval, setsortval] = useState();

function sortcards() {
  let sortedcards = [...pokemondata]; 

  if (sortval === "num-desc") {
        
        sortedcards = pokemondata.map((item, index) => ({ ...item, index }))
        .sort((a, b) => b.index - a.index)
        .map(({ index, ...rest }) => rest);
  } else if (sortval === "num-asc") {
    sortedcards.sort((a, b) => Number(a.id) - Number(b.id));
  } else if (sortval === "alpha-asc") {
    sortedcards.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortval === "alpha-desc") {
    sortedcards.sort((a, b) => b.name.localeCompare(a.name));
  }

  setfilteredpokemondata(sortedcards);
}



  return (
<div className="flex">
  <h1 className="m-2 border border-black p-1 font-bold rounded-sm"
    onClick={() => {
      setshowsort(!showsort);
    }}
  >
    Sort {showsort?'◀️':'▶️'}
  </h1>
  {showsort ? (
    <div className="flex border border-black m-1.5 p-1 rounded-sm my-auto">
      <input className="mx-1 my-auto"
        type="radio"
        name="sort"
        checked={sortval === "alpha-asc"}
        onChange={() => {
          setsortval("alpha-asc");
        }}
      /> 
      <span className="my-auto">A-Z</span>
      <input className="mx-1 my-auto"
        type="radio"
        name="sort"
        checked={sortval === "alpha-desc"}
        onChange={() => {
          setsortval("alpha-desc");
        }}
      /> 
     <span className="my-auto">Z-A</span>
      <input className="mx-1 my-auto"
        type="radio"
        name="sort"
        checked={sortval === "num-asc"}
        onChange={() => {
          setsortval("num-asc");
        }}
      /> 
     <span className="my-auto">1-100</span> 
      <input className="mx-1 my-auto"
        type="radio"
        name="sort"
        checked={sortval === "num-desc"}
        onChange={() => {
          setsortval("num-desc")
        }}
        
      /> 
    <span className="my-auto">100-1</span> 
      <button className="border border-black bg-blue-300  p-0.5 rounded-xl mx-1" onClick={sortcards}>
        Submit
      </button>
    </div>
  ) : (
    <div></div>
  )}
</div>

  );
};
export default Sort;
