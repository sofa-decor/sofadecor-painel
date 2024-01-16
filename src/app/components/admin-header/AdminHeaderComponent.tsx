import { Stack, Tab, Tabs, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { SyntheticEvent, useState } from "react";
import Logo from "../../../assets/logo.png";
import useAppRouterHook from "../../../hooks/useAppRouterHook";
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
    const [tabValue, setTabValue] = useState("produtos");
    const { router } = useAppRouterHook();

    const handleChangeTab = (e: SyntheticEvent, value: string) => {
        e.preventDefault();
        if (value == "produtos") router.admin_painel_products.go();
        if (value == "usuários") router.admin_painel_users.go();
        if (value == "+usuários") router.admin_painel_users_add.go();
        if (value == "+produtos") router.admin_painel_products_add.go();
        setTabValue(value);
    };

    return (
        <ThemeProvider theme={headerTheme}>
            <HeaderContainer>
                <Stack direction="row" alignItems="center" flex={1}>
                    <Typography fontSize={20} fontWeight={700}>
                        SOFÁ DECOR
                    </Typography>
                    <img width={35} height={35} src={Logo} alt="logo" />
                </Stack>
                <Stack direction="row" flex={1} justifyContent="center">
                    <Tabs value={tabValue} onChange={handleChangeTab}>
                        <Tab label="Produtos" value="produtos" />
                        <Tab label="Usuários" value="usuários" />
                        <Tab label="+ Usuários" value="+usuários" />
                        <Tab label="+ produtos" value="+produtos" />
                    </Tabs>
                </Stack>
            </HeaderContainer>
        </ThemeProvider>
    );
}
