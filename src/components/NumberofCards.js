import { useState,useContext } from "react";
import CardContext from "../utils/CardContext";

const NumberofCards=()=>{
    const{pokemondata,setfilteredpokemondata}=useContext(CardContext);
    const[shownumberofcards,setshownumberofcards]=useState(false);
    const[cardnumber,setcardnumber]=useState();
    return(
        <div className="flex">
            <h1 className="border border-blue-950 text-black my-1 md:m-2 md:p-1 font-bold rounded-lg bg-blue-300 shadow-md shadow-blue-700 hover:bg-blue-400" onClick={()=>{
                setshownumberofcards(!shownumberofcards)
            }}>Number Of Cards {shownumberofcards?'◀️':'▶️'}</h1>

            {shownumberofcards && (<div className="border border-blue-950 rounded-lg  py-1 px-1 mt-auto mb-auto font-bold text-black"> <input className="mx-0.5" type="checkbox" value={cardnumber} onClick={()=>{
                setcardnumber(5);
            }}/> 5
            <input type="checkbox" className="mx-0.5" value={cardnumber} onClick={()=>{
                setcardnumber(10)
            }}/>10
            <input type="checkbox" className="mx-0.5" value={cardnumber} onClick={()=>{
                setcardnumber(15)
            }}/>15
            <input className="border border-black w-6 h-4 mx-0.5 " type="number" onChange={(e)=>{
                setcardnumber(e.target.value);
            }}/> Custom
            <button className="border border-blue-950 text-blue-900 px-0.5  bg-blue-300  rounded-lg  hover:bg-blue-400 mx-0.5" onClick={()=>{
          const sortedpokemoncards=pokemondata.filter((poke,index)=> index<cardnumber);
          setfilteredpokemondata(sortedpokemoncards);
            }}>Submit</button></div>)} 
        </div>
    )
}
export default NumberofCards;