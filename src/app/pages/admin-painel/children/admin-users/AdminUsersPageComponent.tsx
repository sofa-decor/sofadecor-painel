import { Delete, Search } from "@mui/icons-material";
import { Alert, CircularProgress, Stack, Tab, Tabs, TextField, Typography } from "@mui/material";
import { ChangeEvent, FC, SyntheticEvent, useEffect, useState } from "react";
import { useDeleteUserHook } from "../../../../../hooks/user-hooks/useDeleteUserHook";
import { useGetAllUsersHook } from "../../../../../hooks/user-hooks/useGetAllUsersHook";
import { User } from "../../../../../hooks/user-hooks/useGetUserHook";
import PageLoader from "../../../../components/Loaders/page-loader/PageLoader";
import useAppRouterHook from "../../../../../hooks/useAppRouterHook";

export default function AdminUsersPageComponent() {
    const { data, loading, fetch } = useGetAllUsersHook();
    const [tabValue, setTabValue] = useState("Visualizar");
    const { router } = useAppRouterHook();

    useEffect(() => undefined, [data]);

    const getUsersItems = () => {
        if (!data) return [];
        return data.map(item => <UserItem key={item.id} user={item} reloadUsers={fetch} />);
    };

    const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const value = e.target.value;
        if (value.length > 2 || !value) fetch({ name: value });
    };

    const handleChangeTab = (e: SyntheticEvent, value: string) => {
        e.preventDefault();
        if (value == "Visualizar") router.admin_painel_users.go();
        if (value == "Adicionar") router.admin_painel_users_add.go();
        setTabValue(value);
    };

    return (
        <Stack direction="column" alignItems="center" gap="10px">
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
                <Stack direction="row" gap="2px" alignItems="center">
                    <TextField
                        variant="standard"
                        onChange={handleChangeSearch}
                        placeholder="Buscar pelo nome"
                    />
                    <Search fontSize="small" color="primary" />
                </Stack>
            </Stack>

            <Typography variant="caption" alignSelf="flex-end" padding="0 30px">
                {data?.length || 0} resultados
            </Typography>
            <br />
            {getUsersItems()}
            {data && loading && <PageLoader />}
            {data && data.length == 0 && (
                <Alert severity="info" variant="filled">
                    Nenhum usuario cadastrado
                </Alert>
            )}
        </Stack>
    );
}

type UserItemParams = {
    user: User;
    reloadUsers: () => void;
};

const UserItem: FC<UserItemParams> = ({ user, reloadUsers }) => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const { data, remove, error, loading } = useDeleteUserHook();

    const onDeleteUser = () => {
        remove(user.id);
    };

    useEffect(() => {
        if (!data) return;
        reloadUsers();
    }, [data]);

    useEffect(() => {
        if (!error) return;
        setErrorMessage("Nao foi possivel excluir o usuario");
    }, [error]);

    return (
        <>
            <Stack
                direction="row"
                justifyContent="space-between"
                borderBottom="1px solid gray"
                width="100%"
            >
                <Typography width="45%" variant="body1">
                    {user.username}
                </Typography>
                <Typography textAlign="end" width="45%" variant="body1">
                    {user.role}
                </Typography>
                {loading ? (
                    <CircularProgress size={18} />
                ) : (
                    <Delete
                        fontSize="small"
                        color="primary"
                        sx={{ cursor: "pointer" }}
                        onClick={onDeleteUser}
                    />
                )}
            </Stack>
            {errorMessage && (
                <Alert severity="error" variant="filled">
                    {errorMessage}
                </Alert>
            )}
        </>
    );
};
