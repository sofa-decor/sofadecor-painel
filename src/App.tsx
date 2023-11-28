import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import HeaderComponent from "./app/components/header/HeaderComponent";
import ProductViewPageComponent from "./app/pages/product_view/ProductViewPageComponent";
import ProductsPageComponent from "./app/pages/products/ProductsPagesComponent";
import appColors from "./colors/appColors";
import "./css/App.css";

const appTheme = createTheme({
  palette: {
    common: {
      black: appColors.dark,
    },
    primary: {
      main: appColors.red,
    },
    secondary: {
      main: appColors.red,
    },
  },
});

const headerTheme = createTheme({
  palette: {
    mode: "dark",
    common: {
      black: appColors.dark,
    },
    primary: {
      main: appColors.red,
    },
    secondary: {
      main: appColors.red,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={headerTheme}>
        <HeaderComponent />
      </ThemeProvider>
      <ThemeProvider theme={appTheme}>
        <Routes>
          <Route index={true} path='/' Component={Redirect} />
          <Route path='/products' Component={ProductsPageComponent} />
          <Route path='/products/:id' Component={ProductViewPageComponent} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

function Redirect() {
  const navigate = useNavigate();

  useEffect(() => navigate("/products"), []);

  return <></>;
}

export default App;
