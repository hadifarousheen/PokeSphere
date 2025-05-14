import Search from "./Search";
import Sort from "./Sort";
import NumberofCards from "./NumberofCards";
import Filter from "./Filter";
import { useState } from "react";
const Function=()=>{
    const[showfilter,setshowfilter]=useState(false);
    return(
        <div className="border border-black">
            <h1 onClick={()=>{
                setshowfilter(!showfilter)
            }}>Filter</h1>
            <div>
            {showfilter?(
                <div>
             <Search/>
            <Sort/>
            <NumberofCards/>
            <Filter/>
            </div>):(<div></div>)}
            </div>
        </div>
    )
}

export default Function;