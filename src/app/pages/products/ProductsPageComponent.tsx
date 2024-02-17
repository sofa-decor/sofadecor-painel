import { Box, Pagination, Stack, Tab, Tabs, Typography } from "@mui/material";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../../css/App.css";
import {
    PaginationState,
    Product,
    useGetManyProductsHook,
} from "../../../hooks/product-hooks/getManyProductsHook";
import { ProductTags } from "../../../types/product-tags.type";
import PageLoader from "../../components/Loaders/page-loader/PageLoader";
import { AlertError, AlertInfo } from "../../components/alert";
import HeaderComponent from "../../components/header/HeaderComponent";
import ProductCardComponent from "../../components/product-card/ProductCardComponent";
import { ProductsList } from "./ProductsPageStyles";

export type HomeRedirectState = {
    category: ProductTags;
};

const pagination: PaginationState = {
    itemsAmount: 12,
    currentPage: 1,
    totalPages: 1,
};

export default function ProductsPageComponent() {
    const location = useLocation();
    const initialTab = location.state?.category;
    const tabsValues = Object.values(ProductTags);
    const [currentTab, setCurrentTab] = useState<string>(initialTab || ProductTags.chairs);
    const { loading, data, error, fetch } = useGetManyProductsHook(false);

    useEffect(() => {
        if (!data) fetch({ ...pagination, tags: [currentTab] });
    }, []);

    const handleChangeTab = (e: SyntheticEvent, value: string) => {
        e.preventDefault();
        fetch({ tags: [value], ...pagination });
        setCurrentTab(value);
    };

    const handleChangePagination = (e: ChangeEvent<unknown>, page: number) => {
        e.preventDefault();
        window.scrollTo(0, 0);
        fetch({ tags: [currentTab], ...pagination, currentPage: page });
    };

    return (
        <>
            <HeaderComponent />
            <Box className="app-page-container">
                <Stack
                    borderBottom={1}
                    borderColor="lightGray"
                    width="fit-content"
                    alignSelf="center"
                    fontWeight={500}
                >
                    <Tabs value={currentTab} onChange={handleChangeTab}>
                        {tabsValues.map((value: string) => (
                            <Tab label={value} value={value} key={value} />
                        ))}
                    </Tabs>
                </Stack>
                <Stack direction="row" justifyContent="center" alignItems="center" marginBottom={2}>
                    <Typography variant="caption">
                        {data ? data.totalItems : 0} Resultados
                    </Typography>
                </Stack>

                {data && data.products.length > 0 && (
                    <>
                        <ProductsList>
                            {data.products.map((product: Product) => (
                                <ProductCardComponent key={product.id} product={product} />
                            ))}
                        </ProductsList>
                        <Pagination
                            // showFirstButton
                            // showLastButton
                            onChange={handleChangePagination}
                            defaultPage={data.page}
                            count={data.totalPages}
                            variant="outlined"
                            size="small"
                            color="primary"
                            sx={{ alignSelf: "center" }}
                        />
                    </>
                )}

                {loading && <PageLoader />}

                {data?.products.length == 0 && !loading && (
                    <AlertInfo>Não encontramos produtos no momento, volte mais tarde</AlertInfo>
                )}

                {error && (
                    <AlertError>Encontramos algum problema no momento, volte mais tarde</AlertError>
                )}
            </Box>
        </>
    );
}
