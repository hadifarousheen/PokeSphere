import { useContext, useEffect, useState } from "react";
import CardContext from "../utils/CardContext";
import PokemonCard from "./PokemonCard";
import Function from "./Function";

import Header from "./Header";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  );
};

export default Body;
