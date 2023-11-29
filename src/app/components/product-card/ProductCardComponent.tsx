import { SendRounded } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Product } from "../../../models/product";
import { Container, Image } from "./productCardStyles";

type params = {
    product: Product;
};

export default function ProductCardComponent({ product }: params) {
    const navigate = useNavigate();
    const redirect = () => navigate("/products/produto");

    return (
        <Container onClick={redirect}>
            <Image imgURL={product.images[0]} />
            <Typography
                variant="h1"
                fontWeight={700}
                fontSize={20}
                margin={1}
            >
                {product.name}
            </Typography>
            <Button
                endIcon={<SendRounded />}
                size="small"
                variant="contained"
            >
                Comprar
            </Button>
        </Container>
    );
}
