import { Delete, Edit, Search } from "@mui/icons-material";
import { Alert, CircularProgress, Stack, TextField, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { EmptyObject } from "react-hook-form";
import {
    Product,
    useGetManyProductsHook,
} from "../../../../../hooks/product-hooks/getManyProductsHook";
import { useDeleteProductHook } from "../../../../../hooks/product-hooks/useDeleteProductHook";
import useAppRouterHook from "../../../../../hooks/useAppRouterHook";
import appColors from "../../../../colors/appColors";
import PageLoader from "../../../../components/Loaders/page-loader/PageLoader";

export default function AdminProductsPageComponent() {
    const { data, loading } = useGetManyProductsHook();
    const [products, setProducts] = useState<Array<Product> | null>(null);

    const deleteProductById = async (id: string) => {
        if (!products) return;
        const newList = products.filter(item => item.id != id);
        setProducts(newList);
    };

    useEffect(() => {
        if (!data) return;
        setProducts(data.products);
    }, [data]);

    const getListItems = () => {
        if (!products) return [];
        return products.map(item => (
            <ProductItem key={item.id} product={item} deleteProductById={deleteProductById} />
        ));
    };

    return (
        <Stack direction="column" alignItems="center" gap="10px">
            <Stack direction="row" gap="2px" alignItems="center">
                <TextField variant="standard" />
                <Search fontSize="small" />
            </Stack>
            <Typography variant="caption">{products?.length || 0} resultados</Typography>
            <br />
            <HeaderItem />
            {products && getListItems()}
            {!products && loading && <PageLoader />}
            {products && products.length == 0 && (
                <Alert severity="info" variant="filled" sx={{ width: "100%" }}>
                    Nenhum produto encontrado
                </Alert>
            )}
        </Stack>
    );
}

type ProductItemParams = {
    product: Product;
    deleteProductById: (id: string) => Promise<void>;
};

const ProductItem: FC<ProductItemParams> = ({ product, deleteProductById }) => {
    const { data, remove, loading } = useDeleteProductHook();
    const { router } = useAppRouterHook();

    useEffect(() => {
        if (!data) return;
        deleteProductById(product.id);
    }, [data]);

    const onDeleteProducts = () => {
        remove(product.id);
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
            <Stack direction="row" gap={2}>
                <Edit
                    fontSize="small"
                    color="info"
                    sx={{ cursor: "pointer" }}
                    onClick={() => router.painel_products_update.go(product.name)}
                />
                {loading ? (
                    <CircularProgress size={18} />
                ) : (
                    <Delete
                        fontSize="small"
                        color="primary"
                        sx={{ cursor: "pointer" }}
                        onClick={onDeleteProducts}
                    />
                )}
            </Stack>
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
            <Typography
                fontWeight={500}
                width="30%"
                textAlign="center"
                variant="body1"
                marginRight={3}
            >
                Imagens
            </Typography>
            <Delete fontSize="small" sx={{ color: appColors.background }} />
        </Stack>
    );
};
