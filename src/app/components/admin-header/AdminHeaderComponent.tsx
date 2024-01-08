import { Stack, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Logo from "../../../assets/logo.png";
import appColors from "../../colors/appColors";
import { HeaderContainer } from "./AdminHeaderStyles";

const paletteMUI = {
    primary: {
        main: appColors.red,
    },
    secondary: {
        main: appColors.green,
    },
};

const headerTheme = createTheme({
    palette: { ...paletteMUI, mode: "dark" },
});

export default function AdminHeaderComponent() {
    return (
        <ThemeProvider theme={headerTheme}>
            <HeaderContainer>
                <Stack direction="row" alignItems="center" flex={1}>
                    <Typography fontSize={20} fontWeight={700}>
                        SOFÁ DECOR
                    </Typography>
                    <img width={35} height={35} src={Logo} alt="logo" />
                </Stack>
            </HeaderContainer>
        </ThemeProvider>
    );
}
