import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../../css/App.css";
import { Product, useGetManyProductsHook } from "../../../hooks/product-hooks/getManyProductsHook";
import { ProductTags } from "../../../types/product-tags.type";
import PageLoader from "../../components/Loaders/page-loader/PageLoader";
import { AlertError, AlertInfo } from "../../components/alert";
import HeaderComponent from "../../components/header/HeaderComponent";
import ProductCardComponent from "../../components/product-card/ProductCardComponent";
import {
    ActiveButtonTab,
    ButtonTab,
    FilterButton,
    FilterCounter,
    ProductsList,
} from "./ProductsPageStyles";

export type HomeRedirectState = {
    category: ProductTags;
};

export default function ProductsPageComponent() {
    const location = useLocation();
    const initialTab = location.state?.category;
    const [tabsValues] = useState(Object.values(ProductTags));
    const [currentTab, setCurrentTab] = useState<string>(initialTab || ProductTags.chairs);
    const [isOpenFilterBar, setIsOpenFilterBar] = useState<boolean>(false);
    const { loading, data, error, fetch } = useGetManyProductsHook(false);

    useEffect(() => {
        fetch({ currentPage: 1, tags: [currentTab], itemsAmount: 12 });
    }, [currentTab]);

    const handleChangePagination = (e: ChangeEvent<unknown>, page: number) => {
        e.preventDefault();
        window.scrollTo(0, 0);
        fetch({ tags: [currentTab], currentPage: page });
    };

    const handleOpenFilterButton = () => {
        setIsOpenFilterBar(!isOpenFilterBar);
    };

    return (
        <>
            <HeaderComponent />
            <Box className="app-page-container">
                {/* Tab menu */}
                <Stack direction="row" gap={1} flexWrap="wrap" justifyContent="center">
                    <FilterButton variant="elevation" onClick={handleOpenFilterButton}>
                        <FilterCounter>1</FilterCounter>
                        <FilterAltIcon scale={6} />
                    </FilterButton>
                    {isOpenFilterBar &&
                        tabsValues.map((value: string) =>
                            currentTab === value ? (
                                <ActiveButtonTab size="small" variant="outlined" key={value}>
                                    {value}
                                </ActiveButtonTab>
                            ) : (
                                <ButtonTab
                                    size="small"
                                    onClick={() => setCurrentTab(value)}
                                    variant="outlined"
                                    color="primary"
                                    key={value}
                                >
                                    {value}
                                </ButtonTab>
                            )
                        )}
                </Stack>
                <Stack direction="row" justifyContent="center" alignItems="center" marginBottom={2}>
                    <Typography variant="caption">
                        {data ? data.totalItems : 0} Resultados
                    </Typography>
                </Stack>

                {data && data?.products.length > 0 && (
                    <>
                        <ProductsList>
                            {data?.products.map((product: Product) => (
                                <ProductCardComponent key={product.id} product={product} />
                            ))}
                        </ProductsList>
                        <Pagination
                            onChange={handleChangePagination}
                            page={data?.page || 1}
                            count={data?.totalPages || 1}
                            variant="outlined"
                            size="small"
                            color="primary"
                            sx={{ alignSelf: "center" }}
                        />
                    </>
                )}

                {(loading || !data) && <PageLoader />}

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
