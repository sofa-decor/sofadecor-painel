import { WhatsApp } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Logo from "../../../assets/logo.png";
import OrderService from "../../../services/OrderService";
import appColors from "../../colors/appColors";
import { HeaderBar, HeaderInner, LogoBox, TextButtonBox } from "./HeaderStyles";

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
            <HeaderBar>
                <HeaderInner>
                    <LogoBox direction="row" flex={1}>
                        <img height={60} src={Logo} alt="Sofa Decor House" />
                    </LogoBox>

                    <Stack direction="row" flex={1} justifyContent="flex-end">
                        <Button
                            color="secondary"
                            size="large"
                            variant="text"
                            startIcon={<WhatsApp />}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={OrderService.getSenderWppLink()}
                            sx={{
                                textTransform: "none",
                                fontWeight: 600,
                                borderRadius: 999,
                                px: { xs: 1.25, sm: 2 },
                                py: 0.75,
                                color: "rgba(255, 255, 255, 0.96)",
                                bgcolor: "rgba(0, 0, 0, 0.42)",
                                border: `1px solid rgba(33, 188, 59, 0.55)`,
                                boxShadow: "0 2px 12px rgba(0, 0, 0, 0.25)",
                                textShadow: "0 1px 2px rgba(0, 0, 0, 0.65)",
                                backdropFilter: "blur(8px)",
                                WebkitBackdropFilter: "blur(8px)",
                                transition:
                                    "background-color 0.2s, border-color 0.2s, box-shadow 0.2s",
                                "& .MuiButton-startIcon": {
                                    color: appColors.green,
                                    filter: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.55))",
                                },
                                "&:hover": {
                                    bgcolor: "rgba(0, 0, 0, 0.55)",
                                    borderColor: "rgba(33, 188, 59, 0.85)",
                                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.35)",
                                },
                            }}
                        >
                            <TextButtonBox>Entre em contato</TextButtonBox>
                        </Button>
                    </Stack>
                </HeaderInner>
            </HeaderBar>
        </ThemeProvider>
    );
}
