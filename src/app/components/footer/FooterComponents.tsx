import { Box, Divider, Stack, Typography } from "@mui/material";
import LOGO from "../../../assets/logo.png";
import appColors from "../../colors/appColors";

export default function FooterComponent() {
    return (
        <Box bgcolor={appColors.dark} color={appColors.white}>
            <Stack direction="row" justifyContent="space-around" padding={4}>
                <Stack direction="column" alignItems="center">
                    <img
                        src={LOGO}
                        alt="logo"
                        style={{ width: "100px", height: "100px" }}
                    />
                    <Typography fontSize={24} fontWeight={700}>
                        SOFÁDECOR
                    </Typography>
                </Stack>

                <Stack direction="column">
                    <Typography
                        color={appColors.red}
                        fontWeight={500}
                        variant="subtitle1"
                    >
                        PRODUTOS
                    </Typography>
                    <Typography variant="body1">Poltronas</Typography>
                    <Typography variant="body1">Mesas</Typography>
                    <Typography variant="body1">Sofas</Typography>
                    <Typography variant="body1">Puff</Typography>
                    <Typography variant="body1">Mesas</Typography>
                </Stack>

                <Stack direction="column">
                    <Typography
                        color={appColors.red}
                        fontWeight={500}
                        variant="subtitle1"
                    >
                        CONTATE-NOS
                    </Typography>
                    <Typography variant="body1">(51) 99590-9864</Typography>
                    <Typography variant="body1">
                        comercial@kunzereis.com.br
                    </Typography>
                    <Typography variant="body1">
                        Av. João Klauk, 951, Primavera Dois Irmãos/RS
                    </Typography>
                    <Typography variant="body1">@sofadecorhouse</Typography>
                </Stack>
            </Stack>

            <Divider sx={{ backgroundColor: appColors.white }} />

            <Stack direction="row" justifyContent="space-between" padding={4}>
                <Typography variant="caption">
                    Reis Home Decor © 2023 Todos os direitos reservados
                </Typography>
                <Typography variant="caption">
                    Desenvolvido por Mateus Rossetto
                </Typography>
            </Stack>
        </Box>
    );
}
