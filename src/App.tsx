import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import appColors from "./app/colors/appColors";
import GlobalContextProvider from "./contexts/global-context/GlobalContext";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import FooterComponent from "./app/components/footer/FooterComponents";
import MainPageComponent from "./app/pages/main";
import "./css/App.css";

import "@fontsource/cormorant-garamond/500.css"; // Linha 1 (título)
import "@fontsource/quicksand/400.css"; // Linha 2 (subtítulo)

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
                        <Route path="/" Component={MainPageComponent} />
                    </Routes>
                </ThemeProvider>

                <FooterComponent />
            </GlobalContextProvider>
        </BrowserRouter>
    );
}

export default App;
