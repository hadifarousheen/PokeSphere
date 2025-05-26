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
    <div className="m-auto">
      <h1 className="text-3xl text-center text-blue-950 font-bold my-6">Comparision</h1>
    <div className="flex flex-wrap items-center justify-center">
      
      {comparisiondata?.map((poke, index) => (
     <PokemonCard key={index} pokemondata={poke} />
      ))}
    </div></div>
  );
};

export default Comparison;
