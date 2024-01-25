import { Delete, Search } from "@mui/icons-material";
import { Alert, Stack, TextField, Typography } from "@mui/material";
import { FC, useEffect } from "react";
import { EmptyObject } from "react-hook-form";
import {
    Product,
    useGetManyProductsHook,
} from "../../../../../hooks/product-hooks/getManyProductsHook";
import { useDeleteProductHook } from "../../../../../hooks/product-hooks/useDeleteProductHook";
import appColors from "../../../../colors/appColors";
import PageLoader from "../../../../components/Loaders/page-loader/PageLoader";

export default function AdminProductsPageComponent() {
    const { data, fetch, loading } = useGetManyProductsHook();

    const { data: deletedResponse, remove } = useDeleteProductHook();

    useEffect(() => {
        fetch();
    }, []);
    useEffect(() => () => {}, [data]);

    useEffect(() => {
        if (!deletedResponse || !data) return;
        data.products = data.products.filter(item => item.id != deletedResponse.id);
    }, [deletedResponse]);

    const onDeleteProduct = async (id: string) => {
        await remove(id);
    };

    const getListItems = () => {
        if (!data) return [];
        return data.products.map(item => (
            <ProductItem key={item.id} product={item} onDeleteProduct={onDeleteProduct} />
        ));
    };

    return (
        <Stack direction="column" alignItems="center" gap="10px">
            <Stack direction="row" gap="2px" alignItems="center">
                <TextField variant="standard" />
                <Search fontSize="small" />
            </Stack>
            <Typography variant="caption">{data?.products.length || 0} resultados</Typography>
            <br />
            <HeaderItem />
            {data && getListItems()}
            {!data && loading && <PageLoader />}
            {data && data.products.length == 0 && (
                <Alert severity="info" variant="filled" sx={{ width: "100%" }}>
                    Nenhum produto encontrado
                </Alert>
            )}
            {}
        </Stack>
    );
}

type ProductItemParams = {
    product: Product;
    onDeleteProduct: (id: string) => Promise<void>;
};

const ProductItem: FC<ProductItemParams> = ({ product, onDeleteProduct }) => {
    const sendDeleteProduct = () => {
        onDeleteProduct(product.id);
    };

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            borderBottom="1px solid gray"
            width="100%"
        >
            <Typography width="30%" variant="body1">
                {product.name}
            </Typography>
            <Typography width="30%" textAlign="center" variant="body1">
                {product.tags.join(" - ")}
            </Typography>
            <Typography width="30%" textAlign="center" variant="body1">
                {product.images.length}
            </Typography>
            <Delete
                fontSize="small"
                color="primary"
                sx={{ cursor: "pointer" }}
                onClick={sendDeleteProduct}
            />
        </Stack>
    );
};

const HeaderItem: FC<EmptyObject> = () => {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            borderBottom="1px solid gray"
            width="100%"
        >
            <Typography fontWeight={500} width="30%" variant="body1">
                Nome do produto
            </Typography>
            <Typography fontWeight={500} width="30%" textAlign="center" variant="body1">
                Categorias
            </Typography>
            <Typography fontWeight={500} width="30%" textAlign="center" variant="body1">
                Qtd. images
            </Typography>
            <Delete fontSize="small" sx={{ color: appColors.background }} />
        </Stack>
    );
};
