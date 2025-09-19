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
