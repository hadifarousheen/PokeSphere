
import { useState,useContext } from "react";
import CardContext from "../utils/CardContext";
const Search=()=>{
    const[searchtext,setsearchtext]=useState("");
    const{pokemondata,setfilteredpokemondata}=useContext(CardContext);
    return(
        <div className="flex md:block" >
            <input type="text" value={searchtext} className="h-6 md:h-8 border border-black rounded-sm" onChange={(e)=>{
                setsearchtext(e.target.value);
            }}/>
            <button className="border border-black bg-blue-300 p-0.5 mx-1 md:m-2 md:p-1 rounded-xl hover:bg-blue-400" onClick={()=>{
const searchValue = searchtext.toLowerCase();
    const searchcards = pokemondata.filter((poke) =>
        poke.name.toLowerCase() === searchValue)
                setfilteredpokemondata(searchcards);
            }}>Search</button>
        </div>
    )
}

export default Search;