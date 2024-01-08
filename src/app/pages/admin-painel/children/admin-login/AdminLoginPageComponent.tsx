import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import useAppRouterHook from "../../../../../hooks/useAppRouterHook";
import appColors from "../../../../colors/appColors";

export default function AdminLoginPageComponent() {
    const [error] = useState<string | null>(null);
    const { router } = useAppRouterHook();

    return (
        <Stack direction="column" alignItems="center" gap="10px">
            <Typography variant="h5" fontWeight="bold" color={appColors.red}>
                Login
            </Typography>
            <TextField size="small" label="Usuário" />
            <TextField size="small" label="Senha" />
            {error && (
                <Typography variant="caption" color={appColors.red}>
                    {error}
                </Typography>
            )}
            <Button onClick={router.admin_painel_products.go} variant="contained">
                Entrar
            </Button>
        </Stack>
    );
}
