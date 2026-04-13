import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Box, Button, Pagination, Stack, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../../css/App.css";
import { Product, useGetManyProductsHook } from "../../../hooks/product-hooks/getManyProductsHook";
import { ProductTags } from "../../../types/product-tags.type";
import Seo from "../../../seo/Seo";
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
    const [selectedTags, setSelectedTags] = useState<Array<string>>([
        initialTab || ProductTags.chairs,
    ]);
    const [isOpenFilterBar, setIsOpenFilterBar] = useState<boolean>(false);
    const { loading, data, error, fetch } = useGetManyProductsHook(false);

    useEffect(() => {
        fetch({ currentPage: 1, tags: selectedTags, itemsAmount: 12 });
    }, [selectedTags]);

    const handleChangePagination = (_e: ChangeEvent<unknown>, page: number) => {
        // e.preventDefault();
        // window.scrollTo(0, 0);
        console.log(page);
        fetch({ tags: selectedTags, currentPage: page, itemsAmount: 12, name: undefined });
    };

    const handleOpenFilterButton = () => {
        setIsOpenFilterBar(!isOpenFilterBar);
    };

    const handleSelectedFilters = (value: string) => {
        const tags = [...selectedTags];
        if (tags.includes(value)) {
            tags.splice(tags.indexOf(value), 1);
        } else tags.push(value);
        setSelectedTags([...tags]);
    };

    console.log(data);
    console.log(error);

    return (
        <>
            <Seo
                title="Loja | Sofa Decor House"
                description="Catálogo de móveis, sofás, mesas e decoração na Sofa Decor House. Filtre por categoria e encontre peças para sua sala, quarto e mais."
                canonicalPath="/loja"
            />
            <HeaderComponent />
            <Box className="app-page-container">
                {/* Tab menu */}
                <Stack
                    direction="row"
                    gap={1}
                    flexWrap="wrap"
                    justifyContent={isOpenFilterBar ? "center" : "start"}
                >
                    <FilterButton variant="elevation" onClick={handleOpenFilterButton}>
                        <FilterCounter>{selectedTags.length}</FilterCounter>
                        <FilterAltIcon scale={6} />
                    </FilterButton>
                    {!isOpenFilterBar && (
                        <Button variant="text" disabled>
                            {"Filtros"}
                        </Button>
                    )}
                    {isOpenFilterBar &&
                        tabsValues.map((value: string) =>
                            selectedTags.includes(value) ? (
                                <ActiveButtonTab
                                    size="small"
                                    variant="outlined"
                                    onClick={() => handleSelectedFilters(value)}
                                    key={value}
                                >
                                    {value}
                                </ActiveButtonTab>
                            ) : (
                                <ButtonTab
                                    size="small"
                                    onClick={() => handleSelectedFilters(value)}
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
                                <ProductCardComponent key={product._id} product={product} />
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
