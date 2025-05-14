import { useState,useContext } from "react";
import CardContext from "../utils/CardContext";

const NumberofCards=()=>{
    const{pokemondata,setpokemondata,filteredpokemondata,setfilteredpokemondata}=useContext(CardContext);
    const[shownumberofcards,setshownumberofcards]=useState(false);
    const[cardnumber,setcardnumber]=useState();
    return(
        <div>
            <h1 onClick={()=>{
                setshownumberofcards(!shownumberofcards)
            }}>Number Of Cards</h1>

            {shownumberofcards?(<div> <input type="checkbox" value={cardnumber} onClick={()=>{
                setcardnumber(5);
            }}/>5
            <input type="checkbox" value={cardnumber} onClick={()=>{
                setcardnumber(10)
            }}/>10
            <input type="checkbox" value={cardnumber} onClick={()=>{
                setcardnumber(15)
            }}/>15
            <input type="number" onChange={(e)=>{
                setcardnumber(e.target.value);
            }}/>Custom
            <button onClick={()=>{
          const sortedpokemoncards=pokemondata.filter((poke,index)=> index<cardnumber);
          setfilteredpokemondata(sortedpokemoncards);
            }}>Submit</button></div>):(<div></div>)}

           
        </div>
    )
}
export default NumberofCards;