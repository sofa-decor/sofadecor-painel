import { Delete, Search } from "@mui/icons-material";
import { Stack, TextField, Typography } from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import {
    Product,
    useGetManyProductsHook,
} from "../../../../../hooks/product-hooks/getManyProductsHook";

export default function AdminProductsPageComponent() {
    const { data, fetch } = useGetManyProductsHook();
    const [list, setList] = useState<Array<ReactElement>>([]);

    useEffect(() => {
        fetch();
    }, []);

    useEffect(() => {
        if (data == null) return;
        const items: Array<ReactElement> = [];
        for (const product of data.products) {
            items.push(<ProductItem product={product} />);
        }
        setList(items);
    }, [data]);

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

type ProductItemParams = {
    product: Product;
};

function ProductItem({ product }: ProductItemParams) {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            borderBottom="1px solid gray"
            width="100%"
        >
            <Typography variant="body1">{product.name}</Typography>
            <Typography variant="body1">{product.tags}</Typography>
            <Typography variant="body1">{product.images.length}</Typography>
            <Delete fontSize="small" color="primary" />
        </Stack>
    );
}
