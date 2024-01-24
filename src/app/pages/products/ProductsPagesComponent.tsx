import { FilterAlt } from "@mui/icons-material";
import { Alert, Box, Button, Fab, Pagination, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "../../../css/App.css";
import { Product, useGetManyProductsHook } from "../../../hooks/product-hooks/getManyProductsHook";
import PageLoader from "../../components/Loaders/page-loader/PageLoader";
import HeaderComponent from "../../components/header/HeaderComponent";
import ProductCardComponent from "../../components/product-card/ProductCardComponent";
import { IconFilterCount, ProductsList } from "./ProductsPageStyles";

export default function ProductsPageComponent() {
    const [isOpenFilters, setIsOpenFilters] = useState(false);
    const { fetch, loading, data, error } = useGetManyProductsHook();

    useEffect(() => {
        fetch();
    }, []);

    return (
        <>
            <HeaderComponent />
            <Box className="app-page-container">
                <Stack
                    direction="row"
                    gap={1}
                    justifyContent="space-between"
                    alignItems="center"
                    marginBottom={2}
                >
                    <Typography variant="caption">
                        {data ? data?.products.length : 0} Resultados
                    </Typography>

                    <Stack
                        direction="row"
                        gap={1}
                        justifyContent="space-between"
                        sx={{ alignSelf: "flex-end" }}
                    >
                        {isOpenFilters && (
                            <>
                                <Button color="inherit" size="medium">
                                    Sofa
                                </Button>
                                <Button size="medium">Poltronas</Button>
                                <Button color="inherit" size="medium">
                                    puffs
                                </Button>
                            </>
                        )}
                        <Fab
                            color="primary"
                            aria-label="add"
                            size="small"
                            onClick={() => setIsOpenFilters(!isOpenFilters)}
                        >
                            <IconFilterCount>3</IconFilterCount>
                            <FilterAlt fontSize="small" />
                        </Fab>
                    </Stack>
                </Stack>

                {data?.products.length > 0 && (
                    <>
                        <ProductsList>
                            {data.products.map((product: Product) => (
                                <ProductCardComponent key={product.id} product={product} />
                            ))}
                        </ProductsList>
                        <Pagination
                            showFirstButton
                            showLastButton
                            count={10}
                            variant="outlined"
                            size="small"
                            color="primary"
                            sx={{ alignSelf: "center" }}
                        />
                    </>
                )}

                {loading && <PageLoader />}

                {data?.products.length == 0 && !loading && (
                    <Alert variant="filled" severity="info">
                        Não encontramos produtos no momento, volte mais tarde
                    </Alert>
                )}

                {error && (
                    <Alert variant="filled" severity="error">
                        Encontramos algum problema no momento, volte mais tarde
                    </Alert>
                )}
            </Box>
        </>
    );
}
