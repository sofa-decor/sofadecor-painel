import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import appColors from "./app/colors/appColors";
import AboutPageComponent from "./app/pages/about/AboutPageComponent";
import ProductViewPageComponent from "./app/pages/product_view/ProductViewPageComponent";
import GlobalContextProvider from "./contexts/global-context/GlobalContext";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import FooterComponent from "./app/components/footer/FooterComponents";
import AdminPainelPageComponent from "./app/pages/admin-painel/AdminPainelPageComponent";
import AdminCreateUsersPageComponent from "./app/pages/admin-painel/children/admin-add-users/AdminCreateUsersPageComnponent";
import AdminLoginPageComponent from "./app/pages/admin-painel/children/admin-login/AdminLoginPageComponent";
import AdminProductsPageComponent from "./app/pages/admin-painel/children/admin-products/AdminProductsPageComponent";
import AdminUsersPageComponent from "./app/pages/admin-painel/children/admin-users/AdminUsersPageComponent";
import ProductsPageComponent from "./app/pages/products/ProductsPagesComponent";
import "./css/App.css";
import AdminCreateProductsPageComponent from "./app/pages/admin-painel/children/admin-add-products/AdminCreateProductsPageComnponent";

const paletteMUI = {
    primary: {
        main: appColors.red,
    },
    secondary: {
        main: appColors.green,
    },
};

const appTheme = createTheme({ palette: paletteMUI });

function App() {
    return (
        <BrowserRouter>
            <GlobalContextProvider>
                <ThemeProvider theme={appTheme}>
                    <Routes>
                        <Route path="/sobre" Component={AboutPageComponent} />
                        <Route path="/" Component={Redirect} />
                        <Route path={"/produtos"} Component={ProductsPageComponent} />
                        <Route path="/produtos/:product" Component={ProductViewPageComponent} />
                        <Route path="/admin-painel" Component={AdminPainelPageComponent}>
                            <Route path="login" Component={AdminLoginPageComponent} />
                            <Route path="produtos" Component={AdminProductsPageComponent} />
                            <Route path="usuarios" Component={AdminUsersPageComponent} />
                            <Route path="usuarios/add" Component={AdminCreateUsersPageComponent} />
                            <Route
                                path="produtos/add"
                                Component={AdminCreateProductsPageComponent}
                            />
                        </Route>
                    </Routes>
                </ThemeProvider>

                <FooterComponent />
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
