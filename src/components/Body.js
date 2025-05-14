import React, { useEffect, useState ,useContext} from "react";
import CardContext from "../utils/CardContext";
import PokemonCard from "./PokemonCard";

const Body=()=>{
  const{pokemondata,setpokemondata,filteredpokemondata,setfilteredpokemondata}=useContext(CardContext);

    return (
        <div className="flex flex-wrap">
       {filteredpokemondata?.map((poke,index)=><PokemonCard key={index} pokemondata={poke}/>)
       }
        </div>
    )
}

export default Body;