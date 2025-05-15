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
<div>
  <h1
    onClick={() => {
      setshowsort(!showsort);
    }}
  >
    Sort
  </h1>
  {showsort ? (
    <div>
      <input
        type="radio"
        name="sort"
        checked={sortval === "alpha-asc"}
        onChange={() => {
          setsortval("alpha-asc");
        }}
      />{" "}
      a-z
      <input
        type="radio"
        name="sort"
        checked={sortval === "alpha-desc"}
        onChange={() => {
          setsortval("alpha-desc");
        }}
      />{" "}
      z-a
      <input
        type="radio"
        name="sort"
        checked={sortval === "num-asc"}
        onChange={() => {
          setsortval("num-asc");
        }}
      />{" "}
      1-1032
      <input
        type="radio"
        name="sort"
        checked={sortval === "num-desc"}
        onChange={() => {
          setsortval("num-desc")
        }}
        
      />{" "}
      1032-1
      <button onClick={sortcards}>
        Sort
      </button>
    </div>
  ) : (
    <div></div>
  )}
</div>

  );
};
export default Sort;
