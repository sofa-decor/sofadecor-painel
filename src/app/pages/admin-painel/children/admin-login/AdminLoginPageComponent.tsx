import { Alert, Button, LinearProgress, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { LoginUser, useLoginUserHook } from "../../../../../hooks/auth-hooks/loginUserHook";
import useAppRouterHook from "../../../../../hooks/useAppRouterHook";
import appColors from "../../../../colors/appColors";

export default function AdminLoginPageComponent() {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const { router } = useAppRouterHook();
    const { login, data, error, loading } = useLoginUserHook();
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        if (!data) return;
        router.admin_painel_products.go();
    }, [data]);

    useEffect(() => {
        if (!error) return;
        setErrorMessage("Nome de usuario ou senha incorreto");
    }, [error]);

    const sendLoginUserRequest = (data: LoginUser) => login(data);

    return (
        <Stack direction="column" justifyContent="center" sx={{ height: "85vh" }}>
            <form onSubmit={handleSubmit(sendLoginUserRequest as SubmitHandler<FieldValues>)}>
                <Stack direction="column" gap="10px" padding={10} textAlign="center">
                    <Typography variant="h5" fontWeight="bold" color={appColors.red}>
                        Login
                    </Typography>
                    <TextField
                        id="username"
                        size="small"
                        label="Usuário"
                        {...register("username")}
                        required
                    />
                    <TextField
                        id="password"
                        size="small"
                        label="Senha"
                        {...register("password")}
                        required
                    />
                    {errorMessage && (
                        <Alert severity="error" variant="filled">
                            {errorMessage}
                        </Alert>
                    )}
                    {loading ? (
                        <LinearProgress color="primary" />
                    ) : (
                        <Button type="submit" variant="contained">
                            Entrar
                        </Button>
                    )}
                </Stack>
            </form>
        </Stack>
    );
}
