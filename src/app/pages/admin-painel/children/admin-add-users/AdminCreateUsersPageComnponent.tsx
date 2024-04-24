import {
    Alert,
    Button,
    LinearProgress,
    MenuItem,
    Stack,
    Tab,
    Tabs,
    TextField,
    Typography,
} from "@mui/material";
import { ReactElement, SyntheticEvent, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { usersRoles } from "../../../../../data/users-roles.data";
import { UserRequest, usePostUserHook } from "../../../../../hooks/user-hooks/usePostUserHook";
import useAppRouterHook from "../../../../../hooks/useAppRouterHook";

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
    const { router } = useAppRouterHook();
    const [alert, setAlert] = useState<null | ReactElement>(null);
    const [tabValue, setTabValue] = useState("Adicionar");

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

    const handleChangeTab = (e: SyntheticEvent, value: string) => {
        e.preventDefault();
        if (value == "Visualizar") router.admin_painel_users.go();
        if (value == "Adicionar") router.admin_painel_users_add.go();
        setTabValue(value);
    };

    return (
        <form onSubmit={handleSubmit(onSubmitForm as SubmitHandler<FieldValues>)}>
            <Stack direction="column" gap="10px">
                <Stack
                    marginTop={1}
                    direction="row"
                    flex={1}
                    justifyContent="space-between"
                    width="100%"
                >
                    <Tabs value={tabValue} onChange={handleChangeTab}>
                        <Tab label="Visualizar" value="Visualizar" />
                        <Tab label="Adicionar" value="Adicionar" />
                    </Tabs>
                    <br />
                    <Stack direction="row" gap="2px" alignItems="center"></Stack>
                </Stack>
                <Typography color="primary" variant="h6">
                    Adicionar um novo usuário
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
