
import { useState,useContext } from "react";
import CardContext from "../utils/CardContext";
const Search=()=>{
    const[searchtext,setsearchtext]=useState("");
    const{pokemondata,setfilteredpokemondata}=useContext(CardContext);
    return(
        <div >
            <input type="text" value={searchtext} className="border border-black rounded-sm" onChange={(e)=>{
                setsearchtext(e.target.value);
                console.log(searchtext);
            }}/>
            <button className="border border-black bg-blue-300 m-2 p-1 rounded-xl" onClick={()=>{
const searchValue = searchtext.toLowerCase();
    const searchcards = pokemondata.filter((poke) =>
        poke.name.toLowerCase() === searchValue)
                setfilteredpokemondata(searchcards);
            console.log(searchcards);
            }}>Search</button>
        </div>
    )
}

export default Search;