import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import appColors from "./app/colors/appColors";
import FooterComponent from "./app/components/footer/FooterComponents";
import AboutPageComponent from "./app/pages/about/AboutPageComponent";
import AdminCreateProductsPageComponent from "./app/pages/admin-painel/children/admin-add-products/AdminCreateProductsPageComnponent";
import AdminCreateUsersPageComponent from "./app/pages/admin-painel/children/admin-add-users/AdminCreateUsersPageComnponent";
import AdminProductsPageComponent from "./app/pages/admin-painel/children/admin-products/AdminProductsPageComponent";
import AdminUsersPageComponent from "./app/pages/admin-painel/children/admin-users/AdminUsersPageComponent";
import AdminUpdateProductsPageComponent from "./app/pages/admin-painel/children/admin-update-products/index";
import AdminPainelPageComponent from "./app/pages/admin-painel/AdminPainelPageComponent";
import MainPageComponent from "./app/pages/main";
import ProductViewPageComponent from "./app/pages/product_view/ProductViewPageComponent";
import ProductsPageComponent from "./app/pages/products/ProductsPageComponent";
import GlobalContextProvider from "./contexts/global-context/GlobalContext";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./css/App.css";

import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/lora/400.css";
import "@fontsource/quicksand/400.css";
import "@fontsource/quicksand/500.css";
import "@fontsource/source-serif-pro"; // Defaults to weight 400

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
                        <Route path="/" element={<MainPageComponent />} />
                        <Route path="/sobre" element={<AboutPageComponent />} />
                        <Route path="/loja" element={<ProductsPageComponent />} />
                        <Route path="/loja/produto/:productName" element={<ProductViewPageComponent />} />

                        <Route path="/painel" element={<AdminPainelPageComponent />}>
                            <Route index element={<Navigate to="produtos" replace />} />
                            <Route path="produtos" element={<AdminProductsPageComponent />} />
                            <Route path="produtos/add" element={<AdminCreateProductsPageComponent />} />
                            <Route path="produto/edit" element={<AdminUpdateProductsPageComponent />} />
                            <Route path="usuarios" element={<AdminUsersPageComponent />} />
                            <Route path="usuarios/add" element={<AdminCreateUsersPageComponent />} />
                        </Route>

                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </ThemeProvider>

                <FooterComponent />
            </GlobalContextProvider>
        </BrowserRouter>
    );
}

export default App;
