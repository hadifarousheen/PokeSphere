import { useLocation } from "react-router-dom";
const PokemonDetails = () => {
  const location = useLocation();
  const { pokemondata } = location.state || {};
  const{id,name,sprites,height,weight,base_experience}=pokemondata;
  const{front_shiny,front_default,back_default,back_shiny}=sprites;
  const types = pokemondata?.types.map((typeObj) => typeObj.type.name);
  const abilities = pokemondata?.abilities?.map(
    (typeobj) => typeobj.ability.name
  );
  return (
    <div className="bg-blue-100 hover:border border-blue-950 m-auto w-11/12 md:w-fit p-3 rounded-2xl shadow-xl shadow-blue-800 mt-20 ">
      <span className="text-xl bg-blue-400 p-0.5 font-bold rounded-lg hover:bg-blue-900 hover:text-white ">
        #{id}
      </span>
      <span className="text-2xl font-bold float-right text-blue-950">{name}</span>
      <img className="ml-auto h-30 " src={front_shiny} />
      <h1 className="text-xl font-bold text-blue-950 hover:underline">Sprites</h1>
      <div className="flex ">
        <img className="md:m-auto h-30  w-25 md:w-30 " src={front_default} />
        <img className="md:m-auto h-30 w-25 md:w-30 " src={back_shiny} />
        <img className="md:m-auto h-30 w-25 md:w-30  " src={back_default} />
      </div>
     
      <h2 className="text-xl text-blue-900 ">
        <span className="font-bold text-blue-950 ">Height :</span> {height}
      </h2>
      <h2 className="text-xl text-blue-900">
        <span className="font-bold text-blue-950">Weight :</span> {weight}
      </h2>
      <h2 className="text-xl text-blue-900">
        <span className="font-bold text-blue-950">Base Experience : </span>
        {base_experience}
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
