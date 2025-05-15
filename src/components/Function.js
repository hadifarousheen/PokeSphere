import Search from "./Search";
import Sort from "./Sort";
import NumberofCards from "./NumberofCards";
import Filter from "./Filter";
import { useState } from "react";
const Function=()=>{
    const[showfilter,setshowfilter]=useState(false);
    return(
        <div className="  m-6 p-2">
            <h1 className="w-fit border border-black p-1"  onClick={()=>{
                setshowfilter(!showfilter)
            }}>Filter ▶️</h1>
            <div >
            {showfilter?(
                <div className="border border-black  w-11/12 mt-2 p-2">
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