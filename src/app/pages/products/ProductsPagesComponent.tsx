import { FilterAlt } from "@mui/icons-material";
import {
    Box,
    Button,
    Divider,
    Fab,
    Pagination,
    Stack,
    Typography,
} from "@mui/material";
import { useState } from "react";
import "../../../css/App.css";
import { products } from "../../../data/Products";
import ProductCardComponent, {
    ProductCardComponentOP2,
    ProductCardComponentOP3,
    ProductCardComponentOP4,
} from "../../components/product-card/ProductCardComponent";
import { IconFilterCount, ProductsList } from "./ProductsPageStyles";

export default function ProductsPageComponent() {
    const [isOpenFilters, setIsOpenFilters] = useState(false);

    return (
        <Box className="app-page-container">
            <Stack
                direction="row"
                gap={1}
                justifyContent="space-between"
                alignItems="center"
                marginBottom={2}
            >
                <Typography variant="caption">120 resultados</Typography>

                <Stack direction="row" gap={1} justifyContent="space-between">
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

            <ProductsList>
                {products.map(product => (
                    <ProductCardComponent product={product} />
                ))}
                <Divider
                    sx={{ width: "100%", height: "2px", margin: "10px" }}
                />
                {products.map(product => (
                    <ProductCardComponentOP2 product={product} />
                ))}
                <Divider
                    sx={{ width: "100%", height: "2px", margin: "10px" }}
                />
                {products.map(product => (
                    <ProductCardComponentOP3 product={product} />
                ))}
                <Divider
                    sx={{ width: "100%", height: "2px", margin: "10px" }}
                />
                {products.map(product => (
                    <ProductCardComponentOP4 product={product} />
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
        </Box>
    );
}
