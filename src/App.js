// import React from "react";
// import ReactDOM from "react-dom/client";
// import Header from "./components/Header";
// import Body from "./components/Body";
// import Function from "./components/Function";
// import CardContext from "./utils/CardContext";
// import { useState,useEffect } from "react";
// import { createBrowserRouter,Outlet,RouterProvider } from "react-router";
// import Favourites from "../src/components/Favourites"
// import Comparison from "../src/components/Comparison";
// import PokemonDetails from "./components/PokemonDetails";
// import RandomPokemon from "./components/RandomPokemon";

// const App=()=>{
//     const[pokemondata,setpokemondata]=useState();    
//     const[filteredpokemondata,setfilteredpokemondata]=useState();
//     const[pokemoncompletedata,setpokemoncompletedata]=useState([]);
//     const[favouritesdata,setfavouritesdata]=useState();
//     const[comparisiondata,setcomparisiondata]=useState();
//         useEffect(()=>{
//             fetchData();
//             if (!localStorage.getItem("favourites")) {
//     localStorage.setItem("favourites", JSON.stringify([]));
//   }
//   if (!localStorage.getItem("comparisions")) {
//     localStorage.setItem("comparisions", JSON.stringify([]));
//   }
//         },[])
//         async function fetchData() {
//             const pokemondata=await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
//             const pokejsondata=await pokemondata.json();
//             // console.log(pokejsondata.results);
//             setpokemondata(pokejsondata.results);
//             setfilteredpokemondata(pokejsondata.results);
           
//         }
//     return(
//         <div>
//             <CardContext.Provider value={{pokemondata:pokemondata,setpokemondata:setpokemondata,filteredpokemondata:filteredpokemondata,setfilteredpokemondata:setfilteredpokemondata,pokemoncompletedata:pokemoncompletedata,setpokemoncompletedata:setpokemoncompletedata,favouritesdata:favouritesdata,setfavouritesdata:setfavouritesdata,comparisiondata:comparisiondata,setcomparisiondata:setcomparisiondata}}>
//             <Header/>
//             <Function/>
//             <Outlet/>
//             </CardContext.Provider>
//         </div>
//     )
// }


// const appRouter=createBrowserRouter([
//     {
//         path:"/",
//         element:<App/>,
//         children:[{
//         path:"/favourites",
//         element:<Favourites/>
//     },
// {
//         path:"/details",
//         element:<PokemonDetails/>
//     },{
//         path:"/body",
//         element:<Body/>
//     },
//     {
//         path:"/compare",
//         element:<Comparison/>
//     }
//     ,
//     {
//         path:"/random",
//         element:<RandomPokemon/>
//     }
// ]
// }
    
// ])
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<RouterProvider router={appRouter}/>);


import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Function from "./components/Function";
import Favourites from "./components/Favourites";
import Comparison from "./components/Comparison";
import PokemonDetails from "./components/PokemonDetails";
import RandomPokemon from "./components/RandomPokemon";
import CardContext from "./utils/CardContext";

const App = () => {
  const [pokemondata, setpokemondata] = useState();
  const [filteredpokemondata, setfilteredpokemondata] = useState();
  const [pokemoncompletedata, setpokemoncompletedata] = useState([]);
  const [favouritesdata, setfavouritesdata] = useState();
  const [comparisiondata, setcomparisiondata] = useState();

  useEffect(() => {
    fetchData();
    if (!localStorage.getItem("favourites")) {
      localStorage.setItem("favourites", JSON.stringify([]));
    }
    if (!localStorage.getItem("comparisions")) {
      localStorage.setItem("comparisions", JSON.stringify([]));
    }
  }, []);

  async function fetchData() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const data = await res.json();
    setpokemondata(data.results);
    setfilteredpokemondata(data.results);
  }

  return (
    <CardContext.Provider
      value={{
        pokemondata:pokemondata,
        setpokemondata,
        filteredpokemondata:filteredpokemondata,
        setfilteredpokemondata,
        pokemoncompletedata,
        setpokemoncompletedata,
        favouritesdata,
        setfavouritesdata,
        comparisiondata,
        setcomparisiondata,
      }}
    >
      <Header />
      <Function />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/details" element={<PokemonDetails />} />
        <Route path="/compare" element={<Comparison />} />
        <Route path="/random" element={<RandomPokemon />} />
      </Routes>
    </CardContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
