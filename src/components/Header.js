import { useContext, useState} from "react";
import CardContext from "../utils/CardContext";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const[showmenu,setshowmenu]=useState(false);
   const navigate = useNavigate();
  const {
    pokemondata,
    setfilteredpokemondata,
    setcomparisiondata,
    setfavouritesdata,
  } = useContext(CardContext);
 
const generateRandomPokemon = () => {
  if (!pokemondata || pokemondata.length === 0) return;

  const newIndex = Math.floor(Math.random() * pokemondata.length);
  const randomPokemon = pokemondata[newIndex];

   setfilteredpokemondata([{ ...randomPokemon, _key: Date.now() }]);
  navigate("/random");
};

  return (
    <div className="bg-blue-400 p-2 mb-2 shadow-xl/20 text-black">
      <nav className="flex flex-wrap justify-between">
        <h1 className="text-xl md:text-3xl font-bold ml-2">Pokemon API</h1>
        <img className="md:hidden h-8 " src="https://cdn-icons-png.flaticon.com/128/5358/5358649.png" onClick={()=>{
          setshowmenu(!showmenu);
        }}/>
       <div
  className={`${showmenu
    ? "absolute top-12 right-0 bg-blue-300 w-30 text-sm"
    : "hidden md:flex ml-auto my-auto"
  }`}>
          <Link to="/">
            <h2
              className={`${showmenu ?"border border-blue-950 m-1 p-1 rounded  font-bold shadow-xl hover:bg-blue-500":"border border-blue-950 m-1 p-1.5 rounded font-bold shadow-xl hover:bg-blue-500"}`}
              onClick={() => {
                setfilteredpokemondata([]);
              }}
            >
              Get All Cards
            </h2>
          </Link>
          <Link to="/favourites">
            <h2
              className={`${showmenu ?"border border-blue-950 m-1 p-1 rounded  font-bold shadow-xl hover:bg-blue-500":"border border-blue-950 m-1 p-1.5 rounded font-bold shadow-xl hover:bg-blue-500"}`}
              onClick={() => {
                const favouritedata = JSON.parse(
                  localStorage.getItem("favourites")
                );
                setfavouritesdata(favouritedata);
                localStorage.setItem(
                  "favourites",
                  JSON.stringify(favouritedata)
                );
              }}
            >
              Favourites
            </h2>
          </Link>
          <Link to="/compare">
            <h2
              className={`${showmenu ?"border border-blue-950 m-1 p-1 rounded  font-bold shadow-xl hover:bg-blue-500":"border border-blue-950 m-1 p-1.5 rounded font-bold shadow-xl hover:bg-blue-500"}`}
              onClick={() => {
                const comparisiondata2 = JSON.parse(
                  localStorage.getItem("comparisions")
                );

                setcomparisiondata(comparisiondata2);
                localStorage.setItem(
                  "comparisions",
                  JSON.stringify(comparisiondata2)
                );
              }}
            >
              Comparision
            </h2>
          </Link>
          
          <button onClick={() => {
            generateRandomPokemon()
              }}>
            <h2
              className={`${showmenu ?"border border-blue-950 m-1 p-1 rounded  font-bold shadow-xl hover:bg-blue-500":"border border-blue-950 m-1 p-1.5 rounded font-bold shadow-xl hover:bg-blue-500"}`}
             
            >
              Random Pokemon
            </h2>
          </button>
         
        </div>  
      </nav>
    </div>
  );
};
export default Header;
