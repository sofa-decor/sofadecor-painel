import { WhatsApp } from "@mui/icons-material";
import { Button, Stack, Tab, Tabs } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { SyntheticEvent, useEffect, useState } from "react";
import Logo from "../../../assets/logo.png";
import useAppRouterHook from "../../../hooks/useAppRouterHook";
import OrderService from "../../../services/OrderService";
import appColors from "../../colors/appColors";
import { HeaderContainer } from "./HeaderStyles";

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

export default function HeaderComponent() {
    const { router } = useAppRouterHook();
    const [tabValue, setTabValue] = useState<string>("store");

    useEffect(() => {
        const currentURL = window.location.href;
        if (currentURL.includes("products")) setTabValue("store");
        if (currentURL.includes("sobre")) setTabValue("about");
    }, []);

    const handleChangeTab = (e: SyntheticEvent, value: string) => {
        e.preventDefault();
        if (value == "about") router.about.go();
        else router.products.go();
        setTabValue(value);
    };

    return (
        <ThemeProvider theme={headerTheme}>
            <HeaderContainer>
                <Stack direction="row" flex={1}>
                    <img height={60} src={Logo} alt="logo" />
                </Stack>

                <Stack
                    height={60}
                    direction="row"
                    flex={1}
                    justifyContent="center"
                    alignItems="flex-end"
                >
                    <Tabs value={tabValue} onChange={handleChangeTab}>
                        <Tab label="Sobre" value="about" />
                        <Tab label="Loja" value="store" />
                    </Tabs>
                </Stack>

                <Stack direction="row" flex={1} justifyContent="flex-end">
                    <Button
                        color="secondary"
                        size="small"
                        variant="text"
                        startIcon={<WhatsApp />}
                        target="_blank"
                        href={OrderService.getSenderWppLink()}
                    >
                        Compre pelo WhatsApp
                    </Button>
                </Stack>
            </HeaderContainer>
        </ThemeProvider>
    );
}
