import { WhatsApp } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Stack } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import useAppRouterHook from "../../../hooks/useAppRouterHook";
import OrderService from "../../../services/OrderService";
import appColors from "../../colors/appColors";
import { HeaderContainer, LogoBox } from "./HeaderStyles";

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
    const navigate = useNavigate();
    const [tabValue, setTabValue] = useState<string>("store");

    useEffect(() => {
        const currentURL = window.location.href;
        if (currentURL.includes("products")) setTabValue("store");
        if (currentURL.includes("sobre")) setTabValue("about");
    }, []);

    const handleChangeTab = (e: SyntheticEvent, value: string) => {
        e.preventDefault();
        if (value === "about") router.about.go();
        else if (value === "admin") router.admin_painel_login.go();
        else if (value === "store") router.products.go();
    };

    return (
        <ThemeProvider theme={headerTheme}>
            <HeaderContainer>
                <ArrowBackIcon sx={{ cursor: "pointer" }} onClick={() => navigate(-1)} />
                <LogoBox direction="row" flex={1}>
                    <img height={60} src={Logo} alt="logo" />
                </LogoBox>

                {/* <Stack
                    height={60}
                    direction="row"
                    flex={1}
                    justifyContent="center"
                    alignItems="flex-end"
                >
                    <Tabs value={tabValue} onChange={handleChangeTab}>
                        <Tab label="Sobre" value="about" />
                        <Tab label="Loja" value="store" />
                        <Tab label="Painel" value="admin" />
                    </Tabs>
                </Stack> */}

                <Stack direction="row" flex={1} justifyContent="flex-end">
                    <Button
                        color="secondary"
                        size="large"
                        variant="text"
                        startIcon={<WhatsApp />}
                        target="_blank"
                        href={OrderService.getSenderWppLink()}
                    >
                        {/* <DesktopVisible>Compre pelo WhatsApp</DesktopVisible> */}
                    </Button>
                </Stack>
            </HeaderContainer>
        </ThemeProvider>
    );
}
