import { Stack, Tab, Tabs } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { SyntheticEvent, useState } from "react";
import Logo from "../../../assets/logo.png";
import useAppRouterHook from "../../../hooks/useAppRouterHook";
import appColors from "../../colors/appColors";
import { HeaderContainer, LogoBox } from "./AdminHeaderStyles";

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
    const [tabValue, setTabValue] = useState("produtos");
    const { router } = useAppRouterHook();

    const handleChangeTab = (e: SyntheticEvent, value: string) => {
        e.preventDefault();
        if (value == "produtos") router.admin_painel_products.go();
        if (value == "usuários") router.admin_painel_users.go();
        if (value == "+usuários") router.admin_painel_users_add.go();
        if (value == "+produtos") router.admin_painel_products_add.go();
        if (value == "store") router.products.go();
        setTabValue(value);
    };

    return (
        <ThemeProvider theme={headerTheme}>
            <HeaderContainer sx={{ background: "#000 !important" }}>
                <LogoBox direction="row" flex={1}>
                    <img height={60} src={Logo} alt="logo" />
                </LogoBox>
                <Stack direction="row" flex={1} justifyContent="center">
                    <Tabs value={tabValue} onChange={handleChangeTab}>
                        <Tab label="Loja" value="store" />
                        <Tab label="items" value="produtos" />
                        <Tab label="+item" value="+produtos" />
                        <Tab label="Usuários" value="usuários" />
                        <Tab label="+Usuários" value="+usuários" />
                    </Tabs>
                </Stack>
            </HeaderContainer>
        </ThemeProvider>
    );
}
