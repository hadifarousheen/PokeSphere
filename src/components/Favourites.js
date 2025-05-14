import PokemonCard from "./PokemonCard"
import { useContext ,useEffect} from "react";
import CardContext from "../utils/CardContext";

const Favourites=()=>{

    const{favouritesdata,filteredpokemondata,setfilteredpokemondata,setfavouritesdata}=useContext(CardContext);
    console.log(favouritesdata);
    useEffect(() => {
    const favouritedata = JSON.parse(localStorage.getItem("favourites"));
    // setfilteredpokemondata(favouritedata);
    setfavouritesdata(favouritedata);
    localStorage.setItem("favourites",JSON.stringify(favouritedata))
  },[]);
    return(
        <div className="flex flex-wrap">
            <h1>Favourites Page</h1>
       {filteredpokemondata?.map((poke,index)=><PokemonCard key={index} pokemondata={poke}/>)
       }
        </div>
    )
}

export default Favourites;