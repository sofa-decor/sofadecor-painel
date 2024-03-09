import { Delete, Search } from "@mui/icons-material";
import { Alert, CircularProgress, Stack, TextField, Typography } from "@mui/material";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { useDeleteUserHook } from "../../../../../hooks/user-hooks/useDeleteUserHook";
import { useGetAllUsersHook } from "../../../../../hooks/user-hooks/useGetAllUsersHook";
import { User } from "../../../../../hooks/user-hooks/useGetUserHook";
import PageLoader from "../../../../components/Loaders/page-loader/PageLoader";

export default function AdminUsersPageComponent() {
    const { data, loading, fetch } = useGetAllUsersHook();

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

    return (
        <Stack direction="column" alignItems="center" gap="10px">
            <Stack direction="row" gap="2px" alignItems="center">
                <TextField
                    variant="standard"
                    onChange={handleChangeSearch}
                    placeholder="Buscar pelo nome"
                />
                <Search fontSize="small" color="primary" />
            </Stack>
            <Typography variant="caption">{data?.length || 0} resultados</Typography>
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
