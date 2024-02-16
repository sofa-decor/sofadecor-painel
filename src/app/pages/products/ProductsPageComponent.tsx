import { FilterAlt } from "@mui/icons-material";
import { Box, Button, Fab, Pagination, Stack, Tab, Tabs, Typography } from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../../css/App.css";
import { useGetCategoryByNameHook } from "../../../hooks/categories-hooks/getCategoryByNameHook";
import { Product, useGetManyProductsHook } from "../../../hooks/product-hooks/getManyProductsHook";
import { ProductCategories } from "../../../types/product-categories.type";
import PageLoader from "../../components/Loaders/page-loader/PageLoader";
import { AlertError, AlertInfo } from "../../components/alert";
import HeaderComponent from "../../components/header/HeaderComponent";
import ProductCardComponent from "../../components/product-card/ProductCardComponent";
import { IconFilterCount, ProductsList } from "./ProductsPageStyles";

export type HomeRedirectState = {
    category: ProductCategories;
};

export default function ProductsPageComponent() {
    const location = useLocation();
    const category = location.state?.category;
    const [tab, setTab] = useState<string>(category || ProductCategories.livingroom);
    const [isOpenFilters, setIsOpenFilters] = useState(false);
    const [filters, setFilters] = useState<Array<string>>([]);
    const [categories, setCategories] = useState<Array<string>>([]);
    const { loading, data, error, fetch } = useGetManyProductsHook(false);
    const { fetch: fetchCategory, data: tagsCategories } = useGetCategoryByNameHook();

    useEffect(() => {
        if (!tab) return;
        fetchCategory(tab);
        fetch({ room: tab });
    }, [tab]);

    useEffect(() => {
        if (!tagsCategories) return;
        setCategories(tagsCategories.tags);
    }, [tagsCategories]);

    const handleChangeTab = (e: SyntheticEvent, value: string) => {
        e.preventDefault();
        setTab(value);
    };

    const handleSelectCategoryTag = (tag: string) => {
        let newList = [];
        if (filters.includes(tag)) {
            newList = filters.filter(item => item != tag);
        } else {
            newList = [...filters, tag];
        }
        fetch({ tags: newList });
        setFilters(newList);
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
                    <Tabs value={tab} onChange={handleChangeTab}>
                        <Tab label="sala" value="sala" />
                        <Tab label="quarto" value="quarto" />
                        <Tab label="cozinha" value="cozinha" />
                        <Tab label="Escritorio" value="escritorio" />
                    </Tabs>
                </Stack>
                <Stack
                    direction="row"
                    gap={1}
                    justifyContent="space-between"
                    alignItems="center"
                    marginBottom={2}
                >
                    <Typography variant="caption">
                        {data ? data.products.length : 0} Resultados
                    </Typography>

                    <Stack
                        direction="row"
                        gap={1}
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ alignSelf: "flex-end", marginTop: 2 }}
                    >
                        {isOpenFilters && (
                            <>
                                {categories.map(category => (
                                    <Button
                                        onClick={() => handleSelectCategoryTag(category)}
                                        color={filters.includes(category) ? "primary" : "inherit"}
                                        size="medium"
                                    >
                                        {category}
                                    </Button>
                                ))}
                            </>
                        )}
                        <Fab
                            color="primary"
                            aria-label="add"
                            size="small"
                            onClick={() => setIsOpenFilters(!isOpenFilters)}
                        >
                            <IconFilterCount>{filters.length}</IconFilterCount>
                            <FilterAlt fontSize="small" />
                        </Fab>
                    </Stack>
                </Stack>

                {data && data.products.length > 0 && (
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
                    <AlertInfo>Não encontramos produtos no momento, volte mais tarde</AlertInfo>
                )}

                {error && (
                    <AlertError>Encontramos algum problema no momento, volte mais tarde</AlertError>
                )}
            </Box>
        </>
    );
}
