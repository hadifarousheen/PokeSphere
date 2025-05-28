import PokemonCard from "./PokemonCard";
import { useContext } from "react";
import CardContext from "../utils/CardContext";
const RandomPokemon=()=>{
    const{filteredpokemondata}=useContext(CardContext);
    return(
        <div className="w-fit m-auto mt-10">
            <h1 className="text-3xl font-bold my-4 text-blue-950 mb-10">Random Pokemon</h1>
{filteredpokemondata?.map((poke,index)=><PokemonCard key={index} pokemondata={poke}/>)
       }
        </div>
    )
}

export default RandomPokemon;