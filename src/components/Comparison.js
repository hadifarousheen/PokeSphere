import { useContext, useEffect } from "react";
import CardContext from "../utils/CardContext";
import PokemonCard from "./PokemonCard";
const Comparison = () => {
  const { comparisiondata, setcomparisiondata } = useContext(CardContext);

  useEffect(() => {
    const comparisiondata2 = JSON.parse(localStorage.getItem("comparisions"));
    setcomparisiondata(comparisiondata2);
    localStorage.setItem("comparisions", JSON.stringify(comparisiondata2));
  }, []);
  return (
    <div className="flex flex-wrap">
      <h1>Comparison page</h1>
      {comparisiondata?.map((poke, index) => (
        <PokemonCard key={index} pokemondata={poke} />
      ))}
    </div>
  );
};

export default Comparison;
