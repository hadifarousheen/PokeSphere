import { useLocation } from "react-router-dom";
const PokemonDetails=()=>{
    const location = useLocation();
  const { pokemondata } = location.state || {};
    console.log(pokemondata);
    const types=pokemondata.types.map((typeObj) => typeObj.type.name);
    const abilities=pokemondata.abilities.map((typeobj)=>typeobj.ability.name)
    return (<div className="border border-black m-auto w-fit p-3 rounded-2xl shadow-2xl shadow-blue-400 ">
<h1 className="text-2xl font-bold">{pokemondata?.name}</h1>
<img className="m-auto h-30" src={pokemondata.sprites.front_shiny}/>

<h2 className="text-xl"><span  className="font-bold">Id :</span> {pokemondata.id}</h2>
<h2 className="text-xl"><span className="font-bold">Height :</span> {pokemondata.height}</h2>
<h2 className="text-xl"><span className="font-bold">Weight :</span> {pokemondata.weight}</h2>
<h2 className="text-xl"><span className="font-bold">Base Experience : </span>{pokemondata.base_experience}</h2>
<h2 className="text-xl"><span className="font-bold">Types :</span> {types.join(' , ')}</h2>
<h2 className="text-xl"><span className="font-bold">Abilitiess:</span> {abilities.join(' , ')}</h2>
    </div>)
}

export default PokemonDetails;