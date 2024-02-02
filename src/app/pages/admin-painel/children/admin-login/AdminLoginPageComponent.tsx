import { Button, LinearProgress, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { LoginUser, useLoginUserHook } from "../../../../../hooks/auth-hooks/loginUserHook";
import useAuthUserHook from "../../../../../hooks/auth-hooks/useAuthUserHook";
import appColors from "../../../../colors/appColors";
import { AlertError } from "../../../../components/alert";

export default function AdminLoginPageComponent() {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const { login, data, error, loading: loadingLogin } = useLoginUserHook();
    const { fetch, loading: loadingUser } = useAuthUserHook();
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        if (!data) return;
        localStorage.setItem("token", data.token);
        fetch();
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
                        type="password"
                        {...register("password")}
                        required
                    />
                    {errorMessage && <AlertError>{errorMessage}</AlertError>}
                    {loadingLogin || loadingUser ? (
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
