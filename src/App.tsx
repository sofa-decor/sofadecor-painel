import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import appColors from "./app/colors/appColors";
import HeaderComponent from "./app/components/header/HeaderComponent";
import AboutPageComponent from "./app/pages/about/AboutPageComponent";
import ProductViewPageComponent from "./app/pages/product_view/ProductViewPageComponent";
import GlobalContextProvider from "./contexts/global-context/GlobalContext";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ProductsPageComponent from "./app/pages/products/ProductsPagesComponent";
import "./css/App.css";

const paletteMUI = {
    primary: {
        main: appColors.red,
    },
    secondary: {
        main: appColors.green,
    },
};

const appTheme = createTheme({ palette: paletteMUI });
const headerTheme = createTheme({
    palette: { ...paletteMUI, mode: "dark" },
});

function App() {
    return (
        <BrowserRouter>
            <GlobalContextProvider>
                <ThemeProvider theme={headerTheme}>
                    <HeaderComponent />
                </ThemeProvider>

                <ThemeProvider theme={appTheme}>
                    <Routes>
                        <Route path="/sobre" Component={AboutPageComponent} />
                        <Route path="/" Component={Redirect} />
                        <Route
                            path={"/produtos"}
                            Component={ProductsPageComponent}
                        />
                        <Route
                            path="/produtos/:product"
                            Component={ProductViewPageComponent}
                        />
                    </Routes>
                </ThemeProvider>
            </GlobalContextProvider>
        </BrowserRouter>
    );
}

function Redirect() {
    const navigate = useNavigate();
    useEffect(() => navigate("/produtos"), []);
    return <></>;
}

export default App;
