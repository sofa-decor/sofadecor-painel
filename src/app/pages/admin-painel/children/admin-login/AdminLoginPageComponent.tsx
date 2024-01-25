import { Alert, Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { LoginUser, useLoginUserHook } from "../../../../../hooks/auth-hooks/loginUserHook";
import useAppRouterHook from "../../../../../hooks/useAppRouterHook";
import appColors from "../../../../colors/appColors";

export default function AdminLoginPageComponent() {
    const [error, setError] = useState<string | null>(null);
    const { router } = useAppRouterHook();
    const { login, data, error: loginError } = useLoginUserHook();
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        // router.admin_painel_products.go()
        console.log(data);
    }, [data]);

    useEffect(() => {
        console.log(loginError);
    }, [loginError]);

    useEffect(() => {});

    const sendLoginUserRequest = (data: LoginUser) => {
        console.log("data sended", data);
        login(data);
    };

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
                    />
                    <TextField id="password" size="small" label="Senha" {...register("password")} />
                    {error && (
                        <Typography variant="caption" color={appColors.red}>
                            {error}
                        </Typography>
                    )}
                    <Button type="submit" variant="contained">
                        Entrar
                    </Button>
                    {error && (
                        <Alert severity="error" variant="filled">
                            error
                        </Alert>
                    )}
                </Stack>
            </form>
        </Stack>
    );
}
