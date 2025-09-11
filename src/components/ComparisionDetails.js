import { useContext } from "react";
import CardContext from "../utils/CardContext";

const ComparisionDetails = ({ pokemondata }) => {
 const{comparisiondata,setcomparisiondata}=useContext(CardContext)
  const types = pokemondata?.types.map((typeObj) => typeObj.type.name);
  const abilities = pokemondata.abilities.map(
    (typeobj) => typeobj.ability.name
  );
  const  removeFromComparision=(id,pokemonName)=>{
   const afterRemoval= comparisiondata.filter((poke)=>poke.id!==id);
   const localStorageComparision=JSON.parse(localStorage.getItem('comparisions'));
    
   const updatedlocalStorageComparisions=localStorageComparision.filter((poke)=>poke.id!==id);
   localStorage.setItem('comparisions',JSON.stringify(updatedlocalStorageComparisions));
   localStorage.removeItem('Compare-'+pokemonName)
  setcomparisiondata(afterRemoval);
  }
  return (
    <div className="mx-2 w-fit p-3 rounded-2xl shadow-2xl shadow-blue-800 mt-4 hover:border hover:border-blue-950 text-blue-950">
      <span className="text-xl bg-blue-200 p-1 font-bold rounded-lg">
        #{pokemondata.id}
      </span>
      <span className="text-2xl font-bold float-right text-blue-950">{pokemondata?.name}</span>
      <img className="m-auto h-30" src={pokemondata.sprites.front_shiny} />
      <h1 className="text-xl font-bold hover:underline">Sprites</h1>
      <div className="flex">
        <img className="m-auto h-30" src={pokemondata.sprites.front_default} />
        <img className="m-auto h-30" src={pokemondata.sprites.back_shiny} />
        <img className="m-auto h-30" src={pokemondata.sprites.back_default} />
      </div>
      <h2 className="text-xl ">
        <span className="font-bold text-blue-950">Height :</span> {pokemondata.height}
      </h2>
      <h2 className="text-xl">
        <span className="font-bold">Weight :</span> {pokemondata.weight}
      </h2>
      <h2 className="text-xl">
        <span className="font-bold">Base Experience : </span>
        {pokemondata.base_experience}
      </h2>
      <h2 className="text-xl">
        <span className="font-bold">Types :</span> {types.join(" , ")}
      </h2>
      <h2 className="text-xl">
        <span className="font-bold">Abilitiess:</span> {abilities.join(" , ")}
      </h2>
      <div className="flex justify-center">
          <button onClick={()=>{
            removeFromComparision(pokemondata.id,pokemondata.name)
          }} className="w-full text-sm border shadow-md shadow-blue-700  border-blue-950 font-bold m-0.5 md:m-1 p-1 bg-blue-300 rounded-md hover:bg-blue-600 hover:text-white ">Remove</button>
        </div>
    </div>
  );
};

export default ComparisionDetails;
