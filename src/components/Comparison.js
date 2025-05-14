import { useContext ,useEffect} from "react";
import CardContext from "../utils/CardContext";
// import ComparisionDisplay from "./ComparisionDisplay";
import PokemonCard from "./PokemonCard";
const Comparison=()=>{
const{Comparisiondata,setcomparisiondata,filteredpokemondata,pokemondata,setfilteredpokemondata}=useContext(CardContext);
console.log(Comparisiondata);

useEffect(() => {
    const comparisiondata2 = JSON.parse(localStorage.getItem("comparisions")) || [];
    // setfilteredpokemondata(comparisiondata2);
    setcomparisiondata(comparisiondata2)
    localStorage.setItem('comparisons',JSON.stringify(comparisiondata2));
  },[]);
    return (
<div className="flex flex-wrap">
       {/* {Comparisiondata.map((poke)=><ComparisionDisplay key={poke?.name} pokemondata={poke}/>)
       } */}
       <h1>Comparison page</h1>
  {Comparisiondata?.map((poke,index)=><PokemonCard key={index} pokemondata={poke}/>)
       }
        </div>
    )
}

export default Comparison;