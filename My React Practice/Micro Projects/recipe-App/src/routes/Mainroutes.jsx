import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import About from "../pages/About";
import Create from "../pages/Create";
import SingleRecipe from "../pages/SingleRecipe";
import PageNotFound from "../pages/PageNotFound";
import Favorite from "../pages/Favorite";

const Mainroutes = () => {
  return <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/recipes" element={<Recipes/>}/>
    <Route path="/recipes/details/:id" element={<SingleRecipe/>}/>
    <Route path="/create-recipe" element={<Create/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/fav" element={<Favorite/>}/>
    <Route path="*" element={<PageNotFound/>}/>
  </Routes>;
};

export default Mainroutes;
