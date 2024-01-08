import { Delete, Search } from "@mui/icons-material";
import { Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function AdminProductsPageComponent() {
    const [list, setList] = useState<Array<React.ReactElement>>([]);

    useEffect(() => {
        const arr = [];
        for (let i = 0; i < 20; i++) {
            arr.push(<ProductItem />);
        }
        setList(arr);
    });

    return (
        <Stack direction="column" alignItems="center" gap="10px">
            <Stack direction="row" gap="2px" alignItems="center">
                <TextField variant="standard" />
                <Search fontSize="small" />
            </Stack>
            <Typography variant="caption">Resultados: {list.length || 0}</Typography>
            <br />
            {list}
        </Stack>
    );
}

function ProductItem() {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            borderBottom="1px solid gray"
            width="100%"
        >
            <Typography variant="body1">Nome do item</Typography>
            <Typography variant="body1">categoria</Typography>
            <Typography variant="body1">Qtd. imagens</Typography>
            <Delete fontSize="small" color="primary" />
        </Stack>
    );
}
