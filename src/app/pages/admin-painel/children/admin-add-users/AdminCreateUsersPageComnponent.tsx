import {
    Alert,
    Button,
    LinearProgress,
    MenuItem,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { usersRoles } from "../../../../../data/users-roles.data";
import { UserRequest, usePostUserHook } from "../../../../../hooks/user-hooks/usePostUserHook";

const successAlert = (
    <Alert severity="success" variant="filled">
        Usuario salvo com sucesso
    </Alert>
);
const gerericErrorAlert = (
    <Alert severity="error" variant="filled">
        Erro ao tentar salvar o usuario
    </Alert>
);
const conflictErrorAlert = (
    <Alert severity="error" variant="filled">
        Esse nome de usuario ja existe, tente outro
    </Alert>
);

export default function AdminCreateUsersPageComponent() {
    const { register, handleSubmit, reset } = useForm();
    const { post, error, loading, data } = usePostUserHook();
    const [alert, setAlert] = useState<null | ReactElement>(null);

    useEffect(() => {
        if (data) {
            reset();
            setAlert(successAlert);
        }
    }, [data, reset]);

    useEffect(() => {
        if (error) {
            if (error.statusCode == 409) setAlert(conflictErrorAlert);
            else setAlert(gerericErrorAlert);
        }
    }, [error]);

    const onSubmitForm = async (data: UserRequest) => {
        await post(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmitForm as SubmitHandler<FieldValues>)}>
            <Stack direction="column" gap="10px" padding={10}>
                <Typography color="primary" variant="h6">
                    Adicione um novo usuário
                </Typography>
                <TextField
                    id="username"
                    fullWidth
                    label="Nome de usuário"
                    placeholder="Ex: Poltrona Amarela"
                    required
                    {...register("username")}
                />
                <TextField
                    select
                    id="role"
                    fullWidth
                    label="Nível de acesso"
                    defaultValue={"admin"}
                    required
                    {...register("role")}
                >
                    {usersRoles.map(({ name, tag }, index) => (
                        <MenuItem key={index} value={tag}>
                            {name}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="password"
                    fullWidth
                    label="Senha de acesso"
                    placeholder="Ex: minha-senha"
                    required
                    type="password"
                    {...register("password")}
                />
                {alert != null && alert}
                {loading ? (
                    <LinearProgress color="primary" />
                ) : (
                    <Button type="submit" variant="contained">
                        Salvar
                    </Button>
                )}
            </Stack>
        </form>
    );
}
