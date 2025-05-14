import { useLocation } from "react-router-dom";
const PokemonDetails=()=>{
    const location = useLocation();
  const { pokemondata } = location.state || {};
    console.log(pokemondata);
    const types=pokemondata.types.map((typeObj) => typeObj.type.name);
    const abilities=pokemondata.abilities.map((typeobj)=>typeobj.ability.name)
    return (<div>
<h1>Name : {pokemondata?.name}</h1>
<img src={pokemondata.sprites.front_shiny}/>

<h2>Id : {pokemondata.id}</h2>
<h2>Height : {pokemondata.height}</h2>
<h2>Weight : {pokemondata.weight}</h2>
<h2>Base Experience : {pokemondata.base_experience}</h2>
<h2>Types : {types}</h2>
<h2>Abilitiess: {abilities}</h2>
    </div>)
}

export default PokemonDetails;