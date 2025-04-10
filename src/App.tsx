import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import appColors from "./app/colors/appColors";
import FooterComponent from "./app/components/footer/FooterComponents";
import MainPageComponent from "./app/pages/main";
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
                        <Route path="/" Component={MainPageComponent} />
                    </Routes>
                </ThemeProvider>

                <FooterComponent />
            </GlobalContextProvider>
        </BrowserRouter>
    );
}

export default App;
