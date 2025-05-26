import Search from "./Search";
import Sort from "./Sort";
import NumberofCards from "./NumberofCards";
import Filter from "./Filter";
import { useState } from "react";
const Function=()=>{
    const[showfilter,setshowfilter]=useState(false);
    return(
        <div className="  mx-15 p-2 my-4">
            <h1 className="w-fit border border-blue-950 p-1 font-bold rounded-sm shadow-3xl shadow-blue-700"  onClick={()=>{
                setshowfilter(!showfilter)
            }}>Filter {showfilter?'🔼':'🔽'}</h1>
            <div >
            {showfilter?(
                <div className="border border-blue-950 text-blue-950 mt-2 p-2 rounded-sm shadow-2xl shadow-blue-400">
                <div className=" flex" >
             <Search/>
            <Sort/>
            <NumberofCards/>
            </div>
            <div className="block">
            <Filter/>
            
            </div>
            </div>):(<div ></div>)}
            </div>
        </div>
    )
}

export default Function;