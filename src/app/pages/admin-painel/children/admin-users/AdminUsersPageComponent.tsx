import { Delete, Search } from "@mui/icons-material";
import { Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function AdminUsersPageComponent() {
    const [list, setList] = useState<Array<React.ReactElement>>([]);

    useEffect(() => {
        const arr = [];
        for (let i = 0; i < 20; i++) {
            arr.push(<UserItem />);
        }
        setList(arr);
    });

    return (
        <Stack direction="column" alignItems="center" gap="10px">
            <Stack direction="row" gap="2px" alignItems="center">
                <TextField variant="standard" />
                <Search fontSize="small" />
            </Stack>
            <Typography variant="caption">{list.length || 0} resultados</Typography>
            <br />
            {list}
        </Stack>
    );
}

function UserItem() {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            borderBottom="1px solid gray"
            width="100%"
        >
            <Typography variant="body1">Nome da pessoa</Typography>
            <Typography variant="body1">acesso (admin / super-admin)</Typography>
            <Typography variant="body1">Ultimo acesso</Typography>
            <Delete fontSize="small" color="primary" />
        </Stack>
    );
}
