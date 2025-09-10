import { useLocation } from "react-router-dom";
const PokemonDetails = () => {
  const location = useLocation();
  const { pokemondata } = location.state || {};
  console.log(pokemondata);
  const types = pokemondata?.types.map((typeObj) => typeObj.type.name);
  const abilities = pokemondata?.abilities?.map(
    (typeobj) => typeobj.ability.name
  );
  return (
    <div className="bg-blue-100 hover:border border-blue-950 m-auto w-11/12 md:w-fit p-3 rounded-2xl shadow-xl shadow-blue-800 mt-10 ">
      <span className="text-xl bg-blue-400 p-0.5 font-bold rounded-lg">
        #{pokemondata.id}
      </span>
      <span className="text-2xl font-bold float-right text-blue-950">{pokemondata?.name}</span>
      <img className="m-auto h-30" src={pokemondata.sprites.front_shiny} />
      <h1 className="text-xl font-bold text-blue-950 hover:underline">Sprites</h1>
      <div className="flex">
        <img className="m-auto h-30" src={pokemondata.sprites.front_default} />
        <img className="m-auto h-30" src={pokemondata.sprites.back_shiny} />
        <img className="m-auto h-30" src={pokemondata.sprites.back_default} />
      </div>
     
      <h2 className="text-xl text-blue-900 ">
        <span className="font-bold text-blue-950 ">Height :</span> {pokemondata.height}
      </h2>
      <h2 className="text-xl text-blue-900">
        <span className="font-bold text-blue-950">Weight :</span> {pokemondata.weight}
      </h2>
      <h2 className="text-xl text-blue-900">
        <span className="font-bold text-blue-950">Base Experience : </span>
        {pokemondata.base_experience}
      </h2>
      <h2 className="text-xl text-blue-900">
        <span className="font-bold text-blue-950">Types :</span> {types.join(" , ")}
      </h2>
      <h2 className="text-xl text-blue-900">
        <span className="font-bold text-blue-950">Abilitiess:</span> {abilities.join(" , ")}
      </h2>
     
    </div>
  );
};
export default PokemonDetails;
