import { Delete, Edit, Search } from "@mui/icons-material";
import { Alert, CircularProgress, Pagination, Stack, TextField, Typography } from "@mui/material";
import { ChangeEvent, FC, useEffect, useState } from "react";
import {
    Product,
    useGetManyProductsHook,
} from "../../../../../hooks/product-hooks/getManyProductsHook";
import { useDeleteProductHook } from "../../../../../hooks/product-hooks/useDeleteProductHook";
import useAppRouterHook from "../../../../../hooks/useAppRouterHook";
import PageLoader from "../../../../components/Loaders/page-loader/PageLoader";

export default function AdminProductsPageComponent() {
    const { data, loading, fetch } = useGetManyProductsHook(false);
    const [products, setProducts] = useState<Array<Product> | null>(null);

    useEffect(() => {
        if (!data) fetch({ currentPage: 1, itemsAmount: 20, name: undefined });
        if (data) setProducts(data.products);
    }, [data]);

    const deleteProductById = async (id: string) => {
        if (!products) return;
        const newList = products.filter(item => item._id != id);
        setProducts(newList);
    };

    const getListItems = () => {
        if (!products) return [];
        return products.map(item => (
            <ProductItem key={item._id} product={item} deleteProductById={deleteProductById} />
        ));
    };

    const handleChangePagination = (e: ChangeEvent<unknown>, page: number) => {
        // e.preventDefault();
        // window.scrollTo(0, 0);
        fetch({ currentPage: page, itemsAmount: 20, name: undefined });
    };

    const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const value = e.target.value;
        if (value.length > 2 || !value)
            fetch({
                currentPage: 1,
                itemsAmount: 20,
                name: value,
            });
    };

    return (
        <Stack direction="column" alignItems="center">
            <Stack direction="row" gap="2px" alignItems="center">
                <TextField
                    variant="standard"
                    onChange={handleChangeSearch}
                    placeholder="Buscar pelo nome"
                />
                <Search fontSize="small" color="primary" />
            </Stack>
            <HeaderItem amount={data?.totalItems || 0} />
            {products && getListItems()}
            {(!data?.products || loading) && <PageLoader />}
            {products && products.length == 0 && (
                <Alert severity="info" variant="filled" sx={{ width: "100%" }}>
                    Nenhum produto encontrado
                </Alert>
            )}
            {products && (
                <Pagination
                    onChange={handleChangePagination}
                    page={data?.page || 1}
                    count={data?.totalPages || 1}
                    variant="outlined"
                    size="small"
                    color="primary"
                    sx={{ margin: "7px 0", alignSelf: "center" }}
                />
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
        deleteProductById(product._id);
    }, [data]);

    const onDeleteProducts = () => {
        remove(product._id);
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
