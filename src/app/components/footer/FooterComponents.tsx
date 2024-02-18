import { Box, Divider, Stack, Typography } from "@mui/material";
import LOGO from "../../../assets/logo.png";
import appColors from "../../colors/appColors";
import { ResponsiveRow } from "./FooterStyles";

export default function FooterComponent() {
    return (
        <Box bgcolor={appColors.dark} color={appColors.white} padding={4}>
            <ResponsiveRow>
                <Stack direction="column" alignItems="center">
                    <img src={LOGO} alt="logo" style={{ height: "110px" }} />
                </Stack>

                <Stack direction="column">
                    <Typography
                        color={appColors.red}
                        fontWeight={500}
                        variant="subtitle1"
                        paddingBottom={1}
                    >
                        CONTATE-NOS
                    </Typography>
                    <Typography variant="body1">+55 (51) 9722 4452</Typography>
                    <Typography variant="body1">@sofadecorhouse</Typography>
                    <Typography variant="body1">
                        Av. Dorival Cândido Luz de Oliveira, 977 - Gravataí{" "}
                    </Typography>
                </Stack>
            </ResponsiveRow>

            <Divider sx={{ backgroundColor: appColors.white, margin: "5px 0" }} />

            <Stack direction="row" justifyContent="space-between">
                <Typography variant="caption">
                    Reis Home Decor © 2023 Todos os direitos reservados
                </Typography>
                <Typography variant="caption">Desenvolvido por Mateus Rossetto</Typography>
            </Stack>
        </Box>
    );
}
