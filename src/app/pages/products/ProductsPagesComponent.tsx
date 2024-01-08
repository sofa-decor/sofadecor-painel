import { FilterAlt } from "@mui/icons-material";
import { Box, Button, Fab, Pagination, Stack, Typography } from "@mui/material";
import { useState } from "react";
import "../../../css/App.css";
import { products } from "../../../data/Products";
import HeaderComponent from "../../components/header/HeaderComponent";
import ProductCardComponent, {
    ProductCardComponentOP2,
    ProductCardComponentOP3,
    ProductCardComponentOP4,
} from "../../components/product-card/ProductCardComponent";
import { IconFilterCount, ProductsList } from "./ProductsPageStyles";

export default function ProductsPageComponent() {
    const [isOpenFilters, setIsOpenFilters] = useState(false);

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
                    <ProductCardComponent product={products[0]} />
                    <ProductCardComponentOP2 product={products[0]} />
                    <ProductCardComponentOP3 product={products[0]} />
                    <ProductCardComponentOP4 product={products[0]} />
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
        </>
    );
}
