
import { useEffect, useState ,useContext} from "react";
import CardContext from "../utils/CardContext";
import { Link } from "react-router";

const PokemonCard=(props)=>{

  const{pokemondata}=props;
        // if (!pokemondata) return <div>Loading...</div>;

    const{name,url}=pokemondata;
    const[pokemondetails,setpokemondetails]=useState();
        const[imageurl,setimageurl]=useState();
        const[types,settypes]=useState();
        const[favouritetext,setfavouritetext]=useState("Add to Favourite");
        const[comparetext,setcomparetext]=useState("Compare");
        const{pokemoncompletedata,setpokemoncompletedata,setfavouritesdata,setcomparisiondata,comparisiondata,setfilteredpokemondata}=useContext(CardContext)
    useEffect(()=>{
        fetchimageurl();
    },[])
    async function fetchimageurl() {
        try{
        const data=await fetch(url);
        const jsondata=await data.json();
               setpokemoncompletedata(jsondata);

        setimageurl(jsondata.sprites.front_shiny)
        setpokemondetails(jsondata);
         const allTypes = jsondata.types.map((typeObj) => typeObj.type.name);
        // console.log(allTypes);
        settypes(allTypes);
        // pokemoncompletedata.push(jsondata);
        }catch(error)
        {

        }
        
    }
   
    return (
        
        <div className="border border-black m-2 p-2">
      <Link to="/details" state={{ pokemondata: pokemondetails }}>   <div>
            <span>{pokemondetails?.id}</span>
            <span> {pokemondetails?.name}</span>
            <img className="m-auto h-30" 
            src={imageurl}/>
    <p>Type: {types?.join(", ")}</p>
    </div>
    </Link>   
            <button className="border border-black m-1 p-1" onClick={()=>{
                setfavouritetext("Favourite");
                const favouritedata=JSON.parse(localStorage.getItem('favourites'))
                // setfavouritesdata(pokemondetails)
                favouritedata.push(pokemondetails);
                console.log(favouritedata);
                localStorage.setItem('favourites',JSON.stringify(favouritedata));
                
            }}>{favouritetext}</button>
            <button className="border border-black m-1 p-1" onClick={()=>{
                // setcomparisiondata(pokemondetails);
                const comparisions=JSON.parse(localStorage.getItem('comparisions'))
                comparisions.push(pokemondetails)
                // setcomparetext(prev => [...prev, pokemondetails])
                setcomparetext("Selected");
                localStorage.setItem('comparisions',JSON.stringify(comparisions))
                // setfilteredpokemondata(comparisiondata)
            }}>{comparetext}</button>
        </div>
    )
}

export default PokemonCard;