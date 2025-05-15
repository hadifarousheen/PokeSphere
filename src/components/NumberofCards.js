import { useState,useContext } from "react";
import CardContext from "../utils/CardContext";

const NumberofCards=()=>{
    const{pokemondata,setfilteredpokemondata}=useContext(CardContext);
    const[shownumberofcards,setshownumberofcards]=useState(false);
    const[cardnumber,setcardnumber]=useState();
    return(
        <div className="flex  ">
            <h1 className="border border-black m-2 p-1" onClick={()=>{
                setshownumberofcards(!shownumberofcards)
            }}>Number Of Cards</h1>

            {shownumberofcards?(<div className="border border-black m-2 p-1"> <input type="checkbox" value={cardnumber} onClick={()=>{
                setcardnumber(5);
            }}/>5
            <input type="checkbox" value={cardnumber} onClick={()=>{
                setcardnumber(10)
            }}/>10
            <input type="checkbox" value={cardnumber} onClick={()=>{
                setcardnumber(15)
            }}/>15
            <input className="border border-black w-7" type="number" onChange={(e)=>{
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