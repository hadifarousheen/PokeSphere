import { useState,useContext } from "react";
import CardContext from "../utils/CardContext";

const NumberofCards=()=>{
    const{pokemondata,setfilteredpokemondata}=useContext(CardContext);
    const[shownumberofcards,setshownumberofcards]=useState(false);
    const[cardnumber,setcardnumber]=useState();
    return(
        <div className="flex  ">
            <h1 className="border border-black m-2 p-1 font-bold rounded-sm" onClick={()=>{
                setshownumberofcards(!shownumberofcards)
            }}>Number Of Cards {shownumberofcards?'◀️':'▶️'}</h1>

            {shownumberofcards?(<div className="border border-black m-2 p-1 rounded-sm"> <input className="mx-1" type="checkbox" value={cardnumber} onClick={()=>{
                setcardnumber(5);
            }}/> 5
            <input type="checkbox" className="mx-1" value={cardnumber} onClick={()=>{
                setcardnumber(10)
            }}/>10
            <input type="checkbox" className="mx-1" value={cardnumber} onClick={()=>{
                setcardnumber(15)
            }}/>15
            <input className="border border-black w-7 h-4 mx-1" type="number" onChange={(e)=>{
                setcardnumber(e.target.value);
            }}/> Custom
            <button className="border border-black mx-1  bg-blue-300  rounded-xl p-0.5" onClick={()=>{
          const sortedpokemoncards=pokemondata.filter((poke,index)=> index<cardnumber);
          setfilteredpokemondata(sortedpokemoncards);
            }}>Submit</button></div>):(<div></div>)}

           
        </div>
    )
}
export default NumberofCards;