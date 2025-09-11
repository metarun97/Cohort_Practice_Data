import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Services from "./components/Services";
import About from "./components/About";
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
      <div className="w-screen h-screen text-white bg-grey-400">
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </>
  );
};

export default App;
