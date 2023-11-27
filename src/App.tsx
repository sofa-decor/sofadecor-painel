import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import HeaderComponent from "./app/components/header/HeaderComponent";
import ProductViewPageComponent from "./app/pages/product_view/ProductViewPageComponent";
import ProductsPageComponent from "./app/pages/products/ProductsPagesComponent";
import "./css/App.css";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route index={true} path='/' Component={Redirect} />
        <Route path='/products' Component={ProductsPageComponent} />
        <Route path='/products/:id' Component={ProductViewPageComponent} />
      </Routes>
    </BrowserRouter>
  );
}

function Redirect() {
  const navigate = useNavigate();

  useEffect(() => navigate("/products"), []);

  return <></>;
}

export default App;
