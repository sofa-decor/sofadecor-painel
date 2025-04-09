import { WhatsApp } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Logo from "../../../assets/logo.png";
import OrderService from "../../../services/OrderService";
import appColors from "../../colors/appColors";
import { HeaderContainer, LogoBox, TextButtonBox } from "./HeaderStyles";

const paletteMUI = {
    primary: {
        main: appColors.red,
    },
    secondary: {
        main: appColors.green,
    },
};

const headerTheme = createTheme({
    palette: { ...paletteMUI },
});

export default function HeaderComponent() {
    return (
        <ThemeProvider theme={headerTheme}>
            <HeaderContainer>
                <LogoBox direction="row" flex={1}>
                    <img height={60} src={Logo} alt="logo" />
                </LogoBox>

                <Stack direction="row" flex={1} justifyContent="flex-end">
                    <Button
                        color="secondary"
                        size="large"
                        variant="text"
                        startIcon={<WhatsApp />}
                        target="_blank"
                        href={OrderService.getSenderWppLink()}
                    >
                        <TextButtonBox>Entre em contato</TextButtonBox>
                    </Button>
                </Stack>
            </HeaderContainer>
        </ThemeProvider>
    );
}
