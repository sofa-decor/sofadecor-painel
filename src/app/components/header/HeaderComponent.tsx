import { Button, Stack, Tab, Tabs, Typography } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import Logo from "../../../assets/logo.png";
import useAppRouterHook from "../../../hooks/useAppRouterHook";
import { HeaderContainer } from "./HeaderStyles";

export default function HeaderComponent() {
    const { router } = useAppRouterHook();
    const [tabValue, setTabValue] = useState("sala");

    const handleChangeTab = (e: SyntheticEvent, value: string) => {
        e.preventDefault();
        if (value == "sobre") router.about.go();
        else router.products.go();
        setTabValue(value);
    };

    return (
        <HeaderContainer>
            <Stack direction="row" alignItems="center" flex={1}>
                <Typography fontSize={20} fontWeight={700}>
                    SOFÁ DECOR
                </Typography>
                <img width={35} height={35} src={Logo} alt="logo" />
            </Stack>

            <Stack direction="row" flex={1} justifyContent="center">
                <Tabs value={tabValue} onChange={handleChangeTab}>
                    <Tab label="Sobre" value="sobre" />
                    <Tab label="Sala" value="sala" />
                    <Tab label="Quarto" value="Quarto" />
                    <Tab label="Cozinha" value="Cozinha" />
                </Tabs>
            </Stack>

            <Stack direction="row" flex={1} justifyContent="flex-end">
                <Button size="small" variant="outlined">
                    (51) 99590 - 9864
                </Button>
            </Stack>
        </HeaderContainer>
    );
}
