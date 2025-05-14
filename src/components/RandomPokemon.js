import PokemonCard from "./PokemonCard";
import { useContext } from "react";
import CardContext from "../utils/CardContext";
const RandomPokemon=()=>{
    const{filteredpokemondata}=useContext(CardContext);
    return(
        <div className="w-fit">
{filteredpokemondata?.map((poke,index)=><PokemonCard key={index} pokemondata={poke}/>)
       }
        </div>
    )
}

export default RandomPokemon;