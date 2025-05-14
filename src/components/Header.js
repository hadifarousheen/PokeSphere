import { useContext } from "react";
import CardContext from "../utils/CardContext";
import {Link} from "react-router-dom";
const Header=()=>{

    const{pokemondata,setpokemondata,filteredpokemondata,setfilteredpokemondata,comparisiondata,setcomparisiondata}=useContext(CardContext)
    return (
        <div className="bg-blue-400 p-2 mb-2">
            <nav className="flex flex-wrap">
                <h1 className="text-2xl">Pokemon API</h1>
                <div className="flex ml-auto  my-auto">
             <Link to="/">  <h2 className="border border-black m-1 p-1"  onClick={()=>{
                setfilteredpokemondata(pokemondata)
             }}>Get All Cards</h2></Link> 
              <Link to="/favourites">  <h2 className="border border-black m-1 p-1" 
                // const favouritedata=JSON.parse(localStorage.getItem('favourites'));
                // setfilteredpokemondata(favouritedata);
            >Favourites</h2></Link>
             <Link to="/compare"> <h2 className="border border-black m-1 p-1" >Comparision</h2></Link>  
                           <Link to="/random">     <h2 className="border border-black m-1 p-1" onClick={()=>{
                                    if (pokemondata && pokemondata.length > 0) {
        const randomIndex = Math.floor(Math.random() * pokemondata.length);
        const randomPokemon = pokemondata[randomIndex];
        if (randomPokemon) {
          setfilteredpokemondata([randomPokemon]);
        } else {
          console.warn("Random selection failed: undefined at index", randomIndex);
        }
      } else {
        console.warn("Pokemon data not loaded yet.");
      }
                                }}>Random Pokemon</h2></Link>

                </div>
            </nav>
        </div>
    )
}
export default Header;