
import { useState,useContext } from "react";
import CardContext from "../utils/CardContext";
const Search=()=>{
    const[searchtext,setsearchtext]=useState("");
    // const data=useContext(CardContext);
    const{pokemondata,setpokemondata,filteredpokemondata,setfilteredpokemondata}=useContext(CardContext);
    // console.log(data);
    return(
        <div>
            <input type="text" value={searchtext} className="border border-black" onChange={(e)=>{
                setsearchtext(e.target.value);
                console.log(searchtext);
            }}/>
            <button onClick={()=>{
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