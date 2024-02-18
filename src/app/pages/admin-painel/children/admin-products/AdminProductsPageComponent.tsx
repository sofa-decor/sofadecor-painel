import { Delete, Edit } from "@mui/icons-material";
import { Alert, CircularProgress, Stack, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import {
    Product,
    useGetManyProductsHook,
} from "../../../../../hooks/product-hooks/getManyProductsHook";
import { useDeleteProductHook } from "../../../../../hooks/product-hooks/useDeleteProductHook";
import useAppRouterHook from "../../../../../hooks/useAppRouterHook";
import PageLoader from "../../../../components/Loaders/page-loader/PageLoader";

export default function AdminProductsPageComponent() {
    const { data, loading, fetch } = useGetManyProductsHook();
    const [products, setProducts] = useState<Array<Product> | null>(null);

    useEffect(() => {
        if (!data) return;
        if (data.products.length == 1) fetch({ name: "" });
        setProducts(data.products);
    }, [data]);

    const deleteProductById = async (id: string) => {
        if (!products) return;
        const newList = products.filter(item => item.id != id);
        setProducts(newList);
    };

    const getListItems = () => {
        if (!products) return [];
        return products.map(item => (
            <ProductItem key={item.id} product={item} deleteProductById={deleteProductById} />
        ));
    };

    return (
        <Stack direction="column" alignItems="center">
            <HeaderItem amount={products?.length || 0} />
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
            padding="5px 0"
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
                    onClick={() => {
                        window.scrollTo(0, 0);
                        router.painel_products_update.go(product.name);
                    }}
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

const HeaderItem: FC<{ amount: number }> = ({ amount }) => {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
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
                Imagens
            </Typography>
            <Typography textAlign="center" variant="caption">
                <Typography fontWeight={500} variant="body1">
                    {amount || 0}
                </Typography>
                resultados
            </Typography>
        </Stack>
    );
};
