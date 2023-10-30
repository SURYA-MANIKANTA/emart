import "./App.css";

import Navbar from "./Component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Products from "./Component/Products";
import Product from "./Component/Product";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </>
  );
}
export default App;
