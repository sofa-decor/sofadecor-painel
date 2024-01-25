import { Delete, Search } from "@mui/icons-material";
import { Stack, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { useGetAllUsersHook } from "../../../../../hooks/user-hooks/useGetAllUsersHook";
import { User } from "../../../../../hooks/user-hooks/useGetUserHook";

export default function AdminUsersPageComponent() {
    const { data, loading } = useGetAllUsersHook();

    const getUsersItems = () => {
        if (!data) return [];
        return data.map(item => <UserItem key={item.id} user={item} />);
    };

    return (
        <Stack direction="column" alignItems="center" gap="10px">
            <Stack direction="row" gap="2px" alignItems="center">
                <TextField variant="standard" />
                <Search fontSize="small" />
            </Stack>
            <Typography variant="caption">{data?.length || 0} resultados</Typography>
            <br />
            {getUsersItems()}
        </Stack>
    );
}

type UserItemParams = {
    user: User;
};

const UserItem: FC<UserItemParams> = ({ user }) => {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            borderBottom="1px solid gray"
            width="100%"
        >
            <Typography width="33%" variant="body1">
                {user.username}
            </Typography>
            <Typography textAlign="center" width="33%" variant="body1">
                {user.role}
            </Typography>
            <Typography textAlign="center" width="33%" variant="body1">
                Ultimo acesso
            </Typography>
            <Delete fontSize="small" color="primary" />
        </Stack>
    );
};
