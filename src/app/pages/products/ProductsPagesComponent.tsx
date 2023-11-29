import { Box, Pagination, Typography } from "@mui/material";
import "../../../css/App.css";
import { products } from "../../../data/Products";
import ProductCardComponent from "../../components/product-card/ProductCardComponent";
import "./Products.css";
import { ProductsList } from "./ProductsPageStyles";

export default function ProductsPageComponent() {
    return (
        <Box className="app-page-container">
            <Box className="app-row-between">
                <Typography variant="caption">
                    120 resultados
                </Typography>
            </Box>

            <ProductsList>
                {products.map(product => (
                    <ProductCardComponent product={product} />
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
